import pkg from './public/board-sets/expanded.js';
const { expanded } = pkg;

// import { initial } from "./public/board-sets/initial.js";
// import { standard } from "./public/board-sets/standard.js";
// import { expanded } from "./public/board-sets/expanded.js";

// let input = {
//   ...initial,
//   ...standard,
//   ...expanded,
// }

// input.tiles.forEach(tile => {
//   if(!tile.linkTo && (tile.type !== "blank" || tile.type !== "link")){
//     tile.linkTo = "expanded"
//   }
// })
// console.log(JSON.stringify(input))

let tiles = expanded.flatMap(board => {
  board.tiles
})

console.log(tiles)