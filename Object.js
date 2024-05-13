//Just them simple items
const grass = new Item("grass");
const dirt = new Item("dirt");
const water = new Item("water");
const water_blocked = new Item("water_blocked");
const tree = new Item("tree");
const sand = new Item("sand");
const home = new Item("home"); 
const stone = new Item("stone");
const wood = new Item("wood");
const glass = new Item("glass");

//Ores and their derivatives
const iron_ore = new Item("iron_ore");
const iron = new Items("iron");

const golden_ore = new Item("golden_ore");
const gold = new Items("gold");

const copper_ore = new Item("copper_ore");
const copper = new Items("copper");

//Seeds and their derivatives
const wheat_plantation = new Item("wheat_plantation");
const wheat = new Items("wheat");
const wheat_seed = new Seed("wheat_seed", 5, wheat_plantation.name, wheat.name, 2, 2);

const carrot_plantation = new Item("carrot_plantation");
const carrot = new Items("carrot");
const carrot_seed = new Seed("carrot_seed", 20, carrot_plantation.name, carrot.name, 2, 2);

const zucchini_plantation = new Item("zucchini_plantation");
const zucchini = new Items("zucchini");
const zucchini_seed = new Seed("zucchini_seed", 30, zucchini_plantation.name, zucchini.name, 2, 2);

const eggplant_plantation = new Item("eggplant_plantation");
const eggplant = new Items("eggplant");
const eggplant_seed = new Seed("eggplant_seed", 300, eggplant_plantation.name, eggplant.name, 1, 2);
