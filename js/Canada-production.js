


// Canada
function canadaHeadline(response){
    axios.get('//newsapi.org/v2/top-headlines?country=ca&apiKey=447b8c1c1861481a95578726345b1cf9', {
        params: {
            ID:12345
        }
    })
  .then(function (response) {
    const canadaData = response.data;
    const canadaStoriesArray = Array.from(canadaData.articles);
    canadaStoriesArray.length = 3;
    // console.log(canadaStoriesArray);
    let firstResult = canadaData.articles[0];
    // console.log(firstResult.content);
    const readingList1 = (firstResult.content);
    const readingListHtml = String(readingList1);
    console.log(firstResult);
    
    // console.log(readingList1)
    
    // Save first article content to Local Storage
    
    localStorage.setItem('first-article',readingListHtml);
    // localStorage.setItem('first-article-title',readingList1-title);
    // console.log(localStorage);

    // a

    // add article image to background div
    document.getElementById('canada-target').style.backgroundImage= `url('${canadaStoriesArray[0].urlToImage}`
    

    for(let i = 2; i < 3; i++){
        const canadaMainStoryTarget = document.createElement('div');
        canadaMainStoryTarget.classList.add('canada-target-div');

        canadaMainStoryTarget.innerHTML = `
        <div class="canada-target-headline" >
        <h2 class="canada-target-headline-h2 target-article-headline">${canadaStoriesArray[0].title}</h2>
        <a class="headline-story-hot-link" href="${canadaStoriesArray[i].url}">Read More</a>
        
              
              
              </div> 
        `
        document.getElementById('canada-target').appendChild(canadaMainStoryTarget);
        // console.log(canadaMainStoryTarget);
        
    }
    for(let i= 0; i <2; i++){
      const canadaSecondaryStories = document.createElement('div');
      canadaSecondaryStories.classList.add('secondary-stories-div-canada');
      canadaSecondaryStories.className = 'block'+ i;
      canadaSecondaryStories.innerHTML = `
        <div class="canada-second-headline" >
        <h2 class="canada-target-secondary-headline-h2 target-article-headline-secondary">${canadaStoriesArray[i+1].title}</h2>
        
        
        <a class="secondary-links" href="${canadaStoriesArray[i+1].url}">Read More</a>
        
        </div>
        `
        document.getElementById('canada-target').appendChild(canadaSecondaryStories);
    }
    // console.log(response);
  })
  .catch(function (error) {
    // console.log(error);
  })
  .then(function () {
    // always executed
  });
};

canadaHeadline();