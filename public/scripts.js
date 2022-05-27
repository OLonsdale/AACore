"use strict"

import {boards} from "./boards.js"

// Toys, Learn, Topic, Body, Home, Food, Drinks, People, Feelings

const sentence = []
const synth = window.speechSynthesis

let voiceSelect = document.getElementById("voicesSelect");
let voices = []
let voice
let selectedVoiceIndex

//set 
if (!localStorage.getItem("activeGrid")) {
  localStorage.setItem("activeGrid", "main")
}


function drawBoard(name) {
  const gridSection = document.getElementById("gridSection")
  const board = boards[name]

  //clear existing
  gridSection.replaceChildren();

  //set grid size
  if (board.columns === 6) {
    gridSection.classList.add("six-cols")
    gridSection.classList.remove("nine-cols")
  } else if (board.columns === 9) {
    gridSection.classList.add("nine-cols")
    gridSection.classList.remove("six-cols")
  }

  board.tiles.forEach(tile => {

    //create button
    const tileElement = document.createElement("div")
    tileElement.classList.add("item")

    if( tile.type === "blank") {
      
    }

    else if ( tile.type === "link") {
      tileElement.classList.add("linkItem")
      tileElement.classList.add(tile.colour) //sets colour
      tileElement.id = tile.displayName.replaceAll(" ","")
      tileElement.innerHTML = tile.displayName + `<img class="icon" src="./resouces/icons/${tile.iconName}.png"></img>`

      tileElement.addEventListener("click", ev => {
        drawBoard(tile.linkTo)
      })

    }

    else if (tile.type === "textOnly"){
      tileElement.classList.add("item")
      tileElement.classList.add("largeText")
      tileElement.classList.add(tile.colour) //sets colour
      tileElement.id = tile.displayName.replaceAll(" ","")
      tileElement.innerHTML = tile.displayName
      //play sound and add to sentence
      tileElement.addEventListener("click", ev => {
      let name = tile.pronounciation ?? tile.displayName
      if (synth.speaking || synth.pending) {
        synth.cancel()
      }
      sentence.push(name)
      
      updateSentence()
      let utterance = new SpeechSynthesisUtterance(name)
      if(voice) utterance.voice = voice
      synth.speak(utterance)
    })
    
  }

  else {

    tileElement.classList.add("item")
    tileElement.classList.add(tile.colour) //sets colour
    tileElement.id = tile.displayName.replaceAll(" ","")
    tileElement.innerHTML = tile.displayName + `<img class="icon" src="./resouces/icons/${tile.iconName}.png"></img>`
      
    //play sound and add to sentence
    tileElement.addEventListener("click", ev => {
    let name = tile.pronounciation ?? tile.displayName
    if (synth.speaking || synth.pending) {
      synth.cancel()
    }
    sentence.push(name)
    
    updateSentence()
    let utterance = new SpeechSynthesisUtterance(name)
    if(voice) utterance.voice = voice
    synth.speak(utterance)
  })
  
}

    gridSection.append(tileElement)
  })
}

function updateSentence() {
  sentenceDisplay.value = sentence.join(" ").replaceAll("⠀ ⠀", "").replaceAll("⠀", "")
}

function speakSentence() {
  if (sentence.length === 0) return
  //numbers together will be spoken as a single number, e.g. "2 3 4" = "two hundred and thirty four"
  let cleanSentence = sentence.join(" ").replaceAll("⠀ ⠀", "").replaceAll("⠀", "")

  let utterance = new SpeechSynthesisUtterance(cleanSentence)
  utterance.onend = () => clearSentence()
  if(voice) utterance.voice = voice
  synth.speak(utterance)

}

function clearSentence() {
  synth.cancel()
  sentence.length = 0
  updateSentence()
}

function switchGrids() {
  if (localStorage.getItem("activeGrid") === "0") {
    localStorage.setItem("activeGrid", 1)
  } else localStorage.setItem("activeGrid", 0)

  drawBoard(localStorage.getItem("activeGrid"))
}

playButton.addEventListener("click", _ev => speakSentence())
clearButton.addEventListener("click", _ev => clearSentence())
swapButton.addEventListener("click", _ev => switchGrids())

drawBoard(localStorage.getItem("activeGrid"))

/// speech stuff
function populateVoiceList() {

  setTimeout(() => {
    console.log("Get voices")
    voices = synth.getVoices().sort(function (a, b) {
      const aname = a.name.toUpperCase(),
        bname = b.name.toUpperCase();
      if (aname < bname) return -1;
      else if (aname == bname) return 0;
      else return +1;
    });
  

  let selectedIndex = voiceSelect.selectedIndex < 0 ? 0 : voiceSelect.selectedIndex;
  voiceSelect.innerHTML = '';
  for (let i = 0; i < voices.length; i++) {
    let option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if (voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
  voiceSelect.selectedIndex = selectedIndex;
  selectedVoiceIndex = selectedIndex
  }, 1000);
}

populateVoiceList();

voiceSelect.onchange = () => {
  voice = voices[voiceSelect.selectedIndex]
}