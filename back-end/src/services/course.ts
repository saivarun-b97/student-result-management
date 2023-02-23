import { Request, Response } from "express";
import { Course } from "../models/course";

/**
 * Course service class for handling course related CRUD operations
 *
 * @class
 */
export default class CourseService {
  /**
   * Express request object
   *
   * @type {Request}
   */
  req: Request;

  /**
   * Express response object
   *
   * @type {Response}
   */
  res: Response;

  /**
   * Constructor for CourseService
   *
   * @constructor
   * @param {Request} req - Express request object
   * @param {Response} res - Express response object
   */
  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
  }

  /**
   * Async method to retrieve all courses
   *
   * @method
   * @async
   * @name read
   * @returns {Promise<Response>} Express response object with courses data
   */
  async read(): Promise<Response> {
    // Retrieve database records
    const courses = await Course.find();

    return this.res.json(courses);
  }

  /**
   * Async method to create a new course
   *
   * @method
   * @async
   * @name create
   * @returns {Promise<Response>} Express response object with created course data
   */
  async create(): Promise<Response> {
    // Validate incoming data
    const { name }: Partial<Course> = this.req.body;
    if (!name) return this.res.status(400).send("Deficient course data supplied");

    // Check database for duplicate records
    const courseExists = await Course.find({ where: { name } });
    if (courseExists.length) return this.res.status(409).send("Duplicate course supplied");

    // Create new record
    const course = await Course.create({ name: this.req.body.name }).save();

    return this.res.json(course);
  }
}
