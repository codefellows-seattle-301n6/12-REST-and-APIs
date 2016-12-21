'use strict';

(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];
// TODO: create a githubToken.js file that we can use to generate our headers
         // properly.
  reposObj.requestRepos = function(callback) {
    /* TODO: How would you like to fetch your repos? Someone say AJAX?!
      Do not forget to call the callback! */
    $.ajax({
      url: 'https://api.github.com/user/repos',
      method: 'GET',
      headers: {
        Authorization: 'token ' + githubToken
      }
    })
    .then(function(data) {
      data.forEach(function(obj) {
        reposObj.allRepos.push(obj);
      });
      callback();
    });
  };

  reposObj.withTheAttribute = function(myAttr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.reposObj = reposObj;
})(window);
