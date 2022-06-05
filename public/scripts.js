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

let sidebarLocked = false;
let unlockAttempt = []

function showSidebar() {
  if(sidebarLocked){
    showLockScreen()
    return
  }
  sidebar.classList.remove("hidden");
  createBoardSidebar.classList.add("hidden");
  createTileSidebar.classList.add("hidden");

  boardSelectionList.replaceChildren()
  for (const board in boards) {
    if (Object.hasOwnProperty.call(boards, board)) {
      const element = boards[board];
      if(!element.topLevel) continue
      let loadButton = document.createElement("button")
      loadButton.classList.add("sidebarButton")
      loadButton.textContent = board.charAt(0).toUpperCase() + board.slice(1)
      loadButton.addEventListener("click",()=>{
        localStorage.setItem("activeBoard",board)
        drawBoard(board)
      })
      boardSelectionList.append(loadButton)
    }
  }

}

function showLockScreen() {
  let numbers = []
  let order = (Math.random()>=0.5)? "ascending" : "descending";

  for (let i = 0; i < 4; i++) {
    let number = Math.floor(Math.random() * (100 - 1) + 1)
    if(!numbers.includes(number)){
      numbers[i] = number
    }
    else i--
  }

  let popup = document.createElement("div")
  popup.classList.add("sidebar")
  popup.id="unlockSidebar"

  let message = document.createElement("h2")
  message.innerText = `Click these numbers in ${order} order`

  let closeButton = document.createElement("button")
  closeButton.classList = "sidebarButton"
  closeButton.innerText = "Back"
  closeButton.id = "closePasswordButton"
  closeButton.addEventListener("click",()=>{
    unlockAttempt = []
    unlockSidebar.remove()
    console.log("here")
  })

  popup.append(closeButton, message)

  numbers.forEach(number => {
    let button = document.createElement("button")
    button.textContent = number
    button.classList.add("sidebarButton")

    button.addEventListener("click", ev => {
      button.disabled = true
      unlockAttempt.push(number)

      if(order === "ascending"){
        numbers.sort((a, b) => a - b);
      } else numbers.sort((a, b) => b - a);

      if(unlockAttempt.length === 4){
        if(
          unlockAttempt[0] === numbers[0] &&
          unlockAttempt[1] === numbers[1] &&
          unlockAttempt[2] === numbers[2] &&
          unlockAttempt[3] === numbers[3] ){
            sidebarLocked = false
            showSidebar()
        } else alert("wrong order, try again")
        closePasswordButton.click()
      }
    })

    popup.append(button)
  })

  document.body.prepend(popup)

}

function closeSidebar() {
  sidebar.classList.add("hidden");
  createBoardSidebar.classList.add("hidden");
  createTileSidebar.classList.add("hidden");
}

function showCreateBoardSidebar() {
  createBoardSidebar.classList.remove("hidden");
  sidebar.classList.add("hidden");
  createTileSidebar.classList.add("hidden");
}

function showCreateTileSidebar() {
  createTileSidebar.classList.remove("hidden");
  createBoardSidebar.classList.add("hidden");
  sidebar.classList.add("hidden");

  for (const board in boards) {
    if (Object.hasOwnProperty.call(boards, board)) {
      const element = boards[board];
      const option = document.createElement("option")
      option.id = board
      option.innerText = board
      linkToInput.append(option)
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
closeCreateTileSidebarButton.addEventListener("click", () =>
  createTileSidebar.classList.add("hidden")
);

saveBoardButton.addEventListener("click", ()=> {
  saveBoard()
})

function saveBoard(){
  let customBoards = JSON.parse(localStorage.getItem("customBoards"))
  customBoards[localStorage.getItem("activeBoard")] = boards[localStorage.getItem("activeBoard")]
  localStorage.setItem("customBoards",JSON.stringify(customBoards))
  // delete boards[localStorage.getItem("activeBoard")]
}

exportBoardButton.addEventListener("click", ()=>{
  exportBoard()
})

function exportBoard(){
  const filename = `${localStorage.getItem("activeBoard")}.json`;
  const jsonStr = JSON.stringify(boards[localStorage.getItem("activeBoard")]);

  let element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(jsonStr));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

importBoardButton.addEventListener("click",()=>{
  importInput.click()
})

importInput.addEventListener("change",(ev)=>{
  const fileList = ev.target.files;
  const reader = new FileReader()
  reader.addEventListener('load', (event) => {
    let newBoard = JSON.parse(event.target.result);
    let customBoards = JSON.parse(localStorage.getItem("customBoards"))
    customBoards[ev.target.files[0].name.replace(".json","")] = newBoard
    localStorage.setItem("customBoards",JSON.stringify(customBoards))
    console.log("custom board imported")
    boards = {...stockBoards, ...JSON.parse(localStorage.getItem("customBoards"))}
    showSidebar()
  });
  reader.readAsText(fileList[0])
})

function generateEmptyBoard() {
  let boardName = "_" + nameInput.value.toLowerCase().replaceAll(" ", "-");
  let rows = Number(rowsInput.value);
  let columns = Number(colsInput.value);

  if (boards.hasOwnProperty(boardName) || !boardName || boardName.length > 30) {
    alert("Please check your inputs\nName must be unique and under 30 chars");
    return;
  }

  localStorage.setItem("activeBoard",boardName)

  createBoardSidebar.classList.toggle("hidden");

  let tiles = [];
  for (let i = 0; i != columns * rows; i++) {
    tiles.push({ type: "placeholder", count: i });
  }



  boards[boardName] = {
    rows,
    columns,
    tiles,
    topLevel: topLevelInput.checked,
  };
  drawBoard(boardName);
}

document.getElementById("generateEmptyButton").addEventListener("click", (ev) => {
    generateEmptyBoard();
  });

//convert to edit json object and redraw board rather than changing the dom
createTileSubmitButton.addEventListener("click", () => {
  updatePlaceholderTile();
});

//vulnerable to injection
function updatePlaceholderTile() {
  let board = boards[localStorage.getItem("activeBoard")];
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
  

  drawBoard(localStorage.getItem("activeBoard"));
}

window.onresize = () => drawBoard(localStorage.getItem("activeBoard"))
//takes the board from boards.js and adds it to the dom
//need to break down into smaller modules
function drawBoard(name) {
  console.log("board draw")
  const boardSection = document.getElementById("boardSection");
  const board = boards[name];
  localStorage.setItem("activeBoard",name)

  //clear existing
  boardSection.replaceChildren();

  boardSection.classList = "board";
  boardSection.classList.add(`rows-${board.rows}`);
  boardSection.classList.add(`cols-${board.columns}`);
  
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
      boardSection.append(tileElement);
      return;
    }

    //if blank, just add streight to board and return
    if (tile.type === "blank") {
      boardSection.append(tileElement);
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
    boardSection.append(li);
  });
}

//removes the menu button to prevent wandering fingers
lockSidebarButton.addEventListener("click", () => {
  closeSidebar();
  sidebarLocked = true
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

//set default board
if (!localStorage.getItem("activeBoard")) {
  localStorage.setItem("activeBoard", "standard");
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

//loads board from localstorage to keep same board on page refresh
drawBoard(localStorage.getItem("activeBoard"));

populateVoiceList();

function unbindServiceWorker(){
  navigator.serviceWorker.getRegistrations().then(function (registrations) {
    for (let registration of registrations) {
      registration.unregister();
    }
  });
}
unbindServiceWorker()