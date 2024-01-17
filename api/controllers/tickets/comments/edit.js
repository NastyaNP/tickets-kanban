module.exports = {


    friendlyName: "Edit",


    description: "Edit comments.",


    inputs: {
        ticketId: { type: "number", required: true },
        commentId: { type: "number", required: true },
        content: { type: "string", required: true },
    },


    exits: {
        success: {
            description: "Edit successfully",
        },
    },


    fn: async function ({ commentId, content }, exits) {
        const comment = await TicketComments.updateOne({
            id: commentId,
            author: this.req.user.id
        }).set({ content });
        return exits.success(comment);
    }


};
