/// <reference path="../typedefs/require.d.ts" />
require.config({
    baseUrl: 'scripts',
    paths: {
        templates: '../templates',
        text: '../libs/require/text-2.0.10',
        domready: '../libs/require/domready-2.0.1',
        jquery: '../libs/jquery-1.10.2',
        riot: '../libs/riot-0.9.7',
        main: '../scripts/main'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        riot: {
            deps: ['jquery']
        },
        main: {
            deps: ['riot']
        }
    }
});

// Dummy console object where console not provided.
if (typeof console === "undefined") {
    console = { log: function () {
        }, warn: function () {
        }, error: function () {
        } };
}

// Require.js logging.
requirejs.onResourceLoad = function (context, map) {
    return console.log("[Require.js] loaded", map.name);
};

// Run main script when DOM is ready.
require(['domready'], function (domReady) {
    return domReady(function () {
        require(['main']);
    });
});
//# sourceMappingURL=bootstrap.js.map
