'use strict';

(module => {
  let articleControl = {};
  articleControl.index = () => {

    $('.tab-content').hide();
    $('#about').fadeIn();
  };

  module.articleControl = articleControl;
})(window);
