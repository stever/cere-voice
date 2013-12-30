/// <reference path="../typedefs/require.d.ts" />
require.config({
    baseUrl: '/scripts',
    paths: {
        templates: '../templates',
        text: '../lib/requirejs-text-2.0.10',
        jquery: '../lib/jquery-1.10.2',
        handlebars: '../lib/handlebars-1.2.0',
        main: '../scripts/main'
    },
    shim: {
        jquery: {
            exports: '$'
        }
    }
});

require(['main']);
//# sourceMappingURL=bootstrap.js.map
