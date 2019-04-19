/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Aliases from '../aliases';
/**
 * Session creation request.
 */
export declare class Create extends Class.Null {
    /**
     * User type.
     */
    type: Aliases.Types.Common;
    /**
     * User login.
     */
    login: string;
    /**
     * User password.
     */
    password: string;
}
