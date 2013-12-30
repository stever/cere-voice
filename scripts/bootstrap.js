/// <reference path="../typedefs/require.d.ts" />
require.config({
    baseUrl: '/scripts',
    paths: {
        templates: '../templates',
        text: '../lib/requirejs-text-2.0.10',
        jquery: '../lib/jquery-1.10.2',
        underscore: '../lib/underscore-1.5.2',
        main: '../scripts/main'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        underscore: {
            exports: '_'
        },
        main: {
            deps: ['underscore', 'jquery']
        }
    }
});

require(['main']);
//# sourceMappingURL=bootstrap.js.map
