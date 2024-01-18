const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'))


app.get('/', (req, res) => {
  res.send("here I should have sent index.ejs; this line must be changed")
})

app.get('/numbers', (req, res) => {
  let { lower, upper, count, col } = req.query;
  lower = Math.ceil(lower);
  upper = Math.floor(upper);
  let rangeSize = upper - lower + 1;
  let generator = () => Math.ceil(Math.random() * rangeSize) + lower - 1;
  let results = Array(Number(count)).fill(0).map(generator)
  let diceType;
  if (lower === 1 && [4, 6, 8, 10, 12, 20].includes(upper)) {
    diceType = upper;
  }
  // let counts = {};
  // for (let r of results) {
  //   counts[r] = (counts[r]||0) + 1; 
  // }
  res.send("here I should have sent numbers.ejs; this line must be changed")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
