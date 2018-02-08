const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// the funciton is called every time someone makes a get request to server
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// port: 3000
app.listen(port, () => {
    console.log("server is up ......");
});
