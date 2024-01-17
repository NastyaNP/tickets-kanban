/*
* SQL Code here to fill priorities, types, statuses for tickets in DB
*
*
*/

module.exports = {


    friendlyName: "Create",


    description: "Create tickets.",


    inputs: {
        name: { type: "string", required: true, maxLength: 256 },
        description: { type: "string", required: false, defaultsTo: "", maxLength: 2048 },
        priority: { type: "string", required: true, maxLength: 256 },
        type: { type: "string", required: true, maxLength: 256 },
        assignee: { type: "json", required: true },
        project: { type: "string", required: true, maxLength: 256 },
    },


    exits: {
        success: {
            statusCode: 201,
            description: "Created successfully",
        },
        serverError: {
            statusCode: 500,
        },
        invalidInput: {
            statusCode: 403,
        }
    },


    fn: async function ({ name, priority, type, assignee, project, description }, exits) {
        const assigneeId = (await Users.findOne(assignee))?.id || null;
        const projectId = (await Projects.findOne({ name: project }))?.id || null;
        const ticketTypeId = (await TicketTypes.findOne({ name: type }))?.id || null;
        const ticketPriorityId = (await TicketPriorities.findOne({ name: priority }))?.id || null;

        if (!name || !ticketPriorityId || !ticketTypeId || !assigneeId || !projectId) {
            return exits.invalidInput({
                error: "Missing required fields"
            });
        }

        const startStatus = await TicketStatuses.findOne({ name: "Open" });
        const ticket = await Tickets.create({
            name,
            description,
            status: startStatus.id,
            priority: ticketPriorityId,
            type: ticketTypeId,
            project: projectId,
            assignee: assigneeId,
            reporter: this.req.user.id,
            comments: [],
        }).fetch();

        exits.success(
            await Tickets.findOne({ id: ticket.id }).populateAll()
        );
    }


};
