import express from "express";
import cors from "cors"
import data from "./src/routes/data.routes.js";
import { errorHandler } from "./src/middlewares/errorHandler.js";

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});


app.use("/", data);

app.use(errorHandler);

app.listen(port, async () => {
  console.log(`Server is running on port ${port}...`);
});
