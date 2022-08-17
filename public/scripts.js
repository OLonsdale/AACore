"use strict";

import { expanded } from "./board-sets/expanded.js";
import { initial } from "./board-sets/initial.js";
import { standard } from "./board-sets/standard.js";
import { ttsKeyboard } from "./board-sets/tts-keyboard.js";
// Basic, Main, Toys, Learn, Topic, Body, Home, Food, Drinks, People, Feelings

let boards = {};

//takes all the board files and the boards in local storage and puts them into one object
//should maybe check for duplicate boards and alert user, currently overides
function blendBoards() {
  if (
    JSON.parse(localStorage.getItem("customBoards")) === null ||
    JSON.parse(localStorage.getItem("customBoards")) === ""
  ) {
    localStorage.setItem("customBoards", "{}");
  }

  //patch for old custom boards, to remove next update
  const customBoards = JSON.parse(localStorage.getItem("customBoards"));

  for (const board in customBoards) {
    if (Object.hasOwnProperty.call(customBoards, board)) {
      const selectedBoard = customBoards[board];
      if (!selectedBoard.customBoard) {
        selectedBoard.customBoard = true;
      }
    }
  }

  localStorage.setItem("customBoards", JSON.stringify(customBoards));

  boards = {
    ...initial,
    ...standard,
    ...expanded,
    ...ttsKeyboard,
    ...customBoards,
  };
}

blendBoards();

const synth = window.speechSynthesis;

const sentenceDisplayElement = document.getElementById("sentenceDisplay");

const sentence = [];

const voiceSelectElement = document.getElementById("voicesSelect");
let voices = [];
let selectedVoice;

let sidebarLocked = JSON.parse(localStorage.getItem("sidebarLocked"));
let unlockAttempt = [];

let sentenceAutoDelete = localStorage.getItem("sentenceAutoDelete") || true;
let editMode = false;

let activeSearch;

//change font to selected font in dropdown
fontSelectionDropdown.addEventListener("change", () => {
  console.log("Font selected");
  const root = document.documentElement;
  localStorage.setItem("selectedFont", fontSelectionDropdown.value);
  root.style.setProperty("--font", localStorage.getItem("selectedFont"));
});

editModeCheckbox.addEventListener("change", toggleEditMode);

function toggleEditMode() {
  //toggle editmode
  editMode = !editMode;
  if (editMode) {
    editBoardArea.classList.remove("hidden");
    console.log("Edit mode enabled");
    document.body.classList.add("editMode");
    sentenceDisplayElement.value = "edit mode enabled";
  } else {
    editBoardArea.classList.add("hidden");
    console.log("Edit mode disabled");
    document.body.classList.remove("editMode");
    sentenceDisplayElement.value = "";
  }
  boardNameEditInput.value = localStorage.getItem("currentBoardName");
  topLevelEditInput.checked =
    boards[localStorage.getItem("currentBoardName")].topLevel;
}

toggleSettingsButton.addEventListener("click", () => {
  sidebarSettings.classList.toggle("hidden");
});

//
saveBoardEditButton.addEventListener("click", saveBoardEdit);
//renames boards and changes whether they show on the sidebar via a menu shown in the main sidebar when edit mode is enabled.
function saveBoardEdit() {
  let changes = false;
  if (!boards[localStorage.getItem("currentBoardName")].customBoard) {
    alert("You can only edit custom boards");
    return;
  }
  const customBoards = JSON.parse(localStorage.getItem("customBoards"));
  const currentBoard = boards[localStorage.getItem("currentBoardName")];

  //change whether the board is shown on the sidebar
  if (currentBoard.topLevel !== topLevelEditInput.checked) {
    currentBoard.topLevel = topLevelEditInput.checked;
    changes = true;
  }

  //rename board
  //first check it begins with an underscore or adds one if not
  //then check for a duplicate name and stop if there is,
  //then copy the value to a key with the new name, and delete old key:value pair
  if (localStorage.getItem("currentBoardName") !== boardNameEditInput.value) {
    if (customBoards.hasOwnProperty(boardNameEditInput.value)) {
      alert("This name is already in use");
      return;
    }
    changes = true;
    customBoards[boardNameEditInput.value] =
      boards[localStorage.getItem("currentBoardName")];
    delete customBoards[localStorage.getItem("currentBoardName")];
  }

  //if changes, update board and state
  if (changes) {
    localStorage.setItem("customBoards", JSON.stringify(customBoards));
    blendBoards();
    drawBoard(boardNameEditInput.value);
    closeAllSidebars();
    showSidebar();
  }
}

//show sidebar and update menus in it.
function showSidebar() {
  if (sidebarLocked) {
    showLockScreen();
    return;
  }
  //hide all, then unhide main sidebar
  closeAllSidebars();
  document.getElementById("sidebar").classList.remove("hidden");

  //board selection buttons
  premadeBoardSelectionList.replaceChildren();
  customBoardSelectionList.replaceChildren();

  //add boards to lists for main and custom boards
  for (const board in boards) {
    if (!Object.hasOwnProperty.call(boards, board)) {
      continue;
    } //still no idea, IDE did it.

    const element = boards[board];

    if (!element.topLevel) continue;

    const loadButton = document.createElement("button");
    loadButton.classList.add("sidebarButton");
    loadButton.textContent = element.name || board;

    loadButton.addEventListener("click", () => {
      localStorage.setItem("currentBoardName", board);
      localStorage.setItem("currentSet", board);
      clearWordSearchButton.click();
      activeSearch = "";
      drawBoard(board);
    });

    if (element.customBoard) {
      customBoardSelectionList.append(loadButton);
    } else {
      premadeBoardSelectionList.append(loadButton);
    }
  }

  if (customBoardSelectionList.innerHTML != "") {
    customBoardsHeader.classList.remove("hidden");
  } else customBoardsHeader.classList.add("hidden");

  fontSelectionDropdown.value = localStorage.getItem("selectedFont");
  darkModeCheckbox.checked = JSON.parse(localStorage.getItem("darkTheme"));
  speakOnAddCheckbox.checked = JSON.parse(localStorage.getItem("speakOnAdd"));
}

deleteCurrentBoardButton.addEventListener("click", () => {
  if (
    confirm(`Click "OK" to delete ${localStorage.getItem("currentBoardName")}`)
  ) {
    deleteCurrentBoard();
  }
});

function deleteCurrentBoard() {
  if (!boards[localStorage.getItem("currentBoardName")].customBoard) {
    alert("You can only delete custom boards");
    return;
  }
  //delete custom board
  const customBoards = JSON.parse(localStorage.getItem("customBoards"));

  delete customBoards[localStorage.getItem("currentBoardName")];

  localStorage.setItem("customBoards", JSON.stringify(customBoards));

  blendBoards();
  drawBoard(localStorage.getItem("currentSet"));
  showSidebar();
}

//Copies any board into new custom board, name is the origional name plus "copy" as many times as required till unique
duplicateCurrentBoardButton.addEventListener("click", () => {
  console.log("duplicating board");
  const oldName = localStorage.getItem("currentBoardName");
  let newName = `${oldName} copy`;
  while (boards.hasOwnProperty(newName)) {
    newName += " copy";
  }

  console.log("new name is " + newName);

  //actually copy the board, sets attributes
  const customBoards = JSON.parse(localStorage.getItem("customBoards"));
  customBoards[newName] = JSON.parse(JSON.stringify(boards[oldName]));
  customBoards[newName].topLevel = true;
  customBoards[newName].customBoard = true;
  delete customBoards[newName].name;
  localStorage.setItem("customBoards", JSON.stringify(customBoards));

  localStorage.setItem("currentBoardName", newName);
  drawBoard(newName);
  blendBoards();
  closeAllSidebars();
  showSidebar();
});

duplicateCurrentSetButton.addEventListener("click", duplicateSet);

function duplicateSet() {
  let current = localStorage.getItem("currentBoardName");
  if (!(current === "expanded" || current === "standard")) {
    alert("Please select (from the sidebar) the set you want to duplicate");
    return;
  }
  let newName = window.prompt("Enter the new prefix for the set", "new");
  if (!newName || newName === "expanded" || newName === "standard") {
    alert("Please enter a new (unique) prefix for the set");
    return;
  }

  let newSet = JSON.stringify(standard);
  newSet = newSet.replaceAll(current, newName);
  newSet = JSON.parse(newSet);
  newName = `${newName}-${current}`;
  let customBoards = JSON.parse(localStorage.getItem("customBoards"));

  for (const board in newSet) {
    if (Object.hasOwnProperty.call(newSet, board)) {
      const currentBoard = newSet[board];
      if (currentBoard.name) delete currentBoard.name;
      currentBoard.customBoard = true;
    }
  }

  customBoards = { ...customBoards, ...newSet };
  console.log(customBoards);
  localStorage.setItem("customBoards", JSON.stringify(customBoards));
  blendBoards();
  closeAllSidebars();
  showSidebar();
}

findWordInput.addEventListener("input", () => {
  findWord(findWordInput.value);
});

//displays the route to a given word from within the active set
function findWord(word) {
  const resultsElement = document.getElementById("wordSearchResultsElement");
  resultsElement.innerHTML = "";
  if (!word) return;

  const results = findPathToWord(word);

  let outOfSetResults = false;

  results.forEach((result) => {
    if (result.path.includes(localStorage.getItem("currentSet"))) {
      let tile = document.createElement("button");
      tile.classList.add("inlineSidebarButton");
      let label = document.createElement("label");
      label.innerText = result.path.at(-1);

      if (result.target.iconLink || result.target.iconName) {
        let img = document.createElement("img");

        img.src =
          result.target.iconLink ||
          `./resouces/icons/${result.target.iconName}.webp`;

        img.classList.add("searchIcon");

        tile.title = result.path.join("⇾");

        tile.append(img);
      } else {
        let text = document.createElement("p");
        text.innerText = result.target.displayName;
        text.classList.add("largeText");
        tile.append(text);
      }
      tile.append(label);
      tile.addEventListener("click", () => {
        activeSearch = result;
        drawBoard(localStorage.getItem("currentBoardName"));
        closeAllSidebars();
      });

      resultsElement.classList.add("cols-2");
      resultsElement.append(tile);
    } else outOfSetResults = true;
  });
  if (results.length === 0 && findWordInput.value) {
    const text = document.createElement("p");
    text.innerHTML = `<b>No results</b>`;
    resultsElement.classList.remove("cols-2");
    resultsElement.append(text);
  }

  if (outOfSetResults && resultsElement.innerHTML === "") {
    const text = document.createElement("p");
    text.innerHTML = `<b>No results in current set</b>`;
    resultsElement.classList.remove("cols-2");
    resultsElement.append(text);
  }
}

//generates an array of paths to the given word
function findPathToWord(word) {
  const routes = [];

  for (const board in boards) {
    //don't even know what this check's for, it's just added by the IDE so I left it in
    if (!Object.hasOwnProperty.call(boards, board)) continue;
    //shitty bodge to prevent duplicates for the "am" boards
    if (
      (board === "expanded-am" || board === "standard-am") &&
      (word != "am" || word != "Am")
    )
      continue;

    const currentBoard = boards[board];

    currentBoard.tiles.forEach((tile) => {
      if (!tile.displayName || tile.type === "link" || tile.type === "blank")
        return;
      if (
        tile.displayName.toLowerCase().replaceAll("⠀", "") ===
        word.toLowerCase()
      ) {
        routes.push({
          target: tile,
          path: currentBoard.path,
        });
      }
    });
  }
  return routes;
}

clearWordSearchButton.addEventListener("click", () => {
  findWordInput.value = "";
  findWordInput.dispatchEvent(new Event("input", { bubbles: true }));
});

function closeAllSidebars() {
  document.getElementById("sidebar").classList.add("hidden");
  createBoardSidebar.classList.add("hidden");
  editTileSidebar.classList.add("hidden");
  aboutSidebar.classList.add("hidden");
  findIconSidebar.classList.add("hidden");
  exportSidebar.classList.add("hidden");
}

function showExportSidebar() {
  closeAllSidebars();

  for (const boardName in boards) {
    if (Object.hasOwnProperty.call(boards, boardName)) {
      const board = boards[boardName];
      if (!board.customBoard) continue;

      let div = document.createElement("div");
      div.classList.add("displayFlexRow");

      let input = document.createElement("input");
      input.id = `${boardName}Checkbox`;
      input.type = "checkbox";
      input.name = "board";
      input.value = boardName;

      let label = document.createElement("label");
      label.htmlFor = `${boardName}Checkbox`;
      label.innerText = boardName;

      div.append(input);
      div.append(label);

      boardExportList.append(div);
    }
  }

  exportSidebar.classList.remove("hidden");
}

function showAbout() {
  closeAllSidebars();
  aboutSidebar.classList.remove("hidden");
}

function showCreateBoardSidebar() {
  closeAllSidebars();
  nameInput.value = "";
  rowsInput.value = 3;
  rowsInputDisplay.textContent = 3;
  colsInput.value = 3;
  colsInputDisplay.textContent = 3;
  topLevelInput.checked = true;
  createBoardSidebar.classList.remove("hidden");
}

function showEditTileSidebar() {
  closeAllSidebars();
  editTileSidebar.classList.remove("hidden");

  linkToInput.innerHTML = "";
  const noneOption = document.createElement("option");
  noneOption.innerText = "None";
  linkToInput.append(noneOption);

  //lists boards for the linkTo dropdown
  for (const board in boards) {
    if (Object.hasOwnProperty.call(boards, board)) {
      const option = document.createElement("option");
      option.value = board;
      option.innerText = board;
      linkToInput.append(option);
    }
  }
  const board = boards[localStorage.getItem("currentBoardName")];
  linkToInput.value = board.tiles[selectedTileNumber.value].linkTo;
}

function showFindIconSidebar() {
  findIconSidebar.classList.remove("hidden");
}

openIconSearchButton.addEventListener("click", () => {
  closeAllSidebars();
  iconSearchBar.value = displayNameInput.value;
  if (iconSearchBar.value) {
    searchForIcons.click();
  }
  showFindIconSidebar();
});

backToEditTileButton.addEventListener("click", () => {
  closeAllSidebars();
  showEditTileSidebar();
});

searchForIcons.addEventListener("click", searchIcons);

async function searchIcons() {
  iconResults.innerHTML = "";
  let searchTerm = iconSearchBar.value;
  if (!searchTerm) return;
  console.log(`Searching for ${searchTerm}`);
  let searchResults = await fetch(
    `https://www.opensymbols.org/api/v1/symbols/search?q=${searchTerm}`
  );
  searchResults = await searchResults.json();

  searchResults.forEach((icon) => {
    let element = document.createElement("img");
    element.classList.add("inlineSidebarButton");
    element.src = icon.image_url;
    element.width = 75;
    element.height = 75;

    element.addEventListener("click", () => {
      iconLinkInput.value = icon.image_url;
      showEditTileSidebar();
    });

    iconResults.append(element);
  });

  if (searchResults.length === 0) {
    iconResults.innerHTML = "<a></a><b>No Results</b>";
  }
}

//hides and shows the sidebar
sidebarButton.addEventListener("click", showSidebar);

createBoardMenuButton.addEventListener("click", showCreateBoardSidebar);

openExportSidebarButton.addEventListener("click", showExportSidebar);

exportBoardsButton.addEventListener("click", exportBoards);

function exportBoards() {
  const offset = new Date().getTimezoneOffset();
  let date = new Date(new Date().getTime() - offset * 60 * 1000);
  let formattedDate = date.toISOString().replace("T", "--").slice(0, -5);
  const filename = `boards-${formattedDate}.json`;
  //could use a map or something here
  let exportList = [];
  Array.from(boardExportList).forEach((checkbox) => {
    if (checkbox.checked) {
      exportList.push(checkbox.value);
    }
  });

  let output = {};
  exportList.forEach((item) => {
    output[item] = JSON.parse(JSON.stringify(boards[item]));
  });

  const jsonString = JSON.stringify(output);

  //make invisible element, add properties, then click it to trigger download
  const element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:application/json;charset=utf-8," + encodeURIComponent(jsonString)
  );
  element.setAttribute("download", filename);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

importBoardButton.addEventListener("click", () => importInput.click());

//this is a mess, but opens a file picker, then reads the contents of the file and stores it in localstorage
importInput.addEventListener("change", (ev) => {
  const fileList = ev.target.files;
  const reader = new FileReader();

  reader.addEventListener("load", (event) => {
    try {
      if (ev.target.files[0].name.slice(-5) !== ".json") {
        throw "Invalid file type";
      }
      JSON.parse(event.target.result);
    } catch (error) {
      alert("This file could not be read");
      console.error("Attempted to load invalid file", error);
    }

    const newBoards = JSON.parse(event.target.result);
    let customBoards = JSON.parse(localStorage.getItem("customBoards"));

    Object.keys(newBoards).forEach((key) => {
      if (customBoards.hasOwnProperty(key)) {
        if (!confirm(`Old "${key}" will be overridden?`)) {
          delete newBoards[key];
        }
      }
    });

    customBoards = { ...customBoards, ...newBoards };

    localStorage.setItem("customBoards", JSON.stringify(customBoards));
    console.log("custom boards imported");
    blendBoards();
    drawBoard(localStorage.getItem("currentBoardName"));
    showSidebar();
  });

  reader.readAsText(fileList[0]);
});

goOfflineButton.addEventListener("click", drawAllBoards);
function drawAllBoards() {
  const boardNames = Object.keys(boards);

  // It will take around ${Math.floor(
  //   (boardNames.length * 2) / 60
  // )} minutes to complete.

  if (
    !confirm(
      `This will load the icons for all boards so it can be used without the internet`
    )
  )
    return;

  let i = 0;

  const loop = setInterval(() => {
    if (i != boardNames.length) {
      drawBoard(boardNames[i]);
      console.log(boardNames[i]);
      i++;
    } else {
      console.log("Done");
      alert("Preloading completed");
      clearInterval(loop);
    }
  }, 200);
}

function createNewBoard() {
  const boardName = nameInput.value;
  const rows = Number(rowsInput.value);
  const columns = Number(colsInput.value);

  if (boards.hasOwnProperty(boardName) || !boardName || boardName.length > 30) {
    alert("Name must be unique and under 30 chars");
    return;
  }

  localStorage.setItem("currentBoardName", boardName);

  closeAllSidebars();

  const tiles = [];
  for (let i = 0; i != columns * rows; i++) {
    tiles.push({ type: "blank" });
  }

  const customBoards = JSON.parse(localStorage.getItem("customBoards"));

  customBoards[boardName] = {
    rows,
    columns,
    tiles,
    topLevel: topLevelInput.checked,
    customBoard: true,
  };

  localStorage.setItem("customBoards", JSON.stringify(customBoards));

  blendBoards();
  drawBoard(boardName);
  if (!editMode) editModeCheckbox.click();
}

document
  .getElementById("generateEmptyButton")
  .addEventListener("click", createNewBoard);

clearCurrentTileButton.addEventListener("click", clearCurrentTile);

function clearCurrentTile() {
  displayNameInput.value = "";
  tileTypeInput.value = "";
  iconLinkInput.value = "";
  pronounciationInput.value = "";
  pastInput.value = "";
  pastPronounciationInput.value = "";
  pluralInput.value = "";
  pluralPronounciationInput.value = "";
  negationInput.value = "";
  negationPronounciationInput.value = "";
  iconNameInput.value = "";
  linkToInput.value = "";
  colourInput.value = "orange";
}

editTileSubmitButton.addEventListener("click", editTile);

//vulnerable to injection?
function editTile() {
  if (!boards[localStorage.getItem("currentBoardName")].customBoard) {
    alert("You can only edit custom boards. Please duplicate the board first");
    return;
  }

  const board = boards[localStorage.getItem("currentBoardName")];
  const selectedTile = board.tiles[selectedTileNumber.value];
  selectedTile.displayName = displayNameInput.value
  selectedTile.pronounciation = pronounciationInput.value;
  selectedTile.type = tileTypeInput.value;
  selectedTile.iconLink = iconLinkInput.value;
  selectedTile.iconName = iconNameInput.value;
  selectedTile.pastForm = pastInput.value;
  selectedTile.pastPronounciation = pastPronounciationInput.value;
  selectedTile.pluralForm = pluralInput.value;
  selectedTile.pluralFormPronounciation = pluralPronounciationInput.value;
  selectedTile.negativeForm = negationInput.value;
  selectedTile.negativeFormPronounciation = negationPronounciationInput.value;
  selectedTile.linkTo = linkToInput.value;
  selectedTile.colour = colourInput.value;

  //removes empty props from tile, not board.
  Object.keys(selectedTile).forEach((key) => {
    if (selectedTile[key] === "") {
      delete selectedTile[key];
    }
  });

  const saveName = localStorage.getItem("currentBoardName");
  const customBoards = JSON.parse(localStorage.getItem("customBoards"));
  customBoards[saveName] = board;
  console.log("Selected tile edited");
  localStorage.setItem("customBoards", JSON.stringify(customBoards));
  blendBoards();
  drawBoard(localStorage.getItem("currentBoardName"));
}

window.addEventListener("resize", sizeGrid);
window.addEventListener("scroll", sizeGrid);

//bad
// setInterval(sizeGrid, 1000);

//still imperfect
function sizeGrid() {
  // console.log("sized")
  const board = boards[localStorage.getItem("currentBoardName")];

  const tileWidth = Math.floor(window.innerWidth / board.columns);
  const tileHeight = Math.floor(
    (window.innerHeight - topBar.offsetHeight) / board.rows
  );

  const itemSize = (tileWidth > tileHeight ? tileHeight : tileWidth) - 1;

  const root = document.documentElement;
  root.style.setProperty("--grid-size", itemSize + "px");
}

toggleEditTileExtra.addEventListener("click", () => {
  editTileExtra.classList.toggle("hidden");
});

//takes the board and adds it to the dom
//need to break down into smaller modules
function drawBoard(name) {
  //fallback for trying to load board that has been deleted
  //then fallback for the current set having been deleted
  if (!boards.hasOwnProperty(name)) {
    console.error("Tried to draw non-existing board");
    if (!boards.hasOwnProperty(localStorage.getItem("currentSet"))) {
      console.error("Failed to draw fallback board");
      drawBoard("initial");
      return;
    }
    drawBoard(localStorage.getItem("currentSet"));
    return;
  }
  const boardSection = document.getElementById("boardSection");
  const board = boards[name];

  localStorage.setItem("currentBoardName", name);

  deleteCurrentBoardButton.textContent =
    "Delete " + localStorage.getItem("currentBoardName");

  boardNameEditInput.value = localStorage.getItem("currentBoardName");

  //clear existing
  boardSection.replaceChildren();

  boardSection.classList = "board";
  boardSection.classList.add(`rows-${board.rows}`);
  boardSection.classList.add(`cols-${board.columns}`);

  document.title = `AACore - ${name[0].toUpperCase() + name.substring(1)}`;

  sizeGrid();

  let output = document.createDocumentFragment();

  let hasTarget = false;

  //for each tile
  board.tiles.forEach((tile) => {
    //create button
    const tileElement = document.createElement("button");
    tileElement.classList.add("item");

    tileElement.id = board.tiles.indexOf(tile);

    //open and populate edit tile menu when clicked in edit mode
    tileElement.addEventListener("click", () => {
      if (editMode) {
        selectedTileNumber.value = tileElement.id;
        displayNameInput.value = tile.displayName || "";
        tileTypeInput.value = tile.type || "regular";
        pronounciationInput.value = tile.pronounciation || "";
        pastInput.value = tile.pastForm || "";
        pastPronounciationInput.value = tile.pastPronounciation || "";
        pluralInput.value = tile.pluralForm || "";
        pluralPronounciationInput.value = tile.pluralFormPronounciation || "";
        negationInput.value = tile.negativeForm || "";
        negationPronounciationInput.value =
          tile.negativeFormPronounciation || "";
        iconNameInput.value = tile.iconName || "";
        colourInput.value = tile.colour || "red";
        iconNameInput.value = tile.iconName || "";
        iconLinkInput.value = tile.iconLink || "";
        linkToInput.value = tile.linkTo || "";
        showEditTileSidebar();
      }
    });

    if (activeSearch) {
      tileElement.classList.add("dimmed");

      if (tile.displayName) {
        if (
          activeSearch.path.includes(tile.displayName.toLowerCase()) &&
          tile.type === "link"
        ) {
          tileElement.classList.remove("dimmed");
          hasTarget = true;
        }

        if (activeSearch.target === tile) {
          tileElement.classList.remove("dimmed");
          hasTarget = true;
        }
      }
    }

    if (tile.type !== "blank") {
      //Colour
      if (tile.colour) {
        tileElement.classList.add(tile.colour);
      }
      //Tile Label
      if (tile.displayName) {
        tileElement.innerHTML = `<label class="tileLabel">${tile.displayName}</label>`;
      }

      //Tile image
      if (tile.iconLink) {
        tileElement.innerHTML += `<img src="${tile.iconLink}" class="icon">`;
      } else if (tile.iconName) {
        tileElement.innerHTML += `<img src="./resouces/icons/${tile.iconName}.webp" class="icon">`;
      } else if (tile.displayName) {
        tileElement.classList.add("largeText");
      }

      tileElement.addEventListener("click", () => {
        if (editMode) return;

        if (tile.type === "grammarMarker") {
          applyGrammarMarker(tile.internalName);
          return;
        }

        //annoying. draws board and doesn't speak if link,
        //but if not link, checks again after speaking to return from sub-boards to
        if (tile.type === "link") {
          drawBoard(tile.linkTo);
        } else {
          //add to sentence and speak if desired
          sentence.push(tile);
          updateSentence();
          if (JSON.parse(localStorage.getItem("speakOnAdd"))) {
            const word = tile.pronounciation || tile.displayName;
            speak(word);
          }
          if (activeSearch) {
            activeSearch = "";
            if (tile.linkTo) drawBoard(tile.linkTo);
            else drawBoard(localStorage.getItem("currentBoardName"));
          }
          if (tile.linkTo) {
            drawBoard(tile.linkTo);
            return;
          }
        }
      });
    } else {
      tileElement.classList.add("blank");
    }

    //adds it to output
    const li = document.createElement("li");
    li.append(tileElement);
    output.appendChild(li);
  });

  //appends output to the dom
  boardSection.appendChild(output);

  if (activeSearch && !hasTarget) {
    document.getElementById("0").classList.remove("dimmed");
  }
}

lockSidebarButton.addEventListener("click", () => {
  closeAllSidebars();
  sidebarLocked = true;
  localStorage.setItem("sidebarLocked", true);
});

sentenceAutoDeleteCheckbox.checked = sentenceAutoDelete;

sentenceAutoDeleteCheckbox.addEventListener("click", toggleSentenceAutoDelete);

function toggleSentenceAutoDelete() {
  sentenceAutoDelete = !sentenceAutoDelete;
  localStorage.setItem("sentenceAutoDelete", sentenceAutoDelete);
}

sentenceDisplayElement.addEventListener("click", speakSentence);

deleteLastButton.addEventListener("click", () => {
  sentence.pop();
  updateSentence();
});

clearButton.addEventListener("click", clearSentence);

function applyGrammarMarker(type) {
  if (sentence.length === 0) return;
  //copy by value not reference
  const last = JSON.parse(JSON.stringify(sentence[sentence.length - 1]));
  const lastInitial = last.pronounciation || last.displayName;

  console.log("Converting last word to " + type);

  last.pronounciation =
    last[`${type}FormPronounciation`] ||
    last[`${type}Form`] ||
    last.pronounciation ||
    last.displayName;
  last.displayName = last[`${type}Form`] || last.displayName;

  sentence[sentence.length - 1] = last;

  if (lastInitial !== last.pronounciation) {
    //no change, don't speak
    speak(last.pronounciation || last.displayName);
  }

  updateSentence();
}

//updates the sentence display bar
function updateSentence() {
  const sentenceDisplayArray = sentence.map((tile) => tile.displayName);

  //dirty hack for getting consecutive letters/numbers from keyboard to be spoken as a single word
  sentenceDisplayElement.innerHTML = sentenceDisplayArray
    .join(" ")
    .replaceAll("⠀ ⠀", "")
    .replaceAll("⠀", "");

  sentenceDisplayElement.scrollTop = sentenceDisplayElement.scrollHeight;
}

//speaks whatever is passed to it
function speak(arg) {
  if (synth.speaking || synth.pending) synth.cancel();

  const utterance = new SpeechSynthesisUtterance(arg);
  if (selectedVoice) utterance.voice = selectedVoice;

  synth.speak(utterance);
}

//speaks and clears sentence. Would use speak() from above, but needs to clear after sentence finished, hence needing eventlistener
function speakSentence() {
  if (synth.speaking || synth.pending) synth.cancel();

  if (sentence.length === 0) return;

  const toSpeak = sentence.map(
    (tile) => tile.pronounciation || tile.displayName
  );

  const speakSentence = toSpeak
    .join(" ")
    .replaceAll("⠀ ⠀", "")
    .replaceAll("⠀", "");

  const utterance = new SpeechSynthesisUtterance(speakSentence);
  if (selectedVoice) utterance.voice = selectedVoice;
  if (sentenceAutoDelete) {
    utterance.onend = () => clearSentence();
  }
  synth.speak(utterance);
}

//clears sentence and calls update display
function clearSentence() {
  synth.cancel();
  sentence.length = 0;
  updateSentence();
}

//Requires delay because voices aren't instantly accessible, annoyingly
function populateVoiceList() {
  setTimeout(() => {
    //gets uk voices
    voices = synth.getVoices(); //.filter((voice) => voice.lang === "en-GB");

    voices.forEach((voice) => {
      const option = document.createElement("option");
      option.textContent = `${voice.lang} - ${voice.name}`;
      option.setAttribute("data-name", voice.name);
      voiceSelectElement.appendChild(option);
    });
    1;
    voiceSelectElement.selectedIndex = 0;
  }, 500);
}

voiceSelectElement.addEventListener("change", () => {
  // -1 for the "select" option
  selectedVoice = voices[voiceSelectElement.selectedIndex - 1];
  console.log("Selected voice: " + selectedVoice.name);
});

showAboutButton.addEventListener("click", showAbout);

document.getElementById("rowsInput").addEventListener("input", () => {
  rowsInputDisplay.textContent = rowsInput.value;
});

document.getElementById("colsInput").addEventListener("input", () => {
  colsInputDisplay.textContent = colsInput.value;
});

//speaks the sentence when hitting enter, instead of adding selected word
document.addEventListener("keydown", (ev) => {
  if (ev.key === "Enter") {
    ev.preventDefault();
    speakSentence();
  }
});

//binds the close function to all close buttons
Array.from(document.getElementsByClassName("closeSidebarButton")).forEach(
  (button) => {
    button.addEventListener("click", closeAllSidebars);
  }
);

darkModeCheckbox.addEventListener("click", () => {
  localStorage.setItem("darkTheme", JSON.stringify(darkModeCheckbox.checked));
  loadTheme();
});

speakOnAddCheckbox.addEventListener("click", () => {
  localStorage.setItem(
    "speakOnAdd",
    JSON.stringify(speakOnAddCheckbox.checked)
  );
  loadTheme();
});

//lock screen generates four random numbers between 0 and 100
//and randomly selects ascending or descending order
//the numbers are put into buttons, and must be clicked in the order chosen
function showLockScreen() {
  const numbers = [];
  const order = Math.random() >= 0.5 ? "low-to-high" : "high-to-low";

  //generates a number, and adds it to the numbers array if not a duplicate
  for (let i = 0; i < 4; i++) {
    let number = Math.floor(Math.random() * (100 - 1) + 1);
    if (!numbers.includes(number)) {
      numbers[i] = number;
    } else i--;
  }

  //elements for the UI
  const popup = document.createElement("div");
  popup.classList.add("sidebar");
  popup.id = "unlockSidebar";

  const message = document.createElement("h2");
  message.innerText = `Select these numbers in order of ${order}`;

  const closeButton = document.createElement("button");
  closeButton.classList = "sidebarButton";
  closeButton.innerText = "Back";
  closeButton.id = "closePasswordButton";

  closeButton.addEventListener("click", () => {
    unlockAttempt = [];
    unlockSidebar.remove();
  });

  popup.append(closeButton, message);

  //for the numbers in the array, add a button to the element
  numbers.forEach((number) => {
    const button = document.createElement("button");
    button.textContent = number;
    button.classList.add("sidebarButton");

    //the logic for the unlocking is contained in the event listener and the global variables at the top
    //disables the button when clicked, and adds the value to "unlock attempt"
    //if the length of unlock attempt is 4, check sort the "numbers" array containing the password,
    //based on the randomly chosen method, asc/desc,
    //then compare each element of the unlock attempt to the element in the same possition in the password array
    //if it passes, set locked to false, and show sidebar
    //if it fails, just show a message and clear the attempt array
    button.addEventListener("click", (ev) => {
      button.disabled = true;
      unlockAttempt.push(number);

      if (order === "low-to-high") {
        numbers.sort((a, b) => a - b);
      } else numbers.sort((a, b) => b - a);

      if (unlockAttempt.length === 4) {
        if (
          unlockAttempt[0] === numbers[0] &&
          unlockAttempt[1] === numbers[1] &&
          unlockAttempt[2] === numbers[2] &&
          unlockAttempt[3] === numbers[3]
        ) {
          sidebarLocked = false;
          localStorage.setItem("sidebarLocked", false);
          showSidebar();
        } else alert("That was not correct, please try again");
        closePasswordButton.click(); //dirty
      }
    });

    popup.append(button);
  });

  document.body.prepend(popup);
}
// set the colours depending on the value of "dark theme" in local storage
function loadTheme() {
  if (JSON.parse(localStorage.getItem("darkTheme"))) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}

if (!localStorage.getItem("selectedFont")) {
  localStorage.setItem("selectedFont", "Helvetica, sans-serif");
}

if (!localStorage.getItem("currentBoardName")) {
  localStorage.setItem("currentBoardName", "standard");
}

if (!localStorage.getItem("currentSet")) {
  localStorage.setItem("currentSet", "initial");
}

if (
  JSON.parse(localStorage.getItem("customBoards")) === null ||
  JSON.parse(localStorage.getItem("customBoards")) === ""
) {
  localStorage.setItem("customBoards", "{}");
}

if (!localStorage.getItem("sidebarLocked")) {
  localStorage.setItem("sidebarLocked", false);
}

if (!localStorage.getItem("sentenceAutoDelete")) {
  localStorage.setItem("sentenceAutoDelete", true);
}

if (!localStorage.getItem("speakOnAdd")) {
  localStorage.setItem("speakOnAdd", true);
}

if (!localStorage.getItem("firstVisit")) {
  localStorage.setItem("firstVisit", false);
  showAbout();
}

//create dark theme local storage file, checks the default theme as defined by the system
if (!localStorage.getItem("darkTheme")) {
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  if (darkThemeMq.matches) {
    localStorage.setItem("darkTheme", "true");
    console.log("set dark theme as default");
  } else {
    localStorage.setItem("darkTheme", "false");
    console.log("set light theme as default");
  }
}

//load selected font
document.documentElement.style.setProperty(
  "--font",
  localStorage.getItem("selectedFont")
);

//loads board from localstorage to keep same board on page refresh
drawBoard(localStorage.getItem("currentBoardName"));

loadTheme();

populateVoiceList();
