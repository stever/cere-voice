/// <reference path="../typedefs/require.d.ts" />

require.config({
    baseUrl: 'scripts',
    paths: {
        templates: '../templates',
        text: '../libs/require/text-2.0.10',
        domReady: '../libs/require/domready-2.0.1',
        jquery: '../libs/jquery-1.10.2',
        underscore: '../libs/underscore-1.5.2',
        main: '../scripts/main',
    },
    shim: {
        jquery: {
            exports: '$',
        },
        underscore: {
            exports: '_',
        },
        main: {
            deps: ['jquery', 'underscore'],
        },
    },
});

if (typeof console === "undefined") {
    console = <any>{ log: () => { }, warn: () => { }, error: () => { } };
}

requirejs.onResourceLoad = (context, map) =>
    console.log("[Require.js] loaded", map.name);

require(['main']);