# Project Summary

The project is to use a web tool that runs a Natural Language Processing (NLP) MeaningCloud API on an article provided by the user via URL.  The API call will return several elements from the webpage analysis.  Such as some of the following:

MeaningCloud API output
{
  "status": {
    "code": "0",
    "msg": "OK",
    "credits": "1"
  },
  "model": "Restaurants_en",
  "score_tag": "P",
  "agreement": "DISAGREEMENT",
  "subjectivity": "SUBJECTIVE",
  "confidence": "98",
  "irony": "NONIRONIC",

## Description of Project Installation and Configuration

### Clone Directory
  
### Change to project folder
`cd` into your new folder 
### NPM Install
`npm install`

### Install Dependencies

`npm i -D @babel/core @babel/preset-env babel-loader`
`npm i -D style-loader node-sass css-loader sass-loader`
`npm i -D clean-webpack-pluginweb`
`npm i -D html-webpack-plugin`
`npm i -D mini-css-extract-plugin`
`npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin`

I had to update webpack based on interdependencing with other installs.
`npm install webpack@4.36.0`

### Create account on MeaningCloud site

### Get API key

### Install Dotenv
`npm install dotenv`

### Store key in .env file
API_KEY = *************************

###  Using the API

  You can also check out the documentation of the MeaningCloud API, https://www.meaningcloud.com/developer/sentiment-analysis
  
  The API URL format
"https://api.meaningcloud.com/sentiment-2.1?key=<<YOUR OWN KEY>>&of=json&txt=<<YOUR OWN TXT>>&model=<<MODEL>>&lang=en"

### Build both a dev and production 
`npm run build-dev`

Dev-Server was running on port 8080

`npm run build-prod`

Production was running on port 8082.  During the project, I started on port 8081 and ran into issues and errors. After troubleshooting I discovered another application, McAfee running on port 8081.


### Testing with Jest

Ran the jest test for the overall functionality of the handleSubmit function.
`npm install --save-dev jest`

\Front End Developer\Projects\evaluate-news-article> `npm run test`

> example-project@1.0.0 test C:\Users\lk2745\Documents\Training\Front End Developer\Projects\evaluate-news-article
> jest

 PASS  __test__/testFormHandler.spec.js
  Testing the submit functionality
    √ Testing the handleSubmit() function (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        3.885 s
Ran all test suites.


###Service Worker Setup

Installed the Service Worker:
`npm install workbox-webpack-plugin --save-dev`

+ workbox-webpack-plugin@5.1.4
added 71 packages from 73 contributors and audited 1680 packages in 17.345s

53 packages are looking for funding
  run `npm fund` for details

found 9085 low severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details

Edited webpack config file for production only'

Added the script tag to index.html file.


