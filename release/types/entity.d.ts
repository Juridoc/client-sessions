/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
/**
 * Session entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Session Id.
     */
    id: string;
    /**
     * Account Id.
     */
    accountId: string;
    /**
     * Profile Id.
     */
    profileId: string;
    /**
     * User Id.
     */
    userId: string;
    /**
     * Creation date.
     */
    createdAt: Date;
    /**
     * Last update date.
     */
    updatedAt?: Date | null;
    /**
     * Expiration date.
     */
    expireAt: Date;
    /**
     * User IP address.
     */
    address: string;
}
