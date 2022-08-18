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
        headLines.length = 5;
        console.log(headLines);
        const length = headLines.length;
        headLines.forEach() {
        
        }
           
        }
        handleResult();
        // return headLines;
        
        
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
    
    
    
    // document.getElementById('target').appendChild('headlineDiv');
    
};

