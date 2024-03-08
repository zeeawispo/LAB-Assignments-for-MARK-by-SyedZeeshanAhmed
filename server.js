const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.static(__dirname + "/public"));

// Define your server-side routes here
app.get("/", (req, res) => {
  res.send("Thank you for your feedback!");
});


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

