// let pageLocked = false
let sentence = []
// let sentenceText = []
// let lockSentence = false

let boards = [
  { // LITTLE
    name: "board0",
    columns: 6,
    sub: false,
    tiles: [
      ["want", "green"],  ["more", "blue"], ["not", "grey"],      ["go", "green"],  ["help", "green"], ["look", "green"],
      ["play", "green"],  ["same", "blue"], ["different", "blue"],["what", "pink"], ["like", "green"], ["stop", "green"],
      ["drink", "green"], ["eat", "green"], ["turn", "grey"],     ["up", "red"],    ["down", "red"],   ["finish", "green"],
    ]
  },
  { // MAIN
    name: "board1",
    columns: 9,
    sub: false,
    master: true,
    links: [["Toys",2],["Learn",3],["Topic",4],["Body",5],["Home",6],["Food",7],["Drinks",8],["People",9],["Feelings",10]],
    tiles: [
      ["I","yellow"],   ["want","green"], ["more","blue"],   ["not","grey"],      ["go","green"],   ["help","green"], ["look","green"],   ["need","green"], ["have","green"],
      ["you","yellow"], ["play","green"], ["same","blue"],   ["different","blue"],["what","pink"],  ["like","green"], ["stop","green"],   ["where","pink"], ["in","red"],
      ["he","yellow"],  ["eat","green"],  ["drink","green"], ["turn","green"],    ["up","red"],     ["down","red"],   ["finish","green"], ["who","pink"],   ["on","red"],
      ["she","yellow"], ["do","green"],   ["loud","blue"],   ["quiet","blue"],    ["fast","blue"],  ["slow","blue"],  ["funny","blue"],   ["talk","green"], ["off","red"],
      ["it","yellow"],  ["put","green"],  ["make","green"],  ["feel","green"],    ["think","green"],["is","green"],   ["close","green"],  ["open","green"], ["here","grey"],
    ]
  },
  { // TOYS
    name: "board2",
    columns: 9,
    sub: true,
    source: 1,
    master: false,
    tiles: [
      ["toy","grey"],["game","grey"],["-","-"],["-","-"],["-","-"],["computer","grey"],["tablet","grey"],["phone","grey"], //one missing here for back button
      ["ball","grey"],["bubbles","grey"],["balloon","grey"],["blocks","grey"],["foam","grey"],["spinner","grey"],["yo-yo","grey"],["stretch bands","grey"],["wind up","grey"],
      ["jigsaw","grey"],["mr potato","grey"],["dice","grey"],["doll","grey"],["teddy","grey"],["board game","grey"],["book","grey"],["-","-"],["-","-"],
      ["sing","green"],["music","grey"],["dance","green"],["clap","green"],["tickle","green"],["push","green"],["climb","green"],["read","green"],["-","-"],
      ["sand pit","grey"],["water tray","grey"],["swing","grey"],["slide","grey"],["roundabout","grey"],["seesaw","grey"],["ladder","grey"],["-","-"],["-","-"],
      ["bike","grey"],["scooter","grey"],["-","-"],["-","-"],["-","-"],["-","-"],["-","-"],["-","-"],["-","-"],
    ]
  },
  { // LEARN
    name: "board3",
    columns: 9,
    sub: true,
    source: 1,
    master: false,
    tiles: [
    /*[back]*/ ["0","grey"],["add","grey"],["minus","grey"],["divide","grey"],["times","grey"],["equals","grey"],["-","-"],["count","grey"],
      ["1","grey"],["2","grey"],["3","grey"],["4","grey"],["5","grey"],["6","grey"],["7","grey"],["8","grey"],["9","grey"],
      ["learn","green"],["cut","green"],["colour","green"],["paint","green"],["-","-"],["-","-"],["-","-"],["-","-"],["-","-"],
      ["red","red"],["orange","red"],["yellow","red"],["green","red"],["blue","red"],["purple","red"],["pink","red"],["black","red"],["brown","red"],
      ["stripes","red"],["dots","red"],["-","-"],["-","-"],["-","-"],["-","-"],["-","-"],["-","-"],["grey","red"],
      ["pen","grey"],["pencil","grey"],["scissors","grey"],["sharpener","grey"],["ruler","grey"],["glitter","grey"],["light","grey"],["-","-"],["dark","grey"],
    ]
  },
  { // TOPIC
    name: "board4",
    columns: 9,
    sub: true,
    source: 1,
    master: false,
    tiles: [
    /*[back]*/ ["animal","grey"],["pet","grey"],["zoo","grey"],["farm","grey"],["wild","grey"],["fluffy","pink"],["scally","pink"],["big","pink"], 
      ["cat","grey"],["dog","grey"],["rabbit","grey"],["hamster","grey"],["lizard","grey"],["tortoise","grey"],["snake","grey"],["bird","grey"],["-","-"],
      ["cow","grey"],["sheep","grey"],["chicken","grey"],["horse","grey"],["pig","grey"],["elephant","grey"],["spider","grey"],["bug","grey"],["small","pink"],
      ["car","grey"],["bus","grey"],["train","grey"],["moterbike","grey"],["plane","grey"],["helicopter","grey"],["-","-"],["paw","grey"],["tail","grey"],
      ["-","-"],["-","-"],["-","-"],["-","-"],["-","-"],["-","-"],["-","-"],["claw","grey"],["-","-"],
      ["wheel","grey"],["-","-"],["left","pink"],["-","-"],["right","pink"],["-","-"],["drive","green"],["fly","green"],["ride","green"],
    ]
  },
  { // BODY
    name: "board5",
    columns: 9,
    sub: true,
    source: 1,
    master: false,
    tiles: [
    /*[back]*/ ["body","grey"],["poo","grey"],["wee","grey"],["hurt","grey"],["blood","grey"],["itch","grey"],["broken","grey"],["bruise","grey"], 
      ["-","-"],["-","-"],["nappy","grey"],["-","-"],["-","-"],["-","-"],["-","-"],["-","-"],["-","-"],
      ["finger","grey"],["hand","grey"],["arm","grey"],["elbow","grey"],["tummy","grey"],["private parts","grey"],["eye","grey"],["nose","grey"],["mouth","grey"],
      ["toe","grey"],["foot","grey"],["leg","grey"],["knee","grey"],["chest","grey"],["head","grey"],["ear","grey"],["hair","grey"],["tooth","grey"],
      ["pants","grey"],["socks","grey"],["shoe","grey"],["trousers","grey"],["shorts","grey"],["shirt","grey"],["skirt","grey"],["tights","grey"],["jumper","grey"],
      ["-","-"],["zip","grey"],["button","grey"],["lace","grey"],["velcro","grey"],["-","-"],["-","-"],["coat","grey"],["-","-"],
    ]
  },
  { // HOME
    name: "board5",
    columns: 9,
    sub: true,
    source: 1,
    master: false,
    tiles: [
    /*[back]*/ ["school","blue"],["home","blue"],["park","blue"],["swimming pool","blue"],["restaurant","blue"],["shop","blue"],["outside","grey"],["weather","pink"], 
      ["toilet","blue"],["kitchen","blue"],["living room","blue"],["bedroom","blue"],["bathroom","blue"],["dining room","blue"],["stairs","blue"],["garden","blue"],["rain","grey"],
      ["cooker","grey"],["soap","grey"],["chair","grey"],["bed","grey"],["swim","green"],["table","grey"],["buy","green"],["window","grey"],["sun","grey"],
      ["cook","green"],["sponge","grey"],["sofa","grey"],["sleep","green"],["bath","grey"],["cutlery","grey"],["more","grey"],["door","grey"],["cloud","grey"],
      ["-","-"],["towel","grey"],["TV","grey"],["-","-"],["sink","grey"],["dish","grey"],["-","-"],["-","-"],["mud","grey"],
      ["-","-"],["wash","green"],["sit","green"],["-","-"],["shower","grey"],["-","-"],["hot","pink"],["cold","pink"],["snow","grey"],
    ]
  },
]

// Toys, Learn, Topic, Body, Home, Food, Drinks, People, Feelings

const synth = window.speechSynthesis

function drawBoard(index) {
  const gridSection = document.getElementById("gridSection")
  const board = boards[index]

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

  //add row of links
  if (board.master) {
    board.links.forEach(link => {
      const button = document.createElement("button")
      button.innerHTML = link[0]
      button.classList.add("item")
      button.addEventListener("click", _ev => {
        drawBoard(link[1])
      })
      gridSection.append(button)
    })
  }

  //add back button
  if (board.sub) {
    const button = document.createElement("button")
    button.innerHTML = "Back"
    button.classList.add("item")
    button.addEventListener("click", _ev => drawBoard(board.source))
    gridSection.append(button)
  }

  board.tiles.forEach(tile => {

    //add blank tiles
    if (tile[0] === "-") {
      blank = document.createElement("div")
      blank.classList.add("item")
      gridSection.append(blank)
      return //acts as continue
    }

    //create button
    const button = document.createElement("button")
    button.classList.add("item")
    button.classList.add(tile[1]) //sets colour
    button.id = tile[0].replace(" ", "-")
    button.innerHTML = tile[0] + `<img class="icon" src="./resouces/icons/${tile[0]}.png"></img>`

    //play sound and add to sentence
    button.addEventListener("click", ev => {
      let name = tile[0]
      if (synth.speaking || synth.pending) { synth.cancel() }
      sentence.push(name)

      updateSentence()
      synth.speak(new SpeechSynthesisUtterance(name))
    })

    //navigate back to main page
    if(board.sub === true){
      button.addEventListener("click", ev => {
        drawBoard(board.source)
      })
    }

    gridSection.append(button)
  })

}

function updateSentence() {
  sentenceDisplay.value = sentence.join(" ")
}

function speakSentence() {
  if (sentence.length === 0) return
  let utterance = new SpeechSynthesisUtterance(sentence.join(" "))
  utterance.onend = () => clearSentence()
  synth.speak(utterance)

}

function clearSentence() {
  synth.cancel()
  sentence = []
  updateSentence()
}

playButton.addEventListener("click", _ev => speakSentence())
clearButton.addEventListener("click", _ev => clearSentence())


// lockButton.addEventListener("click", ev => {
//   let password
//   if (pageLocked) {
//     pageLocked = !pageLocked
//     lockButton.innerHTML = '<img class="lockIcon" src="./resouces/unlocked.png">'
//   } else {
//     pageLocked = !pageLocked
//     lockButton.innerHTML = '<img class="lockIcon" src="./resouces/locked.png">'
//   }
// })


drawBoard(1)