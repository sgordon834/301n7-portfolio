'use strict';

(module => {
  let articleControl = {};
  articleControl.index = () => {
    window.PortfolioConstructor.fetchAll();
    $('.tab-content').hide();
    $('#articles').fadeIn();
  };

  module.articleControl = articleControl;
})(window);
