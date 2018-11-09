const express = require("express");

//creating app
const app = express();

app.get("/", (req, res) => {
  res.send({ hello: "from node js" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`you are listening port ${PORT}`);
});
