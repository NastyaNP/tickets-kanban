module.exports = {


    friendlyName: "Create",


    description: "Create labels.",


    inputs: {
        name: { type: "string", required: true },
        description: { type: "string", required: false, defaultsTo: "" },
        color: { type: "string", required: false, defaultsTo: "#cccccc" },
    },


    exits: {},


    fn: async function (inputs) {

        // All done.
        return;

    }


};
