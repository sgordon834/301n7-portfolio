'use strict';

(module => {
  const repos = {};

  repos.all = [];

//   repos.requestRepos = function(callback) {
//
//     $.get('/github/user/repos')
//     .then(data => repos.all = data, err => console.error(err))
//     .then(callback(repos));
//   };
//
//

repos.requestRepos = function(callback) {
    $.get('/github/user')
      .then(user => {
        $.get(user.repos_url)
          .then(repo => {
            repo.forEach(results => {
              repos.all.push(results);
              callback(repos);
            })
            // callback(repos);
        }, error => {
            console.log(error);
          });
      }, error => {
        console.log(error);
      });
  };
  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
