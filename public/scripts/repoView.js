'use strict';

(module => {
  const repoView = {};
  const render = Handlebars.compile($('#repo-template').text());
  repoView.index = function () {
    $('#reposUl').append(repos.with('name').map(render));
  };

  repos.requestRepos(repoView.index);
  module.repoView = repoView;
})(window);
