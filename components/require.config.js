var components = {
    "packages": [
        {
            "name": "modernizr",
            "main": "modernizr-built.js"
        }
    ],
    "shim": {
        "modernizr": {
            "exports": "window.Modernizr"
        }
    },
    "baseUrl": "components"
};
if (typeof require !== "undefined" && require.config) {
    require.config(components);
} else {
    var require = components;
}
if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = components;
}