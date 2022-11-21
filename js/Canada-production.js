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
    // document.querySelector('#canada-target').style.backgroundImage = `url('${canadaStoriesArray[0].urlToImage}')`;
    document.getElementById('canada-target').style.backgroundImage= `url('${canadaStoriesArray[0].urlToImage}`
    

    for(let i = 2; i < 3; i++){
        const canadaMainStoryTarget = document.createElement('div');
        canadaMainStoryTarget.classList.add('canada-target-div');

        canadaMainStoryTarget.innerHTML = `
        <div class="canada-target-headline" >
        <h2 class="canada-target-headline-h2 target-article-headline">${canadaStoriesArray[0].title}</h2>
        
        
        `
        document.getElementById('canada-target').appendChild(canadaMainStoryTarget);
        // console.log(canadaMainStoryTarget);
        
    }
    // console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });
};

canadaHeadline();