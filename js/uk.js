function ausHeadline(response){
    axios.get('//newsapi.org/v2/top-headlines?country=aus&apiKey=76026a085ca64521989707fb570fb5b9', {
        params: {
            ID:12345
        }
    })
  .then(function (response) {
    const ausData = response.data;
    const ausStoriesArray = Array.from(ausData.articles);
    ausStoriesArray.length = 3;
    console.log(ausStoriesArray);

    for(let i = 0; i < 1; i++){
        const ausMainStoryTarget = document.createElement('div');
        ausMainStoryTarget.classList.add('aus-target-div');
        ausMainStoryTarget.innerHTML = `
        <div class="aus-target-headline">
        <h2 class="aus-target-headline-h2">${ausStoriesArray[0].title}</h2>
        </div>
        
        `
        document.getElementById('aus-target').appendChild(ausMainStoryTarget);
        console.log(ausMainStoryTarget);
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

ausHeadline();