module.exports = {


    friendlyName: "Add",


    description: "Add comments.",


    inputs: {
        ticketId: { type: "number", required: true },
        content: { type: "string", required: true },
    },


    exits: {
        success: {
            description: "New comment was created successfully",
            responseType: "ok",
        },
        ticketNotFound: {
            description: "Ticket was not found",
            responseType: "notFound",
        },
    },


    fn: async function (inputs, exits) {
        const { ticketId: ticket, content } = inputs;
        const { id: author } = this.req.user;

        const comment = await TicketComments.create({ ticket, author, content }).fetch();
        return exits.success(
            await TicketComments.findOne({ id: comment.id }).populateAll()
        );
    }


};
