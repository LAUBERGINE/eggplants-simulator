document.addEventListener('DOMContentLoaded', function () {
    const table = document.getElementById('table');

    const numRows = 48;
    const numCols = 48;

    const erreur = 16;

    //Mes Items
    const grass = new Item("grass");
    const water = new Item("water");
    const water_blocked = new Item("water_blocked");
    const tree = new Item("tree");
    const sand = new Item("sand");
    const home = new Item("home"); 

    //Mon Plateau
    for (let i = 0; i < numRows; i++) {
        const row = table.insertRow();
        for (let j = 0; j < numCols; j++) {
            const cell = row.insertCell();
            cell.classList.add("water");
        }
    }

    //Mes items de base

    grass.LignePlace(table, 17, 19, 27);
    grass.LignePlace(table, 18, 17, 30);
    grass.LignePlace(table, 19, 17, 30);
    grass.LignePlace(table, 20, 18, 30);
    grass.LignePlace(table, 21, 20, 30);
    grass.LignePlace(table, 22, 21, 30);
    grass.LignePlace(table, 23, 21, 29);
    grass.LignePlace(table, 24, 22, 29);
    grass.LignePlace(table, 25, 23, 29);
    grass.LignePlace(table, 26, 23, 29);
    grass.LignePlace(table, 27, 23, 28);
    grass.LignePlace(table, 28, 22, 28);
    grass.LignePlace(table, 29, 21, 27);
    grass.LignePlace(table, 30, 19, 25);

    const BaseTree = [
        [1, 11],[2, 9],[3, 11],[3, 13],[4, 8],[5, 10],[5, 12],[6, 14],[7, 12],[8, 10],[9, 13],[10, 9],[10, 11],[12, 10],[14, 9]
    ];
    for (let i = 1; i <= BaseTree.length; i++) {
        const [ligne, colone] = BaseTree[i - 1];
        tree.OnePlace(table, ligne + erreur, colone + erreur);
    }

    sand.ColonePlace(table, 17, 19, 20);
    sand.ColonePlace(table, 20, 22, 23);
    sand.ColonePlace(table, 21, 23, 24);
    sand.ColonePlace(table, 22, 25, 26);
    sand.LignePlace(table, 29, 19, 21);
    sand.LignePlace(table, 21, 18, 19);
    sand.OnePlace(table, 30, 18);
    sand.OnePlace(table, 28, 22);
    

    home.OnePlace(table, 18, 21);
    water_blocked.SquareReplace(table, 0, 0, 47, 47, water.name);
    water.SquareReplace(table, 16, 16, 31, 31, water_blocked.name);

    
});