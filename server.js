// //console.log("Hello")
// let x = {message : {text: "Hello"} }
// console.log(x.message.text.length)
// const y = [1, 2, 3]
// console.log(y[2])


const express = require('express')
const app = express()
const port = 3000
const messages_list = [
]


app.get('/message', (req, res) => {
  messages_list.push(req.query.text)
  res.statusCode = 200
  res.send()
})

app.get('/read', (req, res) => {
  res.send(messages_list)
  console.log(messages_list)
})

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


