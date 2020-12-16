const MongoClient=require('mongodb').MongoClient;
const assert=require('assert');


const url=process.env.URI||'mongodb://localhost:27017/';

const dbname='conFusion';


MongoClient.connect(url,{ useUnifiedTopology: true } ,(err, client)=>{



    assert.equal(err,null);

    console.log('connected correctly to the server');
    const db =client.db(dbname);
    const collection=db.collection('dishes'); //changed to var caused an error?


collection.insertOne({"name":"HOHO", "description":"HEHE"},(err,result)=>{

    assert.equal(err,null);

console.log('After insert ');
console.log(result.ops);
});



collection.find({}).toArray((err,docs)=>{
    assert.equal(err,null);
    console.log('Found:');
    console.log(docs);

    db.dropCollection('dishes', (err,result)=>{
        assert.equal(err,null);
        
        client.close();

    });
    
    
});


})
