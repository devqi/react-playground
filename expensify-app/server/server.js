const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));

// the funciton is called every time someone makes a get request to server
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// port: 3000
app.listen(3000, () => {
    console.log("server is up ......");
});
