import {articleOne} from '../backend/requests'

const targetID = document.getElementById('reading-list-target');


const readingListDiv = document.createElement('div');
readingListDiv.classList.add('reading-list-div');
readingListDiv.innerHTML=`
<div class= "reading-list-article-1">
<p class="article text">hello ${articleOne}</P>
</div>

`
targetID.appendChild(readingListDiv);
console.log(readingListDiv)