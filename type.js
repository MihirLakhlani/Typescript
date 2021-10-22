"use strict";
exports.__esModule = true;
var v;
v = 30;
var App = /** @class */ (function () {
    function App() {
        this.name = "mihir";
        console.log(v);
    }
    App.prototype.getname = function () {
        console.log(this.name);
    };
    return App;
}());
var a1 = new App();
a1.getname();
