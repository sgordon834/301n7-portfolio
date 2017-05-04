'use strict';

(module => {
  const projectControl = {};
  projectControl.index = () => {
    $('.tab-content').hide();
    $('#about').fadeIn('slow');
  };

  module.projectControl = projectControl;
})(window);
