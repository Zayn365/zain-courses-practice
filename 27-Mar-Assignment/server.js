const express = require('express');
const cors = require('cors');
const app = express();
const arr = [];

app.use(cors());
app.use(express.json()); // add this line to parse incoming JSON payloads
var obj = {id: 1 , task: 'Getting Ready for Interview'};
arr.push(obj);


console.log(arr);


app.post('/' , (req,res) => {
    arr.push(req.body);
    res.send(arr);
})

app.get( '/' , (req , res) => {
    res.send(arr);
})

app.put('/:id' , (req , res) => {
   const id = parseInt(req.params.id);
   const userIndex = arr.findIndex(val => val.id === id);

   if(userIndex === -1) {
    return res.status(404).send('User not found');
   }
   
   const updatedUser = { id, task: req.body.task };
   arr.splice(userIndex, 1, updatedUser);

   res.send(updatedUser);

})

app.delete('/:id' , (req , res) => {
    const rem = parseInt(req.params.id);
    const remSend = arr.filter(val => val.id !== rem);

    res.send(remSend);
} ) 

app.listen(5000);
