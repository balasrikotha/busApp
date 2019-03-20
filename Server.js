const axios = require('axios');
const axiosRetry = require('axios-retry');

var Server = (function () {
  var instance;
  function init() {
    return {
      
      getData: function () {
        axios.get('http://localhost:3000/Users/1', {
          'axios-retry': {
            retries: 0
          }
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      },      
    };
  };

  return {
    // gets the existing unique instance or creates a new one 
    getInstance: function () {
      if ( !instance ) {
        instance = init();
      }
      return instance;
    }
  };

})();




