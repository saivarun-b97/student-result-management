import express, { Request, Response, Router } from "express";
import CourseService from "../services/course";

/**
 * Express router object for course routes
 *
 * @type {Router}
 */
const CourseRouter: Router = express.Router();

/**
 * GET endpoint to retrieve all courses
 */
CourseRouter.get("/", (req: Request, res: Response) => new CourseService(req, res).read());

/**
 * POST endpoint to create new course
 */
CourseRouter.post("/", (req: Request, res: Response) => new CourseService(req, res).create());

export default CourseRouter;
