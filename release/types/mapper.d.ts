/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Core from '@juridoc/client-core';
import * as Requests from './requests';
import { Entity } from './entity';
/**
 * Sessions mapper class.
 */
export declare class Mapper extends Class.Null {
    /**
     * Client instance.
     */
    private client;
    /**
     * Mapper instance.
     */
    private mapper;
    /**
     * Get the error entity from the last operation.
     */
    get error(): Core.Entities.Error | undefined;
    /**
     * Create a new session based on the specified creation request.
     * @param request Session creation request.
     * @returns Returns a promise to get the session Id.
     * @throws Throws an error when the session wasn't created.
     */
    create(request: Requests.Create): Promise<string>;
    /**
     * Load the session that corresponds to the specified session Id.
     * @param id Session Id.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the session entity.
     * @throws Throws an error when the session wasn't found.
     */
    load(id: string, fields?: string[]): Promise<Entity>;
    /**
     * Load the current session.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the session entity.
     * @throws Throws an error when the session wasn't found.
     */
    loadMe(fields?: string[]): Promise<Entity>;
    /**
     * List all sessions that corresponds to the specified filter.
     * @param query Query filter.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the session list or undefined when an error occurs.
     */
    list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined>;
    /**
     * Count all session that corresponds to the specified filter.
     * @param query Query filter.
     * @returns Returns a promise to get the number of sessions or undefined when an error occurs.
     */
    count(query: RestDB.Query): Promise<number | undefined>;
    /**
     * Delete the session that corresponds to the specified session Id.
     * @param id Session Id.
     * @returns Returns a promise to get true when the session was removed, false otherwise.
     * @throws Throws an error when the session wasn't found.
     */
    remove(id: string): Promise<boolean>;
    /**
     * Delete the current session.
     * @returns Returns a promise to get true when the session was removed, false otherwise.
     */
    removeMe(): Promise<boolean>;
}
