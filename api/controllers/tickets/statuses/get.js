module.exports = {


    friendlyName: "Get",


    description: "Get statuses.",


    inputs: {
        search: { type: "string", required: false, defaultsTo: "" },
    },


    exits: {
        success: {
            description: "All done.",
        },
    },


    fn: async function ({ search }, exits) {
        const statuses = await TicketStatuses.find({
            where: {
                name: { contains: search || "" }
            }
        });
        return exits.success(statuses);
    }


};
