// //console.log("Hello")
// let x = {message : {text: "Hello"} }
// console.log(x.message.text.length)
// const y = [1, 2, 3]
// console.log(y[2])


const express = require('express')
const app = express()
const port = 3000
const Message = require('./models/message');

app.use(express.json());


app.get('/message', async (req, res) => {
 const messageText = req.query.text;
 if (messageText){
  const message = new Message({text: messageText});
  await message.save();
  res.status(200).send();
  } else{
    res.status(400).send('Message text is required');
  }
});

app.get('/read', async (req, res) => {
  const message = await Message.find().sort({createdAt: -1});
  res.json(message);
});

app.get('/',  (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});


