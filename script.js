document.addEventListener('DOMContentLoaded', function () {
    const table = document.getElementById('table');

    const invTable = document.getElementById('inv_table');
    const invCells = invTable.getElementsByTagName("td");

    grass.isSelect = true;

    table.addEventListener("click", function (event) {
        const targetCell = event.target;
        
        if (!targetCell.classList.contains(water_blocked.name)) {

            if (grass.isSelect) {
                grass.JustPlace(targetCell);
            }
            if (water.isSelect) {
                water.JustPlace(targetCell);
            }

            if (targetCell.classList.contains(grass.name)) {
                if (home.isSelect) {
                    home.JustPlace(targetCell);
                }
                if (tree.isSelect) {
                    tree.JustPlace(targetCell);
                }
                if(wheat_seed.isSelect){
                    wheat_seed.JustPlace(targetCell);
                }
            }

            if (sand.isSelect) {
                sand.JustPlace(targetCell);
            }

        }

    });
    
    Array.from(invCells).forEach(cell => {
        cell.addEventListener("click", function () {
            grass.isSelect = this.id === grass.name;
            dirt.isSelect = this.id === dirt.name;
            water.isSelect = this.id === water.name;
            tree.isSelect = this.id === tree.name;
            sand.isSelect = this.id === sand.name;
            home.isSelect = this.id === home.name;
            stone.isSelect = this.id === stone.name;
            wood.isSelect = this.id === wood.name;
            glass.isSelect = this.id === glass.name;
            iron_ore.isSelect = this.id === iron_ore.name;
            golden_ore.isSelect = this.id === golden_ore.name;
            copper_ore.isSelect = this.id === copper_ore.name;
            wheat_seed.isSelect = this.id === wheat_seed.name;
            carrot_seed.isSelect = this.id === carrot_seed.name;
            zucchini_seed.isSelect = this.id === zucchini_seed.name;
            eggplant_seed.isSelect = this.id === eggplant_seed.name;
        });
    });
    
    
});