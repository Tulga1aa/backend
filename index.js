import express from "express";

const app = express();

app.use(express.json());

const port = 8080;

app.get("articles", (request, response) => {
  response.send("Hello Response from Express");
});
app.post(`/addArticle`, (request, response) => {
  const { title } = request.body;
  response.send(`Product success ${title}`);
});

app.listen(port, () => {
  console.log(`server running at a http://localhost:${port}/`);
});
