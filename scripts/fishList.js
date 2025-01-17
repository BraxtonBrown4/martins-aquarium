import { database } from './aquariumData.js';

export const fishList = () => { // Generate an HTML representation of each fish
    const fishHeader = '<header>Fish</header>'
    let fishListHTML = ''

    database.fish.map(fish => {
        fishListHTML += `
        <article class="fishCard">
            <img src="${fish.image}" class="fishImage"/>
            <div class="fishDetails">
                <h2 class="fishSpecies">Name: ${fish.name}</h2>
                <h2 class="fishSpecies">Species: ${fish.species}</h2>
                <h2 class="fishLength">Size: ${fish.length}</h2>
                <h2 class="fishLocation">Location: ${fish.location}</h2>
                <h2 class="fishDiet">Diet: ${fish.diet}</h2>
            </div>
        </article>
    `})
    return fishHeader + '<section id="fishGrid">' + fishListHTML + '<section/>'
}