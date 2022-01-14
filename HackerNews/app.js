
const newsIdUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
const startNewsLink = 'https://hacker-news.firebaseio.com/v0/item/'
const endNewsLink = '.json?print=pretty'

getNewsId()

function getNewsId(){
    fetch(newsIdUrl)
    .then(response => response.json())
    .then(result => getNewsLinks(result))
}

function getNewsLinks(newsIds){
    for (let newsId of newsIds){
        fetch(`${startNewsLink}${newsId}${endNewsLink}`)
        .then(response => response.json())
        .then(result => addNewsItem(result))
    }
}

function addNewsItem(news){
    let newsDisplayDiv =document.getElementById('newsDisplayDiv')
    newsDisplayDiv.innerHTML += `<h3><a href=${news.url}>${news.title}</a> by ${news.by}</h3>`
}