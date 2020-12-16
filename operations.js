//encapsulation of the operations of the database 
const assert=require('assert');



exports.insertDocument=(db, document, collection,callback)=>{
const coll=db.collection(collection);
return coll.insert(document);



};

exports.findDocument=(db,collection,callback)=>{
    //finds all the docs 
    const coll=db.collection(collection);
    return coll.find({}).toArray();

    
};
exports.removeDocument=(db, document, collection,callback)=>{
    const coll=db.collection(collection);
    assert.equal(err,null);
    return coll.deleteOne(document);


    
};
exports.updateDocument=(db, document, update, collection,callback)=>{
     const coll=db.collection(collection);
     assert.equal(err,null);
     return coll.updateOne(document, {$set:update},null)
};
