

const targetID = document.getElementById('reading-list-target');
fetch("../data.json")
.then(res => res.json())
.then(function firstArticleResponse(data){
   
    const article1data = data;
    // console.log(article1data);
    
    const lines = article1data.split("\n");  // split the string into lines
    const numLines = 4;  // number of lines to include in each substring

    for (let i = 0; i < lines.length; i += numLines) {
    let substring = lines.slice(i, i + numLines).join("\n");
        // console.log(substring)
        paragraphSplit = substring;
        
        const readingListDiv = document.createElement('div');
        readingListDiv.classList.add('reading-list-div');
        readingListDiv.innerHTML=`
        <div class= "reading-list-article-1">
        <p class="reading-list-1">${paragraphSplit}</P>
        </div>
        
        `
        targetID.appendChild(readingListDiv);
        // console.log(readingListDiv)
    }
     
})

fetch("../data2.json")
.then(res => res.json())
.then(function firstArticleResponse(data){
   
    const article2data = data;
    // console.log(article2data);
    
    const lines = article2data.split("\n");  // split the string into lines
    const numLines = 4;  // number of lines to include in each substring

    for (let i = 0; i < lines.length; i += numLines) {
    let substring = lines.slice(i, i + numLines).join("\n");
        // console.log(substring)
        paragraphSplit2 = substring;
        
        const readingListDiv = document.createElement('div');
        readingListDiv.classList.add('reading-list-div');
        readingListDiv.innerHTML=`
        <div class= "reading-list-article-1">
        <p class="reading-list-2">${paragraphSplit2}</P>
        </div>
        
        `
        targetID.appendChild(readingListDiv);
        // console.log(readingListDiv)
    }
     
})
