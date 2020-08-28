let idNum = 1;

// takes in all the info from where the MakeCake function is called
// and inserts it into the named fields
export const MakeCake = (name, season, color, type, flavor) => {
    const cakeTacoObj = {
        cakeName: name,
        season: season,
        color: color,
        id: idNum++
    }
    return cakeTacoObj;
}