const express = require('express');
require('./db/connection.js');
const User = require('./db/models/user-model');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send({
        "message" : "success",
        "status" : "200"
    });
})

app.post('/user', async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        res.send(req.body);
    } catch(error) {
        console.log(error);
    }
});

app.listen(3000, () => {
    console.log('listening');
})