const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const bodyParser = require('body-parser')
const bourbon = require('bourbon')



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.uses(bourbon)

app.use(express.static('public'));

app.listen(PORT, ()=> {
  console.log(`Listening on port YA! ${PORT}`)
})

module.exports = app, bourbon
