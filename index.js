const axios = ('axios').default;

axios.get('//newsapi.org/v2/everything?q=bitcoin&apiKey=76026a085ca64521989707fb570fb5b9', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });  