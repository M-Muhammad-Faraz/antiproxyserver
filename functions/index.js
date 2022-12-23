const functions = require("firebase-functions");
const mysql = require("mysql");
// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//

exports.createDB = functions.https.onRequest((request, response) => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "zax",
    password: "1234",
  });
  connection.connect();
  connection.query("CREATE DATABASE teachers", (error, results, fields) => {
    if (error) {
      console.log(error);
    }
    console.log(results);
  });
  connection.end();
});

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});
