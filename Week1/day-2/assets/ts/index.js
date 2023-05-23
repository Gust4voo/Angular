//////////////SON ACCOUNT///////////////////////////
var SonAccount = /** @class */ (function () {
    function SonAccount(_user, _surname, _balanceInit) {
        this.balanceInit = 0;
        this.user = _user;
        this.surname = _surname;
        this.balanceInit = _balanceInit;
    }
    SonAccount.prototype.deposit = function (add) {
        return this.balanceInit = this.balanceInit + add;
    };
    ;
    SonAccount.prototype.withDraw = function (add) {
        return this.balanceInit = this.balanceInit - add;
    };
    ;
    return SonAccount;
}());
//////////////ACCOUNT MOTHER///////////////////////////
var MotherAccount = /** @class */ (function () {
    function MotherAccount(_user, _surname, _balanceInit) {
        this.balanceInit = 0;
        this.user = _user;
        this.surname = _surname;
        this.balanceInit = _balanceInit;
    }
    MotherAccount.prototype.deposit = function (add) {
        return this.balanceInit = this.balanceInit + add;
    };
    ;
    MotherAccount.prototype.withDraw = function (minus) {
        return this.balanceInit = this.balanceInit - minus - ((minus / 100) * 10); //prelievo con interessi//
    };
    ;
    return MotherAccount;
}());
//////////////ACCOUNT SON///////////////////////////
var son = new SonAccount('Gustavo', 'Oliveira', 150);
console.log(son.balanceInit);
console.log(son.deposit(1200)); //deposito
console.log(son.balanceInit);
console.log(son.withDraw(500)); //prelievo
//////////////ACCOUNT MOTHER////////////////////////////
var mother = new MotherAccount('Grace', 'Ponti', 1300);
console.log(mother.balanceInit);
console.log(mother.deposit(500)); //deposito
console.log(mother.balanceInit);
console.log(mother.withDraw(1000)); //prelievo
