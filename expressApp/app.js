const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const path = require('path')

app.use(express.json());

app.get('/', (req, res) => {
  res.send("hello")
})

app.get('/cars/:brand', (req, res) => {
  const {brand} = req.params
  const data = fs.readFileSync(path.join(__dirname, './database.json'), { encoding: 'utf8' });
  const parsedData = JSON.parse(data);
  const car = parsedData.cars.find(x => x.brand === brand)
  if (!car) {
    res.send("there is no such car")
  }
  res.send(car)
})

app.post('/car', (req, res) => {
  const car = req.body
  const data = fs.readFileSync(path.join(__dirname, './database.json'), { encoding: 'utf8' });
  const parsedData = JSON.parse(data);
  const newData = { cars: [...parsedData.cars, car] }
  const jsonData = JSON.stringify(newData);
  fs.writeFileSync(path.join('./database.json'), jsonData)
  res.send(car)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})