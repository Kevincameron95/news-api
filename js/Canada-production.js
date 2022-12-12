const jsdom = require("jsdom");

const { Readability } = ('@mozilla/readability');
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
    console.log(firstResult.content);

    // ...and download the HTML for it, again with axios
    axios.get(firstResult.url).then(function(r2) {
  
      // We now have the article HTML, but before we can use Readability to locate the article content we need jsdom to convert it into a DOM object
      let dom = new JSDOM(r2.data, {
        url: firstResult.content
      });
  
      // now pass the DOM document into readability to parse
      let article = new Readability(dom.window.document).parse();
  
      // Done! The article content is in the textContent property
      console.log(article.textContent);
    })
  
    // New api dl html and convert to json code snippet

  
// and we need jsdom and Readability to parse the article HTML

// First lets get some search data from News API

// Build the URL we are going request. This will get articles related to Apple and sort them newest first


// Make the request with axios' get() function


  // At this point we will have some search results from the API. Take the first search result...
 

    // end of new api provided code snippet


    // document.querySelector('#canada-target').style.backgroundImage = `url('${canadaStoriesArray[0].urlToImage}')`;
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