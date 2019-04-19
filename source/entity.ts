/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Session entity class.
 */
@RestDB.Schema.Entity('sessions')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Session Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Primary()
  @RestDB.Schema.Id()
  @Class.Public()
  public id!: string;

  /**
   * Account Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public accountId!: string;

  /**
   * Profile Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public profileId!: string;

  /**
   * User Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public userId!: string;

  /**
   * Creation date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public createdAt!: Date;

  /**
   * Last update date.
   */
  @RestDB.Schema.Date()
  @RestDB.Schema.Null()
  @Class.Public()
  public updatedAt?: Date | null;

  /**
   * Expiration date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public expireAt!: Date;

  /**
   * User IP address.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public address!: string;
}
