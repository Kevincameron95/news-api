// const { response } = require("express");

// const { response } = require("express");

// const { response } = require("express");

// const { response } = require("express");

function fetchData(response){
    axios.get('//newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=76026a085ca64521989707fb570fb5b9', {
    params: {
      ID: 12345
    }
    
  })
  .then(function (response) {
        const product = response.data
        // console.log(product.articles);
        const headLines = Array.from(product.articles);
        console.log(headLines)
        handleResult();
        // return headLines;
        for(let i = 0 ; i < headLines.length; i++) {
            const headlineDiv = document.createElement('div');
            headlineDiv.classList.add('headline');
            headlineDiv.innerHTML = `
                <div>
                <h1 class="BBC-headlines">
                <h2 class="headline">${headLines[i].title}</h2>
                </h1>
                </div>
            
            `
            const target = document.getElementById('target');
            document.getElementById('target').appendChild(headlineDiv);
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
fetchData();

function handleResult (response) {
    // Array.from(response);
    // console.log(Array.from(response));
    
    
    const headlineDiv = document.createElement('div');
    headlineDiv.classList.add('headline');
    // document.getElementById('target').appendChild('headlineDiv');
    
};

