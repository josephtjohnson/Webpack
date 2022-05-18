const dotenv = require('dotenv');
dotenv.config();
const apiKey = process.env.API_KEY;
const endpoint = process.env.END_POINT;
console.log(`Your API key is ${process.env.API_KEY}`);

var path = require('path')
const express = require('express')

//mockAPI for testing
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

const apiCall = async(req, res) => {
    if (Object.keys(req.body).length === 0) {
        res.status(400).send('Please ensure your input is not empty');
        res.send('API not accessed');
    }
    const txt = req.body;
    console.log(dataCall);
    const response = await fetch ('${endpoint}key=${apiKey}txt=${txt}&lang=en');
    try {
        const data = await response.json();
        console.log(data);
        res.send(data);
    }
    catch (e) {
        console.log('Error', e);
    }
}

app.post('/call', apiCall);
