const express = require("express");
const app = express();
const port = 3000;

// Set the view engine to EJS
app.set("view engine", "ejs");

// Serve static files from the "public" directory
app.use(express.static("public"));

// Define the route for the home page
app.get("/", (req, res) => {
  res.render("index", {
    title: "Interactive Page",
    message: "Welcome to the Interactive Page!",
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
