"use strict";

import { boards } from "./boards.js";

// Basic, Main, Toys, Learn, Topic, Body, Home, Food, Drinks, People, Feelings

const synth = window.speechSynthesis;

const sentenceDisplayElement = document.getElementById("sentenceDisplay")
const sentence = []

const voiceSelectElement = document.getElementById("voicesSelect");
let voices = [];
let selectedVoice;


sidebarButton.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
});

document.addEventListener('keydown', ev => {
  if(ev.key === "Enter"){
    ev.preventDefault()
    speakSentence()
  }
});

removeMenuButtonButton.addEventListener("click", () => {
  sidebarButton.remove();
  sidebar.classList.toggle("hidden");
})

pluraliseButton.addEventListener("click", () => pluraliseLastWord());
playButton.addEventListener("click", () => speakSentence());
clearButton.addEventListener("click", () =>  clearSentence());
loadSetOne.addEventListener("click",() => drawBoard("initial"))
loadSetTwo.addEventListener("click",() => drawBoard("standard"))
loadSetThree.addEventListener("click",() => drawBoard("complex"))


// swapButton.addEventListener("click", () => switchGrids());

function pluraliseLastWord() {
  console.log("last word pluralised, if it has a plural form")
  if (sentence.length > 0) {
    let last = sentence.pop();
    last.pronounciation = last.pluralFormPronounciation ?? last.pluralForm ?? last.pronounciation ?? last.displayName
    last.displayName = last.pluralForm ?? last.displayName
    sentence.push(last);
    updateSentence();
  }
}



if (!localStorage.getItem("activeGrid")) {
  localStorage.setItem("activeGrid", "standard");
}

function drawBoard(name) {
  const gridSection = document.getElementById("gridSection");
  const board = boards[name];

  //clear existing
  gridSection.replaceChildren();

  gridSection.classList = "grid";
  if (board.rows === 6) gridSection.classList.add("six-rows");
  if (board.rows === 3) gridSection.classList.add("three-rows");

  if (board.columns === 9) gridSection.classList.add("nine-cols");
  if (board.columns === 6) gridSection.classList.add("six-cols");

  board.tiles.forEach((tile) => {
    //create button
    const tileElement = document.createElement("button");
    tileElement.classList.add("item");

    //if blank, just add streight to grid and return
    if (tile.type === "blank") {
      gridSection.append(tileElement);
      return;
    }

    //if not blank, add what is common to all tiles
    tileElement.classList.add(tile.colour); //sets colour
    tileElement.id = tile.internalName;
    tileElement.append(tile.displayName);

    //then add conditional elements
    if (tile.type !== "textOnly") {
      let image = new Image();
      image.src = `./resouces/icons/${tile.iconName}.png`;
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
    
    if(tile.type !== "link"){

      tileElement.addEventListener("click", () => {

        sentence.push(tile);
        updateSentence();

        let word = tile.pronounciation ?? tile.displayName;
        speak(word)
      });
    }

    gridSection.append(tileElement);
  });
}

function updateSentence() {

  const sentenceDisplayArray = sentence.map(tile => tile.displayName)
  
  sentenceDisplayElement.value = sentenceDisplayArray
    .join(" ")
    .replaceAll("⠀ ⠀", "")
    .replaceAll("⠀", "");

}

function speak(arg) {
  if (synth.speaking || synth.pending) synth.cancel();

  const utterance = new SpeechSynthesisUtterance(arg);
  if (selectedVoice) utterance.voice = selectedVoice;
  synth.speak(utterance)
}

function speakSentence() {

  if (synth.speaking || synth.pending) synth.cancel(); 

  if (sentence.length === 0) return;

  const toSpeak = sentence.map(tile => tile.pronounciation ?? tile.displayName)

  const speakSentence = toSpeak
    .join(" ")
    .replaceAll("⠀ ⠀", "")
    .replaceAll("⠀", "");

  const utterance = new SpeechSynthesisUtterance(speakSentence)
  if (selectedVoice) utterance.voice = selectedVoice;
  utterance.onend = () => clearSentence()
  synth.speak(utterance)
}

function clearSentence() {
  synth.cancel();
  sentence.length = 0;
  updateSentence();
}

function switchGrids() {
  if (localStorage.getItem("activeGrid") === "standard") {
    localStorage.setItem("activeGrid", "initial");
  } else localStorage.setItem("activeGrid", "standard");

  drawBoard(localStorage.getItem("activeGrid"));
}



/// speech stuff
function populateVoiceList() {
  console.log("Waiting");
  setTimeout(() => {
    // voiceSelectElement.innerHTML = "";
    console.log("Loading voices");

    voices = synth.getVoices().filter((voice) => voice.lang === "en-GB");

    voices.forEach(voice => {
      let option = document.createElement("option");
      option.textContent = voice.name.replaceAll("(United Kingdom)","");
      option.setAttribute("data-name", voice.name);
      voiceSelectElement.appendChild(option);
    });

    voiceSelectElement.selectedIndex = 0

  }, 500);
}

voiceSelectElement.onchange = () => {
  selectedVoice = voices[voiceSelectElement.selectedIndex-1];
  console.log("Selected voice: " + selectedVoice.name)
};

drawBoard(localStorage.getItem("activeGrid"));
populateVoiceList();
