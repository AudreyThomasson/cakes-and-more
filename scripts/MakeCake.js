let idNum = 1;

export const MakeCake = (name, season, color, type, flavor) => {
    const cakeTacoObj = {
        cakeName: name,
        season: season,
        color: color,
        id: idNum++
    }
    return cakeTacoObj
}