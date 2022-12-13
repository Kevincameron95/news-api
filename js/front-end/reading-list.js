

const targetID = document.getElementById('reading-list-target');
fetch("../data.json")
.then(res => res.json())
.then(function firstArticleResponse(data){
   
    const article1data = data;
    console.log(article1data);
    const Str = require('@supercharge/strings')
    const title = Str(' Supercharge is sweet!').trim().title().get()
    console.log(substring);
    const readingListDiv = document.createElement('div');
    readingListDiv.classList.add('reading-list-div');
    readingListDiv.innerHTML=`
    <div class= "reading-list-article-1">
    <p class="reading-list-1">hello ${substring}</P>
    </div>
    
    `
    targetID.appendChild(readingListDiv);
    // console.log(readingListDiv)
})
