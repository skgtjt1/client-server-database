//npm install all of these:

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

//import pg to connect out database to the server
import pg from "pg";

//we need to start our app with express (this comes as an imported method)

const app = express();

//we need to configure dotenv

dotenv.config();

//import our connection string for the database using keywords process, env and the name of the string var in the .env
const dbConnectonString = process.env.DATABASE_URL;

//initialise our database with weird code "new" keyword creates object template, this creates a pool in our postgres database. The pool is like a "lounge area"
const db = new pg.Pool({
  connectionString: dbConnectonString,
});

console.log(db);

//we need to tell our server what data we are handling (JSON)
app.use(express.json());
app.use(cors());

//We need to allow for our server to communicate with clients CORS

//Assign a port to our app
const PORT = 8080;

//I need my app to listen to the port

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

// test endpoint for my roo route
//I want to READ data in this route

app.get("/", (req, res) => {
  res.json({ message: " this is the root route" });
});

//I want to build an endpoint to collect for data
//I want to CREATE data in a database --POST method
//I was to build an endpoint to send form data back to client

// app.post("/comments", function (request, response) {
//   response.json({ message: "data sent successfully." });
// });

//I want to READ DATA from the database --> the GET method

app.post("/userdata", function (req, res) {
  console.log(req.body);
  res.json({ message: "User data received." });
});

//VNeFSTf3!.Si2wK

//postgres://postgres.pjzdtyovsihtkmbhdzgt:TechEducatorsPassWord@aws-0-eu-west-2.pooler.supabase.com:6543/postgres

console.log(process.env);
