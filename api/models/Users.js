/**
 * Users.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
    tableName: "users",
    primaryKey: "id",
    attributes: {
        username: { type: "string", required: true, columnType: "citext" },
        email: { type: "string", required: true, unique: true, columnType: "citext" },
        password: { type: "string", required: true },
        projects: { collection: "projects", via: "users" },
    },

    /** @usage: before creating a new user, hash the password */
    beforeCreate(valuesToSet, proceed) {
        // Hash password
        sails.helpers.passwords.hashPassword.with({ password: valuesToSet.password }).exec((err, hashedPassword) => {
            if (err) {
                return proceed(err);
            }
            valuesToSet.password = hashedPassword;
            return proceed();
        });
    },


    customToJSON() {
        return _.omit(this, ["password"]);
    }
};
