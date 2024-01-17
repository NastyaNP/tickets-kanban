module.exports = {


    friendlyName: "GetTickets",


    description: "Get tickets.",


    inputs: {
        search: { type: "string", required: false, defaultsTo: "" },
        projectId: { type: "number", required: false },
    },


    exits: {
        success: {
            statusCode: 200,
            description: "Got successfully",
        },
        serverError: {
            statusCode: 500,
        }
    },


    fn: async function ({ search, projectId }, exits) {
        const tickets = await Tickets.find({
            where: {
                ...search && { name: { contains: search || "" } },
                ...projectId && { project: projectId },
            }
        })
            .populateAll()
            .then(async (tickets) => {
                const newTickets = [];
                for (const ticket of tickets) {
                    const comments = await TicketComments.find({ ticket: ticket.id }).populate("author");
                    newTickets.push({ ...ticket, comments });
                }

                return newTickets;
            });

        exits.success(tickets);
    }


};
