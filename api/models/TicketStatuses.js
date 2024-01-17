/**
 * TicketStatuses.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    tableName: "ticket_statuses",
    primaryKey: "id",
    attributes: {
        createdAt: false,
        updatedAt: false,
        name: { type: "string", required: true, columnType: "citext" },
    },

};

