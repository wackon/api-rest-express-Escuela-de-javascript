const express = require("express");

const app = express();

const port = 3000;

/**Endpoint */

app.get("/api", function (req, res) {
  res.send("Hola mundo");
});

app.listen(port, () => {
  console.log(`El ejemplo se esta ejecutando en el puerto ${port}`);
  console.log(`Run in:http://localhost:3000/api `);
});
