function topStories(response){
    axios.get('//newsapi.org/v2/top-headlines?country=ca&apiKey=76026a085ca64521989707fb570fb5b9', {
    params: {
      ID: 12345
    }
    
  })
  .then(function (response) {
        const product = response.data
        // console.log(product.articles);
        const topStoriesArray = Array.from(product.articles);
        // console.log(topStoriesArray);
        topStoriesArray.length = 5;
        
        // console.log(topStoriesArray);
        // return topStoriesArray;
        
        
        for(let i = 0 ; i < topStoriesArray.length; i++) {
          const dateSlice = topStoriesArray[i].publishedAt.slice( 0,10 )
          const urlSlice = topStoriesArray[0].urlToImage.slice(0, length)
          const topStorieDiv = document.createElement('div');
          const nullFinder = '${topStoriesArray[i].description}';
          const backGroundImgTopStories = document.querySelector('.carousel-item');
          
          
          
          
            

            
            noDescription(nullFinder,null);
            // console.log(noDescription);
            topStorieDiv.classList.add('topstories');
            topStorieDiv.innerHTML = `
                <div class="top-stories carousel-item">
                <img src=${topStoriesArray[i].urlToImage} class="article-img"></img>
                <h2 id="top-stories-headline">${topStoriesArray[i].title}</h2>
                // <h5 class="top-stories-author">${topStoriesArray[i+1].author}</h5>
                <p class="top-stories-description">${topStoriesArray[i].description}</p>
                <h6 class="top-stories-date">${dateSlice}</h6>
                </div>
            
            `
            
            document.getElementById('topstories-top-target').appendChild(topStorieDiv);
            
     }
     const topStorieDiv = document.querySelector('.topstories');
     console.log(topStorieDiv.style.backgroundImage = `url('${topStoriesArray[1].urlToImage}')`);
     
     
        // console.log(fetchData.responseTEXT);
        // handleResult(response);
        // console.log(response);
     
     
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    
    // const dataAr = articles; 
        
  });  


};

topStories();
function noDescription(array,param){
    if(array == 'param'){

        array.innerText = "";
    };
};