function topStories(response){
    axios.get('//newsapi.org/v2/top-headlines?country=us&apiKey=76026a085ca64521989707fb570fb5b9', {
    params: {
      ID: 12345
    }
    
  })
  .then(function (response) {
        const product = response.data
        // console.log(product.articles);
        const topStoriesArray = Array.from(product.articles);
        console.log(topStoriesArray);
        topStoriesArray.length = 5;
        console.log(topStoriesArray);
        // return topStoriesArray;
        for(let i = 0 ; i < topStoriesArray.length; i++) {
            const topStorieDiv = document.createElement('div');
            topStorieDiv.classList.add('topstories');
            topStorieDiv.innerHTML = `
                <div class="top-stories">
                    <h2 id="top-stories-headline">${topStoriesArray[i+1].title}</h2>
                        <h5 class="top-stories-author">${topStoriesArray[i].author}</h5>
                        <h6 class="top-stories-date"></h6>
                        <p class="top-stories-description">${topStoriesArray[i].description}</p>
                </div>
            
            `
            
            document.getElementById('topstories-top-target').appendChild(topStorieDiv);
     }
        
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