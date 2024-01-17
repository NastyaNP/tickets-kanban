module.exports = {


    friendlyName: "Get",


    description: "Get projects.",


    inputs: {
        search: { type: "string", required: false, defaultsTo: "" },
    },


    exits: {
        success: {
            statusCode: 200,
            description: "Get successfully",
        },
        serverError: {
            statusCode: 500,
        },
    },


    fn: async function ({ search }, exits ) {
        const projects = await Projects.find({
            where: {
                name: { contains: search || "" },
            }
        }).populateAll();
        const userProjects = projects.filter((project) => project.users.some((user) => user.id === this.req.user.id));
        return exits.success(userProjects);
    }


};
