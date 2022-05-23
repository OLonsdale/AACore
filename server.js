const express = require("express")
const path = require("path")
const logger = require("morgan")

const app = express()

app.use(logger("short"))

app.use(express.static(path.join(__dirname,"public")))

app.use((req, res) => { res.redirect("./public/index.html") })
const PORT = process.env.PORT || 5500
app.listen(PORT, console.log(`Server running on ${PORT}`))