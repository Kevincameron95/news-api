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

function usaHeadline(response){
    axios.get('//newsapi.org/v2/top-headlines?country=us&apiKey=447b8c1c1861481a95578726345b1cf9', {
        params: {
            ID:12345
        }
    })
  .then(function (response) {
    const usaData = response.data;
    const usaStoriesArray = Array.from(usaData.articles);
    usaStoriesArray.length = 3;
    // console.log(usaStoriesArray);
    document.getElementById('usa-target').style.backgroundImage= `url('${usaStoriesArray[0].urlToImage}`
    for(let i = 0; i < 1; i++){
        const usaMainStoryTarget = document.createElement('div');
        usaMainStoryTarget.classList.add('usa-target-div');
        usaMainStoryTarget.innerHTML = `
        <div class="usa-target-headline one-third-headline" >
        <h2 class="usa-target-headline-h2 target-article-headline">${usaStoriesArray[0].title}</h2>
        </div>
        
        `
        document.getElementById('usa-target').appendChild(usaMainStoryTarget);
        // console.log(usaMainStoryTarget);
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

usaHeadline();

function ukHeadline(response){
    axios.get('//newsapi.org/v2/top-headlines?country=gb&apiKey=447b8c1c1861481a95578726345b1cf9', {
        params: {
            ID:12345
        }
    })
  .then(function (response) {
    const ukData = response.data;
    const ukStoriesArray = Array.from(ukData.articles);
    ukStoriesArray.length = 3;
    console.log(ukStoriesArray);
    document.getElementById('uk-target').style.backgroundImage= `url('${ukStoriesArray[0].urlToImage}`

    for(let i = 0; i < 1; i++){
        const ukMainStoryTarget = document.createElement('div');
        ukMainStoryTarget.classList.add('uk-target-div');
        ukMainStoryTarget.innerHTML = `
        <div class="uk-target-headline" >
        <h2 class="uk-target-headline-h2 target-article-headline">${ukStoriesArray[0].title}</h2>
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

function nzHeadline(response){
    axios.get('//newsapi.org/v2/top-headlines?country=nz&apiKey=447b8c1c1861481a95578726345b1cf9', {
        params: {
            ID:12345
        }
    })
  .then(function (response) {
    const nzData = response.data;
    const nzStoriesArray = Array.from(nzData.articles);
    nzStoriesArray.length = 3;
    console.log(nzStoriesArray);

    document.getElementById('nz-target').style.backgroundImage= `url('${nzStoriesArray[0].urlToImage}`
    for(let i = 0; i < 1; i++){
        const nzMainStoryTarget = document.createElement('div');
        nzMainStoryTarget.classList.add('nz-target-div');
        nzMainStoryTarget.innerHTML = `
        <div class="nz-target-headline" >
        <h2 class="nz-target-headline-h2 target-article-headline">${nzStoriesArray[0].title}</h2>
        </div>
        
        `
        document.getElementById('nz-target').appendChild(nzMainStoryTarget);
        console.log(nzMainStoryTarget);
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

nzHeadline();

function ausHeadline(response){
    axios.get('//newsapi.org/v2/top-headlines?country=au&apiKey=447b8c1c1861481a95578726345b1cf9', {
        params: {
            ID:12345
        }
    })
  .then(function (response) {
    const ausData = response.data;
    const ausStoriesArray = Array.from(ausData.articles);
    ausStoriesArray.length = 3;
    console.log(ausStoriesArray);

    document.getElementById('aus-target').style.backgroundImage= `url('${ausStoriesArray[0].urlToImage}`
    for(let i = 0; i < 1; i++){
        const ausMainStoryTarget = document.createElement('div');
        ausMainStoryTarget.classList.add('aus-target-div');
        ausMainStoryTarget.innerHTML = `
        <div class="aus-target-headline" >
        <h2 class="aus-target-headline-h2 target-article-headline">${ausStoriesArray[0].title}</h2>
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