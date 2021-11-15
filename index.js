const express =require('express')
const app =express();
const { MongoClient } = require('mongodb');
const port =process.env.PORT || 5000;
// app.use(cors());
// app.use(express.json());

// fakeData
// CMtquB1gvfUGLFsj

const uri = "mongodb+srv://fakeData:CMtquB1gvfUGLFsj@cluster0.elm9b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
async function run() {
    try {
      await client.connect();
      const database = client.db("User_Collection");
      const userCollectiion = database.collection("users");
      // create a document to insert
      const doc = {
        name:"Jamal Sheakh",
        email : "alrabbism@gmail.com"
      }
      const result = await userCollectiion.insertOne(doc);
      console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } finally {
    //   await client.close();
    }
  }
  run().catch(console.dir);



app.get('/' , (req ,res) => {
    res.send('hello every one')
})
app.listen(port, () =>{
    console.log('Start our server ', port)
})