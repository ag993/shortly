var Router, RouteController;

(function () {
    "use strict";

    var emptyFunction = function () {
    };

    Router = {
        map: emptyFunction,
        configure: emptyFunction,
        current: emptyFunction,
        before: emptyFunction
    };

    RouteController = {
        extend: function(route){
            return route;
        }
    };

})();
