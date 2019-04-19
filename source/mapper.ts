/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Injection from '@singleware/injection';
import * as RestDB from '@singleware/restdb';

import * as Core from '@juridoc/client-core';

import * as Requests from './requests';

import { Entity } from './entity';

/**
 * Sessions mapper class.
 */
@Injection.Describe({ singleton: true, name: 'sessions' })
@Class.Describe()
export class Mapper extends Class.Null {
  /**
   * Client instance.
   */
  @Injection.Inject(Core.Client)
  @Class.Private()
  private client!: Core.Client;

  /**
   * Mapper instance.
   */
  @Class.Private()
  private mapper = new RestDB.Mapper<Entity>(this.client, Entity);

  /**
   * Get the error entity from the last operation.
   */
  @Class.Public()
  public get error(): Core.Entities.Error | undefined {
    return this.client.error;
  }

  /**
   * Create a new session based on the specified creation request.
   * @param request Session creation request.
   * @returns Returns a promise to get the session Id.
   * @throws Throws an error when the session wasn't created.
   */
  @Class.Public()
  public async create(request: Requests.Create): Promise<string> {
    return (await this.mapper.insertEx<Requests.Create, string>(Requests.Create, request))!;
  }

  /**
   * Load the session that corresponds to the specified session Id.
   * @param id Session Id.
   * @param fields Fields to be selected.
   * @returns Returns a promise to get the session entity.
   * @throws Throws an error when the session wasn't found.
   */
  @Class.Public()
  public async load(id: string, fields?: string[]): Promise<Entity> {
    return (await this.mapper.findById(id, fields))!;
  }

  /**
   * Load the current session.
   * @param fields Fields to be selected.
   * @returns Returns a promise to get the session entity.
   * @throws Throws an error when the session wasn't found.
   */
  @Class.Public()
  public async loadMe(fields?: string[]): Promise<Entity> {
    return (await this.mapper.findById('me', fields))!;
  }

  /**
   * List all sessions that corresponds to the specified filter.
   * @param query Query filter.
   * @param fields Fields to be selected.
   * @returns Returns a promise to get the session list or undefined when an error occurs.
   */
  @Class.Public()
  public async list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined> {
    return await this.mapper.find(query, fields);
  }

  /**
   * Count all session that corresponds to the specified filter.
   * @param query Query filter.
   * @returns Returns a promise to get the number of sessions or undefined when an error occurs.
   */
  @Class.Public()
  public async count(query: RestDB.Query): Promise<number | undefined> {
    return await this.mapper.count(query);
  }

  /**
   * Delete the session that corresponds to the specified session Id.
   * @param id Session Id.
   * @returns Returns a promise to get true when the session was removed, false otherwise.
   * @throws Throws an error when the session wasn't found.
   */
  @Class.Public()
  public async remove(id: string): Promise<boolean> {
    return (await this.mapper.deleteById(id))!;
  }

  /**
   * Delete the current session.
   * @returns Returns a promise to get true when the session was removed, false otherwise.
   */
  @Class.Public()
  public async removeMe(): Promise<boolean> {
    return (await this.mapper.deleteById('me'))!;
  }
}
