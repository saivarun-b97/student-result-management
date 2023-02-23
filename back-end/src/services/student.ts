import { Request, Response } from "express";
import { Student } from "../models/student";

/**
 * Student service class for handling student related CRUD operations
 *
 * @class
 */
export default class StudentService {
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
   * Constructor for StudentService
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
   * Async method to retrieve all students
   *
   * @method
   * @async
   * @name read
   * @returns {Promise<Response>} Express response object with students data
   */
  async read(): Promise<Response> {
    // Retrieve database records
    const students = await Student.find();

    return this.res.json(students);
  }

  /**
   * Async method to create a new student
   *
   * @method
   * @async
   * @name create
   * @returns {Promise<Response>} Express response object with created student data
   */
  async create(): Promise<Response> {
    // Validate incoming data
    const { firstName, lastName, dob }: Partial<Student> = this.req.body;
    if (!(firstName && lastName && dob))
      return this.res.status(400).send("Deficient student data supplied");

    // Check database for duplicate records
    const studentExists: Student[] = await Student.find({ where: { firstName, lastName, dob } });
    if (studentExists.length) return this.res.status(409).send("Duplicate student supplied");

    // Create new record
    const student: Student = await Student.create({ firstName, lastName, dob }).save();

    return this.res.json(student);
  }
}
