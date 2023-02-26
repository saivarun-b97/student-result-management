import { Request, Response } from "express";
import { Result } from "../models/result";

/**
 * Result service class for handling result related CRUD operations
 *
 * @class
 */
export default class ResultService {
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
   * Constructor for ResultService
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
   * Async method to retrieve all results
   *
   * @method
   * @async
   * @name read
   * @returns {Promise<Response>} Express response object with results data
   */
  async read(): Promise<Response> {
    // Retrieve database records
    const results = await Result.find();

    return this.res.json(results);
  }

  /**
   * Async method to create a new result
   *
   * @method
   * @async
   * @name create
   * @returns {Promise<Response>} Express response object with created result data
   */
  async create(): Promise<Response> {
    // Validate incoming data
    const { studentId, courseId, score }: Partial<Result> = this.req.body;
    if (!(studentId && courseId && score))
      return this.res.status(400).send("Deficient result data supplied");

    // Check database for duplicate records
    const resultExists = await Result.find({ where: { studentId, courseId, score } });
    if (resultExists.length) return this.res.status(409).send("Duplicate result supplied");

    // Create new record
    const result = await Result.create({ studentId, courseId, score }).save();
    const newResult = await Result.findOne({ where: { id: result.id } });

    return this.res.json(newResult);
  }
}
