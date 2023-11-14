const express = require('express');
const cors = require('cors');
const db = require('./data');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json(db);
})

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})