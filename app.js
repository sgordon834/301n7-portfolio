'use strict';

var portfolioArray = [];

function PortfolioConstructor(proj) {
  this.name = proj.name;
  this.description = proj.description;
  this.portfolioUrl = proj.portfolioUrl;
  portfolioArray.push(this);
}

PortfolioConstructor.prototype.toHtml = function() {
    var $newPortfolioConstructor = $('article.template').clone();
    $newPortfolioConstructor.removeClass('template');

    $newPortfolioConstructor.data('category', this.category);
    $newPortfolioConstructor.find('h1').html(this.name);
    $newPortfolioConstructor.find('article-body').html(this.description);
    console.log($newPortfolioConstructor);
    return $newPortfolioConstructor;
  };


portfolioData.forEach(function(articleObject) {
  portfolioArray.push(new PortfolioConstructor(articleObject));
});

portfolioArray.forEach(function(a) {
  $('#articles').append(a.toHtml());
});
// PortfolioConstructor();
// console.log('Hi');
