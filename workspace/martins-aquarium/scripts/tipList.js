import { database } from './aquariumData.js';

export const tipList = () => {
    let fishTipsHTML = ''
    
    database.tips.map(fish => {
        fishTipsHTML += `
        
        <h1>${fish.topic}:</h1>
        <ul class="tips">
            <li class="fishTips">${fish.text}</li>
        </ul>

        `
    })
    return fishTipsHTML
}

/* <li class="tip"> element inside a <ul class="tips"> */