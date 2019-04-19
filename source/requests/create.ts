/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Aliases from '../aliases';

/**
 * Session creation request.
 */
@RestDB.Schema.Entity('sessions')
@Class.Describe()
export class Create extends Class.Null {
  /**
   * User type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Aliases.Types.Common))
  @Class.Public()
  public type!: Aliases.Types.Common;

  /**
   * User login.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public login!: string;

  /**
   * User password.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public password!: string;
}
