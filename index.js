const express = require("express");
const aRouter = require("./router/summer");

const app = express();

app.use(express.json());

const port = 8080;

app.use(aRouter);

app.listen(port, () => {
  console.log(`server running at a http://localhost:${port}/`);
});
