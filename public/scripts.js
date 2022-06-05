"use strict";

import { boards as stockBoards } from "./boards.js";
// Basic, Main, Toys, Learn, Topic, Body, Home, Food, Drinks, People, Feelings

let boards = {...stockBoards, ...JSON.parse(localStorage.getItem("customBoards"))}

console.log(boards)

const synth = window.speechSynthesis;

const sentenceDisplayElement = document.getElementById("sentenceDisplay");
const sentence = [];

const voiceSelectElement = document.getElementById("voicesSelect");
let voices = [];
let selectedVoice;

function showSidebar() {
  sidebar.classList.remove("hidden");
  createGridSidebar.classList.add("hidden");
  createTileSidebar.classList.add("hidden");

  gridSelectionList.replaceChildren()
  for (const board in boards) {
    if (Object.hasOwnProperty.call(boards, board)) {
      const element = boards[board];
      if(!element.topLevel) continue
      let loadButton = document.createElement("button")
      loadButton.classList.add("sidebarButton")
      loadButton.textContent = board.charAt(0).toUpperCase() + board.slice(1)
      loadButton.addEventListener("click",()=>{
        localStorage.setItem("activeGrid",board)
        drawBoard(board)
      })
      gridSelectionList.append(loadButton)
    }
  }

}

function closeSidebar() {
  sidebar.classList.add("hidden");
  createGridSidebar.classList.add("hidden");
  createTileSidebar.classList.add("hidden");
}

function showCreateGridSidebar() {
  createGridSidebar.classList.remove("hidden");
  sidebar.classList.add("hidden");
  createTileSidebar.classList.add("hidden");
}

function showCreateTileSidebar() {
  createTileSidebar.classList.remove("hidden");
  createGridSidebar.classList.add("hidden");
  sidebar.classList.add("hidden");
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

createGridMenuButton.addEventListener("click", () => showCreateGridSidebar());
closeCreateGridSidebarButton.addEventListener("click", () =>
  createGridSidebar.classList.add("hidden")
);
closeCreateTileSidebarButton.addEventListener("click", () =>
  createTileSidebar.classList.add("hidden")
);

saveBoardButton.addEventListener("click", ()=> {
  saveBoard()
})

function saveBoard(){
  let customBoards = JSON.parse(localStorage.getItem("customBoards"))
  customBoards[localStorage.getItem("activeGrid")] = boards[localStorage.getItem("activeGrid")]
  localStorage.setItem("customBoards",JSON.stringify(customBoards))
  // delete boards[localStorage.getItem("activeGrid")]
}

exportBoardButton.addEventListener("click", ()=>{
  exportBoard()
})

function exportBoard(){
  const filename = `${localStorage.getItem("activeGrid")}.json`;
  const jsonStr = JSON.stringify(boards[localStorage.getItem("activeGrid")]);

  let element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(jsonStr));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

importGridButton.addEventListener("click",()=>{
  importInput.click()
  
})

function generateEmptyGrid() {
  let boardName = "_" + nameInput.value.toLowerCase().replaceAll(" ", "-");
  let rows = Number(rowsInput.value);
  let columns = Number(colsInput.value);

  if (boards.hasOwnProperty(boardName) || !boardName || boardName.length > 30) {
    alert("Please check your inputs\nName must be unique and under 30 chars");
    return;
  }

  localStorage.setItem("activeGrid",boardName)

  createGridSidebar.classList.toggle("hidden");

  let tiles = [];
  for (let i = 0; i != columns * rows; i++) {
    tiles.push({ type: "placeholder", count: i });
  }



  boards[boardName] = {
    rows,
    columns,
    tiles,
    topLevel: topLevelInput.value,
  };
  drawBoard(boardName);
}

document.getElementById("generateEmptyButton").addEventListener("click", (ev) => {
    generateEmptyGrid();
  });

//convert to edit json object and redraw grid rather than changing the dom
createTileSubmitButton.addEventListener("click", () => {
  updatePlaceholderTile();
});

//vulnerable to injection
function updatePlaceholderTile() {
  let board = boards[localStorage.getItem("activeGrid")];
  let selectedTile = board.tiles[selectedTileNumber.value];
  selectedTile.displayName = displayNameInput.value;
  selectedTile.type = tileType.options[tileType.selectedIndex].id;
  if(iconNameInput.value){
    selectedTile.iconName = iconNameInput.value
  }
  if(linkToInput.value){
    selectedTile.linkTo = linkToInput.value
  }
  selectedTile.colour = colourInput.options[colourInput.selectedIndex].id;
  

  drawBoard(localStorage.getItem("activeGrid"));
}

window.onresize = () => drawBoard(localStorage.getItem("activeGrid"))
//takes the grid from boards.js and adds it to the dom
//need to break down into smaller modules
function drawBoard(name) {
  console.log("grid draw")
  const gridSection = document.getElementById("gridSection");
  const board = boards[name];
  localStorage.setItem("activeGrid",name)

  //clear existing
  gridSection.replaceChildren();

  gridSection.classList = "grid";
  gridSection.classList.add(`rows-${board.rows}`);
  gridSection.classList.add(`cols-${board.columns}`);
  
  let tileWidth = Math.floor(window.innerWidth / board.columns) - 20
  let tileHeight = Math.floor((window.innerHeight-document.getElementById("topBar").offsetHeight) / board.rows) - 20
  let itemSize = tileWidth > tileHeight ? tileHeight : tileWidth
  
  const root = document.documentElement
  root.style.setProperty("--grid-size",itemSize+"px")
  
  //for each tile
  board.tiles.forEach((tile) => {
    //create button
    const tileElement = document.createElement("button");
    tileElement.classList.add("item");

    if (tile.type === "placeholder") {
      tileElement.addEventListener("click", () => {
        selectedTileNumber.value = tile.count;
        showCreateTileSidebar();
      });
      tileElement.id = `placeholder${tile.count}`;
      gridSection.append(tileElement);
      return;
    }

    //if blank, just add streight to grid and return
    if (tile.type === "blank") {
      gridSection.append(tileElement);
      return;
    }

    //if not blank, add what is common to all tiles
    tileElement.classList.add(tile.colour); //sets colour
    tileElement.id = tile.internalName;
    tileElement.append(tile.displayName);

    //then add conditional elements. Avoiding elses for clarity.
    if (tile.type !== "textOnly") {
      let image = new Image();
      image.src = `./resouces/icons/${tile.iconName}.webp`;
      image.classList.add("icon");
      tileElement.append(image);
    }

    if (tile.type === "textOnly") {
      tileElement.classList.add("largeText");
    }

    if (tile.linkTo) {
      tileElement.addEventListener("click", () => {
        drawBoard(tile.linkTo);
      });
    }

    if (tile.type === "link") {
      tileElement.classList.add("linkItem");
    }

    if (tile.type !== "link") {
      tileElement.addEventListener("click", () => {
        sentence.push(tile);
        updateSentence();

        let word = tile.pronounciation ?? tile.displayName;
        speak(word);
      });
    }

    //adds it to dom
    let li = document.createElement("li");
    li.append(tileElement);
    gridSection.append(li);
  });
}

//removes the menu button to prevent wandering fingers
removeMenuButtonButton.addEventListener("click", () => {
  closeSidebar();
  sidebarButton.remove();
});

//Event Listeners

pluraliseButton.addEventListener("click", () => pluraliseLastWord());
playButton.addEventListener("click", () => speakSentence());
clearButton.addEventListener("click", () => clearSentence());

//makes the last word plural, if plural form specified
function pluraliseLastWord() {
  console.log("last word pluralised, if it has a plural form");
  if (sentence.length > 0) {
    let last = sentence.pop();
    //coveres edgecases where worst case, the word only has a display name set
    last.pronounciation =
      last.pluralFormPronounciation ??
      last.pluralForm ??
      last.pronounciation ??
      last.displayName;
    last.displayName = last.pluralForm ?? last.displayName;
    sentence.push(last);
    updateSentence();
  }
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
  utterance.onend = () => clearSentence();
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

//set default grid
if (!localStorage.getItem("activeGrid")) {
  localStorage.setItem("activeGrid", "standard");
}

if (!localStorage.getItem("customBoards")) {
  let customBoards = {}
  localStorage.setItem("customBoards", JSON.stringify(customBoards));
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

//loads grid from localstorage to keep same grid on page refresh
drawBoard(localStorage.getItem("activeGrid"));

populateVoiceList();

function unbindServiceWorker(){
  navigator.serviceWorker.getRegistrations().then(function (registrations) {
    for (let registration of registrations) {
      registration.unregister();
    }
  });
}
unbindServiceWorker()