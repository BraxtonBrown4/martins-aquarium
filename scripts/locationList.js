import { database } from './aquariumData.js';

export const locationList = () => {
    const locationsHeader = '<header>Locations</header>'
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
    return locationsHeader + '<section id="locationsGrid">' + locationsListHTML + '<section/>'
}

/* Define each location as a <section> element with the class location inside an <article> element with the class locations */