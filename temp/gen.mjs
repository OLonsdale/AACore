import fetch from 'node-fetch'
import https from "https"
import fs from "fs"

async function getID(word){

  let url = `https://freetts.com/Home/PlayAudio?Language=en-GB&Voice=en-GB-Standard-A&TextMessage=${word}&type=0`
  
  let data = await fetch(url)
  data = await data.json()
  const id = await data.id
  
}

// [word,colour],[word,colour] ["sleep","green"],["rave","blue"],["repeat","pink"]
let words = [
  ["testing", "red"],
]

for (let i = 0; i < words.length; i++) {
  const set = words[i];
  
  let id = await getID(set[0])
  let url2 = `https://freetts.com/audio/${id}`
  console.log(url2)
  const file = fs.createWriteStream(`${set[0]}.mp3`)

  const request = https.get(url2, function (response) {
    response.pipe(file);
    // after download completed close filestream
    file.on("finish", () => {
      file.close()
      console.log("Download Completed")
    })
  })


  // text = `
  // <audio id="${set[0]}Clip" src="./resouces/clips/${set[0]}.mp3"></audio>
  // <button id="${set[0]}" class="item ${set[1]}" aria-label="${set[0]}">
  //   ${set[0]}<img class="icon-small" src="./resouces/icons/${set[0]}.png" />
  // </button>`
  // console.log(text)
};