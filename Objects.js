class Item {
    constructor(name) {
        this.name = name;
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
}