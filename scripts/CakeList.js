import {readyCakes} from "./Bakery.js";

const makeCakeHTML = (tacoObj) => {
    return `
    <h2>${tacoObj.cakeName}</h2>
    <p>${tacoObj.season}</p>
    <p>${tacoObj.color}</p>
    <p>${tacoObj.baked}</p>
    `
}
// this is the list of the html for the complete cake list
export const CakeList = () => {
    const theListOfCakes = readyCakes();
    let cakeHTML = "";
    for (const oneCake of theListOfCakes) {
        cakeHTML += makeCakeHTML(oneCake);
        // everytime through the loop, add html for oneCake into cakeHTML
    }
    return cakeHTML;
}

