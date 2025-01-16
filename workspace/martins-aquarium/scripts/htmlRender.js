export const htmlRender = (renderMe, assignToMe) =>{
    const location = document.getElementById(assignToMe)

    if (location) {
        location.innerHTML = renderMe
    } else {
        console.error(`Could not find element with id "${assignToMe}"`)
    }
}

//const fishHTML = fishList()
//htmlRender(fishHTML, "fishList")
//<section id="fishList">





/*export const renderMoviesToDOM = (movieHTML) => {
    const movieList = document.getElementById('movie-list');
 
    if (movieList) {
        movieList.innerHTML = movieHTML;
    } else {
        console.error('Could not find element with id "movie-list"');
    }
 };*/