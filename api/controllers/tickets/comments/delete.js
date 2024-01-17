module.exports = {


    friendlyName: "Delete",


    description: "Delete comments.",


    inputs: {
        ticketId: { type: "number", required: true },
        commentId: { type: "number", required: true },
    },


    exits: {
        success: {
            description: "Delete successfully",
            statusCode: 204
        },
        badRequest: {
            description: "Bad request",
            responseType: "badRequest",
        },
    },


    fn: async function ({ commentId }, exits) {
        const { id: author } = this.req.user;

        const comment = await TicketComments.destroyOne({ id: commentId, author });
        return comment
            ? exits.success({ info: `Comment with id: ${commentId} successfully deleted` })
            : exits.badRequest({ error: `Something went wrong when deleting comment with id ${commentId}` });
    }


};
