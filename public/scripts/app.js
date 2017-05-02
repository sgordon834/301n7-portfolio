'use strict';

function PortfolioConstructor (rawDataObj) {
  this.name = rawDataObj.name;
  this.portfolioUrl = rawDataObj.portfolioUrl;
  this.siteName = rawDataObj.siteName;
  this.description = rawDataObj.description;
  this.publishedOn = rawDataObj.publishedOn;
}
PortfolioConstructor.all = [];

PortfolioConstructor.prototype.toHtml = function() {
  let template = Handlebars.compile($('#article-template').text());

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';
  this.body = (this.body); //put marked in front of this

  return template(this);
};
PortfolioConstructor.loadAll = function(rawData) {
  rawData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });

  rawData.forEach(function(ele) {
    PortfolioConstructor.all.push(new PortfolioConstructor(ele));
  })
}

PortfolioConstructor.fetchAll = function() {
  if (localStorage.rawData) {
    PortfolioConstructor.loadAll(JSON.parse(localStorage.rawData));
    appView.initIndexPage();
  } else {
    $.getJSON('/data/portfolioData.json')
    .then(function(rawData) {
      PortfolioConstructor.loadAll(rawData);
      localStorage.rawData = JSON.stringify(rawData);
      appiew.initIndexPage();
    }, function(err) {
      console.error(err);
    });
  }
}
