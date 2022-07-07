const expanded = {
  expanded: {
    name: "Expanded",
    topLevel: true,
    rows: 6,
    columns: 10,
    path: "expanded",
    tiles: [
      {
        type: "link",
        displayName: "Fun",
        iconName: "toys",
        linkTo: "expanded-fun",
        colour: "linkColour",
        internalName: "Toys",
      },
      {
        type: "link",
        displayName: "Learn",
        iconName: "learn",
        linkTo: "expanded-learn",
        colour: "linkColour",
        internalName: "Learn",
      },
      {
        type: "link",
        displayName: "Topic",
        iconName: "topic",
        linkTo: "expanded-topic",
        colour: "linkColour",
        internalName: "Topic",
      },
      {
        type: "link",
        displayName: "Body",
        iconName: "body",
        linkTo: "expanded-body",
        colour: "linkColour",
        internalName: "Body",
      },
      {
        type: "link",
        displayName: "Home[missing]",
        iconName: "home",

        colour: "linkColour",
        internalName: "Home",
      },
      {
        type: "link",
        displayName: "Food",
        iconName: "food",
        linkTo: "expanded-food",
        colour: "linkColour",
        internalName: "Food",
      },
      {
        type: "link",
        displayName: "Time[missing]",
        iconName: "time",

        colour: "linkColour",
        internalName: "Time",
      },
      {
        type: "link",
        displayName: "People[missing]",
        iconName: "people",

        colour: "linkColour",
        internalName: "People",
      },
      {
        type: "link",
        displayName: "Feelings[missing]",
        iconName: "feelings",

        colour: "linkColour",
        internalName: "Feelings",
      },
      {
        type: "link",
        displayName: "Grammar",
        iconName: "grammar",
        linkTo: "expanded-grammar",
        colour: "linkColour",
        internalName: "Grammar",
      },
      {
        type: "textAndIcon",
        displayName: "I",
        iconName: "i",
        colour: "yellow",
        pronounciation: "eye",
        internalName: "I",
        linkTo: "expanded-am",
      },
      {
        type: "textAndIcon",
        displayName: "want",
        pluralForm: "wants",
        pastTenseForm: "wanted",
        iconName: "want",
        colour: "green",
        internalName: "want",
      },
      {
        type: "textAndIcon",
        displayName: "more",
        iconName: "more",
        colour: "blue",
        internalName: "more",
      },
      {
        type: "textAndIcon",
        displayName: "not",
        iconName: "not",
        colour: "grey",
        internalName: "not",
      },
      {
        type: "textAndIcon",
        displayName: "go",
        pluralForm: "goes",
        pastTenseForm: "went",
        iconName: "go",
        colour: "green",
        internalName: "go",
      },
      {
        type: "textAndIcon",
        displayName: "help",
        pluralForm: "helps",
        pastTenseForm: "helped",
        iconName: "help",
        colour: "green",
        internalName: "help",
      },
      {
        type: "textAndIcon",
        displayName: "look",
        pluralForm: "looks",
        pastTenseForm: "looked",
        iconName: "look",
        colour: "green",
        internalName: "look",
      },
      {
        type: "textAndIcon",
        displayName: "need",
        pluralForm: "needs",
        pastTenseForm: "needed",
        iconName: "need",
        colour: "green",
        internalName: "need",
      },
      {
        type: "textAndIcon",
        displayName: "have",
        pluralForm: "has",
        pastTenseForm: "had",
        negativeForm: "haven't",
        iconName: "have",
        colour: "green",
        internalName: "have",
      },
      {
        type: "grammarMarker",
        displayName: "",
        iconName: "plural",
        colour: "grammarMarkerColour",
        internalName: "plural",
      },
      {
        type: "textAndIcon",
        displayName: "you",
        iconName: "you",
        colour: "yellow",
        internalName: "you",
      },
      {
        type: "textAndIcon",
        displayName: "play",
        pluralForm: "plays",
        pastTenseForm: "played",
        iconName: "play",
        colour: "green",
        internalName: "play",
      },
      {
        type: "textAndIcon",
        displayName: "same",
        iconName: "same",
        colour: "blue",
        internalName: "same",
      },
      {
        type: "textAndIcon",
        displayName: "different",
        iconName: "different",
        colour: "blue",
        internalName: "different",
      },
      {
        type: "textAndIcon",
        displayName: "what",
        pluralForm: "what's",
        iconName: "what",
        colour: "pink",
        internalName: "what",
      },
      {
        type: "textAndIcon",
        displayName: "like",
        iconName: "like",
        pluralForm: "likes",
        pastTenseForm: "liked",
        colour: "green",
        internalName: "like",
      },
      {
        type: "textAndIcon",
        displayName: "stop",
        pluralForm: "stops",
        pastTenseForm: "stopped",
        iconName: "stop",
        colour: "green",
        internalName: "stop",
      },
      {
        type: "textAndIcon",
        displayName: "where",
        pluralForm: "where's",
        iconName: "where",
        colour: "pink",
        internalName: "where",
      },
      {
        type: "textAndIcon",
        displayName: "in",
        iconName: "in",
        colour: "red",
        internalName: "in",
      },
      {
        type: "grammarMarker",
        displayName: "past",
        iconName: "past",
        colour: "grammarMarkerColour",
        internalName: "past",
      },
      {
        type: "textAndIcon",
        displayName: "he",
        iconName: "he",
        colour: "yellow",
        internalName: "he",
      },
      {
        type: "textAndIcon",
        displayName: "eat",
        pluralForm: "eats",
        pastTenseForm: "ate",
        iconName: "eat",
        colour: "green",
        internalName: "eat",
      },
      {
        type: "textAndIcon",
        displayName: "drink",
        pluralForm: "drinks",
        pastTenseForm: "drank",
        iconName: "drink",
        colour: "green",
        internalName: "drink",
      },
      {
        type: "textAndIcon",
        displayName: "turn",
        pluralForm: "turns",
        pastTenseForm: "turned",
        iconName: "turn",
        colour: "green",
        internalName: "turn",
      },
      {
        type: "textAndIcon",
        displayName: "up",
        iconName: "up",
        colour: "red",
        internalName: "up",
      },
      {
        type: "textAndIcon",
        displayName: "down",
        iconName: "down",
        colour: "red",
        internalName: "down",
      },
      {
        type: "textAndIcon",
        displayName: "finish",
        pluralForm: "finishes",
        pastTenseForm: "finished",
        iconName: "finish",
        colour: "green",
        internalName: "finish",
      },
      {
        type: "textAndIcon",
        displayName: "who",
        pluralForm: "who's",
        iconName: "who",
        colour: "pink",
        internalName: "who",
      },
      {
        type: "textAndIcon",
        displayName: "on",
        iconName: "on",
        colour: "red",
        internalName: "on",
      },
      {
        type: "grammarMarker",
        displayName: "negation",
        iconName: "negation",
        colour: "grammarMarkerColour",
        internalName: "negation",
      },
      {
        type: "textAndIcon",
        displayName: "she",
        iconName: "she",
        colour: "yellow",
        internalName: "she",
      },
      {
        type: "textAndIcon",
        displayName: "do",
        pluralForm: "does",
        pastTenseForm: "did",
        negativeForm: "don't",
        iconName: "do",
        colour: "green",
        internalName: "do",
      },
      {
        type: "textAndIcon",
        displayName: "loud",
        iconName: "loud",
        colour: "blue",
        internalName: "loud",
      },
      {
        type: "textAndIcon",
        displayName: "quiet",
        iconName: "quiet",
        colour: "blue",
        internalName: "quiet",
      },
      {
        type: "textAndIcon",
        displayName: "fast",
        iconName: "fast",
        colour: "blue",
        internalName: "fast",
      },
      {
        type: "textAndIcon",
        displayName: "slow",
        iconName: "slow",
        colour: "blue",
        internalName: "slow",
      },
      {
        type: "textAndIcon",
        displayName: "funny",
        iconName: "funny",
        colour: "blue",
        internalName: "funny",
      },
      {
        type: "textAndIcon",
        displayName: "talk",
        pluralForm: "talks",
        pastTenseForm: "talked",
        iconName: "talk",
        colour: "green",
        internalName: "talk",
      },
      {
        type: "textAndIcon",
        displayName: "off",
        iconName: "off",
        colour: "red",
        internalName: "off",
      },
      {
        type: "textOnly",
        displayName: "to",
        colour: "grey",
        internalName: "to",
      },
      {
        type: "textAndIcon",
        displayName: "it",
        iconName: "it",
        colour: "yellow",
        internalName: "it",
      },
      {
        type: "textAndIcon",
        displayName: "put",
        pluralForm: "puts",
        iconName: "put",
        colour: "green",
        internalName: "put",
      },
      {
        type: "textAndIcon",
        displayName: "make",
        pluralForm: "makes",
        pastTenseForm: "made",
        iconName: "make",
        colour: "green",
        internalName: "make",
      },
      {
        type: "textAndIcon",
        displayName: "feel",
        pluralForm: "feels",
        pastTenseForm: "felt",
        iconName: "feel",
        colour: "green",
        internalName: "feel",
      },
      {
        type: "textAndIcon",
        displayName: "think",
        pluralForm: "thinks",
        pastTenseForm: "thought",
        iconName: "think",
        colour: "green",
        internalName: "think",
      },
      {
        type: "textOnly",
        displayName: "is",
        pastTenseForm: "was",
        negativeForm: "isn't",
        colour: "green",
        internalName: "is",
      },
      {
        type: "textAndIcon",
        displayName: "close",
        pluralForm: "closes",
        pastTenseForm: "closed",
        iconName: "close",
        colour: "green",
        internalName: "close",
      },
      {
        type: "textAndIcon",
        displayName: "open",
        pluralForm: "opens",
        pastTenseForm: "opened",
        iconName: "open",
        colour: "green",
        internalName: "open",
      },
      {
        type: "textAndIcon",
        displayName: "here",
        pluralForm: "here's",
        iconName: "here",
        colour: "grey",
        internalName: "here",
      },
      {
        type: "textAndIcon",
        displayName: "will",
        iconName: "future",
        colour: "grey",
        internalName: "will",
      },
    ],
  },

  "tts-keyboard": {
    name: "Text to Speech Keyboard",
    topLevel: true,
    rows: 6,
    columns: 11,
    path: "Text to Speech Keyboard",
    tiles: [
      {
        "type": "blank"
      },
      {
        "type": "blank"
      },
      {
        "type": "textAndIcon",
        "displayName": "spell",
        "iconLink": "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/to%20cast%20a%20spell%20on.png.varianted-skin.png",
        "colour": "green"
      },
      {
        "type": "textOnly",
        "displayName": "word",
        "colour": "orange"
      },
      {
        "type": "textAndIcon",
        "displayName": "letter",
        "iconLink": "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/a%20-%20lower%20case.svg",
        "colour": "orange"
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
        "displayName": "wait",
        "iconLink": "https://d18vdu4p71yql0.cloudfront.net/libraries/noun-project/Stop-ccf3903bc3.svg",
        "colour": "pink"
      },
      {
        "type": "textAndIcon",
        "displayName": "help me",
        "iconLink": "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/to%20help_1.png.variant-medium-dark.png",
        "colour": "pink"
      },
      {
        "type": "textAndIcon",
        "displayName": "stop that",
        "iconLink": "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/stop_4.png",
        "colour": "pink"
      },
      {
        type: "textOnly",
        displayName: "⠀0⠀",
        colour: "grey",
      },
      {
        type: "textOnly",
        displayName: "⠀1⠀",
        colour: "grey",
      },
      {
        type: "textOnly",
        displayName: "⠀2⠀",
        colour: "grey",
      },
      {
        type: "textOnly",
        displayName: "⠀3⠀",
        colour: "grey",
      },
      {
        type: "textOnly",
        displayName: "⠀4⠀",
        colour: "grey",
      },
      {
        type: "textOnly",
        displayName: "⠀5⠀",
        colour: "grey",
      },
      {
        type: "textOnly",
        displayName: "⠀6⠀",
        colour: "grey",
      },
      {
        type: "textOnly",
        displayName: "⠀7⠀",
        colour: "grey",
      },
      {
        type: "textOnly",
        displayName: "⠀8⠀",
        colour: "grey",
      },
      {
        type: "textOnly",
        displayName: "⠀9⠀",
        colour: "grey",
      },
      { type: "blank" },
      { type: "textOnly", displayName: "⠀q⠀", colour: "white" },
      { type: "textOnly", displayName: "⠀w⠀", colour: "white" },
      { type: "textOnly", displayName: "⠀e⠀", colour: "white" },
      { type: "textOnly", displayName: "⠀r⠀", colour: "white" },
      { type: "textOnly", displayName: "⠀t⠀", colour: "white" },
      { type: "textOnly", displayName: "⠀y⠀", colour: "white" },
      { type: "textOnly", displayName: "⠀u⠀", colour: "white" },
      { type: "textOnly", displayName: "⠀i⠀", colour: "white" },
      { type: "textOnly", displayName: "⠀o⠀", colour: "white" },
      { type: "textOnly", displayName: "⠀p⠀", colour: "white" },
      { type: "blank" },
      { type: "textOnly", displayName: "⠀a⠀", colour: "white" },
      { type: "textOnly", displayName: "⠀s⠀", colour: "white" },
      { type: "textOnly", displayName: "⠀d⠀", colour: "white" },
      { type: "textOnly", displayName: "⠀f⠀", colour: "white" },
      { type: "textOnly", displayName: "⠀g⠀", colour: "white" },
      { type: "textOnly", displayName: "⠀h⠀", colour: "white" },
      { type: "textOnly", displayName: "⠀j⠀", colour: "white" },
      { type: "textOnly", displayName: "⠀k⠀", colour: "white" },
      { type: "textOnly", displayName: "⠀l⠀", colour: "white" },
      { type: "blank" },
      { type: "blank" },
      { type: "textOnly", displayName: "⠀z⠀", colour: "white" },
      { type: "textOnly", displayName: "⠀x⠀", colour: "white" },
      { type: "textOnly", displayName: "⠀c⠀", colour: "white" },
      { type: "textOnly", displayName: "⠀v⠀", colour: "white" },
      { type: "textOnly", displayName: "⠀b⠀", colour: "white" },
      { type: "textOnly", displayName: "⠀n⠀", colour: "white" },
      { type: "textOnly", displayName: "⠀m⠀", colour: "white" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "⠀ ⠀",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/astronaut.png",
        iconName: "space",
        colour: "grey",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
    ],
  },

  "expanded-am": {
    rows: 6,
    columns: 10,
    path: "expanded ⇾ I",
    tiles: [
      {
        type: "link",
        displayName: "Fun",
        iconName: "toys",
        linkTo: "expanded-fun",
        colour: "linkColour",
        internalName: "Fun",
      },
      {
        type: "link",
        displayName: "Learn",
        iconName: "learn",
        linkTo: "expanded-learn",
        colour: "linkColour",
        internalName: "Learn",
      },
      {
        type: "link",
        displayName: "Topic",
        iconName: "topic",
        linkTo: "expanded-topic",
        colour: "linkColour",
        internalName: "Topic",
      },
      {
        type: "link",
        displayName: "Body",
        iconName: "body",
        linkTo: "expanded-body",
        colour: "linkColour",
        internalName: "Body",
      },
      {
        type: "link",
        displayName: "Home[missing]",
        iconName: "home",

        colour: "linkColour",
        internalName: "Home",
      },
      {
        type: "link",
        displayName: "Food",
        iconName: "food",
        linkTo: "expanded-food",
        colour: "linkColour",
        internalName: "Food",
      },
      {
        type: "link",
        displayName: "Time[missing]",
        iconName: "time",

        colour: "linkColour",
        internalName: "Time",
      },
      {
        type: "link",
        displayName: "People[missing]",
        iconName: "people",

        colour: "linkColour",
        internalName: "People",
      },
      {
        type: "link",
        displayName: "Feelings[missing]",
        iconName: "feelings",

        colour: "linkColour",
        internalName: "Feelings",
      },
      {
        type: "link",
        displayName: "Grammar",
        iconName: "grammar",
        linkTo: "expanded-grammar",
        colour: "linkColour",
        internalName: "Grammar",
      },
      {
        type: "textAndIcon",
        displayName: "I",
        iconName: "i",
        colour: "yellow",
        pronounciation: "eye",
        internalName: "I",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "want",
        pluralForm: "wants",
        pastTenseForm: "wanted",
        iconName: "want",
        colour: "green",
        internalName: "want",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "more",
        iconName: "more",
        colour: "blue",
        internalName: "more",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "not",
        iconName: "not",
        colour: "grey",
        internalName: "not",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "go",
        pluralForm: "goes",
        pastTenseForm: "went",
        iconName: "go",
        colour: "green",
        internalName: "go",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "help",
        pluralForm: "helps",
        pastTenseForm: "helped",
        iconName: "help",
        colour: "green",
        internalName: "help",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "look",
        pluralForm: "looks",
        pastTenseForm: "looked",
        iconName: "look",
        colour: "green",
        internalName: "look",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "need",
        pluralForm: "needs",
        pastTenseForm: "needed",
        iconName: "need",
        colour: "green",
        internalName: "need",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "have",
        pluralForm: "has",
        pastTenseForm: "had",
        negativeForm: "haven't",
        iconName: "have",
        colour: "green",
        internalName: "have",
        linkTo: "expanded",
      },
      {
        type: "grammarMarker",
        displayName: "",
        iconName: "plural",
        colour: "grammarMarkerColour",
        internalName: "plural",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "you",
        iconName: "you",
        colour: "yellow",
        internalName: "you",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "play",
        pluralForm: "plays",
        pastTenseForm: "played",
        iconName: "play",
        colour: "green",
        internalName: "play",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "same",
        iconName: "same",
        colour: "blue",
        internalName: "same",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "different",
        iconName: "different",
        colour: "blue",
        internalName: "different",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "what",
        pluralForm: "what's",
        iconName: "what",
        colour: "pink",
        internalName: "what",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "like",
        iconName: "like",
        pluralForm: "likes",
        pastTenseForm: "liked",
        colour: "green",
        internalName: "like",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "stop",
        pluralForm: "stops",
        pastTenseForm: "stopped",
        iconName: "stop",
        colour: "green",
        internalName: "stop",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "where",
        pluralForm: "where's",
        iconName: "where",
        colour: "pink",
        internalName: "where",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "in",
        iconName: "in",
        colour: "red",
        internalName: "in",
        linkTo: "expanded",
      },
      {
        type: "grammarMarker",
        displayName: "past",
        iconName: "past",
        colour: "grammarMarkerColour",
        internalName: "past",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "he",
        iconName: "he",
        colour: "yellow",
        internalName: "he",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "eat",
        pluralForm: "eats",
        pastTenseForm: "ate",
        iconName: "eat",
        colour: "green",
        internalName: "eat",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "drink",
        pluralForm: "drinks",
        pastTenseForm: "drank",
        iconName: "drink",
        colour: "green",
        internalName: "drink",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "turn",
        pluralForm: "turns",
        pastTenseForm: "turned",
        iconName: "turn",
        colour: "green",
        internalName: "turn",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "up",
        iconName: "up",
        colour: "red",
        internalName: "up",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "down",
        iconName: "down",
        colour: "red",
        internalName: "down",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "finish",
        pluralForm: "finishes",
        pastTenseForm: "finished",
        iconName: "finish",
        colour: "green",
        internalName: "finish",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "who",
        pluralForm: "who's",
        iconName: "who",
        colour: "pink",
        internalName: "who",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "on",
        iconName: "on",
        colour: "red",
        internalName: "on",
        linkTo: "expanded",
      },
      {
        type: "grammarMarker",
        displayName: "negation",
        iconName: "negation",
        colour: "grammarMarkerColour",
        internalName: "negation",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "she",
        iconName: "she",
        colour: "yellow",
        internalName: "she",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "do",
        pluralForm: "does",
        pastTenseForm: "did",
        negativeForm: "don't",
        iconName: "do",
        colour: "green",
        internalName: "do",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "loud",
        iconName: "loud",
        colour: "blue",
        internalName: "loud",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "quiet",
        iconName: "quiet",
        colour: "blue",
        internalName: "quiet",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "fast",
        iconName: "fast",
        colour: "blue",
        internalName: "fast",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "slow",
        iconName: "slow",
        colour: "blue",
        internalName: "slow",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "funny",
        iconName: "funny",
        colour: "blue",
        internalName: "funny",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "talk",
        pluralForm: "talks",
        pastTenseForm: "talked",
        iconName: "talk",
        colour: "green",
        internalName: "talk",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "off",
        iconName: "off",
        colour: "red",
        internalName: "off",
        linkTo: "expanded",
      },
      {
        type: "textOnly",
        displayName: "to",
        colour: "grey",
        internalName: "to",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "it",
        iconName: "it",
        colour: "yellow",
        internalName: "it",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "put",
        pluralForm: "puts",
        iconName: "put",
        colour: "green",
        internalName: "put",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "make",
        pluralForm: "makes",
        pastTenseForm: "made",
        iconName: "make",
        colour: "green",
        internalName: "make",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "feel",
        pluralForm: "feels",
        pastTenseForm: "felt",
        iconName: "feel",
        colour: "green",
        internalName: "feel",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "think",
        pluralForm: "thinks",
        pastTenseForm: "thought",
        iconName: "think",
        colour: "green",
        internalName: "think",
        linkTo: "expanded",
      },
      {
        type: "textOnly",
        displayName: "am",
        pastTenseForm: "was",
        negativeForm: "am not",
        colour: "green",
        internalName: "am",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "close",
        pluralForm: "closes",
        pastTenseForm: "closed",
        iconName: "close",
        colour: "green",
        internalName: "close",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "open",
        pluralForm: "opens",
        pastTenseForm: "opened",
        iconName: "open",
        colour: "green",
        internalName: "open",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "here",
        pluralForm: "here's",
        iconName: "here",
        colour: "grey",
        internalName: "here",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "will",
        iconName: "future",
        colour: "grey",
        internalName: "will",
        linkTo: "expanded",
      },
    ],
  },

  "expanded-grammar": {
    rows: 6,
    columns: 9,
    path: "expanded ⇾ grammar",
    tiles: [
      {
        type: "link",
        displayName: "back",
        iconName: "navigate-back",
        linkTo: "expanded",
        colour: "linkColour",
      },
      {
        type: "blank",
      },
      {
        type: "textOnly",
        displayName: "a",
        colour: "grey",
        linkTo: "expanded",
      },
      {
        type: "textOnly",
        displayName: "an",
        colour: "grey",
        linkTo: "expanded",
      },
      {
        type: "textOnly",
        displayName: "the",
        colour: "grey",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "this",
        colour: "grey",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/this.png",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "that",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/that%20one.png",
        colour: "grey",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "those",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/those.png",
        colour: "grey",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "these",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/these.png",
        colour: "grey",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "and",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/noun-project/Ampersand_103_g.svg",
        linkTo: "expanded",
        colour: "white",
      },
      {
        type: "textAndIcon",
        displayName: "but",
        iconName: "bottom",
        linkTo: "expanded",
        colour: "white",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/buttock.png.varianted-skin.png",
      },
      {
        type: "textAndIcon",
        displayName: "because",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/reason.png",
        linkTo: "expanded",
        colour: "white",
      },
      {
        type: "textAndIcon",
        displayName: "so",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/to%20sew.png.variant-medium.png",
        linkTo: "expanded",
        colour: "white",
      },
      {
        type: "textAndIcon",
        displayName: "or",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/tawasol/to%20choose.jpg",
        linkTo: "expanded",
        colour: "white",
      },
      {
        type: "textAndIcon",
        displayName: "if",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/twemoji/1f517.svg",
        linkTo: "expanded",
        colour: "white",
      },
      {
        type: "textAndIcon",
        displayName: "with",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/with.png",
        linkTo: "expanded",
        colour: "white",
      },
      {
        type: "blank",
      },
      {
        type: "blank",
      },
      {
        type: "textAndIcon",
        displayName: "maybe",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/noun-project/chance_100_g.svg",
        colour: "white",
        negativeForm: "wasn't",
        pronounciation: "woz",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "likely",
        iconName:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/past.svg",
        colour: "white",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/noun-project/Equal_347_g.svg",
        negativeForm: "unlikely",
        linkTo: "expanded",
      },
      {
        type: "blank",
        displayName: "going to",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/future.svg",
        colour: "grey",
        linkTo: "expanded",
      },
      {
        type: "blank",
        displayName: "be",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/bee_1.png",
        colour: "grey",
        pastTenseForm: "been",
        linkTo: "expanded",
      },
      {
        type: "blank",
      },
      {
        type: "blank",
      },
      {
        type: "blank",
      },
      {
        type: "blank",
      },
      {
        type: "grammarMarker",
        displayName: "past",
        iconName: "past",
        colour: "grammarMarkerColour",
        internalName: "past",
        linkTo: "expanded",
      },
      {
        type: "blank",
        displayName: "",
        linkTo: "expanded",
        colour: "red",
      },
      {
        type: "blank",
      },
      {
        type: "blank",
      },
      {
        type: "blank",
      },
      {
        type: "blank",
      },
      {
        type: "blank",
      },
      {
        type: "blank",
      },
      {
        type: "blank",
      },
      {
        type: "grammarMarker",
        displayName: "negation",
        iconName: "negation",
        colour: "grammarMarkerColour",
        internalName: "negation",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "was",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/past.svg",
        linkTo: "expanded",
        colour: "grey",
        negativeForm: "wasn’t ",
      },
      {
        type: "textAndIcon",
        displayName: "were",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/past.svg",
        linkTo: "expanded",
        colour: "grey",
        negativeForm: "weren’t ",
      },
      {
        type: "textAndIcon",
        displayName: "going to",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/future.svg",
        linkTo: "expanded",
        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "be",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/bee_1.png",
        pastTenseForm: "been",
        linkTo: "expanded",
        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "get",
        iconName: "have",
        linkTo: "expanded",
        colour: "green",
        pastTenseForm: "got",
      },
      {
        type: "blank",
      },
      {
        type: "blank",
      },
      {
        type: "blank",
      },
      {
        type: "blank",
      },
      {
        type: "textAndIcon",
        displayName: "can",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/tin%20can.svg",
        colour: "grey",
        negativeForm: "can't",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "could",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/think_1.png.variant-dark.png",
        colour: "grey",
        negativeForm: "couldn't",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "should",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/worksheet.svg",
        colour: "grey",
        negativeForm: "shouldn't",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "would",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/wood.png",
        colour: "grey",
        negativeForm: "wouldn't",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "might",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/ask_2.png.variant-medium-dark.png",
        colour: "grey",
        negativeForm: "mightn't ",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "must",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/to%20order.png.varianted-skin.png",
        colour: "grey",
        negativeForm: "mustn't ",
        linkTo: "expanded",
      },
      {
        type: "blank",
      },
      {
        type: "blank",
      },
      {
        type: "blank",
      },
    ],
  },

  "expanded-fun": {
    rows: 6,
    columns: 9,
    path: "expanded ⇾ fun",
    tiles: [
      {
        type: "link",
        displayName: "Back",
        iconName: "navigate-back",
        colour: "linkColour",
        linkTo: "expanded",
      },
      { type: "blank" },
      {
        type: "link",
        displayName: "Toys[missing]",
        iconName: "toys",
        colour: "linkColour",
      },
      {
        type: "link",
        displayName: "Games",
        iconName: "game",
        colour: "linkColour",
        linkTo: "expanded-fun-games",
      },
      {
        type: "link",
        displayName: "Sports",
        iconName: "sport",
        colour: "linkColour",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/sport.png",
        linkTo: "expanded-fun-sports",
      },
      {
        type: "link",
        displayName: "Music[missing]",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/instruments.png",
        colour: "linkColour",
      },
      {
        type: "link",
        displayName: "Story[missing]",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/reading_1.png.varianted-skin.png",
        colour: "linkColour",
      },
      {
        type: "link",
        displayName: "Playground",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/park.png",
        colour: "linkColour",
        linkTo: "expanded-fun-playground",
      },
      {
        type: "link",
        displayName: "Electronic",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/technology.png",
        colour: "linkColour",
        linkTo: "expanded-fun-electronic",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "sing",
        pastTenseForm: "sang",
        pluralForm: "sings",
        iconName: "sing",
        colour: "green",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "music",
        iconName: "music",
        colour: "orange",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "dance",
        pastTenseForm: "danced",
        pluralForm: "dances",
        iconName: "dance",
        colour: "green",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "clap",
        pastTenseForm: "clapped",
        pluralForm: "claps",
        colour: "green",
        iconName: "clap",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "tickle",
        pastTenseForm: "tickled",
        pluralForm: "tickles",
        iconName: "tickle",
        colour: "green",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "push",
        pastTenseForm: "pushed",
        pluralForm: "Pushes",
        iconName: "push",
        colour: "green",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "climb",
        pastTenseForm: "climbed",
        pluralForm: "climbing",
        iconName: "climb",
        colour: "green",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "read",
        pastTenseForm: "read",
        pastTensePronounciation: "red",
        pluralForm: "reads",
        iconName: "read",
        colour: "green",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "book",
        pluralForm: "books",
        iconName: "book",
        colour: "orange",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "catch",
        pastTenseForm: "caught",
        pluralForm: "catches",
        iconName: "catch",
        colour: "green",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "throw",
        pastTenseForm: "threw",
        pluralForm: "throws",
        iconName: "throw",
        colour: "green",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "kick",
        pastTenseForm: "kicked",
        pluralForm: "kicks",
        iconName: "kick",
        colour: "green",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "roll",
        pastTenseForm: "rolled",
        pluralForm: "rolls",
        iconName: "roll",
        colour: "green",
        linkTo: "expanded",
      },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "pull",
        pastTenseForm: "Pulled",
        pluralForm: "Pulls",
        iconName: "pull",
        colour: "green",
        linkTo: "expanded",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
    ],
  },

  "expanded-fun-games": {
    rows: 6,
    columns: 9,
    path: "expanded ⇾ fun ⇾ game",
    tiles: [
      {
        type: "link",
        displayName: "Back",
        iconName: "navigate-back",
        linkTo: "expanded",
        colour: "linkColour",
      },
      {
        type: "textAndIcon",
        displayName: "game",
        pastTenseForm: "gamed",
        pluralForm: "games",
        iconName: "game",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "board",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/noun-project/sudoku_756_g.svg",
        pluralForm: "boards",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "dice",
        iconName: "dice",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "roll",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/noun-project/rolling_590_g.svg",
        pastTenseForm: "rolled",
        pluralForm: "rolls",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "piece",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/counters.svg",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "point",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/points.png",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "win",
        pastTenseForm: "won",
        pluralForm: "wins",
        iconName: "win",
        linkTo: "expanded",
        colour: "green",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "chase",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/chase.png.varianted-skin.png",
        pastTenseForm: "chased",
        pluralForm: "chases",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "hide and seek",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/hide-and-seek.png.varianted-skin.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "tig",
        iconName:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/to%20run%20holding%20hands.png.variant-medium-dark.png",
        linkTo: "expanded",
        colour: "orange",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/to%20run%20holding%20hands.png.variant-medium-dark.png",
      },
      {
        type: "textAndIcon",
        displayName: "peekaboo",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/hide_2.png",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "lose",
        pastTenseForm: "lost",
        pluralForm: "loses",
        iconName: "lose",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "monopoly",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/sclera/Monopoly.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "ludo",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/ludo.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "snakes and ladders",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/language-craft/snakes.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "checkers",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/draughts.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "noughts and crosses",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/noun-project/Tic-Tac-Toe_969_g.svg",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "connect four",
        iconName: "connect-four",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "Pop up pirate",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/pirate.png.variant-medium-dark.png",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "card",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/playing%20card%20picture.svg.varianted-skin.svg",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "snap",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/noun-project/Playing%20Cards-8b8b4f26ba.svg",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "go fish",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/fish%20,%20to.svg.varianted-skin.svg",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "happy families",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/family.svg.varianted-skin.svg",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      {
        type: "blank",
        displayName: "win",
        pastTenseForm: "won",
        pluralForm: "wins",
        iconName: "win",
        linkTo: "expanded",
        colour: "green",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
    ],
  },

  "expanded-fun-electronic": {
    rows: 6,
    columns: 9,
    path: "expanded ⇾ fun ⇾ electronic",
    tiles: [
      {
        type: "link",
        displayName: "Back",
        iconName: "navigate-back",
        linkTo: "expanded",
        colour: "linkColour",
      },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "electric",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/sclera/electricity.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "charge",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/sclera/plug%20in%20power%20outlet.png",
        pastTenseForm: "charged",
        pluralForm: "charges",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "charger",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/plug.png",
        pluralForm: "chargers",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "computer",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/computer.png",
        pluralForm: "computers",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "laptop",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/laptop%20computer.png",
        pluralForm: "laptops",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "tablet",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/tablet.png",
        pluralForm: "tablets",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "iPad",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/noun-project/iPad-6b1c3b4f8f.svg",
        pluralForm: "Ipads",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "phone",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/take%20photos.png.variant-dark.png",
        pastTenseForm: "phoned",
        pluralForm: "phones",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "tv",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/television.png",
        pronounciation: "Teevee",
        pluralForm: "tvs",
        pluralFormPronounciation: "teevees",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "volume",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/noun-project/Volume_625_g.svg",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "keyboard",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/noun-project/Computer%20Keyboard-19d40c3f5a.svg",
        pluralForm: "keyboards",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "mouse",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/mouse_1.png",
        pluralForm: "mice",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "battery",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/noun-project/Battery-766ec3b631.svg",
        pluralForm: "batteries",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "remote",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/noun-project/Remote-Control_753_597698.svg",
        pluralForm: "remotes",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "youtube",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/icon_archive/Youtube.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "app",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/icon_archive/Windows_Media_Player.png",
        pluralForm: "apps",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "text",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/noun-project/text-message_250_g.svg",
        pastTenseForm: "texted",
        pluralForm: "texts",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "call",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/to%20telephone_1.png.variant-medium.png",
        pastTenseForm: "called",
        pluralForm: "calls",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "website",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/web.png.varianted-skin.png",
        pluralForm: "websites",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "google",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/icon_archive/Chrome.png",
        pastTenseForm: "googled",
        pluralForm: "googles",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "channel",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/change%20channel.png.variant-medium-dark.png",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "xbox",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/console.png",
        pronounciation: "exsbx",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "nintendo",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/sclera/nintendo%20wii.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "play station",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/play%20computer%20games.png.varianted-skin.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "controller",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/twemoji/1f3ae.svg",
        pluralForm: "controllers",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "headphones",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/headphones.svg",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
    ],
  },

  "expanded-fun-sports": {
    rows: 6,
    columns: 9,
    path: "expanded ⇾ fun ⇾ sport",
    tiles: [
      {
        type: "link",
        displayName: "Back",
        iconName: "navigate-back",
        linkTo: "expanded",
        colour: "linkColour",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "sport",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/sport.png",
        pluralForm: "sports",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "PE",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/PE.svg.varianted-skin.svg",
        pronounciation: "pee ee",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "football",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/soccer.png.variant-medium.png",
        pluralForm: "footballs",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "rugby",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/rugby.png.variant-dark.png",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "basketball",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/basketball.png",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "bowling",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/play%20bowling.png.variant-medium-dark.png",
        colour: "orange",
      },
      { type: "blank" },
      {
        type: "blank",
        displayName: "",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/noun-project/miss_243_g.svg",
        pastTenseForm: "missed",
        pluralForm: "misses",
        colour: "green",
      },
      {
        type: "blank",
        displayName: "",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/score_1.png.variant-medium-dark.png",
        pastTenseForm: "aimed",
        pluralForm: "aims",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "bat",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/noun-project/Tennis%20racket-9e846f21ed.svg",
        pluralForm: "bats",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "goal",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/net.png",
        colour: "orange",
        pluralForm: "goals",
      },
      {
        type: "textAndIcon",
        displayName: "tennis",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/tennis.png.varianted-skin.png",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "badminton",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/badminton_2.png.variant-medium-dark.png",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "cricket",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/cricket.svg.varianted-skin.svg",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "hockey",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/play%20hockey_1.png.variant-medium.png",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "golf",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/play%20golf.png.variant-dark.png",
        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "stick",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/hockey%20stick_1.png",
        pluralForm: "sticks",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "team",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/team_2.png.varianted-skin.png",
        pluralForm: "teams",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "snooker",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/pool%20snooker.svg.varianted-skin.svg",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "table tennis",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/play%20ping%20pong.png.variant-medium-light.png",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "darts",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/darts.png",
        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "match",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/to%20play%20rugby.png.variant-medium.png",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "competition",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/race.png.varianted-skin.png",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "ice skating",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/ice%20skate_1.png.variant-medium.png",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "roller scate",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/roller%20skate_1.png.varianted-skin.png",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "martial art",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/karate.png.variant-medium.png",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "archery",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/icon_archive/archery.png",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "wrestling",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/to%20fight.png.varianted-skin.png",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "boxing",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/boxing.png.variant-medium-dark.png",
        colour: "orange",
      },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "aim",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/throwing.png.varianted-skin.png",
        pastTenseForm: "aimed",
        pluralForm: "aims",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "miss",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/noun-project/miss_243_g.svg",
        pastTenseForm: "missed",
        pluralForm: "misses",
        colour: "green",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
    ],
  },

  "expanded-fun-playground": {
    rows: 6,
    columns: 9,
    path: "expanded ⇾ fun ⇾ playground",
    tiles: [
      {
        type: "link",
        displayName: "Back",
        iconName: "navigate-back",
        linkTo: "expanded",
        colour: "linkColour",
      },
      {
        type: "textAndIcon",
        displayName: "playground",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/park.png",
        linkTo: "expanded",
        colour: "red",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "blank",
        displayName: "",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/high.svg",
        linkTo: "expanded",
        colour: "blue",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "slide",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/toboggan.png",
        pastTenseForm: "slid",
        pluralForm: "slides",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "swing",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/swing_1.png",
        pastTenseForm: "swung",
        pluralForm: "swings",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "spin",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/noun-project/Rotate-dc4d8eb61c.svg",
        pastTenseForm: "span",
        pluralForm: "spins",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "dig",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/spade.svg",
        pastTenseForm: "dug",
        pluralForm: "digs",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "splash",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/to%20splash.png.variant-medium-dark.png",
        pastTenseForm: "splashed",
        pluralForm: "splashes",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "bounce",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/to%20bounce_2.png.variant-medium-dark.png",
        pastTenseForm: "bounced",
        pluralForm: "bounces",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "ride",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/noun-project/riding_142_g.svg",
        pastTenseForm: "rode",
        pluralForm: "rides",
        linkTo: "expanded",
        colour: "green",
      },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "climb",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/to%20climb_5.png.varianted-skin.png",
        pastTenseForm: "climbed",
        pluralForm: "climbs",
        linkTo: "expanded",
        colour: "green",
      },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "roundabout",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/merry%20go%20round.svg",
        pluralForm: "roundabouts",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "sand",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/sandbox_1.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "water tray",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/water%20table.svg.varianted-skin.svg",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "trampoline",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/trampoline%20.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "bike",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/bike.png",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "ladder",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/step%20ladder.png",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "castle",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/sandcastle.png",
        pluralForm: "castles",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "seesaw",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/seesaw.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "scooter",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/scooter.png",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "rocker",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/sclera/Spring%20rider%20wobble.png",
        pluralForm: "rockers",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "helmet",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/helmet_4.png",
        pluralForm: "helmets",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
    ],
  },

  "expanded-fun-instruments": {
    rows: 6,
    columns: 9,
    path: "expanded ⇾ fun ⇾ instruments",
    tiles: [
      {
        type: "link",
        displayName: "Back",
        iconName: "navigate-back",
        linkTo: "expanded",
        colour: "linkColour",
      },
      {
        type: "textAndIcon",
        displayName: "instrument",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/instruments.png",
        pluralForm: "instruments",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "string",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/thread.png",
        pluralForm: "strings",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "guitar",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/guitar.png",
        pluralForm: "guitars",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "violin",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/viola.png",
        pluralForm: "violins",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "cello",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/cello.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "harp",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/harp.png",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "flute",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/flute.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "trumpet",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/trumpet.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "horn",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/horn_1.png",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "paper",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/card.png",
        linkTo: "expanded",
        colour: "blue",
      },
      {
        type: "textAndIcon",
        displayName: "drum",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/drum.png",
        pastTenseForm: "drummed",
        pluralForm: "drums",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "cymbal",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/cymbals.png",
        pluralForm: "symbals",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: " maraca",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/maracas.png",
        pluralForm: "maracas",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "xylophone",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/xylophone.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "piano",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/play%20the%20piano.png.varianted-skin.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "tambourine",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/tambourine_1.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "bell",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/bell_1.png",
        pluralForm: "bells",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "wood",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/wood.png",
        linkTo: "expanded",
        colour: "blue",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "plastic",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/plastic.png",
        linkTo: "expanded",
        colour: "blue",
      },
      {
        type: "textAndIcon",
        displayName: "pop",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/music%20shop.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "rock",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/rock.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "rap",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/twemoji/1f5e3.svg",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "classical",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/orchestra.png.varianted-skin.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "jazz",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/saxophone.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "blues",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/piano.svg",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "carol",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/sing%20carols.png.variant-medium-dark.png",
        pluralForm: "carols",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "metal",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/metal.png",
        linkTo: "expanded",
        colour: "blue",
      },
    ],
  },

  "expanded-body": {
    rows: 6,
    columns: 9,
    path: "expanded ⇾ body",
    tiles: [
      {
        type: "link",
        displayName: "Back",
        iconName: "navigate-back",
        linkTo: "expanded",
        colour: "linkColour",
      },
      { type: "blank" },
      {
        type: "link",
        displayName: "Parts[missing]",
        iconName: "body parts",
        colour: "linkColour",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/shoulder.svg.variant-medium.svg",
      },
      { type: "blank" },
      {
        type: "link",
        displayName: "Functions[missing]",
        colour: "linkColour",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/senses.svg.variant-medium.svg",
      },
      { type: "blank" },
      {
        type: "link",
        displayName: "Ill[missing]",
        colour: "linkColour",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/become%20ill_3.png.varianted-skin.png",
      },
      { type: "blank" },
      {
        type: "link",
        displayName: "Clothes[missing]",
        iconName: "clothes",
        colour: "linkColour",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/clothes.png",
      },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "body",
        pluralForm: "bodies",
        iconName: "body",
        colour: "orange",
        linkTo: "expanded",
      },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "wee",
        pastTenseForm: "wee'd",
        pastTensePronounciation: "weed",
        pluralForm: "wees",
        iconName: "wee",
        colour: "green",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "see",
        pastTenseForm: "saw",
        pluralForm: "sees",
        iconName: "look",
        colour: "green",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "ill",
        iconName: "ill",
        colour: "green",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/become%20ill_3.png.varianted-skin.png",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "nappy",
        pluralForm: "nappies",
        iconName: "nappy",
        colour: "orange",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "clothes",
        pastTenseForm: "clothed",
        iconName: "clothes",
        colour: "orange",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/clothes.png",
        linkTo: "expanded",
      },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "face",
        pastTenseForm: "faced",
        pluralForm: "faces",
        iconName: "face",
        colour: "orange",
        linkTo: "expanded",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/face.png.variant-medium.png",
      },
      {
        type: "textAndIcon",
        displayName: "head",
        pluralForm: "heads",
        iconName: "head",
        colour: "orange",
        linkTo: "expanded",
      },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "poo",
        pastTenseForm: "pooed",
        pluralForm: "poos",
        iconName: "poo",
        colour: "green",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "hear",
        pastTenseForm: "heard",
        pluralForm: "hears",
        iconName: "listen",
        colour: "green",
        linkTo: "expanded",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/to%20hear.png.variant-medium-dark.png",
      },
      {
        type: "textAndIcon",
        displayName: "vomit",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/vomit.png.variant-medium.png",
        pastTenseForm: "vomited",
        pluralForm: "vomits",
        colour: "green",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "coat",
        pluralForm: "coats",
        iconName: "coat",
        colour: "orange",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "wear",
        pastTenseForm: "wore",
        pluralForm: "wears",
        iconName: "wear",
        colour: "green",
        linkTo: "expanded",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/to%20dress.png.variant-medium-dark.png",
      },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "tummy",
        iconName: "tummy",
        colour: "orange",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "bottom",
        pluralForm: "bottoms",
        iconName: "bottom",
        colour: "orange",
        linkTo: "expanded",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/buttock.png.variant-medium.png",
      },
      {
        type: "textAndIcon",
        displayName: "fart",
        pastTenseForm: "farted",
        pluralForm: "farts",
        iconName: "fart",
        colour: "green",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "listen",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/to%20hear_2.png.varianted-skin.png",
        pastTenseForm: "listened",
        pluralForm: "listens",
        iconName: "listen",
        colour: "green",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "hurt",
        pluralForm: "hurts",
        iconName: "hurt",
        colour: "green",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "hat",
        pluralForm: "hats",
        iconName: "hat",
        colour: "orange",
        linkTo: "expanded",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/hat.png",
      },
      {
        type: "textAndIcon",
        displayName: "shirt",
        pluralForm: "shirts",
        iconName: "shirt",
        colour: "orange",
        linkTo: "expanded",
      },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "foot",
        pluralForm: "feet",
        iconName: "foot",
        colour: "orange",
        linkTo: "expanded",
      },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "blood",
        iconName: "blood",
        colour: "orange",
        linkTo: "expanded",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/noun-project/red.svg",
      },
      {
        type: "textAndIcon",
        displayName: "smell",
        pastTenseForm: "smelled",
        pluralForm: "smells",
        iconName: "blood",
        colour: "green",
        linkTo: "expanded",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/smell.png.variant-medium.png",
      },
      {
        type: "textAndIcon",
        displayName: "itch",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/to%20itch%20.png.varianted-skin.png",
        pastTenseForm: "itched",
        pluralForm: "itches",
        colour: "green",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "pants",
        iconName: "pants",
        colour: "orange",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "trousers",
        iconName: "trousers",
        colour: "orange",
        linkTo: "expanded",
      },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "hand",
        pluralForm: "hands",
        iconName: "hand",
        colour: "orange",
        linkTo: "expanded",
      },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "bleed",
        pluralForm: "bleeds",
        iconName: "blood",
        colour: "green",
        pastTenseForm: "bled",
        linkTo: "expanded",
      },
      {
        type: "blank",
        displayName: "",
        pluralForm: "pads",
        iconName: "pad",
        colour: "orange",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "bruise",
        pastTenseForm: "bruised",
        pluralForm: "bruises",
        iconName: "bruise",
        colour: "green",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "shoe",
        pluralForm: "shoes",
        iconName: "shoe",
        colour: "orange",
        linkTo: "expanded",
      },
      {
        type: "textAndIcon",
        displayName: "sock",
        pluralForm: "socks",
        iconName: "socks",
        colour: "orange",
        linkTo: "expanded",
      },
    ],
  },

  "expanded-food": {
    rows: 6,
    columns: 9,
    path: "expanded ⇾ food",
    tiles: [
      {
        type: "link",
        displayName: "Back",
        iconName: "navigate-back",
        linkTo: "expanded",
        colour: "linkColour",
      },
      { type: "blank" },
      {
        type: "link",
        displayName: "Fruit[missing]",
        iconName: "fruit",

        colour: "linkColour",
      },
      {
        type: "link",
        displayName: "Veg[missing]",
        iconName: "vegetable",

        colour: "linkColour",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/vegetables.svg.varianted-skin.svg",
      },
      {
        type: "link",
        displayName: "Carbs[missing]",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/carbohydrates.svg",

        colour: "linkColour",
      },
      {
        type: "link",
        displayName: "Proteins[missing]",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/protein.svg",

        colour: "linkColour",
      },
      {
        type: "link",
        displayName: "Meals[missing]",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/dinner.svg",

        colour: "linkColour",
      },
      {
        type: "link",
        displayName: "Treats[missing]",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/cake%20cup%20cake.svg",

        colour: "linkColour",
      },
      {
        type: "link",
        displayName: "Sauces[missing]",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/sauce%20tomato.svg",

        colour: "linkColour",
      },
      { type: "blank" },
      {
        type: "link",
        displayName: "Drinks[missing]",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/juice.png",

        colour: "linkColour",
      },
      {
        type: "textAndIcon",
        displayName: "water",
        iconName: "water",
        linkTo: "expanded",
        colour: "orange",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/drop%20of%20water.png",
      },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "pour",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/to%20pour_3.png.varianted-skin.png",
        pastTenseForm: "poured",
        pluralForm: "pours",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "spread",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/spread_1.png.variant-medium-dark.png",
        pastTenseForm: "peeled",
        pluralForm: "peels",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "pan",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/frying%20pan.png",
        pluralForm: "pans",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "bowl",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/bowl_1.png",
        pluralForm: "bowls",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "pack up",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/packed%20lunch%202.svg.varianted-skin.svg",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "tin",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/tin.svg",
        pluralForm: "tins",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "peel",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/peel.png.variant-medium-dark.png",
        pastTenseForm: "peeled",
        pluralForm: "peels",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "fry",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/to%20fry_1.png.variant-medium-dark.png",
        pastTenseForm: "fried",
        pluralForm: "fries",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "plate",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/plate_2.png",
        pluralForm: "plates",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "spicy",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/spicy.png.variant-medium.png",
        linkTo: "expanded",
        colour: "blue",
      },
      {
        type: "textAndIcon",
        displayName: "sweet",
        linkTo: "expanded",
        colour: "blue",
        iconName: "sweet",
      },
      {
        type: "textAndIcon",
        displayName: "salty",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/salty.png.variant-medium-dark.png",
        linkTo: "expanded",
        colour: "blue",
      },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "packet",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/salad%20packet.svg",
        pluralForm: "packets",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "boil",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/to%20boil.png",
        pastTenseForm: "boiled",
        pluralForm: "boils",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "microwave",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/microwave.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "chop",
        pastTenseForm: "chopped",
        pluralForm: "chops",
        linkTo: "expanded",
        colour: "green",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/to%20cut%20up.png.variant-dark.png",
      },
      {
        type: "textAndIcon",
        displayName: "spoon",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/spoon.png",
        pluralForm: "spoons",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "healthy",
        iconName: "healthy",
        linkTo: "expanded",
        colour: "blue",
      },
      {
        type: "textAndIcon",
        displayName: "burn",
        pastTenseForm: "burned",
        pluralForm: "burns",
        iconName: "burn",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "favourite",
        iconName: "favourite",
        linkTo: "expanded",
        colour: "blue",
      },
      {
        type: "textAndIcon",
        displayName: "raw",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/meat.png",
        linkTo: "expanded",
        colour: "blue",
      },
      {
        type: "textAndIcon",
        displayName: "bottle",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/bottle.png",
        pluralForm: "bottles",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "kettle",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/kettle.svg.varianted-skin.svg",
        pluralForm: "kettles",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "hob",
        pluralForm: "hobs",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "mix",
        pastTenseForm: "mixed",
        pluralForm: "mixes",
        iconName: "mix",
        linkTo: "expanded",
        colour: "green",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/stir%20mix%20,%20to.svg.varianted-skin.svg",
      },
      {
        type: "textAndIcon",
        displayName: "fork",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/fork.png",
        pluralForm: "forks",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "breakfast",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/breakfast.png.varianted-skin.png",
        linkTo: "expanded",
        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "lunch",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/eat.png.variant-medium.png",
        linkTo: "expanded",
        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "tea",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/have%20tea.png.varianted-skin.png",
        linkTo: "expanded",
        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "snack",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/mid-morning%20snack_2.png.variant-medium-dark.png",
        linkTo: "expanded",
        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "jar",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/jar.svg",
        pluralForm: "jars",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "toaster",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/toaster.png",
        pluralForm: "toaster",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "oven",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/oven.png",
        pluralForm: "ovens",
        iconName: "symbol to add",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "cook",
        pastTenseForm: "cooked",
        pluralForm: "cooks",
        iconName: "cook",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "knife",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/knife_3.png",
        pluralForm: "knives",
        linkTo: "expanded",
        colour: "orange",
      },
    ],
  },

  "expanded-places": {
    rows: 6,
    columns: 9,
    path: "expanded ⇾ places",
    tiles: [
      {
        type: "link",
        displayName: "back",
        iconName: "navigate-back",
        linkTo: "expanded",
        colour: "linkColour",
      },
      {
        type: "textAndIcon",
        displayName: "home",
        iconName: "home",
        linkTo: "expanded",
        colour: "red",
      },
      {
        type: "textAndIcon",
        displayName: "school",
        iconName: "school",
        linkTo: "expanded",
        colour: "red",
      },
      {
        type: "textAndIcon",
        displayName: "garden",
        iconName: "garden",
        linkTo: "expanded",
        colour: "red",
      },
      {
        type: "textAndIcon",
        displayName: "inside",
        iconName: "inside",
        linkTo: "expanded",
        colour: "red",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/to%20open%20the%20door_2.png.variant-medium-light.png",
      },
      {
        type: "textAndIcon",
        displayName: "outside",
        iconName: "outside",
        linkTo: "expanded",
        colour: "red",
      },
      { type: "blank" },
      { type: "blank" },
      {
        type: "link",
        displayName: " furniture",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/furniture.svg",
        linkTo: "expanded",
        colour: "linkColour",
      },
      {
        type: "textAndIcon",
        displayName: "kitchen",
        iconName: "kitchen",
        linkTo: "expanded",
        colour: "red",
      },
      {
        type: "textAndIcon",
        displayName: "bedroom",
        iconName: "bedroom",
        linkTo: "expanded",
        colour: "red",
      },
      {
        type: "textAndIcon",
        displayName: "classroom",
        iconName: "classroom",
        linkTo: "expanded",
        colour: "red",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/classroom_2.png",
      },
      {
        type: "textAndIcon",
        displayName: "sleep ",
        pastTenseForm: "slept",
        pluralForm: "sleeps",
        iconName: "sleep",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "work",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/to%20work_1.png.variant-medium.png",
        pastTenseForm: "worked",
        pluralForm: "works",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "dirty",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/dirty.png",
        linkTo: "expanded",
        colour: "blue",
      },
      {
        type: "textAndIcon",
        displayName: "bed",
        iconName: "bed",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      {
        type: "link",
        displayName: "weather",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/how%20is%20the%20weather.png",
        linkTo: "expanded",
        colour: "linkColour",
      },
      {
        type: "textAndIcon",
        displayName: "living room",
        iconName: "living room",
        linkTo: "expanded",
        colour: "red",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/tawasol/Majlis%20(living%20room%20qatari).jpg",
      },
      {
        type: "textAndIcon",
        displayName: "bathroom",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/bathroom_4.png",
        linkTo: "expanded",
        colour: "red",
      },
      {
        type: "textAndIcon",
        displayName: "toilet",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/toilet%20bowl.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "wash",
        pastTenseForm: "washed",
        pluralForm: "washes",
        iconName: "wash",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "flush",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/tawasol/Flush%20the%20toilet.png",
        pastTenseForm: "flushed",
        pluralForm: "flushes",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "clean",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/to%20clean%20the%20window_1.png.varianted-skin.png",
        pastTenseForm: "cleaned",
        pluralForm: "cleans",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "blank",
        displayName: "",

        colour: "red",
      },
      { type: "blank" },
      {
        type: "link",
        displayName: "street",
        iconName: "street",
        colour: "linkColour",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/street.png",
      },
      {
        type: "textAndIcon",
        displayName: "dining room",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/dining%20room_1.png",
        linkTo: "expanded",
        colour: "red",
      },
      {
        type: "textAndIcon",
        displayName: "soft play room",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/ball%20pool.png",
        linkTo: "expanded",
        colour: "red",
      },
      {
        type: "textAndIcon",
        displayName: "sensory room",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/sensory%20room.svg",
        linkTo: "expanded",
        colour: "red",
      },
      {
        type: "textAndIcon",
        displayName: "sit",
        pastTenseForm: "sat",
        pluralForm: "sits",
        iconName: "sit",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "lie",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/lie%20down.png.variant-medium.png",
        pastTenseForm: "lied",
        pluralForm: "lies",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "stand",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/tawasol/stand.jpg",
        pastTenseForm: "stood",
        pluralFormPronounciation: "stands",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "winow",
        iconName: "window",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "pool",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/swimming%20pool.png",
        linkTo: "expanded",
        colour: "red",
      },
      {
        type: "textAndIcon",
        displayName: "park",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/countryside_1.png",
        linkTo: "expanded",
        colour: "red",
      },
      {
        type: "textAndIcon",
        displayName: "corridor ",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/corridor.png",
        linkTo: "expanded",
        colour: "red",
      },
      {
        type: "textAndIcon",
        displayName: "tidy",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/tidy%20up_4.png.varianted-skin.png",
        pastTenseForm: "tidied",
        pluralForm: "tidies",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "shower",
        iconName: "shower",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "bath",
        iconName: "bath",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "door",
        iconName: "door",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "blank",
        displayName: "",

        colour: "red",
      },
      {
        type: "link",
        displayName: "position",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/to%20place.png.variant-medium-dark.png",
        colour: "linkColour",
      },
      {
        type: "textAndIcon",
        displayName: "shop",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/shop.png",
        pastTenseForm: "shopped",
        pluralFormPronounciation: "shops",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "restaurant",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/restaurant.png",
        linkTo: "expanded",
        colour: "red",
      },
      {
        type: "textAndIcon",
        displayName: "street",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/street.png",
        linkTo: "expanded",
        colour: "red",
      },
      {
        type: "textAndIcon",
        displayName: "sink",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/adapted%20wash%20basin.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "chair",
        iconName: "chair",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "table",
        iconName: "table",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "curtain",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/curtain.png",
        pluralForm: "curtains",
        colour: "orange",
      },
      { type: "blank" },
      {
        type: "link",
        displayName: "countries",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/the%20world.png",
        colour: "linkColour",
      },
    ],
  },

  "expanded-places-countries": {
    rows: 6,
    columns: 9,
    path: "expanded ⇾ places ⇾ countries",
    tiles: [
      {
        type: "link",
        displayName: "back",
        iconName: "navigate-back",
        linkTo: "expanded",
        colour: "linkColour",
      },
      {
        type: "textAndIcon",
        displayName: "world",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/the%20world.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "country",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/world%20map.png",
        pluralForm: "countries",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "map",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/map.png",
        pastTenseForm: "mapped",
        pluralForm: "maps",

        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "direction",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/to%20direct_3.png.variant-medium.png",
        linkTo: "expanded",
        colour: "blue",
      },
      {
        type: "textAndIcon",
        displayName: "travel",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/travel.png.varianted-skin.png",
        pastTenseForm: "travelled",
        pluralForm: "travels",

        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "passport",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/passport.svg",

        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "island",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/island.png",
        pluralForm: "islands",

        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "region",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/regional%20state_32.png",

        colour: "blue",
      },
      {
        type: "textAndIcon",
        displayName: "Europe",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/Europe.png",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "United Kingdom",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/United%20Kingdom.png",

        colour: "grey",
        pastTenseForm: "British",
      },
      {
        type: "textAndIcon",
        displayName: "France",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/France.png",

        colour: "grey",
        pastTenseForm: "French",
      },
      {
        type: "textAndIcon",
        displayName: "Spain",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/Spain_1.png",
        pastTenseForm: "Spanish",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "Italy",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/Italy.png",
        pastTenseForm: "Italian",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "Germany",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/Germany.png",
        pastTenseForm: "German",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "Poland",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/Poland_1.png",
        pastTenseForm: "Polish",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "Greece",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/Greece.png",
        pastTenseForm: "Greek",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "Turkey",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/Turkey_3.png",
        pastTenseForm: "Turkish",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "Africa",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/Africa.png",

        colour: "white",
        pastTensePronounciation: "African",
      },
      {
        type: "textAndIcon",
        displayName: "Egypt",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/flag%20Egypt.svg",

        colour: "grey",
        pastTenseForm: "Egyptian",
      },
      {
        type: "textAndIcon",
        displayName: "Democratic Republic of Congo ",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/flag%20Congo%20Kinshasa.svg",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "Nigeria",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/flag%20Nigeria.svg",
        pastTenseForm: "Nigerian",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "Zimbabwe",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/flag%20Zimbabwe.svg",
        pastTenseForm: "Zimbabwean ",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "Sudan",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/flag%20The%20Sudan.svg",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "Tunisia",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/flag%20Tunisia.svg",
        pastTenseForm: "Tunisian",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "Libya",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/twemoji/1f1f1-1f1fe.svg",
        pastTenseForm: "Libyan",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "Somalia",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/flag%20Somalia.svg",
        pastTenseForm: "Somalian",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "Asia",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/continent_2.png",
        pastTenseForm: "Asian",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "Russia",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/twemoji/1f1f7-1f1fa.svg",
        pastTenseForm: "Russian",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "China",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/flag%20China.svg",
        pastTenseForm: "Chinese",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "India",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/flag%20India.svg",
        pastTenseForm: "Indian",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "Japan",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/flag%20Japan.svg",
        pastTenseForm: "Japanese ",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "Philippines",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/flag%20Philippines.svg",
        pastTenseForm: "Philippino",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "Australia",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/twemoji/1f1e6-1f1fa.svg",
        pastTensePronounciation: "Australian",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "New Zealand",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/flag%20New%20Zealand.svg",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "Indonesia",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/flag%20Indonesia.svg",
        pastTenseForm: "Indonesian",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "America",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/America.png",
        pastTenseForm: "American",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "USA",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/country%20United%20States.svg",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "Brazil",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/flag%20Brazil.svg",
        pastTenseForm: "Brazilian",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "Canada",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/flag%20Canada.svg",
        pastTenseForm: "Canadian",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "Argentina",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/flag%20Argentina.svg",
        pastTenseForm: "Argentinan",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "Mexico",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/flag%20Mexico.svg",
        pastTenseForm: "Mexican",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "Caribbean ",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/sea%20conch_1.png",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "Chile",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/flag%20Chile.svg",
        pronounciation: "Chilly",
        pastTenseForm: "Chillian",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "Peru",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/flag%20Peru.svg",
        pastTenseForm: "Peruvian ",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "Saudi Arabia",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/flag%20Saudi%20Arabia.svg",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "Pakistan",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/Pakistan.png",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "Afganistan",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/Afghanistan.png",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "Syria",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/flag%20Syria.svg",
        pastTenseForm: "Syrian",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "Iraq",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/flag%20Iraq.svg",
        pastTenseForm: "Iraqi",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "North",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/North.png",

        colour: "blue",
      },
      {
        type: "textAndIcon",
        displayName: "East",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/East.png",

        colour: "blue",
      },
      {
        type: "textAndIcon",
        displayName: "South",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/South.png",

        colour: "blue",
      },
      {
        type: "textAndIcon",
        displayName: "West",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/West.png",

        colour: "blue",
      },
    ],
  },

  "expanded-learn": {
    rows: 6,
    columns: 9,
    path: "expanded ⇾ learn",
    tiles: [
      {
        type: "link",
        displayName: "Back",
        iconName: "navigate-back",
        linkTo: "expanded",
        colour: "linkColour",
      },
      {
        type: "textAndIcon",
        displayName: "learn",
        pastTenseForm: "learned",
        pluralForm: "learns",
        iconName: "learn",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "link",
        displayName: "Maths",
        iconName: "maths",
        linkTo: "expanded-learn-maths",
        colour: "linkColour",
      },
      {
        type: "link",
        displayName: "Write",
        iconName: "write",
        linkTo: "expanded-learn-write",
        colour: "linkColour",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/to%20write.png.variant-medium-dark.png",
      },
      {
        type: "link",
        displayName: "Shapes",
        iconName: "art",
        linkTo: "expanded-learn-shapes",
        colour: "linkColour",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/shapes.svg",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "write",
        pastTenseForm: "wrote",
        pluralForm: "writes",
        iconName: "write",
        linkTo: "expanded",
        colour: "green",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/write.png.variant-medium.png",
      },
      {
        type: "textAndIcon",
        displayName: "draw",
        pastTenseForm: "drew",
        pluralForm: "draws",
        iconName: "draw",
        linkTo: "expanded",
        colour: "green",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/to%20draw_2.png.variant-medium.png",
      },
      {
        type: "textAndIcon",
        displayName: "paint",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/paint_1.png.varianted-skin.png",
        pastTenseForm: "painted",
        pluralForm: "paints",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "cut",
        pluralForm: "cuts",
        iconName: "cut",
        linkTo: "expanded-topic",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "stick",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/adhesive%20tape.png",
        pastTenseForm: "stuck",
        pluralForm: "sticks",
        linkTo: "expanded-topic",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "glitter",
        iconName: "glitter",
        linkTo: "expanded-topic",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "ruler",
        iconName: "ruler",
        linkTo: "expanded-topic",
        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "pen",
        iconName: "pen",
        linkTo: "expanded",
        colour: "orange",
        pluralForm: "pens",
      },
      {
        type: "textAndIcon",
        displayName: "pencil",
        iconName: "pencil",
        linkTo: "expanded",
        colour: "orange",
        pluralForm: "pencils",
      },
      {
        type: "textAndIcon",
        displayName: "paintbrush",
        pluralForm: "paintbrushes",
        iconName: "paintbrush",
        linkTo: "expanded",
        colour: "orange",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/paint%20brush.svg",
      },
      {
        type: "textAndIcon",
        displayName: "scissors",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/scissors_4.png",
        pastTenseForm: "painted",
        pluralForm: "paints",
        linkTo: "expanded-topic",
        colour: "orange",
        iconName: "scissors",
      },
      {
        type: "textAndIcon",
        displayName: "glue",
        pastTenseForm: "glued",
        pluralForm: "glues",
        iconName: "glue",
        linkTo: "expanded-topic",
        colour: "green",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/to%20paste_1.png.variant-medium.png",
      },
      {
        type: "textAndIcon",
        displayName: "paper",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/paper.png",
        pluralForm: "papers",
        linkTo: "expanded-topic",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "sharpener",
        iconName: "sharpener",
        linkTo: "expanded-topic",
        colour: "orange",
      },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "sharp",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/sharp.svg",
        linkTo: "expanded-topic",
        colour: "blue",
      },
      {
        type: "textAndIcon",
        displayName: "red",
        iconName: "red",
        linkTo: "expanded",
        colour: "white",
      },
      {
        type: "textAndIcon",
        displayName: "orange",
        iconName: "orange-colour",
        linkTo: "expanded",
        colour: "white",
      },
      {
        type: "textAndIcon",
        displayName: "yellow",
        iconName: "yellow",
        linkTo: "expanded",
        colour: "white",
      },
      {
        type: "textAndIcon",
        displayName: "green",
        iconName: "green",
        linkTo: "expanded",
        colour: "white",
      },
      {
        type: "textAndIcon",
        displayName: "blue",
        iconName: "blue",
        linkTo: "expanded",
        colour: "white",
      },
      {
        type: "textAndIcon",
        displayName: "purple",
        iconName: "purple",
        linkTo: "expanded",
        colour: "white",
      },
      {
        type: "textAndIcon",
        displayName: "pink",
        iconName: "pink",
        linkTo: "expanded",
        colour: "white",
      },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "black",
        iconName: "black",
        linkTo: "expanded",
        colour: "white",
      },
      {
        type: "textAndIcon",
        displayName: "white",
        iconName: "white",
        linkTo: "expanded",
        colour: "white",
      },
      {
        type: "textAndIcon",
        displayName: "brown",
        iconName: "brown",
        linkTo: "expanded",
        colour: "white",
      },
      {
        type: "textAndIcon",
        displayName: "grey",
        iconName: "grey",
        linkTo: "expanded",
        colour: "white",
      },
      {
        type: "textAndIcon",
        displayName: "colour",
        pastTenseForm: "coloured",
        pluralForm: "colours",
        iconName: "colour",
        linkTo: "expanded-topic",
        colour: "green",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/to%20colour.png.variant-medium.png",
      },
      {
        type: "textAndIcon",
        displayName: "light",
        iconName: "light",
        linkTo: "expanded-topic",
        colour: "blue",
      },
      {
        type: "textAndIcon",
        displayName: "heavy",
        iconName: "heavy",
        linkTo: "expanded-topic",
        colour: "blue",
      },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "dark",
        iconName: "dark",
        linkTo: "expanded-topic",
        colour: "blue",
      },
    ],
  },

  "expanded-learn-write": {
    rows: 6,
    path: "expanded ⇾ learn ⇾ write",
    columns: 11,
    tiles: [
      {
        type: "link",
        displayName: "back",
        iconName: "navigate-back",
        linkTo: "expanded-topic",
        colour: "linkColour",
      },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "spell",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/to%20cast%20a%20spell%20on.png.varianted-skin.png",
        colour: "green",
      },
      { type: "textOnly", displayName: "word", colour: "orange" },
      {
        type: "textAndIcon",
        displayName: "letter ",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/a%20-%20lower%20case.svg",
        colour: "orange",
        linkTo: "grammar",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textOnly",
        displayName: "⠀q⠀",
        colour: "white",
      },
      {
        type: "textOnly",
        displayName: "⠀w⠀",
        colour: "white",
      },
      {
        type: "textOnly",
        displayName: "⠀e⠀",
        colour: "white",
      },
      {
        type: "textOnly",
        displayName: "⠀r⠀",
        colour: "white",
      },
      {
        type: "textOnly",
        displayName: "⠀t⠀",
        colour: "white",
      },
      {
        type: "textOnly",
        displayName: "⠀y⠀",
        colour: "white",
      },
      {
        type: "textOnly",
        displayName: "⠀u⠀",
        colour: "white",
      },
      {
        type: "textOnly",
        displayName: "i⠀ ⠀",
        colour: "white",
      },
      {
        type: "textOnly",
        displayName: "⠀o⠀",
        colour: "white",
      },
      {
        type: "textOnly",
        displayName: "⠀p⠀",
        colour: "white",
      },
      { type: "blank" },
      {
        type: "textOnly",
        displayName: "⠀a⠀",
        colour: "white",
      },
      {
        type: "textOnly",
        displayName: "⠀s⠀",
        colour: "white",
      },
      {
        type: "textOnly",
        displayName: "⠀d⠀",
        colour: "white",
      },
      {
        type: "textOnly",
        displayName: "⠀f⠀",
        colour: "white",
      },
      {
        type: "textOnly",
        displayName: "⠀g⠀",
        colour: "white",
      },
      {
        type: "textOnly",
        displayName: "⠀h⠀",
        colour: "white",
      },
      {
        type: "textOnly",
        displayName: "⠀j⠀",
        colour: "white",
      },
      {
        type: "textOnly",
        displayName: "⠀k⠀",
        colour: "white",
      },
      {
        type: "textOnly",
        displayName: "⠀l⠀",
        colour: "white",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "textOnly", displayName: "⠀z⠀", colour: "white" },
      { type: "textOnly", displayName: "⠀x⠀", colour: "white" },
      { type: "textOnly", displayName: "⠀c⠀", colour: "white" },
      { type: "textOnly", displayName: "⠀v⠀", colour: "white" },
      { type: "textOnly", displayName: "⠀b⠀", colour: "white" },
      { type: "textOnly", displayName: "⠀n⠀", colour: "white" },
      { type: "textOnly", displayName: "⠀m⠀", colour: "white" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/astronaut.png",
        iconName: "space",
        linkTo: "grammar",
        colour: "grey",
        pronounciation: "space",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
    ],
  },

  "expanded-learn-shapes": {
    rows: 6,
    columns: 9,
    path: "expanded ⇾ learn ⇾ shapes",
    tiles: [
      {
        type: "link",
        displayName: "back",
        iconName: "navigate-back",
        linkTo: "expanded",
        colour: "linkColour",
      },
      {
        type: "textAndIcon",
        displayName: "shape",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/shapes.svg",
        pastTenseForm: "shaped",
        pluralForm: "shapes",

        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "side",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/side.svg",
        pastTenseForm: "sided",
        pluralForm: "sides",

        colour: "red",
      },
      {
        type: "textAndIcon",
        displayName: "corner",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/corner_1.png",
        pastTenseForm: "cornered",
        pluralForm: "corners",

        colour: "red",
      },
      {
        type: "textAndIcon",
        displayName: "2D",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/noun-project/ranges_230_g.svg",

        colour: "blue",
      },
      {
        type: "textAndIcon",
        displayName: "3D",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/noun-project/shape_135_g.svg",

        colour: "blue",
      },
      {
        type: "textAndIcon",
        displayName: "straight",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/noun-project/Ruler_720_g.svg",

        colour: "blue",
      },
      {
        type: "textAndIcon",
        displayName: "curve",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/curved%20line.png",

        colour: "blue",
      },
      {
        type: "textAndIcon",
        displayName: "angle",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/noun-project/Degree-Angle_774_599172.svg",

        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "circle",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/circle.svg",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "triangle",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/triangle%20equilateral.svg",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "square",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/square.svg",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "rectangle",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/rectangle.svg",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "pentagon ",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/pentagon.svg",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "hexagon",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/hexagon.svg",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "octagon",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/octagon.svg",

        colour: "grey",
      },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "sphere",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/sphere_2.png",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "pyramid",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/pyramid_2.png",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "cube",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/bucket_6.png",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "cylinder ",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/cylinder.png",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "cone",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/cone_3.png",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "prism",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/prism.png",

        colour: "grey",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
    ],
  },

  "expanded-learn-maths": {
    rows: 6,
    columns: 9,
    path: "expanded ⇾ learn ⇾ maths",
    tiles: [
      {
        type: "link",
        displayName: "back",
        iconName: "navigate-back",

        colour: "linkColour",
      },
      {
        type: "textAndIcon",
        displayName: "maths",
        iconName: "maths",

        colour: "orange",
      },
      {
        type: "textOnly",
        displayName: "⠀0⠀",
        linkTo: "expanded",
        colour: "grey",
      },
      {
        type: "textOnly",
        displayName: "⠀1⠀",
        linkTo: "expanded",
        colour: "grey",
      },
      {
        type: "textOnly",
        displayName: "⠀2⠀",
        linkTo: "expanded",
        colour: "grey",
      },
      {
        type: "textOnly",
        displayName: "⠀3⠀",
        linkTo: "expanded",
        colour: "grey",
      },
      {
        type: "textOnly",
        displayName: "⠀4⠀",
        linkTo: "expanded",
        colour: "grey",
      },
      {
        type: "textOnly",
        displayName: "⠀5⠀",
        linkTo: "expanded",
        colour: "grey",
      },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "number",
        iconName: "number",

        colour: "orange",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/twemoji/1f522.svg",
      },
      {
        type: "textAndIcon",
        displayName: "count",
        iconName: "count",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "textOnly",
        displayName: "⠀6⠀",
        linkTo: "expanded",
        colour: "grey",
      },
      {
        type: "textOnly",
        displayName: "⠀7⠀",
        linkTo: "expanded",
        colour: "grey",
      },
      {
        type: "textOnly",
        displayName: "⠀8⠀",
        linkTo: "expanded",
        colour: "grey",
      },
      {
        type: "textOnly",
        displayName: "⠀9⠀",
        linkTo: "expanded",
        colour: "grey",
      },
      { type: "textOnly", displayName: "10", colour: "grey" },
      {
        type: "textAndIcon",
        displayName: "hundred",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/twemoji/1f4af.svg",

        colour: "grey",
      },
      {
        type: "textAndIcon",
        displayName: "how many",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/how%20many_1.png",
        linkTo: "expanded",
        colour: "pink",
      },
      {
        type: "textAndIcon",
        displayName: "add",
        pastTenseForm: "added",
        pluralForm: "adds",
        iconName: "add",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "minus",
        iconName: "minus",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "times",
        iconName: "times",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "divide",
        iconName: "divide",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "equals",
        iconName: "equals",
        linkTo: "expanded",
        colour: "green",
      },
      {
        type: "textAndIcon",
        displayName: "times table",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/multiplication.png",
        pluralForm: "times tables",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "thousand",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/one%20thousand.png",
        linkTo: "expanded",
        colour: "grey",
      },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "whole",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/whole.svg",

        colour: "blue",
      },
      {
        type: "textAndIcon",
        displayName: "half",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/half.svg",
        linkTo: "expanded",
        colour: "blue",
        pastTenseForm: "halved",
        pluralForm: "halves",
      },
      {
        type: "textAndIcon",
        displayName: "quarter",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/quarter.svg",
        pastTenseForm: "quartered",
        pluralForm: "quarters",
        linkTo: "expanded",
        colour: "blue",
      },
      {
        type: "textAndIcon",
        displayName: "third",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/one%20third.svg",
        pluralFormPronounciation: "thirds",
        linkTo: "expanded",
        colour: "blue",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "million",
        pluralForm: "millions",

        colour: "grey",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
    ],
  },

  "expanded-topic": {
    rows: 6,
    columns: 9,
    path: "expanded ⇾ topic",
    tiles: [
      {
        type: "link",
        displayName: "Back",
        iconName: "navigate-back",
        colour: "linkColour",
        linkTo: "expanded",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "animal",
        pluralForm: "animals",
        iconName: "animal",
        colour: "orange",
        linkTo: "expanded",
      },
      {
        type: "link",
        displayName: "Domestic",
        iconName: "domestic",
        colour: "linkColour",
        linkTo: "expanded-topic-domestic",
      },
      {
        type: "link",
        displayName: "Wild",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/wild.png",
        colour: "linkColour",
        linkTo: "expanded-topic-wild",
      },
      {
        type: "link",
        displayName: "Birds",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/birds_2.png",
        colour: "linkColour",
        linkTo: "expanded-topic-birds",
      },
      {
        type: "link",
        displayName: "Water",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/sea.png",
        colour: "linkColour",
        linkTo: "expanded-topic-water",
      },
      {
        type: "link",
        displayName: "Insects",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/insects.png",
        colour: "linkColour",
        linkTo: "expanded-topic-insects",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "link",
        displayName: "Vehicles[missing]",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/vehicles.png",
        colour: "linkColour",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
    ],
  },

  "expanded-topic-domestic": {
    rows: 6,
    columns: 9,
    path: "expanded ⇾ topic ⇾ domestic",
    tiles: [
      {
        type: "link",
        displayName: "back",
        iconName: "navigate-back",
        linkTo: "expanded",
        colour: "linkColour",
      },
      {
        type: "textAndIcon",
        displayName: "pet",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/pet.png",
        pluralForm: "pets",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "cat",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/cat.png",
        pluralForm: "cats",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "dog",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/dog.png",
        pluralForm: "dogs",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "rabbit",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/rabbit.svg",
        pluralForm: "rabbits",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "hamster",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/hamster.svg.varianted-skin.svg",
        pluralForm: "hamsters ",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "tortoise",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/tortoise_1.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "Guinea pig",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/hamster.png",
        pluralForm: "guinea pigs",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "ferret",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/ferret.svg",
        pluralForm: "ferrets",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "mouse",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/mouse.svg.varianted-skin.svg",
        pluralForm: "mice",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "rat",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/rat.png",
        pluralForm: "rats",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "farm",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/farm.png",
        pluralForm: "farms",
        linkTo: "expanded",
        colour: "red",
      },
      {
        type: "textAndIcon",
        displayName: "cow",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/cow.png",
        pluralForm: "cows",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "sheep",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/sheep.svg",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "chicken",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/chicken.png",
        pluralForm: "chickens",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "goat",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/goat_1.png.varianted-skin.png",
        pluralForm: "goats ",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "horse",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/horse.png",
        pluralForm: "horses",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "pig",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/pig.png",
        pluralForm: "pigs",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "donkey",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/donkey.svg",
        pluralForm: "donkies ",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "fur",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/animal%20hair.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "claw",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/claw.png",
        pluralForm: "claws",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "whisker",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/whiskers.svg",
        pluralForm: "whiskers",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "tail",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/tail.png",
        pluralForm: "tails",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "horn",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/horn.png",
        pluralForm: "horns",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "wool",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/noun-project/Sheep_221_6472.svg",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
    ],
  },

  "expanded-topic-wild": {
    rows: 6,
    columns: 9,
    path: "expanded ⇾ topic ⇾ wild",
    tiles: [
      {
        type: "link",
        displayName: "back",
        iconName: "navigate-back",
        linkTo: "expanded",
        colour: "linkColour",
      },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "wild",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/wild.png",
        linkTo: "expanded",
        colour: "blue",
      },
      {
        type: "textAndIcon",
        displayName: "zoo",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/zoological%20garden.png",
        linkTo: "expanded",
        colour: "red",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "hedgehog",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/hedgehog.svg",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "fox",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/fox.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "badger",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/badger%202.svg",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "racoon",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/racoon.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "skunk",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/skunk.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "squirrel",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/squirrel_1.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "deer",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/deer.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "meerkat",
        iconName: "needs a symbol ",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "kangaroo ",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/kangaroo.png",
        pluralForm: "kangaroos",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "lion",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/lion_1.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "tiger",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/tiger.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "cheetah",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/cheetah.svg",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "wolf",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/wolf.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "bear",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/bear.svg",
        pluralForm: "bears",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "camel",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/dromedar_1.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "llama",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/llama.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "warthog",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/boar.png",
        pluralForm: "warthogs",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "rhino",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/rhinoceros.svg",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "hippo",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/hippopotamus.png",
        pluralForm: "hippos",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "elephant",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/elephant.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "giraffe",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/giraffe.svg",
        pluralForm: "giraffes",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "zebra",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/zebra.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "gazelle",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/gazelle.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "porcupine ",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/porcupine.svg",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "monkey",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/monkey.png",
        pluralForm: "monkies",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "gorilla",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/gorilla.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "panda",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/panda.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "koala",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/koala.png",
        pluralForm: "koalas",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "sloth",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/sloth.png",
        pluralForm: "sloths",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "lizard",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/lizard.png",
        pluralForm: "lizards",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "snake",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/snake.png",
        pluralForm: "snakes",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "iguana",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/iguana.png",
        pluralForm: "iguanas",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
    ],
  },

  "expanded-topic-water": {
    rows: 6,
    columns: 9,
    path: "expanded ⇾ topic ⇾ water",
    tiles: [
      {
        type: "link",
        displayName: "back",
        iconName: "navigate-back",
        linkTo: "expanded",
        colour: "linkColour",
      },
      {
        type: "textAndIcon",
        displayName: "fish",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/fish.png",
        pastTenseForm: "fished",
        pluralForm: "fishes",
        linkTo: "expanded",
        colour: "green",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "octopus",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/octopus_1.png",
        pluralForm: "octopuses ",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "sting ray",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/manta.png",
        pluralForm: "sting rays",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "eel",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/eel.png",
        pluralForm: "eels",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "star fish",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/noun-project/Starfish_717_469915.svg",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "jelly fish",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/jellyfish.svg.varianted-skin.svg",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "seaweed",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/seaweed_1.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "crab",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/crab.svg",
        pluralForm: "crabs",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "lobster",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/lobster.png",
        pluralForm: "lobsters",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "oyster",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/oyster%202.svg",
        pluralForm: "oysters",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "clam",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/clam.png",
        pluralForm: "clams",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "pebble",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/rock.png",
        pluralForm: "pebbles",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "dolphin",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/dolphin.png",
        pluralForm: "dolphins",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "shark",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/shark.png",
        pluralForm: "sharks",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "whale",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/whale.png",
        pluralForm: "whales",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "turtle",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/turtle.svg",
        pluralForm: "turtles",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "blank",
        displayName: "",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/sand.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "frog",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/frog_1.png",
        pluralForm: "frogs",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "crocodile",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/crocodile%202.svg",
        pluralForm: "crocodiles",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "seal",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/seal.png",
        pluralForm: "seals",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "otter",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/otter.png",
        pluralForm: "otters",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "beaver ",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/beaver.png",
        pluralForm: "beavers ",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "sea lion",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/sea%20lion.png",
        pluralForm: "sea lions",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "polar bear",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/polar%20bear.png",
        pluralForm: "polar bears",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "shell",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/shells.svg",
        pluralForm: "shells",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "fin",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/fin.png",
        pluralForm: "fins",
        linkTo: "expanded",
        colour: "orange",
      },
    ],
  },

  "expanded-topic-birds": {
    rows: 6,
    columns: 9,
    path: "expanded ⇾ topic ⇾ birds",
    tiles: [
      {
        type: "link",
        displayName: "back",
        iconName: "navigate-back",
        linkTo: "expanded",
        colour: "linkColour",
      },
      {
        type: "textAndIcon",
        displayName: "bird",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/birds_2.png",
        pluralForm: "birds",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "bird of prey",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/bird%20of%20prey%20.png",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "songbird",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/budgie.svg",
        pluralForm: "songbirds",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "flightless bird",
        pluralForm: "flightless birds",
        iconName: "add symbol",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "sparrow",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/sparrow.png",
        pluralForm: "sparrows",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "robin",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/robin.svg",
        pluralForm: "robins",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "pigeon",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/pigeon_1.png",
        pluralFormPronounciation: "pigeons",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "magpie",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/magpie.png",
        pluralForm: "magpies ",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "raven",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/raven.png",
        pluralForm: "ravens",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "seagull",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/seagull.svg.varianted-skin.svg",
        pluralForm: "seagulls",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "owl",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/owl_1.png",
        pluralForm: "owls",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "eagle",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/eagle.png",
        pluralForm: "eagles",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "vulture",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/vulture.png",
        pluralForm: "vultures",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "duck",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/duck.svg",
        pluralForm: "ducks",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "goose",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/goose.png",
        pluralForm: "geese",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "swan",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/swan.png",
        pluralForm: "swans",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "pelican ",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/pelican.png",
        pluralForm: "pelicans",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "turkey",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/turkey.svg",
        pluralForm: "turkies ",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "parrot",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/parrot.png",
        pastTenseForm: "parroted ",
        pluralForm: "parrots",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "canary",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/canary.png",
        pluralForm: "canaries",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "flamingo ",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/flamingo.svg.varianted-skin.svg",
        pluralForm: "flamingoes",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "puffin",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/puffin.svg",
        pluralForm: "puffins",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "penguin",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/penguin_1.png",
        pluralForm: "penguins",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "ostrich",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/ostrich.png",
        linkTo: "expanded",
        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "wing",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/wing.svg",
        pastTensePronounciation: "winged",
        pluralForm: "wings",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "beak",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/beak.svg",
        pluralForm: "beaks",
        linkTo: "expanded",
        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "feather",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/feather_1.png",
        pastTenseForm: "feathered",
        pluralForm: "feathers",
        linkTo: "expanded",
        colour: "orange",
      },
    ],
  },

  "expanded-topic-insects": {
    rows: 6,
    columns: 9,
    path: "expanded ⇾ topic ⇾ insects",
    tiles: [
      {
        type: "link",
        displayName: "back",
        iconName: "navigate-back",
        linkTo: "expanded",
        colour: "linkColour",
      },
      {
        type: "textAndIcon",
        displayName: "insect",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/insect.png",
        pluralForm: "insects",

        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "bug",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/beetle.png",
        pastTenseForm: "bugged",
        pluralForm: "bugs",

        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "slimy",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/sticky.svg.varianted-skin.svg",

        colour: "blue",
      },
      {
        type: "textAndIcon",
        displayName: "ant",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/ant.svg",
        pluralForm: "ants",

        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "ladybird",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/ladybug.png",
        pluralForm: "ladybirds",

        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "spider",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/spider.svg",
        pluralForm: "spiders",

        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "bee",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/bee%20bumble.svg",
        pluralForm: "bees",

        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "wasp",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/wasp.png",
        pluralForm: "wasps",

        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "worm",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/worm_1.png",
        pluralForm: "worms",

        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "beetle",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/beetle.svg",
        pluralForm: "beetles",

        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "caterpillar ",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/caterpillar.svg",
        pluralForm: "caterpillars",

        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "butterfly",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/butterfly.png",
        pluralForm: "butterflies",

        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "grasshopper",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/grasshopper_2.png",
        pluralForm: "grasshoppers",

        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      {
        type: "textAndIcon",
        displayName: "slug",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/slug.svg",
        pluralForm: "slugs",

        colour: "orange",
      },
      {
        type: "textAndIcon",
        displayName: "snail",
        iconLink:
          "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/snail_1.png",
        pluralForm: "snails",

        colour: "orange",
      },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
      { type: "blank" },
    ],
  },
};

export { expanded };
