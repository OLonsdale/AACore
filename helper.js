let input = {
  "rows": 6,
  "columns": 9,
  "tiles": [
    {
      "type": "link",
      "displayName": "back",
      "colour": "linkColour"
    },
    {
      "type": "blank"
    },
    {
      "type": "link",
      "displayName": "toy",
      "iconName": "toys",
      "colour": "linkColour"
    },
    {
      "type": "link",
      "displayName": "game",
      "iconName": "game",
      "colour": "linkColour"
    },
    {
      "type": "link",
      "displayName": "sport",
      "iconName": "sport",
      "colour": "linkColour",
      "iconLink": "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/sport.png"
    },
    {
      "type": "link",
      "displayName": "music",
      "iconLink": "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/instruments.png",
      "colour": "linkColour"
    },
    {
      "type": "textAndIcon",
      "displayName": "story",
      "iconLink": "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/reading_1.png.varianted-skin.png",
      "colour": "linkColour"
    },
    {
      "type": "link",
      "displayName": "playground",
      "iconLink": "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/park.png",
      "colour": "linkColour"
    },
    {
      "type": "link",
      "displayName": "electeic",
      "iconLink": "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/technology.png",
      "colour": "linkColour"
    },
    {
      "type": "blank"
    },
    {
      "type": "blank"
    },
    {
      "type": "blank"
    },
    {
      "type": "blank"
    },
    {
      "type": "blank"
    },
    {
      "type": "blank"
    },
    {
      "type": "blank"
    },
    {
      "type": "blank"
    },
    {
      "type": "blank"
    },
    {
      "type": "blank"
    },
    {
      "type": "blank"
    },
    {
      "type": "blank"
    },
    {
      "type": "blank"
    },
    {
      "type": "blank"
    },
    {
      "type": "blank"
    },
    {
      "type": "blank"
    },
    {
      "type": "blank"
    },
    {
      "type": "blank"
    },
    {
      "type": "textAndIcon",
      "displayName": "sing",
      "pastTenseForm": "sang",
      "pluralForm": "sings",
      "iconName": "sing",
      "colour": "green"
    },
    {
      "type": "textAndIcon",
      "displayName": "music",
      "iconName": "music",
      "colour": "orange"
    },
    {
      "type": "textAndIcon",
      "displayName": "dance",
      "pastTenseForm": "danced",
      "pluralForm": "dances",
      "iconName": "dance",
      "colour": "green"
    },
    {
      "type": "textAndIcon",
      "displayName": "clap",
      "pastTenseForm": "clapped",
      "pluralForm": "claps",
      "colour": "green",
      "iconName": "clap"
    },
    {
      "type": "textAndIcon",
      "displayName": "tickle",
      "pastTenseForm": "tickled",
      "pluralForm": "tickles",
      "iconName": "tickle",
      "colour": "green"
    },
    {
      "type": "textAndIcon",
      "displayName": "push",
      "pastTenseForm": "pushed",
      "pluralForm": "Pushes",
      "iconName": "push",
      "colour": "green"
    },
    {
      "type": "textAndIcon",
      "displayName": "climb",
      "pastTenseForm": "climbed",
      "pluralForm": "climbing",
      "iconName": "climb",
      "colour": "green"
    },
    {
      "type": "textAndIcon",
      "displayName": "read",
      "pastTenseForm": "read",
      "pastTensePronounciation": "red",
      "pluralForm": "reads",
      "iconName": "read",
      "colour": "green"
    },
    {
      "type": "textAndIcon",
      "displayName": "book",
      "pluralForm": "books",
      "iconName": "book",
      "colour": "orange"
    },
    {
      "type": "textAndIcon",
      "displayName": "catch",
      "pastTenseForm": "caught",
      "pluralForm": "catches",
      "iconName": "catch",
      "colour": "green"
    },
    {
      "type": "textAndIcon",
      "displayName": "throw",
      "pastTenseForm": "threw",
      "pluralForm": "throws",
      "iconName": "throw",
      "colour": "green"
    },
    {
      "type": "textAndIcon",
      "displayName": "kick",
      "pastTenseForm": "kicked",
      "pluralForm": "kicks",
      "iconName": "kick",
      "colour": "green"
    },
    {
      "type": "textAndIcon",
      "displayName": "roll",
      "pastTenseForm": "rolled",
      "pluralForm": "rolls",
      "iconName": "rolls",
      "colour": "green"
    },
    {
      "type": "blank"
    },
    {
      "type": "textAndIcon",
      "displayName": "pull",
      "pastTenseForm": "Pulled",
      "pluralForm": "Pulls",
      "iconName": "pull",
      "colour": "green"
    },
    {
      "type": "blank"
    },
    {
      "type": "blank"
    },
    {
      "type": "blank"
    },
    {
      "type": "blank"
    },
    {
      "type": "blank"
    },
    {
      "type": "blank"
    },
    {
      "type": "blank"
    },
    {
      "type": "blank"
    },
    {
      "type": "blank"
    },
    {
      "type": "blank"
    },
    {
      "type": "blank"
    },
    {
      "type": "blank"
    }
  ],
  "topLevel": true
}

input.tiles.forEach(tile => {
  if(!tile.linkTo && (tile.type !== "blank" || tile.type !== "link")){
    tile.linkTo = "expanded"
  }
})

console.log(JSON.stringify(input))