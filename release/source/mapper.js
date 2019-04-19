"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mapper = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const Injection = require("@singleware/injection");
const RestDB = require("@singleware/restdb");
const Core = require("@juridoc/client-core");
const Requests = require("./requests");
const entity_1 = require("./entity");
/**
 * Sessions mapper class.
 */
let Mapper = class Mapper extends Class.Null {
    constructor() {
        super(...arguments);
        /**
         * Mapper instance.
         */
        this.mapper = new RestDB.Mapper(this.client, entity_1.Entity);
    }
    /**
     * Get the error entity from the last operation.
     */
    get error() {
        return this.client.error;
    }
    /**
     * Create a new session based on the specified creation request.
     * @param request Session creation request.
     * @returns Returns a promise to get the session Id.
     * @throws Throws an error when the session wasn't created.
     */
    async create(request) {
        return (await this.mapper.insertEx(Requests.Create, request));
    }
    /**
     * Load the session that corresponds to the specified session Id.
     * @param id Session Id.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the session entity.
     * @throws Throws an error when the session wasn't found.
     */
    async load(id, fields) {
        return (await this.mapper.findById(id, fields));
    }
    /**
     * Load the current session.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the session entity.
     * @throws Throws an error when the session wasn't found.
     */
    async loadMe(fields) {
        return (await this.mapper.findById('me', fields));
    }
    /**
     * List all sessions that corresponds to the specified filter.
     * @param query Query filter.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the session list or undefined when an error occurs.
     */
    async list(query, fields) {
        return await this.mapper.find(query, fields);
    }
    /**
     * Count all session that corresponds to the specified filter.
     * @param query Query filter.
     * @returns Returns a promise to get the number of sessions or undefined when an error occurs.
     */
    async count(query) {
        return await this.mapper.count(query);
    }
    /**
     * Delete the session that corresponds to the specified session Id.
     * @param id Session Id.
     * @returns Returns a promise to get true when the session was removed, false otherwise.
     * @throws Throws an error when the session wasn't found.
     */
    async remove(id) {
        return (await this.mapper.deleteById(id));
    }
    /**
     * Delete the current session.
     * @returns Returns a promise to get true when the session was removed, false otherwise.
     */
    async removeMe() {
        return (await this.mapper.deleteById('me'));
    }
};
__decorate([
    Injection.Inject(Core.Client),
    Class.Private()
], Mapper.prototype, "client", void 0);
__decorate([
    Class.Private()
], Mapper.prototype, "mapper", void 0);
__decorate([
    Class.Public()
], Mapper.prototype, "error", null);
__decorate([
    Class.Public()
], Mapper.prototype, "create", null);
__decorate([
    Class.Public()
], Mapper.prototype, "load", null);
__decorate([
    Class.Public()
], Mapper.prototype, "loadMe", null);
__decorate([
    Class.Public()
], Mapper.prototype, "list", null);
__decorate([
    Class.Public()
], Mapper.prototype, "count", null);
__decorate([
    Class.Public()
], Mapper.prototype, "remove", null);
__decorate([
    Class.Public()
], Mapper.prototype, "removeMe", null);
Mapper = __decorate([
    Injection.Describe({ singleton: true, name: 'sessions' }),
    Class.Describe()
], Mapper);
exports.Mapper = Mapper;
//# sourceMappingURL=mapper.js.map