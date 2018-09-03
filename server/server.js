const path = require('path');
const express = require('express');
const publicPath  = path.join(__dirname + '/../public');

var app = express();
app.use(express.static(publicPath));

const port = process.env.PORT || 3000;
app.get((req,res)=>{
  res.send(index.html);
},(err)=>{
  console.log("error ocurred.....");
});

app.listen(port,(err)=>{
  if(err){
    return console.log("Error ocurred");
  }
  console.log(`listening on port ${port}....`);
})
