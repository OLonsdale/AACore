"use strict";

import { expanded } from "./board-sets/expanded.js";
import { initial } from "./board-sets/initial.js";
import { standard } from "./board-sets/standard.js";
// Basic, Main, Toys, Learn, Topic, Body, Home, Food, Drinks, People, Feelings

let boards = {};

//takes all the board files and the boards in local storage and puts them into one object
//should maybe check for duplicate boards and alert user, currently overides
function blendBoards() {
  boards = {
    ...initial,
    ...standard,
    ...expanded,
    ...JSON.parse(localStorage.getItem("customBoards")),
  };
}

blendBoards();

console.log(boards);

const synth = window.speechSynthesis;

const sentenceDisplayElement = document.getElementById("sentenceDisplay");

const sentence = [];

const voiceSelectElement = document.getElementById("voicesSelect");
let voices = [];
let selectedVoice;

let sidebarLocked = JSON.parse(localStorage.getItem("sidebarLocked"));
let unlockAttempt = [];

let sentenceAutoDelete = localStorage.getItem("sentenceAutoDelete") ?? true;
let editMode = false;

editModeCheckbox.addEventListener("change", () => {
  toggleEditMode();
});

function toggleEditMode() {
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

saveBoardEditButton.addEventListener("click", saveBoardEdit);
//renames boards and changes whether they show on the sidebar via a menu shown in the main sidebar when edit mode is enabled.
function saveBoardEdit() {
  let changes = false;
  if (localStorage.getItem("currentBoardName").charAt(0) !== "_") {
    alert("You can only edit custom boards");
    return;
  }
  let customBoards = JSON.parse(localStorage.getItem("customBoards"));
  let currentBoard = boards[localStorage.getItem("currentBoardName")];

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
    if (boardNameEditInput.value.charAt(0) !== "_") {
      boardNameEditInput.value = "_" + boardNameEditInput.value;
    }
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

    let loadButton = document.createElement("button");
    loadButton.classList.add("sidebarButton");
    loadButton.textContent = element.name ?? board;

    loadButton.addEventListener("click", () => {
      localStorage.setItem("currentBoardName", board);
      localStorage.setItem("currentSet", board);
      drawBoard(board);
    });

    //bad. should check board from localstorage or a "custom" flag in the board
    if (loadButton.textContent.charAt(0) === "_") {
      customBoardSelectionList.append(loadButton);
    } else premadeBoardSelectionList.append(loadButton);
  }
}

deleteCurrentBoardButton.addEventListener("click", () => {
  if (
    confirm(
      `Are you sure you want to delete ${localStorage.getItem(
        "currentBoardName"
      )}?`
    )
  ) {
    deleteCurrentBoard();
  }
});

function deleteCurrentBoard() {
  if (localStorage.getItem("currentBoardName").charAt(0) !== "_") {
    alert("You can only delete custom boards");
    return;
  }
  //delete custom board
  let customBoards = JSON.parse(localStorage.getItem("customBoards"));

  delete customBoards[localStorage.getItem("currentBoardName")];

  localStorage.setItem("customBoards", JSON.stringify(customBoards));

  blendBoards();
  drawBoard(localStorage.getItem("currentSet"));
  showSidebar();
}

function findPathToWord(word) {
  //bad approach as far as big O goes.
  let paths = [];

  for (const board in boards) {
    //don't even know what this check's for, it's just added by the IDE so I left it in
    if (!Object.hasOwnProperty.call(boards, board)) continue;
    if (
      (board === "expanded-am" || board === "standard-am") &&
      (word != "am" || word != "Am")
    ) {
      continue;
    }

    const currentBoard = boards[board];
    currentBoard.tiles.forEach((tile) => {
      if (!tile.displayName || tile.type === "link") return;
      if (tile.displayName.toLowerCase() === word.toLowerCase()) {
        paths.push(`${currentBoard.path} ⇨ ${word.toLowerCase()}`);
      }
    });
  }
  return paths || null;
}

findWordInput.addEventListener("change", () => {
  console.log("searched");
  let searchTerm = findWordInput.value;
  let resultsElement = document.getElementById("wordSearchResultsElement");
  resultsElement.innerHTML = "";
  if (!searchTerm) return;
  let results = findPathToWord(searchTerm);
  results.forEach((result) => {
    let text = document.createElement("p");
    text.innerHTML = `<b>${result}</b>`;
    resultsElement.append(text);
  });
});

function closeAllSidebars() {
  document.getElementById("sidebar").classList.add("hidden");
  createBoardSidebar.classList.add("hidden");
  editTileSidebar.classList.add("hidden");
  aboutSidebar.classList.add("hidden");
}

function showAbout() {
  closeAllSidebars();
  aboutSidebar.classList.remove("hidden");
}

function showCreateBoardSidebar() {
  closeAllSidebars();
  createBoardSidebar.classList.remove("hidden");
}

function showEditTile() {
  closeAllSidebars();
  editTileSidebar.classList.remove("hidden");

  linkToInput.innerHTML = "";
  let noneOption = document.createElement("option");
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
  let board = boards[localStorage.getItem("currentBoardName")];
  linkToInput.value = board.tiles[selectedTileNumber.value].linkTo;
}

//hides and shows the sidebar
sidebarButton.addEventListener("click", showSidebar);

createBoardMenuButton.addEventListener("click", showCreateBoardSidebar);

exportBoardButton.addEventListener("click", exportBoard);

function exportBoard() {
  const filename = `${localStorage.getItem("currentBoardName")}.json`;
  const jsonStr = JSON.stringify(
    boards[localStorage.getItem("currentBoardName")]
  );

  let element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(jsonStr)
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
    if (ev.target.files[0].name.charAt(0) !== "_") {
      alert("File names must begin with an underscore");
      return;
    }
    let newBoard = JSON.parse(event.target.result);
    let customBoards = JSON.parse(localStorage.getItem("customBoards"));
    customBoards[ev.target.files[0].name.replace(".json", "")] = newBoard;
    localStorage.setItem("customBoards", JSON.stringify(customBoards));
    console.log("custom board imported");
    blendBoards();
    showSidebar();
  });
  reader.readAsText(fileList[0]);
});

function generateEmptyBoard() {
  let boardName = "_" + nameInput.value.toLowerCase().replaceAll(" ", "-");
  let rows = Number(rowsInput.value);
  let columns = Number(colsInput.value);

  if (boards.hasOwnProperty(boardName) || !boardName || boardName.length > 30) {
    alert("Name must be unique and under 30 chars");
    return;
  }

  localStorage.setItem("currentBoardName", boardName);

  createBoardSidebar.classList.toggle("hidden");

  let tiles = [];
  for (let i = 0; i != columns * rows; i++) {
    tiles.push({ type: "blank" });
  }

  let customBoards = JSON.parse(localStorage.getItem("customBoards"));

  customBoards[boardName] = {
    rows,
    columns,
    tiles,
    topLevel: topLevelInput.checked,
  };

  localStorage.setItem("customBoards", JSON.stringify(customBoards));
  blendBoards();
  drawBoard(boardName);
  if (!editMode) editModeCheckbox.click();
}

document
  .getElementById("generateEmptyButton")
  .addEventListener("click", generateEmptyBoard);

clearCurrentTileButton.addEventListener("click", clearCurrentTile);

function clearCurrentTile() {
  displayNameInput.value = "";
  tileTypeInput.value = "blank";
  iconLinkInput.value = "";
  pronounciationInput.value = "";
  pastTenseInput.value = "";
  pastTensePronounciationInput.value = "";
  pluralInput.value = "";
  pluralPronounciationInput.value = "";
  negationInput.value = "";
  negationPronounciationInput.value = "";
  iconNameInput.value = "";
  linkToInput.value = "";
  colourInput.value = "red";
}

editTileSubmitButton.addEventListener("click", editTile);

//vulnerable to injection?
function editTile() {
  if (!displayNameInput.value && tileTypeInput.value !== "blank") {
    alert("You must enter a display name if the tile is not blank");
  }

  let board = boards[localStorage.getItem("currentBoardName")];
  let selectedTile = board.tiles[selectedTileNumber.value];

  selectedTile.displayName = displayNameInput.value;
  selectedTile.type = tileTypeInput.value;

  selectedTile.iconLink = iconLinkInput.value;

  selectedTile.pronounciation = pronounciationInput.value;

  selectedTile.pastTenseForm = pastTenseInput.value;

  selectedTile.pastTensePronounciation = pastTensePronounciationInput.value;

  selectedTile.pluralForm = pluralInput.value;

  selectedTile.pluralFormPronounciation = pluralPronounciationInput.value;

  selectedTile.negativeForm = negationInput.value;

  selectedTile.negativeFormPronounciation = negationPronounciationInput.value;

  selectedTile.iconName = iconNameInput.value;

  selectedTile.linkTo = linkToInput.value;

  selectedTile.colour = colourInput.value;

  //clear empty
  selectedTile = Object.entries(selectedTile).reduce(
    (obj, [key, value]) => (value ? ((obj[key] = value), obj) : obj),
    {}
  );

  Object.keys(selectedTile).forEach(key => {
    if (selectedTile[key] === "") {
      delete selectedTile[key];
    }
  });

  console.log(selectedTile)

  let saveName = localStorage.getItem("currentBoardName");
  if (saveName.charAt(0) !== "_") {
    saveName = "_" + saveName;
    board.name = saveName;
  }

  let customBoards = JSON.parse(localStorage.getItem("customBoards"));
  customBoards[saveName] = board;

  localStorage.setItem("customBoards", JSON.stringify(customBoards));
  blendBoards();
  drawBoard(localStorage.getItem("currentBoardName"));
}

window.onresize = () => sizeGrid();

//still imperfect
function sizeGrid() {
  let aspectRatio = window.innerWidth / window.innerHeight;
  console.log("aspect ratio: " + aspectRatio);

  let board = boards[localStorage.getItem("currentBoardName")];

  let tileWidth = Math.floor(window.innerWidth / board.columns);

  let tileHeight = Math.floor(window.innerHeight / board.rows);

  let itemSize =
    Math.round(
      tileWidth > tileHeight
        ? tileHeight - topBar.offsetHeight / board.rows
        : tileWidth
    ) - 5;

  const root = document.documentElement;
  root.style.setProperty("--grid-size", itemSize + "px");
}

tileTypeInput.addEventListener("change", (ev) => {
  if (tileTypeInput.value === "textOnly" || tileTypeInput.value === "blank") {
    iconTileSettings.classList.add("hidden");
  } else {
    iconTileSettings.classList.remove("hidden");
  }
});

toggleEditTileExtra.addEventListener("click", () => {
  editTileExtra.classList.toggle("hidden");
});

//takes the board from boards.js and adds it to the dom
//need to break down into smaller modules
function drawBoard(name) {
  if (!boards.hasOwnProperty(name)) {
    console.error("Tried to draw non-existing board");
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

  sizeGrid();

  //for each tile
  board.tiles.forEach((tile) => {
    //create button
    const tileElement = document.createElement("button");
    tileElement.classList.add("item");
    tileElement.id = board.tiles.indexOf(tile);
    const li = document.createElement("li");

    tileElement.addEventListener("click", () => {
      if (editMode) {
        selectedTileNumber.value = tileElement.id;
        displayNameInput.value = tile.displayName ?? "";
        tileTypeInput.value = tile.type ?? "blank";
        pronounciationInput.value = tile.pronounciation ?? "";
        pastTenseInput.value = tile.pastTenseForm ?? "";
        pastTensePronounciationInput.value = tile.pastTensePronounciation ?? "";
        pluralInput.value = tile.pluralForm ?? "";
        pluralPronounciationInput.value = tile.pluralFormPronounciation ?? "";
        negationInput.value = tile.negativeForm ?? "";
        negationPronounciationInput.value =
          tile.negativeFormPronounciation ?? "";
        iconNameInput.value = tile.iconName ?? "";
        colourInput.value = tile.colour ?? "red";
        iconNameInput.value = tile.iconName ?? "";
        iconLinkInput.value = tile.iconLink ?? "";
        linkToInput.value = tile.linkTo ?? "";
        showEditTile();
      }
    });

    //if blank, just add streight to board and return
    if (tile.type === "blank") {
      li.append(tileElement);
      boardSection.append(li);
      return;
    }

    //if not blank, add what is common to all tiles
    tileElement.classList.add(tile.colour); //sets colour
    tileElement.append(tile.displayName);

    //then add conditional elements. Avoiding elses for clarity.
    if (tile.type !== "textOnly") {
      let image = new Image();
      image.src = tile.iconLink ?? `./resouces/icons/${tile.iconName}.webp`;
      image.classList.add("icon");
      tileElement.append(image);
    }

    if (tile.type === "grammarMarker") {
      if (tile.internalName === "plural") {
        tileElement.addEventListener("click", pluraliseLastWord);
      } else if (tile.internalName === "past") {
        tileElement.addEventListener("click", pastTenseLastWord);
      } else if (tile.internalName === "negation") {
        tileElement.addEventListener("click", negateLastWord);
      }
      li.append(tileElement);
      boardSection.append(li);
      return;
    }

    if (tile.type === "textOnly") {
      tileElement.classList.add("largeText");
    }

    if (tile.linkTo) {
      tileElement.addEventListener("click", () => {
        if (!editMode) {
          drawBoard(tile.linkTo);
        }
      });
    }

    if (tile.type === "link") {
      tileElement.classList.add("linkItem");
    }

    if (tile.type !== "link") {
      tileElement.addEventListener("click", () => {
        if (!editMode) {
          sentence.push(tile);
          updateSentence();

          const word = tile.pronounciation ?? tile.displayName;
          speak(word);
        }
      });
    }

    //adds it to dom

    li.append(tileElement);
    boardSection.append(li);
  });
}

lockSidebarButton.addEventListener("click", () => {
  closeAllSidebars();
  sidebarLocked = true;
  localStorage.setItem("sidebarLocked", true);
});

console.log(
  "sentence auto delete default:" +
  sentenceAutoDelete +
  "\n" +
  localStorage.getItem("sentenceAutoDelete")
);

sentenceAutoDeleteCheckbox.checked = sentenceAutoDelete;

sentenceAutoDeleteCheckbox.addEventListener("click", (ev) => {
  toggleSentenceAutoDelete();
});

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

//todo, combine grammar markers
//makes the last word plural, if plural form specified
function pluraliseLastWord() {
  console.log("last word pluralised, if it has a plural form");
  if (sentence.length === 0) return;

  //get by value not reference
  let last = JSON.parse(JSON.stringify(sentence[sentence.length - 1]));

  let lastInitial = last.pronounciation ?? last.displayName;
  //coveres edgecases where worst case, the word only has a display name set
  last.pronounciation =
    last.pluralFormPronounciation ??
    last.pluralForm ??
    last.pronounciation ??
    last.displayName;
  last.displayName = last.pluralForm ?? last.displayName;
  sentence[sentence.length - 1] = last;

  if (lastInitial !== last.pronounciation) {
    //no change, don't speak
    speak(last.pronounciation ?? last.displayName);
  }

  updateSentence();
}

function pastTenseLastWord() {
  console.log("last word made past tense, if it has a past tense form");
  if (sentence.length === 0) return;

  let last = JSON.parse(JSON.stringify(sentence[sentence.length - 1]));
  let lastInitial = last.pronounciation ?? last.displayName;
  //coveres edgecases where worst case, the word only has a display name set
  last.pronounciation =
    last.pastTensePronounciation ??
    last.pastTenseForm ??
    last.pronounciation ??
    last.displayName;
  last.displayName = last.pastTenseForm ?? last.displayName;
  sentence[sentence.length - 1] = last;
  if (lastInitial !== last.pronounciation) {
    //no change, don't speak
    speak(last.pronounciation ?? last.displayName);
  }
  updateSentence();
}

function negateLastWord() {
  console.log("last word negated, if it has such a form");
  if (sentence.length === 0) return;

  let last = JSON.parse(JSON.stringify(sentence[sentence.length - 1]));
  let lastInitial = last.pronounciation ?? last.displayName;
  //coveres edgecases where worst case, the word only has a display name set
  last.pronounciation =
    last.negativeFormPronounciation ??
    last.negativeForm ??
    last.pronounciation ??
    last.displayName;
  last.displayName = last.negativeForm ?? last.displayName;
  sentence[sentence.length - 1] = last;
  if (lastInitial !== last.pronounciation) {
    //no change, don't speak
    speak(last.pronounciation ?? last.displayName);
  }
  updateSentence();
}

//updates the sentence display bar
function updateSentence() {
  const sentenceDisplayArray = sentence.map((tile) => tile.displayName);

  sentenceDisplayElement.value = sentenceDisplayArray
    .join(" ")
    .replaceAll("⠀ ⠀", "")
    .replaceAll("⠀", "");
}

//speaks whatever is passed to it
function speak(arg) {
  if (synth.speaking || synth.pending) synth.cancel();

  const utterance = new SpeechSynthesisUtterance(arg);
  if (selectedVoice) utterance.voice = selectedVoice;
  console.log(utterance);
  synth.speak(utterance);
}

//speaks and clears sentence. Would use speak() from above, but needs to clear after sentence finished, hence needing eventlistener
function speakSentence() {
  if (synth.speaking || synth.pending) synth.cancel();

  if (sentence.length === 0) return;

  const toSpeak = sentence.map(
    (tile) => tile.pronounciation ?? tile.displayName
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
  console.log("Waiting");
  setTimeout(() => {
    console.log("Loading voices");

    //gets uk voices
    voices = synth.getVoices().filter((voice) => voice.lang === "en-GB");

    voices.forEach((voice) => {
      let option = document.createElement("option");
      option.textContent = voice.name.replaceAll("(United Kingdom)", "");
      option.setAttribute("data-name", voice.name);
      voiceSelectElement.appendChild(option);
    });

    voiceSelectElement.selectedIndex = 0;
  }, 500);
}

voiceSelectElement.addEventListener("change", () => {
  // -1 for the "select" option
  selectedVoice = voices[voiceSelectElement.selectedIndex - 1];
  console.log("Selected voice: " + selectedVoice.name);
});

showAboutButton.addEventListener("click", showAbout);

document.getElementById("rowsInput").addEventListener("change", () => {
  rowsInputDisplay.textContent = rowsInput.value;
});

document.getElementById("colsInput").addEventListener("change", () => {
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

//lock screen generates four random numbers between 0 and 100
//and randomly selects ascending or descending order
//the numbers are put into buttons, and must be clicked in the order chosen
function showLockScreen() {
  let numbers = [];
  let order = Math.random() >= 0.5 ? "low-to-high" : "high-to-low";

  //generates a number, and adds it to the numbers array if not a duplicate
  for (let i = 0; i < 4; i++) {
    let number = Math.floor(Math.random() * (100 - 1) + 1);
    if (!numbers.includes(number)) {
      numbers[i] = number;
    } else i--;
  }

  //elements for the UI
  let popup = document.createElement("div");
  popup.classList.add("sidebar");
  popup.id = "unlockSidebar";

  let message = document.createElement("h2");
  message.innerText = `Select these numbers in order of ${order}`;

  let closeButton = document.createElement("button");
  closeButton.classList = "sidebarButton";
  closeButton.innerText = "Back";
  closeButton.id = "closePasswordButton";

  closeButton.addEventListener("click", () => {
    unlockAttempt = [];
    unlockSidebar.remove();
    console.log("here");
  });

  popup.append(closeButton, message);

  //for the numbers in the array, add a button to the element
  numbers.forEach((number) => {
    let button = document.createElement("button");
    button.textContent = number;
    button.classList.add("sidebarButton");

    //the logic for the unlocking is contained in the event listner and the global variables at the top
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
        } else alert("wrong order, try again");
        closePasswordButton.click(); //dirty
      }
    });

    popup.append(button);
  });

  document.body.prepend(popup);
}

//set default board
if (!localStorage.getItem("currentBoardName")) {
  localStorage.setItem("currentBoardName", "standard");
}

//set default board
if (!localStorage.getItem("currentSet")) {
  localStorage.setItem("currentSet", "initial");
}

if (!localStorage.getItem("customBoards")) {
  let customBoards = {};
  localStorage.setItem("customBoards", JSON.stringify(customBoards));
}

if (!localStorage.getItem("sidebarLocked")) {
  localStorage.setItem("sidebarLocked", false);
}

if (!localStorage.getItem("sentenceAutoDelete")) {
  localStorage.setItem("sentenceAutoDelete", true);
}

if (!localStorage.getItem("firstVisit")) {
  localStorage.setItem("firstVisit", false);
  showAbout();
}

//loads board from localstorage to keep same board on page refresh
drawBoard(localStorage.getItem("currentBoardName"));

populateVoiceList();
