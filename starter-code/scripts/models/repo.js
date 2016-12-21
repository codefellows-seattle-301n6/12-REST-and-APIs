'use strict';

(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];
// TODO: DONE: create a githubToken.js file that we can use to generate our headers
         // properly.
  reposObj.requestRepos = function(callback) {
    /* TODO: DONE: How would you like to fetch your repos? Someone say AJAX?!
      Do not forget to call the callback! */
    $.ajax({
      url: 'https://api.github.com/user/repos?type=owner',
      method: 'GET',
      headers: {
        Authorization: `token ${githubToken}`
      }
    })
      .then(callback);
  };

  reposObj.withTheAttribute = function(myAttr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.reposObj = reposObj;
})(window);
