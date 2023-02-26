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
 * Model class for course DB entity
 *
 * @class
 */
@Entity()
export class Course extends BaseEntity {
  /**
   * PK
   *
   * @type {string}
   */
  @PrimaryGeneratedColumn("uuid")
  id: string;

  /**
   * Name of course
   *
   * @type {string}
   */
  @Column({ unique: true })
  name: string;

  /**
   * One to many relationship with results
   *
   * @type {Result[]}
   */
  @OneToMany(() => Result, (result) => result.course)
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
