// const axios = ('axios').default;

// function Topic(response){
// axios.get('//newsapi.org/v2/everything&apiKey=76026a085ca64521989707fb570fb5b9', {
    
//     })
//     .then(function (response) {
//         console.log(response.data);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })
//     .then(function () {
//         // always executed
//     });  
// }

// Topic();

function topics(response){
    axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=447b8c1c1861481a95578726345b1cf9', {
    params: {
      ID: 12345
    }
    
  })
  .then(function (response) {
        const product = response.data
        console.log(product.articles[1])
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

topics();