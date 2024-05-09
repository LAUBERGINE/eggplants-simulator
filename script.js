document.addEventListener('DOMContentLoaded', function () {
    const table = document.getElementById('table');

    const invTable = document.getElementById('inv_table');
    const invCells = invTable.getElementsByTagName("td");

    let isGrassSelect = true;
    let isWaterSelect = false;
    let isTreeSelect = false;
    let isSandSelect = false;
    let isHomeSelect = false;


    let isFertilizedSelect = false;
    let isWheatSeedSelect = false;


    let numberWheat = 0;

    table.addEventListener("click", function (event) {
        const targetCell = event.target;
        if (!targetCell.classList.contains("water_blocked")) {

            if (isGrassSelect) {
                targetCell.className = '';
                targetCell.classList.toggle("grass");
            }
            if (isWaterSelect) {
                targetCell.className = '';
                targetCell.classList.toggle("water");
            }

            if (targetCell.classList.contains("grass")) {
                if (isHomeSelect) {
                    targetCell.className = '';
                    targetCell.classList.toggle("home");
                }
                if (isTreeSelect) {
                    targetCell.className = '';
                    targetCell.classList.toggle("tree");
                }
            }

            if (isSandSelect) {
                targetCell.className = '';
                targetCell.classList.toggle("sand");
            }

        }

        // if (isFertilizedSelect) {
        //     if (targetCell.classList.contains("highlight_text_color_green")) {
        //         targetCell.className = '';
        //         targetCell.classList.toggle("highlight_text_color_dark_red");
        //     }
        // }
        // if (isWheatSeedSelect) {
        //     if (!targetCell.classList.contains("highlight_text_color_pastel_yellow")) {
        //         if (targetCell.classList.contains("highlight_text_color_dark_red")) {
        //             targetCell.className = '';
        //             targetCell.classList.toggle("highlight_text_color_pastel_yellow");
        //         }
        //     }
        // }
        // if (targetCell.classList.contains("highlight_text_color_pastel_yellow")) {
        //     setTimeout(() => {
        //         targetCell.className = '';
        //         targetCell.classList.toggle("highlight_text_color_yellow");
        //     }, 5000);
        // }
        // if (targetCell.classList.contains("highlight_text_color_yellow")) {
        //     targetCell.className = '';
        //     targetCell.classList.toggle("highlight_text_color_dark_red");
        //     var nbintd = document.getElementById("wheat");
        //     numberWheat = numberWheat + 2;
        //     nbintd.innerText = numberWheat;

        // }
    });

    for (let i = 0; i < invCells.length; i++) {
        invCells[i].addEventListener("click", function () {
            if (this.id === 'grass') {
                isGrassSelect = true;
            } else {
                isGrassSelect = false;
            }
            if (this.id === 'water') {
                isWaterSelect = true;
            } else {
                isWaterSelect = false;
            }
            if (this.id === 'tree') {
                isTreeSelect = true;
            } else {
                isTreeSelect = false;
            }
            if (this.id === 'sand') {
                isSandSelect = true;
            } else {
                isSandSelect = false;
            }
            if (this.id === 'home') {
                isHomeSelect = true;
            } else {
                isHomeSelect = false;
            }



            if (this.id === 'fertilized') {
                isFertilizedSelect = true;
            } else {
                isFertilizedSelect = false;
            }
            if (this.id === 'wheat-seed') {
                isWheatSeedSelect = true;
            } else {
                isWheatSeedSelect = false;
            }

        });
    }


});