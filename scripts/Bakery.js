let bakedCakes = [];

// adds .baked to each cake item
export const doTheBaking = (tacoCake, cold) => {
    
    if (cold === true) {
        tacoCake.baked = false;
    } else {
        tacoCake.baked = true;
    }
    bakedCakes.push(tacoCake);
}

export const readyCakes = () => {
    return bakedCakes.slice();
}