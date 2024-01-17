/**
 * Labels.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    tableName: "labels",
    primaryKey: "id",

    attributes: {
        name: { type: "string", required: true, unique: true, columnType: "citext" },
        color: { type: "string", required: true },
        tickets: { collection: "tickets", via: "labels" },
    },

};

