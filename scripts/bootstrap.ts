/// <reference path="../typedefs/require.d.ts" />

require.config({
    baseUrl: 'scripts',
    paths: {
        templates: '../templates',
        text: '../libs/require/text-2.0.10',
        domready: '../libs/require/domready-2.0.1',
        jquery: '../libs/jquery-1.10.2',
        riot: '../libs/riot-0.9.7',
        main: '../scripts/main',
    },
    shim: {
        jquery: {
            exports: '$',
        },
        riot: {
            deps: ['jquery'],
        },
        main: {
            deps: ['riot'],
        },
    },
});

// Dummy console object where console not provided.
if (typeof console === "undefined") {
    console = <any>{ log: () => { }, warn: () => { }, error: () => { } };
}

// Require.js logging.
requirejs.onResourceLoad = (context, map) =>
    console.log("[Require.js] loaded", map.name);

// Run main script when DOM is ready.
require(['domready'], (domReady) => domReady(() => {
    require(['main']);
}));
