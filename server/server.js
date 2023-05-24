const express = require('express');
const app = express();

app.get('*', function(req, res){
  res.status(404).sendFile(__dirname + '/404.html');
});

app.listen(process.env.PORT || 3000, () => {
  console.log("server started!");
});