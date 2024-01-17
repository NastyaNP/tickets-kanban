/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

    /***************************************************************************
     *                                                                          *
     * Make the view located at `views/homepage.ejs` your home page.            *
     *                                                                          *
     * (Alternatively, remove this and add an `index.html` file in your         *
     * `assets` directory)                                                      *
     *                                                                          *
     ***************************************************************************/

    "GET /tickets": { action: "tickets/get" },
    "GET /tickets/:id": { action: "tickets/get-by-id" },

    "POST /tickets": { action: "tickets/create" },
    "PATCH /tickets/:id": { action: "tickets/edit" },

    "POST /tickets/:ticketId/comments": { action: "tickets/comments/add" },
    "PATCH /tickets/:ticketId/comments/:commentId": { action: "tickets/comments/edit" },
    "DELETE /tickets/:ticketId/comments/:commentId": { action: "tickets/comments/delete" },

    "GET /tickets/types": { action: "tickets/types/get" },
    "GET /tickets/statuses": { action: "tickets/statuses/get" },
    "GET /tickets/priorities": { action: "tickets/priorities/get" },
    "GET /labels": { action: "labels/get" },

    "GET /projects": { action: "projects/get" },
    "POST /projects": { action: "projects/create" },
    "PATCH /projects/:id": { action: "projects/edit" },
    "DELETE /projects/:id": { action: "projects/delete" },


    "GET /users": { action: "users/get" },
    "POST /users/register": { action: "users/register" },
    "POST /users/login": { action: "users/login" },

    /***************************************************************************
     *                                                                          *
     * More custom routes here...                                               *
     * (See https://sailsjs.com/config/routes for examples.)                    *
     *                                                                          *
     * If a request to a URL doesn't match any of the routes in this file, it   *
     * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
     * not match any of those, it is matched against static assets.             *
     *                                                                          *
     ***************************************************************************/


};
