'use strict';

(module => {
  const projectControl = {};
  projectControl.index = () => {
    // window.PortfolioConstructor.fetchAll();
    $('.tab-content').hide();
    $('#about').fadeIn('slow');
  };

  module.projectControl = projectControl;
})(window);
