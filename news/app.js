const displayUL = document.getElementById("displayUL")
const nesBtn = document.getElementById("newsBtn")

function displayNews(newsToDisplay) {
    const newsList = newsToDisplay.articles.map(function (item){
        return `<li>
        <h4>${item.author}</h4>
        <h4>${item.title}</h4>
        <p>${item.description}</p>
        <a href=${item.url}>Link</a>
        <img src=${item.urlToImage}>
        <p>${item.publishedAt}</p>
        </li>`
    })
    displayUL.innerHTML = newsList.join("")
}

nesBtn.addEventListener("click", function () {
    displayNews(news)
})