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
var d = new Demo();
d.demo();
console.log(d.element);
console.log(Demo.demo2());
