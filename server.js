var express=require('express');
var app=express();
var bodyparser=require('body-parser');
var cors=require('cors');
app.use(bodyparser.urlencoded({
	extended: true
}));
app.use(bodyparser.json());
app.use(cors());
var MongoClient = require('mongodb').MongoClient;
var url='mongodb://Chatuser:Chat123@ds111072.mlab.com:11072/chatdb'
app.post('/signup',function(req,res){
console.log(req.body.firstname);
MongoClient.connect(url, function(err, db) 
{
 if (err) throw err;
  var dbo = db.db("chatdb");
  var myobj = { firstname: req.body.firstname, lastname: req.body.lastname,u_name:req.body.username,Password:req.body.password};
 
  dbo.collection("Users").insertOne(myobj, function(err, res) {
     if (err) throw err;
      console.log("1 row inserted");
     db.close();
   });
  res.send("1");

});

})

app.post('/login',function(req,res){
	MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("chatdb");
   var query =  { "$and": [
        {
            "u_name": req.body.username
        },
        {
            "Password": req.body.password
        }
    ]
}
  dbo.collection("Users").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result.length);
    if(result.length==0)
    {
    	res.send("0");
    }
    else
    {
    	res.send("1");
    }
    db.close();

  });
});

})

app.post('/findusers',function(req,res){
  MongoClient.connect(url,function(err,db){
  	if(err) throw err;
  	var dbo=db.db("chatdb");
    var query= {
      "u_name" : { "$ne" : req.body.username }
    }
    dbo.collection("Users").find(query).toArray(function(err,result){
    if (err) throw err;
    console.log(result);
    var k=[];
    if(result.length>0)
    {
     for(var i=0;i<result.length;i++)
     {
      k.push(result[i].u_name);
      console.log(k[i]);
     }
     console.log(k);
     res.send(k);
    }

    db.close();
  });
  	
  	

  })

})
app.listen(5000);




