'use strict';

(module => {
  let projectControl = {};
  projectControl.index = () => {
    $('article.clearfix').remove();
    window.PortfolioConstructor.fetchAll();
    $('.tab-content').hide();
    $('#articles').fadeIn();
  };

  module.projectControl = projectControl;
})(window);
