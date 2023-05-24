const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.status(404).sendFile("404.html");
  });

app.listen(process.env.PORT || 3000);