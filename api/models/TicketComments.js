/**
 * TicketComments.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    tableName: "ticket_comments",
    primaryKey: "id",
    attributes: {
        ticket: { model: "tickets" },
        author: { model: "users" },
        content: { type: "string", required: true, columnType: "citext" },
    },

};

