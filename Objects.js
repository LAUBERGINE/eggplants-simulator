class Item {
    constructor(name) {
        this.name = name;
        this.isSelect = false;
    }
    OnePlace(table, ligne, colone) {
        table.rows[ligne].cells[colone].className = '';
        table.rows[ligne].cells[colone].classList.add(`${this.name}`);
    }
    LignePlace(table, ligne, startColone, endColone) {
        for (let colone = startColone; colone <= endColone; colone++) {
            table.rows[ligne].cells[colone].className = '';
            table.rows[ligne].cells[colone].classList.add(`${this.name}`);
        }
    }
    ColonePlace(table, colone, startLigne, endLigne) {
        for (let ligne = startLigne; ligne <= endLigne; ligne++) {
            table.rows[ligne].cells[colone].className = '';
            table.rows[ligne].cells[colone].classList.add(`${this.name}`);
        }
    }
    SquarePlace(table, startColone, startLigne, endColone, endLigne){
        for (let ligne = startLigne; ligne <= endLigne; ligne++) {
            for (let colone = startColone; colone <= endColone; colone++) {
                table.rows[ligne].cells[colone].className = '';
                table.rows[ligne].cells[colone].classList.add(`${this.name}`);
            }
        }
    }
    SquareReplace(table, startColone, startLigne, endColone, endLigne, ItemToReplace){
        for (let ligne = startLigne; ligne <= endLigne; ligne++) {
            for (let colone = startColone; colone <= endColone; colone++) {
                if (table.rows[ligne].cells[colone].classList.contains(`${ItemToReplace}`)) {
                    table.rows[ligne].cells[colone].classList.remove(`${ItemToReplace}`);
                    table.rows[ligne].cells[colone].classList.add(`${this.name}`);
                }
            }
        }
    }
    JustPlace(cellule){
        cellule.className = '';
        cellule.classList.add(`${this.name}`);
    }
}

class Seed extends Item{
    constructor(name, time, plantation, give, numberGiveP, numberGiveS) {
        super(name, name);
        this.time = time;
        this.plantation = plantation;
        this.give = give;
        this.numberGiveP = numberGiveP;
        this.numberGiveS = numberGiveS;
        this.NUMBERS_SEED = 0;
        this.NUMBERS_PRODUCT = 0;
    }
    JustPlace(cellule){
        super.JustPlace(cellule);
        setTimeout(() => {
            cellule.className = '';
            cellule.classList.add(`${this.plantation}`);
        }, this.time*1000 );
        
    }
    Recolte(cellule){
        cellule.className = '';
        cellule.classList.add(`${this.give}`);
        this.NUMBERS_PRODUCT = this.NUMBERS_PRODUCT + this.numberGiveP;
        this.NUMBERS_SEED = this.NUMBERS_SEED + this.numberGiveS;
    }
}
class Items{
    constructor(name){
        this.name = name;
    }
}