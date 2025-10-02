import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Server is working!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
