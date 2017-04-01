'use strict';

var portfolioArray = [];

function PortfolioConstructor(proj) {
  this.name = proj.name;
  this.description = proj.description;
  this.portfolioUrl = proj.portfolioUrl;
  portfolioArray.push(this);
}

PortfolioConstructor();

portfolioConstructor.prototype.toHtml = function() {
  var $newPortfolioConstructor = $('portfolioConstructor.template').clone();
};
