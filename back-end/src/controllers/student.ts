import express, { Request, Response, Router } from "express";
import StudentService from "../services/student";

/**
 * Express router object for student routes
 *
 * @type {Router}
 */
const StudentRouter: Router = express.Router();

/**
 * GET endpoint to retrieve all students
 */
StudentRouter.get("/", (req: Request, res: Response) => new StudentService(req, res).read());

/**
 * POST endpoint to create new student
 */
StudentRouter.post("/", (req: Request, res: Response) => new StudentService(req, res).create());

export default StudentRouter;
