const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send("Node.js test page.");
});

app.listen(9000, () => {
    console.log("Node.js server started at port 9000.")
});

process.on('unhandledRejection', (reason, p) => {
    console.error(reason, 'Unhandled rejection at Promise', p);
});

process.on('uncaughtException', err => {
    console.error(err, 'Uncaught exception thrown');
});