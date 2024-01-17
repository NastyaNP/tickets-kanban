module.exports = {


    friendlyName: "Search",


    description: "Search components.",


    inputs: {
        search: { type: "string", required: false, defaultsTo: "" },
        projectId: { type: "number", required: true },
    },


    exits: {
        success: {
            statusCode: 200,
            description: "Search completed successfully",
        },
        serverError: {
            statusCode: 500,
        },
    },


    fn: async function ({ search, projectId }, exits) {
        return exits.success(await Components.find({
            where: {
                name: { contains: search || "" },
                project: projectId,
            }
        }));
    }


};
