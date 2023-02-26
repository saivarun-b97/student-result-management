import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Result } from "./result";

/**
 * Model class for student DB entity
 *
 * @class
 */
@Entity()
export class Student extends BaseEntity {
  /**
   * PK
   *
   * @type {string}
   */
  @PrimaryGeneratedColumn("uuid")
  id: string;

  /**
   * First name of student
   *
   * @type {string}
   */
  @Column()
  firstName: string;

  /**
   * Last name of student
   *
   * @type {string}
   */
  @Column()
  lastName: string;

  /**
   * Date of birth of student in YYYY-MM-DD format
   *
   * @type {string}
   */
  @Column({ type: "date" })
  dob: string;

  /**
   * One to many relationship with results
   *
   * @type {Result[]}
   */
  @OneToMany(() => Result, (result) => result.student)
  results: Result[];

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
