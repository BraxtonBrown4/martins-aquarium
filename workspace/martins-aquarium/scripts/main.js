import { htmlRender } from './htmlRender.js'
import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'
//import { locationList } from './locationList.js'

// Generate the fish list
const fishHTML = fishList()
htmlRender(fishHTML, "fishList")
debugger
// Generate the care tips
const tipHTML = tipList()
htmlRender(tipHTML, "tipList")

// Generate the location list
const locationHTML = locationList()
htmlRender(locationHTML, "locationList")

// Render each HTML string to the correct DOM element