const MongoClient=require('mongodb').MongoClient;
const assert=require('assert');
const dboper=require('./operations');
const url=process.env.URI||'mongodb://localhost:27017/';
const dbname='conFusion';



MongoClient.connect(url.then((client)=>{



    assert.equal(err,null);

    console.log('connected correctly to the server');
    const db =client.db(dbname);

dboper.insertDocument(db,{name:"Mohamed",description:"my name is mohamed "}, 'dishes')
.then((result)=>{

console.log('Inserted the Document \n ', result.ops);
dboper.findDocument(db, 'dishes', (document)=>{
    console.log('Found '+document);
});

    dboper.updateDocument(db, {name:"Ashraf",description:"Mohamed to ashraf "},(result)=>{
console.log(`Updated document`, result.result);

    
dboper.findDocuments(db, "dishes", (docs) => {
    console.log("Found Updated Documents:\n", docs);
    
    db.dropCollection("dishes", (result) => {
        console.log("Dropped Collection: ", result);

        client.close();
          });
        });
      });
   });
}).catch((err)=>console.log(err));
