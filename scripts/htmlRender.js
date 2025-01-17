export const htmlRender = (renderMe, assignToMe) =>{
    const location = document.getElementById(assignToMe)

    if (location) {
        location.innerHTML = renderMe
    } else {
        console.error(`Could not find element with id "${assignToMe}"`)
    }
}