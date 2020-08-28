console.log("Welcome to the main module");
import { MakeCake } from "./MakeCake.js";
import { doTheBaking } from "./Bakery.js";
import { CakeList } from "./CakeList.js";

// let's pretend we just filled out some input boxes with the
// following information
// assigning it to cake1 so we can use it later
const cake1 = MakeCake("Christmas In July", "Summer", "white", "cake", "vanilla");
// console.log(cake1);

const cake2 = MakeCake("Super Bowl Brownies", "Winter", "brown", "brownie", "fudge");
// console.log(cake2);


doTheBaking(cake2, false);
doTheBaking(cake1, true);

const contentTarget = document.querySelector("#cakeDisplay");
contentTarget.innerHTML = CakeList();