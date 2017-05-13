'use strict';

(module => {
  let projectControl = {};
  projectControl.index = () => {
    $('.tab-content').hide();
    $('#about').fadeIn();
  };

  module.projectControl = projectControl;
})(window);
