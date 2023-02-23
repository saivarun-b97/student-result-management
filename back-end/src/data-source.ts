import "reflect-metadata";
import { DataSource } from "typeorm";
import { Course } from "./models/course";
import { Result } from "./models/result";
import { Student } from "./models/student";

/**
 * The data source for the app
 *
 * @type {DataSource}
 */
let AppDataSource: DataSource;

/**
 * Creates a new data source for the app
 *
 * @function
 * @name createDatasource
 * @returns {Promise<void>}
 */
function createDatasource(): void {
  AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    schema: process.env.DB_SCHEMA,
    useUTC: true,
    logging: true,
    entities: [Course, Result, Student],
  });

  console.info(`[srm-be] datastore created: [${process.env.DB_NAME}]`);
}

/**
 * Connects to the database and sets up the necessary schemas and entities
 *
 * @function
 * @async
 * @name connectDatabase
 * @returns {Promise<void>}
 */
export async function connectDatabase(): Promise<void> {
  if (!AppDataSource) createDatasource();
  if (!AppDataSource.isInitialized) await AppDataSource.initialize();
  await AppDataSource.query(`CREATE SCHEMA IF NOT EXISTS ${process.env.DB_SCHEMA}`);
  await AppDataSource.synchronize();

  console.info(`[srm-be] database connected: [${process.env.DB_NAME}]`);
}

/**
 * Disconnects from the database
 *
 * @function
 * @async
 * @name disconnectDatabase
 * @returns {Promise<void>}
 */
export async function disconnectDatabase(): Promise<void> {
  if (AppDataSource) {
    await AppDataSource.destroy();
    AppDataSource = undefined;
  }

  console.info(`[srm-be] database disconnected: [${process.env.DB_NAME}]`);
}

/**
 * Clears all entities from the database
 *
 * @function
 * @async
 * @name cleanDatabase
 * @returns {Promise<void>}
 */
export async function cleanDatabase(): Promise<void> {
  if (AppDataSource && AppDataSource.isInitialized)
    await Promise.all(
      AppDataSource.entityMetadatas.map((entity) =>
        AppDataSource.getRepository(entity.name).clear()
      )
    );

  console.info(`[srm-be] database cleaned: [${process.env.DB_NAME}]`);
}
