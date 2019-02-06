var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Demo = /** @class */ (function () {
    function Demo() {
        this.element1 = 2;
        this.element2 = 2;
    }
    Object.defineProperty(Demo.prototype, "element", {
        get: function () {
            return this._element;
        },
        set: function (value) {
            this._element = value;
        },
        enumerable: true,
        configurable: true
    });
    Demo.prototype.demo = function () {
    };
    Demo.prototype.demo1 = function () {
    };
    Demo.demo2 = function () {
    };
    return Demo;
}());
var Demo2 = /** @class */ (function (_super) {
    __extends(Demo2, _super);
    function Demo2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Demo2.prototype.test = function () {
    };
    return Demo2;
}(Demo));
var d = new Demo();
d.demo();
console.log(d.element);
console.log(Demo.demo2());
var d2 = new Demo2();
console.log(d2.test);
