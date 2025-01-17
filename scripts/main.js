import { htmlRender } from './htmlRender.js'
//import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'

import { easyCheck } from './multiFish.js'
import { mostHolyFish } from './multiFish.js'
import { soldierFish } from './multiFish.js'
import { regularFish } from './multiFish.js'

//import { locationList } from './locationList.js'

// Generate the fish list
/*const fishHTML = fishList()
htmlRender(fishHTML, "fishList")*/
let html = ''
html += mostHolyFish()
html += soldierFish()
html += regularFish()
html = '<header>Fish</header>' + '<section id="fishGrid">' + html + '<section/>'

htmlRender(html, "fishList")

// Generate the care tips
const tipHTML = tipList()
htmlRender(tipHTML, "tipList")

// Generate the location list
const locationHTML = locationList()
htmlRender(locationHTML, "locationList")

// Render each HTML string to the correct DOM element