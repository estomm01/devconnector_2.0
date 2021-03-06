const express = require("express");
const connectDB = require(`./config/db.js`);

const app = express();
//connect Database
connectDB();

// Init Middleware

app.use(express.json({ extended: false }));

app.get(`/`, (req, res) => res.send(`API Running`));

//Define Routes
app.use(`/api/users`, require(`./routes/api/users`));
app.use(`/api/auth`, require(`./routes/api/auth`));
app.use(`/api/profile`, require(`./routes/api/profile`));
app.use(`/api/posts`, require(`./routes/api/posts`));

// const routes = require("./routes");
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

//  app.listen(PORT, function() {
// console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });
// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// // Add routes, both API and view
// app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"
// );

// // Start the API server
// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
