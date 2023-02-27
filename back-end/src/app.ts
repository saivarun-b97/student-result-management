import cors from "cors";
import express, { Application } from "express";
import process from "node:process";
import "reflect-metadata";
import CourseRouter from "./controllers/course";
import ResultRouter from "./controllers/result";
import StudentRouter from "./controllers/student";
import { connectDatabase, disconnectDatabase } from "./data-source";

// Server address constant
const SERVER_ADDRESS = `[${process.env.HOST}:${process.env.PORT}]`;

/**
 * Express app object
 *
 * @type {Application}
 */
const app: Application = express();

/**
 * Asynchronous function that initializes the server and starts listening for incoming requests
 * It also connects to the database and loads any necessary configurations before starting the server
 *
 * @function
 * @async
 * @name bootUpServer
 * @returns {Promise<void>}
 */
async function bootUpServer(): Promise<void> {
  console.info(`[srm-be] starting server: ${SERVER_ADDRESS}`);

  // Assign server pre load configs
  const serverPreLoads = [connectDatabase];

  // Resolve all pre loads
  await Promise.all(serverPreLoads.map((preLoad) => preLoad()));

  // Enable CORS
  app.use(cors());

  // Attach json body parser middleware
  app.use(express.json());

  // Attach controller routes
  app.use("/student", StudentRouter);
  app.use("/course", CourseRouter);
  app.use("/result", ResultRouter);

  // Start the server
  app.listen(process.env.PORT, () => console.info(`[srm-be] started server: ${SERVER_ADDRESS}`));
}

/**
 * Asynchronous function that handles server shutdown by closing the database connection and stopping the server.
 *
 * @function
 * @async
 * @name shutDownServer
 * @returns {Promise<void>}
 */
async function shutDownServer(): Promise<void> {
  console.info(`[srm-be] shut-down signal received, closing server: ${SERVER_ADDRESS}`);

  // Close db connection
  await disconnectDatabase();

  // Close server
  console.info(`[srm-be] closed server: ${SERVER_ADDRESS}`);
  process.exit();
}

// Immediately invokes bootUpServer function upon server start-up
(async () => await bootUpServer())();

// Handles shutdown signals such as SIGTERM and SIGINT
process.on("SIGTERM", shutDownServer);
process.on("SIGINT", shutDownServer);
