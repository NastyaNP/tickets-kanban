module.exports = {


    friendlyName: "Create",


    description: "Create projects.",


    inputs: {
        name: { type: "string", required: true },
        description: { type: "string", required: false, defaultsTo: "" },
        users: { type: "json", required: false, defaultsTo: [] },
    },


    exits: {
        success: {
            statusCode: 201,
            description: "Created successfully",
        },
        serverError: {
            statusCode: 500,
        },
        invalidInput: {
            statusCode: 403,
        }
    },


    fn: async function ({ name, description, users }, exits) {

        if (!name) {
            return exits.invalidInput({
                error: "Missing required fields"
            });
        }

        const project = await Projects.create({
            name,
            description,
            createdBy: this.req.user.id,
            users: [...new Set([
                this.req.user.id,
                ...(users || []).map((user) => user.id),
            ])]
        }).fetch();


        return exits.success(
            await Projects.findOne({ id: project.id }).populate("createdBy")
        );
    }


};
