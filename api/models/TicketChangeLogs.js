/**
 * TicketChangeLogs.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    tableName: "ticket_change_logs",
    primaryKey: "id",
    attributes: {
        createdAt: false,
        updatedAt: false,
        taskId: { type: "number", required: true },
        changedBy: { type: "number", required: true },
        changedAt: { type: "number", autoCreatedAt: true },
        state: { type: "json", required: true },
    },

};

