document.addEventListener('DOMContentLoaded', function () {
    const table = document.getElementById('table');

    const numRows = 48;
    const numCols = 48;

    const decCol = 16;
    const decLig = 16;

    for (let i = 0; i < numRows; i++) {
        const row = table.insertRow();
        for (let j = 0; j < numCols; j++) {
            const cell = row.insertCell();
            cell.classList.add("water");
        }
    }

    const BaseGrass = [
        //[Start colone, fin colone]
        [3, 11],
        [1, 14],
        [1, 14],
        [2, 14],
        [4, 14],
        [5, 14],
        [5, 13],
        [6, 13],
        [7, 13],
        [7, 13],
        [7, 12],
        [6, 12],
        [5, 11],
        [3, 9]
    ];

    for (let row = 1; row <= (BaseGrass.length); row++) {
        const [start, end] = BaseGrass[row - 1];
        for (let col = start; col <= end; col++) {
            table.rows[row + decLig].cells[col + decCol].className = '';
            table.rows[row + decLig].cells[col + decCol].classList.add('grass');
        }
    }

    const BaseTree = [
        //[Numero Ligne, Numero Colone]
        [1, 11],
        [2, 9],
        [3, 11],
        [3, 13],
        [4, 8],
        [5, 10],
        [5, 12],
        [6, 14],
        [7, 12],
        [8, 10],
        [9, 13],
        [10, 9],
        [10, 11],
        [12, 10],
        [14, 9]

    ];
    for (let row = 1; row <= BaseTree.length; row++) {
        const [nbL, nbC] = BaseTree[row - 1];
        table.rows[nbL + decLig].cells[nbC + decCol].classList.add('tree');
    }

    const BaseSand = [
        //[Numero Ligne, Numero Colone]
        [3, 1],
        [4, 1],
        [5, 2],
        [14, 2],
        [5, 3],
        [13, 3],
        [6, 4],
        [7, 4],
        [13, 4],
        [7, 5],
        [8, 5],
        [13, 5],
        [12, 5],
        [9, 6],
        [10, 6]
    ];
    for (let row = 1; row <= BaseSand.length; row++) {
        const [nbL, nbC] = BaseSand[row - 1];
        table.rows[nbL + decLig].cells[nbC + decCol].className = '';
        table.rows[nbL + decLig].cells[nbC + decCol].classList.add('sand');
    }

    table.rows[2 + decLig].cells[5 + decCol].classList.add('home');

    for (let row = 0; row <= 47; row++) {
        for (let col = 0; col <= 47; col++) {
            if (table.rows[row].cells[col].classList.contains('water')) {
                table.rows[row].cells[col].classList.remove('water');
                table.rows[row].cells[col].classList.add('water_blocked');
            }
        }
    }
    for (let row = 16; row <= 31; row++) {
        for (let col = 16; col <= 31; col++) {
            if (table.rows[row].cells[col].classList.contains('water_blocked')) {
                table.rows[row].cells[col].classList.remove('water_blocked');
                table.rows[row].cells[col].classList.add('water');
            }
        }
    }
});