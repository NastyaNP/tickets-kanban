module.exports = {


    friendlyName: "Create",


    description: "Create components.",


    inputs: {
        name: { type: "string", required: true },
        description: { type: "string", required: false, defaultsTo: "" },
        projectId: { type: "number", required: true },
    },


    exits: {
        created: {
            statusCode: 201,
            description: "Component created successfully",
        },
    },


    fn: async function (inputs, exits) {
        const component = await Components.create({
            name: inputs.name,
            description: inputs.description,
            project: inputs.projectId,
        }).fetch();

        return exits.created(component);
    }


};
