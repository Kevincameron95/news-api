function ukHeadline(response){
    axios.get('//newsapi.org/v2/top-headlines?country=uk&apiKey=76026a085ca64521989707fb570fb5b9', {
        params: {
            ID:12345
        }
    })
  .then(function (response) {
    const ukData = response.data;
    const ukStoriesArray = Array.from(ukData.articles);
    ukStoriesArray.length = 3;
    console.log(ukStoriesArray);

    for(let i = 0; i < 1; i++){
        const ukMainStoryTarget = document.createElement('div');
        ukMainStoryTarget.classList.add('uk-target-div');
        ukMainStoryTarget.innerHTML = `
        <div class="uk-target-headline">
        <h2 class="uk-target-headline-h2">${ukStoriesArray[0].title}</h2>
        </div>
        
        `
        document.getElementById('uk-target').appendChild(ukMainStoryTarget);
        console.log(ukMainStoryTarget);
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

ukHeadline();