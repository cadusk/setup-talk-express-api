const express = require('express')

app = express()

app.get('/', (req, res) => {
  const me = req.query.me || "Setup Talk"
  res.json({ message: `Hello, ${me}` })
})

app.get('/throw', (req, res) => {
  throw ("paaam!")
})

// in the end, no routes matched
app.use((req, res, next) => {
  return res.status(404).json( {
    message: "It's not in there!"
  })
})

app.use((err, req, res, next) => {
  return res.status(500).json({
    error: err,
    message: "dude... what did you do?!??!"
  })
})

module.exports = app
