const express = require("express");
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen("3000",(req,res)=>{
  console.log("server started");
});
