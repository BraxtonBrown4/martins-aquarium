import { database } from './aquariumData.js';

export const fishList = () => { // Generate an HTML representation of each fish
    let fishListHTML = ''
    database.fish.map(fish => {
        fishListHTML += `
        <arictle class="Fish">
            <img src="e" class="fishCard">
            <div class="fishDetails">
                <h2 class="fishSpecies">Name: ${fish.name}</h2>
                <h2 class="fishSpecies">Species: ${fish.species}</h2>
                <h2 class="fishLength">Size: ${fish.length}</h2>
                <h2 class="fishLocation">Location: ${fish.location}</h2>
                <h2 class="fishDiet">Diet: ${fish.diet}</h2>
            </div>
        </article>
        `
    })
    return fishListHTML
};


/*
name
species
length
location
diet
image
*/

/* <article class="movie">
                <img src="${movie.poster}" alt="${movie.title} poster" class="movie__poster">
                <div class="movie__details">
                    <h2 class="movie__title">${movie.title}</h2>
                    <p class="movie__description">${movie.description}</p>
                </div>
            </article> 
*/