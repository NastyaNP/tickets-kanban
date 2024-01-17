/**
 * Projects.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
    tableName: "projects",
    primaryKey: "id",
    attributes: {
        name: { type: "string", required: true, columnType: "citext" },
        createdBy: { model: "users" },
        description: { type: "string", defaultsTo: "" },
        users: { collection: "users", via: "projects" }
    },
};

