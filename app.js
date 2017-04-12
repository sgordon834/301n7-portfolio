'use strict';

var portfolioArray = [];

function PortfolioConstructor(proj) {
  this.name = proj.name;
  this.siteName = proj.siteName;
  this.description = proj.description;
  this.portfolioUrl = proj.portfolioUrl;
}

PortfolioConstructor.prototype.toHtml = function() {
  var template = Handlebars.compile($('#article-template').text());
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';
    // var $newPortfolioConstructor = $('article.template').clone();
    // $newPortfolioConstructor.removeClass('template');
    // $newPortfolioConstructor.attr('data-name', this.name);
    // $newPortfolioConstructor.data('category', this.category); Not in new code
    // $newPortfolioConstructor.find('h1').html(this.name);
    // $newPortfolioConstructor.find('address a').html(this.siteName);
    // $newPortfolioConstructor.find('.article-body').html(this.description);
    // $newPortfolioConstructor.find('address a').attr('href', this.portfolioUrl);
    // console.log($newPortfolioConstructor); Not in new code
    // return $newPortfolioConstructor;
    return template(this);
  };


portfolioData.forEach(function(articleObject) {
  portfolioArray.push(new PortfolioConstructor(articleObject));
});

portfolioArray.forEach(function(a) {
  $('#articles').append(a.toHtml());
});
// PortfolioConstructor();
// console.log('Hi');
