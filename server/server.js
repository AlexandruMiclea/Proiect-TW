const express = require('express');
const app = express();

app.get('/index.html', function (req, res) {
    res.send('Hello World!');
});

app.use((req, res, next) => {
    res.status(404).sendFile("/views/404.html");
});

app.listen(process.env.PORT || 3000);