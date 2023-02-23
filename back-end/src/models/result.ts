import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Course } from "./course";
import { Student } from "./student";

/**
 * Enum for all available score values
 */
export enum Score {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
  F = "F",
}

/**
 * Model class for result DB entity
 *
 * @class
 */
@Entity()
export class Result extends BaseEntity {
  /**
   * PK
   *
   * @type {string}
   */
  @PrimaryGeneratedColumn("uuid")
  id: string;

  /**
   * Student score for a course
   *
   * @type {Score}
   */
  @Column({ type: "enum", enum: Score })
  score: Score;

  /**
   * Many to one relationship with course
   *
   * @type {Course}
   */
  @ManyToOne(() => Course, (course) => course.results, { eager: true })
  course: Course;

  /**
   * FK for many to one relationship with course
   *
   * @type {string}
   */
  @Column()
  courseId: string;

  /**
   * Many to one relationship with student
   *
   * @type {Student}
   */
  @ManyToOne(() => Student, (student) => student.results, { eager: true })
  student: Student;

  /**
   * FK for many to one relationship with student
   *
   * @type {string}
   */
  @Column()
  studentId: string;

  /**
   * Created date time
   *
   * @type {Date}
   */
  @CreateDateColumn()
  createdAt: Date;

  /**
   * Updated date time
   *
   * @type {Date}
   */
  @UpdateDateColumn()
  updatedAt: Date;
}
