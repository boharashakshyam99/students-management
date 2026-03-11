import "dotenv/config";

import express from "express";
import cors from "cors";
import connectDb from "./config/database.js";
import mainroutes from "./routes/mainroutes.js";

const app = express();
app.use(express.json());

const port = 5000;
connectDb();
app.use(cors());
app.use("/api", mainroutes);

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
