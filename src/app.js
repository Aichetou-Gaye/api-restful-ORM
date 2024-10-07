import express from "express";
import { config } from "dotenv";
import bodyParser from "body-parser";
import prisma from "./config/prisma.js";


const app = express()
const port = process.env.NODE_DOCKER_PORT || 3001;

app.use(bodyParser.json())

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});