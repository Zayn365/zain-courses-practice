const express = require('express');
const cors = require('cors');
const app = express();
const { MongoClient, ObjectId } = require('mongodb');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://<YOUR USERNAME>:<YOUR PASSWORD>@practicedb.vr32kzn.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

(async () => {
  try {
    await client.connect();
    console.log('DB CONNECTED');
  } catch (error) {
    console.log('Not Connected');
  }
})();

app.post('/', async (req, res) => {
  const collection = client.db('test').collection('todos');
  await collection.insertOne(req.body);
  const document = await collection.find().toArray();
  res.send(document);
});

app.get('/', async (req, res) => {
  const collection = client.db('test').collection('todos');
  const document = await collection.find().toArray();
  res.send(document);
});

app.put('/:id', async (req, res) => {
  const getId = String(req.params.id);
  console.log(getId)
  const newData = req.body.task;
  const update = { $set: { task: newData } };
  const collection = client.db('test').collection('todos');
  const Id = { _id : new ObjectId(getId) };
  const options = { returnOriginal: false };
  const updatedList = await collection.findOneAndUpdate(Id, update, options);
  console.log(updatedList);
  res.send(updatedList.value);
});

app.delete('/:id', async (req, res) => {
  const rem = parseInt(req.params.id);
  const collection = client.db('test').collection('todos');
  console.log(rem);
  const id = { id : rem };
  const deletedDocument = await collection.findOneAndDelete(id);
  res.send(deletedDocument.value);
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
