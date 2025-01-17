import { database } from './aquariumData.js';
export let easyCheck = []

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    let holyFish = ""

    database.fish.filter(fish => {
        if (fish.length % 3 === 0 && fish.length % 5 !== 0) {

            easyCheck.push(fish)

            holyFish += `
            <article class="fishCard">
                <h1>HOLY FISH</h1>
                <img src="${fish.image}" class="fishImage"/>
                <div class="fishDetails">
                    <h2 class="fishSpecies">Name: ${fish.name}</h2>
                    <h2 class="fishSpecies">Species: ${fish.species}</h2>
                    <h2 class="fishLength">Size: ${fish.length}</h2>
                    <h2 class="fishLocation">Location: ${fish.location}</h2>
                    <h2 class="fishDiet">Diet: ${fish.diet}</h2>
                </div>
            </article>
            `}
        })
    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    let soldierFish = ""
    database.fish.filter(fish => {

        if (fish.length % 5 === 0) {

            easyCheck.push(fish)
            
            soldierFish += `
            <article class="fishCard">
                <h1>SOLDIER FISH</h1>
                <img src="${fish.image}" class="fishImage"/>
                <div class="fishDetails">
                    <h2 class="fishSpecies">Name: ${fish.name}</h2>
                    <h2 class="fishSpecies">Species: ${fish.species}</h2>
                    <h2 class="fishLength">Size: ${fish.length}</h2>
                    <h2 class="fishLocation">Location: ${fish.location}</h2>
                    <h2 class="fishDiet">Diet: ${fish.diet}</h2>
                </div>
            </article>
            `}
        })
    return soldierFish
}

export const regularFish = () => {
    let fishListHTML = ''
    // Any fish not a multiple of 3 or 5
    database.fish.filter(fish => {
            if (!easyCheck.includes(fish)) {
                fishListHTML += `

                <article class="fishCard">
                    <h1>REGULAR FISH</h1>
                    <img src="${fish.image}" class="fishImage"/>
                    <div class="fishDetails">
                        <h2 class="fishSpecies">Name: ${fish.name}</h2>
                        <h2 class="fishSpecies">Species: ${fish.species}</h2>
                        <h2 class="fishLength">Size: ${fish.length}</h2>
                        <h2 class="fishLocation">Location: ${fish.location}</h2>
                        <h2 class="fishDiet">Diet: ${fish.diet}</h2>
                    </div>
                </article>
                `}
            })
    return fishListHTML
}