"use strict";

import { boards } from "./boards.js";
// Basic, Main, Toys, Learn, Topic, Body, Home, Food, Drinks, People, Feelings

const synth = window.speechSynthesis;

const sentenceDisplayElement = document.getElementById("sentenceDisplay");
const sentence = [];

const voiceSelectElement = document.getElementById("voicesSelect");
let voices = [];
let selectedVoice;



//hides and shows the sidebar
sidebarButton.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
});

//speaks the sentence when hitting enter, instead of adding selected word
document.addEventListener("keydown", (ev) => {
  if (ev.key === "Enter") {
    ev.preventDefault();
    speakSentence();
  }
});

createGridMenuButton.addEventListener("click", ev=> {
  sidebar.classList.toggle("hidden");
  createGridSidebar.classList.toggle("hidden");
})

let customBoardName;

document.getElementById("generateEmptyButton").addEventListener("click", ev=> {

  let boardName = "_" + nameInput.value.toLowerCase().replaceAll(" ","-")
  let rows = Number(rowsInput.value)
  let columns = Number(colsInput.value)

  if(
    boards.hasOwnProperty(boardName) ||
    !boardName ||
    boardName.length > 30 ||
    !rows ||
    rows > 6 ||
    rows < 3 ||
    !Number.isInteger(rows) ||
    !columns ||
    columns > 9 ||
    columns < 3 ||
    !Number.isInteger(columns)
  ) {
    alert("Please check your inputs\nName must be unique and under 30 chars,\nNumbers must be in bounds, use arrows")
    return
  }
  createGridSidebar.classList.toggle("hidden");

  let tiles = []
  for(let i = 0; i != (columns * rows); i++){
    tiles.push({type:"placeholder", count:i})
  }

  console.log(tiles)

  boards[boardName] = {
    rows,
    columns,
    tiles
  }
  drawBoard(boardName)
  customBoardName = boardName
})

closeCreateGridSidebarButton.addEventListener("click",() => createGridSidebar.classList.toggle("hidden"))
closeCreateTileSidebarButton.addEventListener("click",() => createTileSidebar.classList.toggle("hidden"))


createTileSubmitButton.addEventListener("click",() => {
  console.log("here")
  let selectedTile = document.getElementById(`placeholder${selectedTileNumber.value}`)
  selectedTile.classList.add(colourInput.options[colourInput.selectedIndex].id)
  selectedTile.append(displayNameInput.value)
  if(hasIconInput.value){
    let image = document.createElement("image")
    image.src = `./resouces/icons/${iconNameeInput.value}.webp`
    selectedTile.append(image)
  } else selectedTile.classList.add("textOnly")

})

//takes the grid from boards.js and adds it to the dom
function drawBoard(name) {
  const gridSection = document.getElementById("gridSection");
  const board = boards[name];

  //clear existing
  gridSection.replaceChildren();

  gridSection.classList = "grid";

  //sets dimentions. room for improvement here
  switch (board.rows) {
    case 3:
      gridSection.classList.add("three-rows");
      break;
    case 4:
      gridSection.classList.add("four-rows");
      break;
    case 5:
      gridSection.classList.add("five-rows");
      break;
    case 6:
      gridSection.classList.add("six-rows");
      break;
    case 7:
      gridSection.classList.add("seven-rows");
      break;
    case 8:
      gridSection.classList.add("eight-rows");
      break;
    case 9:
      gridSection.classList.add("nine-rows");
      break;
  }

  switch (board.columns) {
    case 3:
      gridSection.classList.add("three-cols");
      break;
    case 4:
      gridSection.classList.add("four-cols");
      break;
    case 5:
      gridSection.classList.add("five-cols");
      break;
    case 6:
      gridSection.classList.add("six-cols");
      break;
    case 7:
      gridSection.classList.add("seven-cols");
      break;
    case 8:
      gridSection.classList.add("eight-cols");
      break;
    case 9:
      gridSection.classList.add("nine-cols");
      break;
  }

  //for each tile
  board.tiles.forEach((tile) => {
    //create button
    const tileElement = document.createElement("button");
    tileElement.classList.add("item");

    if (tile.type === "placeholder"){
      tileElement.addEventListener("click", () => {
        selectedTileNumber.value = tile.count
        createTileSidebar.classList.toggle("hidden")       
      });
      tileElement.id = `placeholder${tile.count}`
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
    let li = document.createElement("li")
    li.append(tileElement)
    gridSection.append(li);
  });
}

//removes the menu button to prevent wandering fingers
removeMenuButtonButton.addEventListener("click", () => {
  sidebarButton.remove();
  sidebar.classList.toggle("hidden");
});

pluraliseButton.addEventListener("click", () => pluraliseLastWord());
playButton.addEventListener("click", () => speakSentence());
clearButton.addEventListener("click", () => clearSentence());
loadSetOneButton.addEventListener("click", () => {
  drawBoard("initial");
  localStorage.setItem("activeGrid", "initial");
});
loadSetTwoButton.addEventListener("click", () => {
  drawBoard("standard");
  localStorage.setItem("activeGrid", "standard");
});
loadSetThreeButton.addEventListener("click", () => {
  drawBoard("complex");
  localStorage.setItem("activeGrid", "complex");
});

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

//loads grid from localstorage to keep same grid on page refresh
drawBoard(localStorage.getItem("activeGrid"));

populateVoiceList();
