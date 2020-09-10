//SERVER SIDE
const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const apiKey = process.env.API_KEY
console.log(`Your API Key is ${process.env.API_KEY}`);
let entryUrl = [];
const fetch = require('node-fetch');

const express = require('express')
var bodyParser = require('body-parser')
const mockAPIResponse = require('./mockAPI.js')
const app = express()

// Cors for cross origin allowance - allows the browser and server to communicate without any security interruptions
const cors = require('cors');

const e = require('express');
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('MeaningCloud app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})



// Post Route
app.post('/meaningCloud', addMeaning);
    async function addMeaning(req, res) {
        entryUrl = req.body.url;
        console.log("The URL entered:", entryUrl);
        const apiUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${req.body.url}&lang=en`

        const response = await fetch(apiUrl)
        const meaningdata = await response.json()
        const projectData = {
            score_tag : meaningdata.score_tag,
            agreement : meaningdata.agreement,
            subjectivity : meaningdata.subjectivity,
            confidence : meaningdata.confidence,
            irony : meaningdata.irony
        }
        console.log(projectData);
        res.send(projectData);
    }
