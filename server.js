const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const app = express();


app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());


//api endpoints


app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


const port = process.env.PORT || 5000;
app.listen(port);


console.log('App is listening on port ' + port);