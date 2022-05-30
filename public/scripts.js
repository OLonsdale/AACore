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

//takes the grid from boards.js and adds it to the dom
function drawBoard(name) {
  const gridSection = document.getElementById("gridSection");
  const board = boards[name];

  //clear existing
  gridSection.replaceChildren();

  //sets dimentions. room for improvement here
  gridSection.classList = "grid";
  if (board.rows === 6) gridSection.classList.add("six-rows");
  if (board.rows === 3) gridSection.classList.add("three-rows");

  if (board.columns === 9) gridSection.classList.add("nine-cols");
  if (board.columns === 6) gridSection.classList.add("six-cols");

  //for each tile
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

    //then add conditional elements. Avoiding elses for clarity.
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

    if (tile.type !== "link") {
      tileElement.addEventListener("click", () => {
        sentence.push(tile);
        updateSentence();

        let word = tile.pronounciation ?? tile.displayName;
        speak(word);
      });
    }
    //adds it to dom
    gridSection.append(tileElement);
  });
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

voiceSelectElement.addEventListener( "change", () => {
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
