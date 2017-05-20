'use strict';

(module => {
  const reposControl = {};

  reposControl.index = () => {
    $('.removeRepos').remove();
    windows.repos.requestRepos(repoView.index);
    console.log(repos.all);
    $('.tab-content').hide();
    $('#myRepos').fadeIn();

  };

  module.reposControl = reposControl;
})(window);
