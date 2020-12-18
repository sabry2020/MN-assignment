

<h1>Downloading and Installing MongoDB</h1>
Go to http://www.mongodb.org, then download and install MongoDB as per the instructions given there.
Create a folder named mongodb on your computer and create a subfolder under it named data.
Move to the mongodb folder and then start the MongoDB server by typing the following at the prompt:<code> mongod --dbpath=data --bind_ip 127.0.0.1</code>
 Then:
 Open another command window and then type the following at the command prompt to start the mongo REPL shell:
 <code> mongo</code>
 
 Then ..<strong>Clone this repository </strong> and then have fun playing around with some commands  Like(in Order):
 <code>db </code>
    <code>use conFusion</code>
    <code>db</code>
     <code>db.help()</code>
     <h1>Have fun making some operations</h1>
     <div>
 <code>
  db.dishes.insert({ name: "Uthappizza", description: "Test" });
 </code>
 </div>
    <div>
 <code>
  db.dishes.find().pretty();
 </code>
 </div>
     
