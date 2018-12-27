const functions = require('firebase-functions');
const fs = require('fs');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

const fileContent = fs.readFileSync('./FILE.txt');

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send(fileContent.toString());
});
