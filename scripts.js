let pageLocked = false
let sentence = []
let sentenceText = []
let lockSentence = false

document.querySelectorAll(".item").forEach( button => {
  button.addEventListener("click", ev => {
    let name = ""
    if(ev.target.nodeName === 'BUTTON'){
      name = ev.target.id
    }
    else if (ev.target.nodeName === 'IMG'){
      name = ev.path[1].id
    }
    document.getElementById(`${name}Clip`).play()
    sentence.push(document.getElementById(`${name}Clip`))
    sentenceText.push(name)
    sentenceDisplay.value = sentenceText.join(" ")
  })
})

lockButton.addEventListener("click",ev => {
  let password 
  if(pageLocked){
    pageLocked = !pageLocked
    lockButton.innerHTML = '<img class="lockIcon" src="./resouces/unlocked.png">'
  } else {
    pageLocked = !pageLocked
    lockButton.innerHTML = '<img class="lockIcon" src="./resouces/locked.png">'
  } 
})

document.getElementById("clearButton").addEventListener("click", ev=> {
  sentence = []
  sentenceText = []
  sentenceDisplay.value = sentenceText.join(" ")
})

document.getElementById("playButton").addEventListener("click", ev=> {
  playSentence()
})

async function playSentence(i = 0, recurse = false){
  if(lockSentence && !recurse) return
  lockSentence = true
  if(i == sentence.length){
    lockSentence = false
    sentence = []
    sentenceText = []
    sentenceDisplay.value = sentenceText.join(" ")
    return
  }
  sentence[i].play()
  //seconds -> ms -> plus gap between words
  let timeout = sentence[i].duration * 1000 + 100
  i++
  setTimeout(() => {playSentence(i, true)}, timeout)
}

document.getElementById("boardOne").addEventListener("click", ev => {
  console.log("here")
  if(!pageLocked){
    window.location = "./index.html"
  }
})

document.getElementById("boardTwo").addEventListener("click", ev => {
  console.log("here")
  if(!pageLocked){
    window.location = "./board2.html"
  }
})