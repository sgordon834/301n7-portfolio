'use strict';

(module => {
  const articleControl = {};
  articleControl.index = () => {
    window.PortfolioConstructor.fetchAll();
    $('.tab-content').hide();
    $('#articles').fadeIn('slow');
  };

  module.articleControl = articleControl;
})(window);
