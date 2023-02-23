import express, { Request, Response, Router } from "express";
import ResultService from "../services/result";

/**
 * Express router object for result routes
 *
 * @type {Router}
 */
const ResultRouter: Router = express.Router();

/**
 * GET endpoint to retrieve all results
 */
ResultRouter.get("/", (req: Request, res: Response) => new ResultService(req, res).read());

/**
 * POST endpoint to create new result
 */
ResultRouter.post("/", (req: Request, res: Response) => new ResultService(req, res).create());

export default ResultRouter;
