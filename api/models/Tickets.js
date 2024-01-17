/**
 * Tickets.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    tableName: "tickets",
    primaryKey: "id",
    attributes: {
        name: { type: "string", required: true, columnType: "citext" },
        description: { type: "string", columnType: "citext" },
        assignee: { model: "users" },
        reporter: { model: "users" },
        status: { model: "ticketStatuses" },
        type: { model: "ticketTypes" },
        priority: { model: "ticketPriorities" },
        project: { model: "projects" },
        labels: { collection: "labels", via: "tickets" },
        components: { collection: "components", via: "tickets" },
        dueDate: { type: "ref", columnName: "dueDate", columnType: "timestamptz" },
        comments: { collection: "ticketComments", via: "ticket" },
    },

    // customToJSON() {
    //     return _.omit(this, ["assigneeId", "reporterId", "statusId", "priorityId"]);
    // }

};

