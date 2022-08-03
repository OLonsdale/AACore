let cat = {
  rows: 6,
  columns: 10,
  tiles: [
    {
      type: "link",
      displayName: "Back",
      iconName: "navigate-back",
      linkTo: "expanded",
      colour: "linkColour",
    },
    {
      type: "blank",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "pyjamas",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/pyjama.png",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "scarf",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/scarf.png",
      pluralForm: "scarves",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "glove",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/glove_1.png",
      pluralForm: "gloves",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "dressing gown",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/bathrobe.png",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "jacket",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/jacket.svg",
      pluralForm: "jackets",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "jumper",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/jumper.svg",
      pluralForm: "jumpers",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "cardigan",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/cardigan_1.png",
      pluralForm: "cardigans",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "uniform",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/shirt.svg",
      pastForm: "uniformed",
      pluralForm: "uniforms",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "tee",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/t-shirt.svg",
      pluralForm: "tees",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "vest",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/vest.svg",
      pluralForm: "vests",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "polo",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/polo%20neck.png",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "dress",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/dress_10.png",
      pastForm: "dressed",
      pluralForm: "dresses",
      iconName: "dress",
      linkTo: "expanded",
      colour: "green",
    },
    {
      type: "textAndIcon",
      displayName: "skirt",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/skirt.png",
      pluralForm: "skirts",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "shorts",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/shorts.svg",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "jean",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/jeans.png",
      pluralForm: "jeans",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "knickers",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/knickers.svg.varianted-skin.svg",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "boxers",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/boxer%20shorts.svg",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "bra",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/bra.png",
      pluralForm: "bras",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "suit",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/suit%20-%20mans.svg",
      pastForm: "suited",
      pluralForm: "suits",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "tie",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/tie.svg",
      pastForm: "tied",
      pluralForm: "ties",
      linkTo: "expanded",
      colour: "green",
    },
    {
      type: "textAndIcon",
      displayName: "costume",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/bathing%20costume.png",
      pluralForm: "costumes",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "trunks",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/swimming%20trunks.svg",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "goggles",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/swimming%20goggles.png",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "bikini",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/bikini.png",
      pluralForm: "bikinis",
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
    {
      type: "textAndIcon",
      displayName: "ear defenders",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/ear%20muffs.svg",
      linkTo: "expanded",
      colour: "orange",
    },
    { type: "blank" },
    { type: "blank" },
    {
      type: "textAndIcon",
      displayName: "ring",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/ring_1.png",
      pastForm: "ringed",
      pluralForm: "rings",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "necklace",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/necklace%202.svg.varianted-skin.svg",
      pluralForm: "necklaces",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "earring",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/earrings.svg",
      pluralForm: "earrings",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "bracelet",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/wristband_1.png",
      pluralForm: "bracelets",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "jewellery",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/jewellery.svg",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "makeup",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/make%20up.svg.varianted-skin.svg",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "lipstick",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/make%20up.png",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "blusher",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/blusher.svg",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "mascara",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/mascara.png",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "nail varnish",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/nail%20polish.svg.varianted-skin.svg",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "boot",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/ankle%20boots.png",
      pastForm: "booted",
      pluralForm: "Boots",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "welly",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/wellington%20boots.svg",
      pluralForm: "wellies",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "sandal",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/sandals.png",
      pluralForm: "sandals",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "flipflop ",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/shoes_6.png",
      pluralForm: "flipflops",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "trainer",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/trainers.svg.varianted-skin.svg",
      pluralForm: "trainers",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "slipper",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/trainers-slippers.png",
      pluralForm: "slippers",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "insole",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/sclera/insole.png",
      pluralForm: "insoles",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "tights",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/mulberry/tights.svg.varianted-skin.svg",
      linkTo: "expanded",
      colour: "orange",
    },
    { type: "blank" },
    { type: "blank" },
    {
      type: "textAndIcon",
      displayName: "sleeve",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/sleeve.png",
      pastForm: "sleeved",
      pluralForm: "sleeves",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "button",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/button.png",
      pastForm: "buttoned",
      pluralForm: "buttons",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "zip",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/sclera/zip.png",
      pastForm: "zipped",
      pluralForm: "zips",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "velcro ",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/sclera/Velcro.png",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "lace",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/to%20tie%20a%20bow.png.varianted-skin.png",
      pastForm: "laced",
      pluralForm: "laces",
      linkTo: "expanded",
      colour: "orange",
    },
    {
      type: "textAndIcon",
      displayName: "hood",
      iconLink:
        "https://d18vdu4p71yql0.cloudfront.net/libraries/arasaac/hood.png",
      pastForm: "hooded",
      pluralForm: "hoods",
      linkTo: "expanded",
      colour: "orange",
    },
    { type: "blank" },
    { type: "blank" },
    { type: "blank" },
    { type: "blank" },
  ],
  topLevel: true,
  customBoard: true,
};
