const express = require("express");

const app = express(); //creates express application

const main = require("./routes/api/main");

app.get("/", (req, res) => {
  res.send("Hello Shitheads!");
});

app.use("/api/main", main);

const port = process.env.PORT || 3000; // Not a Boolean more like an EITHER/OR statement

app.listen(port, () => console.log(`Lets Party ${port}`));
