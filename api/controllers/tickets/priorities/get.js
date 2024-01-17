module.exports = {


    friendlyName: "Get",


    description: "Get priorities.",


    inputs: {
        search: { type: "string", required: false, defaultsTo: "" },
    },


    exits: {
        success: {
            description: "All done.",
        },
    },


    fn: async function ({ search }, exits) {
        const priorities = await TicketPriorities.find({
            where: {
                name: { contains: search || "" }
            }
        });
        return exits.success(priorities);
    }


};
