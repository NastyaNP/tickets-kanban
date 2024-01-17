
function removeEmptyKeys(obj, keys) {
    const tempObj = { ...obj };
    keys.forEach(key => {
        if (tempObj[key] === undefined || tempObj[key] === null) {
            delete tempObj[key];
        }
    });
    return tempObj;
}

function isNullable(value) {
    return value === undefined || value === null;
}

module.exports = {


    friendlyName: "Edit",


    description: "Edit tickets.",


    inputs: {
        id: { type: "number", required: true },
        name: { type: "string", required: false, maxLength: 256 },
        description: { type: "string", required: false, maxLength: 2048 },
        priority: { type: "string", required: false, allowNull: false, maxLength: 256 },
        type: { type: "string", required: false, allowNull: false, maxLength: 256 },
        assignee: { type: "json", required: false },
        project: { type: "string", required: false, allowNull: false, maxLength: 256 },
        status: { type: "string", required: false, allowNull: false },
        components: { type: "json", required: false },
        labels: { type: "json", required: false },
        dueDate: { type: "ref", required: false },
    },


    exits: {
        success: {
            statusCode: 200,
            description: "Edited successfully",
        },
        serverError: {
            statusCode: 500,
        },
        invalidInput: {
            statusCode: 403,
        }
    },


    fn: async function ({ name, priority, type, assignee, project, description, components, dueDate, id, status }, exits) {
        const assigneeId = isNullable(assignee) ? null : (await Users.findOne(assignee))?.id || null;
        const projectId = isNullable(project) ?  null : (await Projects.findOne({ name: project }))?.id || null;
        const ticketTypeId = isNullable(type) ? null : (await TicketTypes.findOne({ name: type }))?.id || null;
        const ticketPriorityId = isNullable(priority) ? null : (await TicketPriorities.findOne({ name: priority }))?.id || null;
        const ticketStatusId = isNullable(status) ? null : (await TicketStatuses.findOne({ name: status }))?.id || null;

        const editedTicket = await Tickets.updateOne({ id })
            .set(removeEmptyKeys({
                name,
                description,
                dueDate,
                priority: ticketPriorityId,
                type: ticketTypeId,
                project: projectId,
                assignee: assigneeId,
                status: ticketStatusId,
                ...Object.hasOwn(this.req.body, "components") && { components: components?.map((component) => component.id) },
                ...Object.hasOwn(this.req.body, "labels") && { labels: labels?.map((component) => component.id) },
            }, ["assignee", "project", "type", "priority", "status"]));

        // All done.
        return exits.success(await Tickets.findOne({ id: editedTicket.id }).populateAll());

    }


};
