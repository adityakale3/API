const express = require('express');
const app = express();
const apiCreate = require('./api/addCat');


app.use('/api/create', apiCreate);

app.listen(3000, () => {
    console.log('Server Up and Running');
});