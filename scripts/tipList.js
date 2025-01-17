import { database } from './aquariumData.js';

export const tipList = () => {
    const tipsHeader = '<header>Tips</header>'
    let tipslListHTML = ''
    
    database.tips.map(fish => {
        tipslListHTML += `
        
        <h1>${fish.topic}:</h1>
        <ul class="tips">
            <li class="fishTips">${fish.text}</li>
        </ul>

        `
    })
    return tipsHeader + '<section id="tipsGrid">' + tipslListHTML + '<section/>'
}

/* <li class="tip"> element inside a <ul class="tips"> */