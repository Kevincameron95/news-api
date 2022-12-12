const targetID = document.getElementById('reading-list-target');


const readingListDiv = document.createElement('div');
readingListDiv.classList.add('reading-list-div');
readingListDiv.innerHTML=`
<div class= "reading-list-article-1">
<p class="article text">${dateFile}</P>
</div>

`
document.getElementById('reading-list-target').appendChild(readingListDiv);
