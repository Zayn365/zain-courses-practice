const express = require('express');
const cors = require('cors');
const app = express();
const { MongoClient , ServerApiVersion , ObjectId }  = require('mongodb');
const arr = [];

app.use(cors());
app.use(express.json()); // add this line to parse incoming JSON payloads
var obj = {id: 1 , task: 'Getting Ready for Interview'};
const uri = 'mongodb+srv://zaynsaeed365:password321456@practicedb.vr32kzn.mongodb.net/'
// arr.push(obj);

const client = new MongoClient(uri , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1
})
//   console.log('DB CONNECTING');
{
    async () => {
  try {
    await client.connect();
    console.log("DB CONNECTED")
  }
  catch(error) {
    console.log('Not Connected')
  }
}
}

app.post('/' , async (req,res) => {
    const collection = client.db('test').collection('todos');
    const document = await collection.find().toArray();
    await collection.insertOne(req.body);
    res.send(document);
})

app.get( '/' , async (req , res) => {
    const collection = client.db('test').collection('todos');
    const document = await collection.find().toArray();
    res.send(document);
})

app.put('/:id' , async (req , res) => {
   const id = parseInt(req.params.id);
   const task = req.body.task
   //    const userIndex = arr.findIndex(val => val.id === id);
//   const queryId = { id : new ObjectId(id) };
  const update = { task : task };

  try {
  const collection = client.db('test').collection('todos');
  await collection.updateOne(id , update);
  const console.log('Hello')
  const document = await collection.find().toArray();
  res.send(document);
  }catch(error) { res.status(500).send(error); }
//    if(userIndex === -1) {
//     return res.status(404).send('User not found');
//    }
   
//    const updatedUser = { id, task: req.body.task };
//    arr.splice(userIndex, 1, updatedUser);

//    res.send(updatedUser);

})

app.delete('/:id' , (req , res) => {
    const rem = parseInt(req.params.id);
    const remSend = arr.filter(val => val.id !== rem);

    res.send(remSend);
} ) 

app.listen(5000);
