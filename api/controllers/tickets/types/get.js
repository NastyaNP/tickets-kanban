module.exports = {


    friendlyName: "Get",


    description: "Get types.",


    inputs: {
        search: { type: "string", required: false, defaultsTo: "" },
    },


    exits: {
        success: {
            description: "All done.",
        },
    },


    fn: async function ({ search }, exits) {
        const types = await TicketTypes.find({
            where: {
                name: { contains: search || "" }
            }
        });
        return exits.success(types);
    }


};
