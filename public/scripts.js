"use strict";

import { boards } from "./boards.js";

// Basic, Main, Toys, Learn, Topic, Body, Home, Food, Drinks, People, Feelings

const sentenceSpeak = [];
const sentenceShow = [];
const synth = window.speechSynthesis;

let voiceSelect = document.getElementById("voicesSelect");
let voices = [];
let voice;
let selectedVoiceIndex;

//set
if (!localStorage.getItem("activeGrid")) {
  localStorage.setItem("activeGrid", "main");
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
    const tileElement = document.createElement("div");
    tileElement.classList.add("item");

    //if blank, just add streight to grid and return
    if (tile.type === "blank") {
      gridSection.append(tileElement);
      return;
    }

    //if not blank, add what is common to all tiles
    tileElement.classList.add(tile.colour); //sets colour
    tileElement.id = tile.internalName;
    tileElement.innerHTML = tile.displayName;

    //then add conditional elements
    if (tile.type !== "textOnly") {
      tileElement.innerHTML += `<img class="icon" src="./resouces/icons/${tile.iconName}.png"></img>`;
    }

    if (tile.type === "textOnly") {
      tileElement.classList.add("largeText");
    }

    if (tile.linkTo) {
      tileElement.addEventListener("click", (ev) => {
        drawBoard(tile.linkTo);
      });
    }

    if (tile.type === "link") {
      tileElement.classList.add("linkItem");
    } else {
      //play sound and add to sentence
      tileElement.addEventListener("click", (ev) => {
        let word = tile.pronounciation ?? tile.displayName;
        if (synth.speaking || synth.pending) {
          synth.cancel();
        }

        sentenceShow.push(tile.displayName);
        sentenceSpeak.push(word);

        updateSentence();
        let utterance = new SpeechSynthesisUtterance(word);
        if (voice) utterance.voice = voice;
        synth.speak(utterance);
      });
    }

    gridSection.append(tileElement);
  });
}

function updateSentence() {
  sentenceDisplay.value = sentenceShow
    .join(" ")
    .replaceAll("⠀ ⠀", "")
    .replaceAll("⠀", "");
}

function speakSentence() {
  if (sentenceSpeak.length === 0) return;
  //numbers together will be spoken as a single number, e.g. "2 3 4" = "two hundred and thirty four"
  let cleanSentence = sentenceSpeak
    .join(" ")
    .replaceAll("⠀ ⠀", "")
    .replaceAll("⠀", "");

  let utterance = new SpeechSynthesisUtterance(cleanSentence);
  utterance.onend = () => clearSentence();
  if (voice) utterance.voice = voice;
  synth.speak(utterance);
}

function clearSentence() {
  synth.cancel();
  sentenceSpeak.length = 0;
  sentenceShow.length = 0;
  updateSentence();
}

function switchGrids() {
  if (localStorage.getItem("activeGrid") === "main") {
    localStorage.setItem("activeGrid", "simple");
  } else localStorage.setItem("activeGrid", "main");

  drawBoard(localStorage.getItem("activeGrid"));
}

playButton.addEventListener("click", (_ev) => speakSentence());
clearButton.addEventListener("click", (_ev) => clearSentence());
swapButton.addEventListener("click", (_ev) => switchGrids());

/// speech stuff
function populateVoiceList() {
  // setTimeout(() => {
  //   console.log("Get voices")
  //   voices = synth.getVoices().sort(function (a, b) {
  //     const aname = a.lang.toUpperCase(),
  //       bname = b.lang.toUpperCase();
  //     if (aname < bname) return -1;
  //     else if (aname == bname) return 0;
  //     else return +1;
  //   }).filter(voice => voice.lang === "en-GB" || voice.lang === "en-US");
  // let selectedIndex = voiceSelect.selectedIndex < 0 ? 0 : voiceSelect.selectedIndex;
  // voiceSelect.innerHTML = '';
  // for (let i = 0; i < voices.length; i++) {
  //   let option = document.createElement('option');
  //   option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
  //   if (voices[i].default) {
  //     option.textContent += ' -- DEFAULT';
  //   }
  //   option.setAttribute('data-lang', voices[i].lang);
  //   option.setAttribute('data-name', voices[i].name);
  //   voiceSelect.appendChild(option);
  // }
  // voiceSelect.selectedIndex = selectedIndex;
  // selectedVoiceIndex = selectedIndex
  // }, 1000);
}

voiceSelect.onchange = () => {
  voice = voices[voiceSelect.selectedIndex];
};

drawBoard(localStorage.getItem("activeGrid"));
populateVoiceList();
