const express = require('express');
const path = require('path');
const members = require('./Members')

const app = express();

const logger = (req, res, next) => {
    console.log('hello');
    next();
}

//in order to use the middleware
app.use(logger);

//json response
app.get('/api/members', (req, res) => {
    res.json(members);
});


//set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
