
// A simple router class
export default class Router {
    constructor() {
        this.routes = []; // An array of routes and callbacks
    }

    // A method to add a route and a callback
    get(uri, callback) {
        // Validate the parameters
        if (!uri || !callback) throw new Error("uri or callback must be given");
        if (typeof uri !== "string")
            throw new TypeError("typeof uri must be a string");
        if (typeof callback !== "function")
            throw new TypeError("typeof callback must be a function");

        // Check if the route already exists
        this.routes.forEach((route) => {
            if (route.uri === uri)
                throw new Error(`the uri ${route.uri} already exists`);
        });

        // Add the route to the array
        this.routes.push({ uri, callback });
    }

    // A method to process the routes
    init() {
        // Loop through the routes and execute the callback if the hash matches
        this.routes.forEach((route) => {
            if (window.location.hash === route.uri) {
                route.callback();
            }
        });
    }
}

// // Create a new router instance
// const router = new Router();

// // Define some routes and callbacks
// router.get("#about-me", function () {
//     console.log("About Me page");
// });

// router.get("#skills", function () {
//     console.log("Skills");
// });

// router.get("#projects", function () {
//     console.log("Projects");
// });

// // Initialize the router
// router.init();

// // Listen for hash changes
// window.addEventListener("hashchange", function () {
//     console.log("hashchange event listeners log");
//     router.init();
// });