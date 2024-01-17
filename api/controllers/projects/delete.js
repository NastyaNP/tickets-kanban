module.exports = {


    friendlyName: "Delete",


    description: "Delete projects.",


    inputs: {
        id: {
            type: "number",
            required: true,
        }
    },


    exits: {
        success: {
            statusCode: 204,
            description: "Delete successfully",
        },
        serverError: {
            statusCode: 500,
        },
    },


    fn: async function ({ id }, exits) {

        await Projects.destroyOne({ id });

        // All done.
        return exits.success();

    }


};
