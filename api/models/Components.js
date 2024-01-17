/**
 * Components.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    tableName: "components",
    primaryKey: "id",

    attributes: {
        name: { type: "string", required: true, columnType: "citext" },
        description: { type: "string" },
        project: { model: "projects" },
        tickets: { collection: "tickets", via: "components" },
    },

};

