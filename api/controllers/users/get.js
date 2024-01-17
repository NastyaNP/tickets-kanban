module.exports = {


    friendlyName: "Get",


    description: "Get users.",


    inputs: {
        search: { type: "string", required: false, defaultsTo: "" },
    },


    exits: {
        success: {
            statusCode: 200,
            description: "Get successfully",
        },
    },


    fn: async function ({ search }, exits) {
        const users = await Users.find({
            where: {
                or: [
                    { username: { contains: search || "" } },
                    { email: { contains: search || "" } },
                ]
            }
        });

        // All done.
        return exits.success(users);

    }


};
