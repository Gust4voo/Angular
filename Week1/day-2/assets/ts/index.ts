//////////////SON ACCOUNT///////////////////////////
class SonAccount {
    user: string;
    surname: string;
    balanceInit: number = 0;
    
    constructor (_user: string, _surname: string, _balanceInit: number) {
        this.user = _user;
        this.surname = _surname;
        this.balanceInit = _balanceInit;
    }

deposit(add: number): number {
    return this.balanceInit = this.balanceInit + add;
};

withDraw(add: number): number {
    return this.balanceInit = this.balanceInit - add;
};

}

//////////////ACCOUNT MOTHER///////////////////////////
class MotherAccount {
    user: string;
    surname: string;
    balanceInit: number = 0;
    
    constructor (_user: string, _surname: string, _balanceInit: number) {
        this.user = _user;
        this.surname = _surname;
        this.balanceInit = _balanceInit;
    }

deposit(add: number): number {
    return this.balanceInit = this.balanceInit + add;
};

withDraw(minus: number): number {
    return this.balanceInit = this.balanceInit - minus - ((minus/100) * 10); //prelievo con interessi//
};

}

//////////////ACCOUNT SON///////////////////////////

let son = new SonAccount('Gustavo', 'Oliveira', 150)
console.log(son.balanceInit);
console.log(son.deposit(1200)); //deposito
console.log(son.balanceInit);
console.log(son.withDraw(500))//prelievo

//////////////ACCOUNT MOTHER////////////////////////////

let mother = new MotherAccount('Grace', 'Ponti', 1300)
console.log(mother.balanceInit);
console.log(mother.deposit(500)); //deposito
console.log(mother.balanceInit);
console.log(mother.withDraw(1000))//prelievo
