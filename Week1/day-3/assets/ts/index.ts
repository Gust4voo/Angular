abstract class Tasse {
    redditoAnnuoLordo: number;
    codRedd: number;
    irpef: number;
    inps: number;
    constructor(_redditoAnnuoLordo: number, _codRedd: number, _irpef: number, _inps: number) {
        this.redditoAnnuoLordo = _redditoAnnuoLordo;
        this.codRedd = _codRedd;
        this.irpef = _irpef;
        this.inps = _inps;
    }

    getUtileTasse(): number {
        return this.redditoAnnuoLordo * (this.codRedd / 100)
    };

    getTasseInps(): number {
        return this.getUtileTasse() * (this.inps / 100)
    };

    getTasseIrpef(): number {
        return this.getUtileTasse() * (this.irpef / 100)
    };

    getRedditoAnnuoNetto(): number {
        return this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef())
    };
}

class Professionista extends Tasse {
    constructor(_redditoAnnuoLordo: number) {
        super(_redditoAnnuoLordo, 78, 5, 25.72)
    }
}

class Artigiano extends Tasse {
    constructor(_redditoAnnuoLordo: number) {
        super(_redditoAnnuoLordo, 67, 15, 35)
    }
}

class Commerciante extends Tasse {

    constructor(_redditoAnnuoLordo: number) {
        super(_redditoAnnuoLordo, 40, 15, 35)
    }
}

let prof = new Professionista(50000);
let comm = new Commerciante(20000);
let art = new Artigiano(30000);

console.log(prof.getRedditoAnnuoNetto());
console.log(comm.getRedditoAnnuoNetto());
console.log(art.getRedditoAnnuoNetto());