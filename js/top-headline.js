function topHeadline(response){
    axios.get('//newsapi.org/v2/top-headlines?country=us&apiKey=76026a085ca64521989707fb570fb5b9', {
    params: {
      ID: 12345
    }
    
  })
  .then(function (response) {
        const product = response.data
        
        const topHeadlines = Array.from(product.articles);
        // console.log(topHeadlines);
        topHeadlines.length = 1;
        const bannerImage = topHeadlines[0].urlToImage;
        // console.log(topHeadlines[0].urlToImage);
        document.querySelector('#headline-top-target').style.backgroundImage = `url('${topHeadlines[0].urlToImage}')`;
        
        const stringImage = String(topHeadlines[0].urlToImage);
        console.log(stringImage)
        // return topHeadlines;
        for(let i = 0 ; i < topHeadlines.length; i++) {
            const headlineDiv = document.createElement('div');
            headlineDiv.classList.add('headline');
            headlineDiv.innerHTML = `
                <div id="top-headline-div">
                
                <h2 class="headline"><a id="top-headline-link" href="${topHeadlines[0]}.url">${topHeadlines[0].title}</a></h2>
                
                <p class="top-headline-summary-p">by:${topHeadlines[0].author}</p>
                </div>
            
            `
            const target = document.getElementById('target');
            document.getElementById('headline-top-target').appendChild(headlineDiv);
        }
        
        // console.log(fetchData.responseTEXT);
        // handleResult(response);
        // console.log(response);
     
     
  })
  .catch(function (error) {
    // console.log(error);
  })
  .then(function () {
    
    // const dataAr = articles; 
        
  });  


};

topHeadline();