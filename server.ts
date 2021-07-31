import express from "express";
import router from "./routes";

const app = express();
const PORT = process.env.port || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(PORT, () =>
  console.log(`api server running on port http://localhost:${PORT}`)
);
