module.exports = {


    friendlyName: "Edit",


    description: "Edit projects.",


    inputs: {
        id: { type: "number", required: true },
        name: { type: "string", required: false },
        description: { type: "string", required: false, defaultsTo: "" },
        users: { type: "json", required: false, defaultsTo: [] },
    },


    exits: {
        success: {
            statusCode: 200,
            description: "Edit successfully",
        },
        serverError: {
            statusCode: 500,
        },
        invalidInput: {
            statusCode: 400,
        }
    },


    fn: async function ({ id, name, description, users }, exits) {
        const updatedProject = await Projects.updateOne({ id: this.req.params.id }).set({
            name,
            description,
            users: [
                ...new Set([
                    ...(users || []).map((user) => user.id),
                    this.req.user.id
                ])
            ]
        });

        // All done.
        return exits.success(updatedProject);
    }


};
