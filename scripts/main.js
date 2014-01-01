/// <reference path="../typedefs/require.d.ts" />
/// <reference path="../typedefs/jquery.d.ts" />
/// <reference path="../typedefs/underscore.d.ts" />
require(['domReady'], function (domReady) {
    return domReady(function () {
        require(['text!templates/index.html!strip'], function (t) {
            $('body').append(_.template(t));
        });
    });
});
//# sourceMappingURL=main.js.map
