var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Tasse = /** @class */ (function () {
    function Tasse(_redditoAnnuoLordo, _codRedd, _irpef, _inps) {
        this.redditoAnnuoLordo = _redditoAnnuoLordo;
        this.codRedd = _codRedd;
        this.irpef = _irpef;
        this.inps = _inps;
    }
    Tasse.prototype.getUtileTasse = function () {
        return this.redditoAnnuoLordo * (this.codRedd / 100);
    };
    ;
    Tasse.prototype.getTasseInps = function () {
        return this.getUtileTasse() * (this.inps / 100);
    };
    ;
    Tasse.prototype.getTasseIrpef = function () {
        return this.getUtileTasse() * (this.irpef / 100);
    };
    ;
    Tasse.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef());
    };
    ;
    return Tasse;
}());
var Professionista = /** @class */ (function (_super) {
    __extends(Professionista, _super);
    function Professionista(_redditoAnnuoLordo) {
        return _super.call(this, _redditoAnnuoLordo, 78, 5, 25.72) || this;
    }
    return Professionista;
}(Tasse));
var Artigiano = /** @class */ (function (_super) {
    __extends(Artigiano, _super);
    function Artigiano(_redditoAnnuoLordo) {
        return _super.call(this, _redditoAnnuoLordo, 67, 15, 35) || this;
    }
    return Artigiano;
}(Tasse));
var Commerciante = /** @class */ (function (_super) {
    __extends(Commerciante, _super);
    function Commerciante(_redditoAnnuoLordo) {
        return _super.call(this, _redditoAnnuoLordo, 40, 15, 35) || this;
    }
    return Commerciante;
}(Tasse));
var prof = new Professionista(50000);
var comm = new Commerciante(20000);
var art = new Artigiano(30000);
console.log(prof.getRedditoAnnuoNetto());
console.log(comm.getRedditoAnnuoNetto());
console.log(art.getRedditoAnnuoNetto());
