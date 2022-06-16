"use strict";

import { expanded } from "./board-sets/expanded.js";
import { initial } from "./board-sets/initial.js";
import { standard } from "./board-sets/standard.js";
// Basic, Main, Toys, Learn, Topic, Body, Home, Food, Drinks, People, Feelings

let boards = {};

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

let sentenceAutoDelete = localStorage.getItem("sentenceAutoDelete");
let editMode = false;

editModeCheckbox.addEventListener("change", () => {
  toggleEditMode();
});

function toggleEditMode() {
  editMode = !editMode;
  if (editMode) {
    deleteBoardArea.classList = "";
    console.log("Edit mode enabled");
    document.body.classList.add("editMode");
    sentenceDisplayElement.innerHTML = "edit mode enabled";
  } else {
    deleteBoardArea.classList = "hidden";
    console.log("Edit mode disabled");
    document.body.classList.remove("editMode");
    sentenceDisplayElement.innerHTML = "";
  }
}

function showSidebar() {
  if (sidebarLocked) {
    showLockScreen();
    return;
  }
  sidebar.classList.remove("hidden");
  createBoardSidebar.classList.add("hidden");
  editTileSidebar.classList.add("hidden");

  //board selection buttons
  boardSelectionList.replaceChildren();
  for (const board in boards) {
    if (Object.hasOwnProperty.call(boards, board)) {
      const element = boards[board];
      if (!element.topLevel) continue;
      let loadButton = document.createElement("button");
      loadButton.classList.add("sidebarButton");
      loadButton.textContent = board.charAt(0).toUpperCase() + board.slice(1);
      loadButton.addEventListener("click", () => {
        localStorage.setItem("currentBoardName", board);
        drawBoard(board);
      });
      boardSelectionList.append(loadButton);
    }
  }

  deleteCurrentBoardButton.textContent =
    "Delete " + localStorage.getItem("currentBoardName");
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
  drawBoard("standard");
  showSidebar();
}

function findPathToWord(word, startBoard) {
  //scuffed mess
}

function closeSidebar() {
  sidebar.classList.add("hidden");
  createBoardSidebar.classList.add("hidden");
  editTileSidebar.classList.add("hidden");
}

function showCreateBoardSidebar() {
  createBoardSidebar.classList.remove("hidden");
  sidebar.classList.add("hidden");
  editTileSidebar.classList.add("hidden");
}

function showEditTile() {
  editTileSidebar.classList.remove("hidden");
  createBoardSidebar.classList.add("hidden");
  sidebar.classList.add("hidden");

  //lists boards for the linkTo dropdown
  for (const board in boards) {
    if (Object.hasOwnProperty.call(boards, board)) {
      const option = document.createElement("option");
      option.value = board;
      option.innerText = board;
      linkToInput.append(option);
    }
  }
}

//hides and shows the sidebar
sidebarButton.addEventListener("click", () => {
  if (sidebar.classList.contains("hidden")) {
    showSidebar();
  } else closeSidebar();
});

closeSidebarButton.addEventListener("click", () => {
  closeSidebar();
});

createBoardMenuButton.addEventListener("click", () => showCreateBoardSidebar());

closeCreateBoardSidebarButton.addEventListener("click", () =>
  createBoardSidebar.classList.add("hidden")
);

closeEditTileSidebarButton.addEventListener("click", () =>
  editTileSidebar.classList.add("hidden")
);

function saveBoard() {
  let customBoards = JSON.parse(localStorage.getItem("customBoards"));
  let name = localStorage.getItem("currentBoardName");
  if (name.charAt(0) !== "_") {
    name = "_" + name;
  }
  customBoards[name] = boards[localStorage.getItem("currentBoardName")];
  localStorage.setItem("customBoards", JSON.stringify(customBoards));
  blendBoards();
}

exportBoardButton.addEventListener("click", () => {
  exportBoard();
});

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

importBoardButton.addEventListener("click", () => {
  importInput.click();
});

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
    alert("Please check your inputs\nName must be unique and under 30 chars");
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
  .addEventListener("click", (ev) => {
    generateEmptyBoard();
  });

//convert to edit json object and redraw board rather than changing the dom
editTileSubmitButton.addEventListener("click", () => {
  editTile();
});

//vulnerable to injection?
function editTile() {
  let board = boards[localStorage.getItem("currentBoardName")];
  let selectedTile = board.tiles[selectedTileNumber.value];
  selectedTile.displayName = displayNameInput.value;
  selectedTile.type = tileTypeInput.value;

  if (iconLinkInput.value) {
    selectedTile.iconLink = iconLinkInput.value;
  }
  if (pronounciationInput.value) {
    selectedTile.pronounciation = pronounciationInput.value;
  }
  if (pastTenseInput.value) {
    selectedTile.pastTenseForm = pastTenseInput.value;
  }
  if (pastTensePronounciationInput.value) {
    selectedTile.pastTensePronounciation = pastTensePronounciationInput.value;
  }
  if (pluralInput.value) {
    selectedTile.pluralForm = pluralInput.value;
  }
  if (pluralPronounciationInput.value) {
    selectedTile.pluralFormPronounciation = pluralPronounciationInput.value;
  }
  if (negationInput.value) {
    selectedTile.negativeForm = negationInput.value;
  }
  if (negationPronounciationInput.value) {
    selectedTile.negativeFormPronounciation = negationPronounciationInput.value;
  }
  if (iconNameInput.value) {
    selectedTile.iconName = iconNameInput.value;
  }
  if (linkToInput.value) {
    selectedTile.linkTo = linkToInput.value;
  }
  if (colourInput.value) {
    selectedTile.colour = colourInput.value;
  }

  let saveName = localStorage.getItem("currentBoardName");
  if (saveName.charAt(0) !== "_") {
    saveName = "_" + saveName;
  }

  let customBoards = JSON.parse(localStorage.getItem("customBoards"));
  customBoards[saveName] = board;

  localStorage.setItem("customBoards", JSON.stringify(customBoards));
  blendBoards();
  drawBoard(localStorage.getItem("currentBoardName"));
}

window.onresize = () => sizeGrid();

function sizeGrid() {
  let board = boards[localStorage.getItem("currentBoardName")];
  let tileWidth = Math.floor(window.innerWidth / board.columns) - 10;
  let tileHeight =
    Math.floor(
      (window.innerHeight - document.getElementById("topBar").offsetHeight) /
        board.rows
    ) - 10;
  let itemSize = tileWidth > tileHeight ? tileHeight : tileWidth;
  const root = document.documentElement;
  root.style.setProperty("--grid-size", itemSize + "px");
}

tileTypeInput.addEventListener("change", (ev) => {
  if (tileTypeInput.value === "textOnly") {
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
    drawBoard("standard");
    return;
  }
  const boardSection = document.getElementById("boardSection");
  const board = boards[name];

  localStorage.setItem("currentBoardName", name);

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
  closeSidebar();
  sidebarLocked = true;
  localStorage.setItem("sidebarLocked", true);
});

sentenceAutoDeleteCheckbox.checked = sentenceAutoDelete;

sentenceAutoDeleteCheckbox.addEventListener("click", (ev) => {
  toggleSentenceAutoDelete();
});

function toggleSentenceAutoDelete() {
  sentenceAutoDelete = !sentenceAutoDelete;
  localStorage.setItem("sentenceAutoDelete", sentenceAutoDelete);
}

//Event Listeners
// playButton.addEventListener("click", () => speakSentence());

sentenceDisplayElement.addEventListener("click", () => {
  speakSentence()
});

deleteLastButton.addEventListener("click", () => {
  sentence.pop();
  updateSentence();
});

clearButton.addEventListener("click", () => clearSentence());

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

  sentenceDisplayElement.innerHTML = sentenceDisplayArray
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

//set default board
if (!localStorage.getItem("currentBoardName")) {
  localStorage.setItem("currentBoardName", "standard");
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

//loads board from localstorage to keep same board on page refresh
drawBoard(localStorage.getItem("currentBoardName"));

populateVoiceList();

// function unbindServiceWorker(){
//   navigator.serviceWorker.getRegistrations().then(function (registrations) {
//     for (let registration of registrations) {
//       registration.unregister();
//     }
//   });
// }
// unbindServiceWorker()

function showLockScreen() {
  let numbers = [];
  let order = Math.random() >= 0.5 ? "low-to-high" : "high-to-low";

  for (let i = 0; i < 4; i++) {
    let number = Math.floor(Math.random() * (100 - 1) + 1);
    if (!numbers.includes(number)) {
      numbers[i] = number;
    } else i--;
  }

  let popup = document.createElement("div");
  popup.classList.add("sidebar");
  popup.id = "unlockSidebar";

  let message = document.createElement("h2");
  message.innerText = `Click these numbers in order of ${order}`;

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

  numbers.forEach((number) => {
    let button = document.createElement("button");
    button.textContent = number;
    button.classList.add("sidebarButton");

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
        closePasswordButton.click();
      }
    });

    popup.append(button);
  });

  document.body.prepend(popup);
}
