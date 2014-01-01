/// <reference path="../typedefs/require.d.ts" />
/// <reference path="../typedefs/jquery.d.ts" />
/// <reference path="../typedefs/underscore.d.ts" />

require(['domReady'], (domReady) => domReady(() => {
    require(['text!templates/index.html!strip'], (t)=> {
        $('body').append(_.template(t));
    });
}));
