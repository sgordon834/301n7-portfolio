'use strict';

var portfolioArray = [];

function PortfolioConstructor(proj) {
  this.name = proj.name;
  this.siteName = proj.siteName;
  this.description = proj.description;
  this.portfolioUrl = proj.portfolioUrl;
  this.publishedOn = proj.publishedOn;
}

PortfolioConstructor.prototype.toHtml = function() {
  var template = Handlebars.compile($('#article-template').text());
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';
    return template(this);
  };
//
//
portfolioData.forEach(function(articleObject) {
  portfolioArray.push(new PortfolioConstructor(articleObject));
});

portfolioArray.forEach(function(about) {
  $('#about').append(about.toHtml());
});
