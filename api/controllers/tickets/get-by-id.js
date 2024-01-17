module.exports = {


    friendlyName: "Get by id",


    description: "",


    inputs: {
        id: { type: "number", required: true },
    },


    exits: {
        success: {
            statusCode: 200,
            description: "Get by id successfully",
        },
        serverError: {
            statusCode: 500,
        },
        notFound: {
            statusCode: 404,
        }
    },


    fn: async function ({ id }, exits) {
        const ticket = await Tickets.findOne({ id }).populateAll().then(async (ticket) => {
            const comments = await TicketComments.find({ ticket: ticket.id }).populate("author");
            return { ...ticket, comments };
        });
        if (!ticket) {
            return exits.notFound({
                error: "Ticket not found"
            });
        }

        return exits.success(ticket);
    }


};
