# An Open Source Augmentative and Alternative Communication Web App

## How the project was described

- A series of grids of tiles, containing a word and an icon.
- You click an icon and the word is spoken.
- Each tile has a background colour.

## How the project turned out

- When a word is clicked, it is added to a "sentence". The words in the sentence can be spoken together with the play button.
- Not all words have icons.
- The same word may be used in different contexts, and will require different icons. E.g orange the colour and orange the fruit.
- Some icons are links to other grids, and those grids need to return you to the last grid upon clicking an item.
- Some words need to be pronounced differently to how they are written.
- Numbers need to be spoken not as individual words. adding 2 and 3 to the sentence should be spoken "twenty-three".
- Not all grids are the same size.
- The layout of the grids must be consistant accross devices.
- Some icons need to modify other icons on the grid.
- There needs to be a button to change the last word into its plural form.
- There needs to be a locakable settings menu.

## Notes

Icons from [opensymbols.org](opensymbols.org)

Voices from the speech engine of each device

Grids designed by Beth Lonsdale

System developed in vanilla HTML, Javascript and CSS, using visual studio code.

Tile grids are defined as JSON objects, and rendered on the client side via javascript.

Icons are all PNG files stored on the server.

[Live version](https://aacore.herokuapp.com/) hosted on Google Firebase

Installable as a PWA for offline use.
