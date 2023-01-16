import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";

import router from './router/routers';
import {MONGO, PORT} from "./config/config";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', router);

const start = async () => {
  try {
    await mongoose.connect(MONGO);
    app.listen(PORT, () => {
      console.log("server run");
    });
  } catch (e) {
    console.log(e);
  }
};

start();
