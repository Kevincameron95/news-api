
function canadaHeadline(response){
    axios.get('//newsapi.org/v2/top-headlines?country=ca&apiKey=76026a085ca64521989707fb570fb5b9', {
        params: {
            ID:12345
        }
    })
  .then(function (response) {
    const canadaData = response.data;
    const canadaStory = Array.from(canadaData.articles);
    canadaStory.length = 3;
    console.log(canadaStory);

    for(let i = 0; i < 1; i++){
        const canadaMainStoryTarget = document.createElement('div');
        canadaMainStoryTarget.classList.add('canadaMainStoryHeadline');
        canadaMainStoryTarget.innerHTML = `
            
        
        
        `
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