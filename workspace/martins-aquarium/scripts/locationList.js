import { database } from './aquariumData.js';

export const locationList = () => {
    let locationsListHTML = ''

    database.locations.map(location => {
        locationsListHTML += `
        
        <section>
            <article>
                <h1>${location.name} is located in ${location.country}</h1>
                <li>${location.description}</li>
            </article>
        </section>

        `
    })
    return locationsListHTML
}

/* Define each location as a <section> element with the class location inside an <article> element with the class locations */