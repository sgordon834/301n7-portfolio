// 'use strict';
//
// var portfolioArray = [];
//
// function PortfolioConstructor(proj) {
//   this.name = proj.name;
//   this.siteName = proj.siteName;
//   this.description = proj.description;
//   this.portfolioUrl = proj.portfolioUrl;
//   this.publishedOn = proj.publishedOn;
// }
//
// PortfolioConstructor.prototype.toHtml = function() {
//   var template = Handlebars.compile($('#article-template').text());
//   this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
//   this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';
//     return template(this);
//   };
// //
// //
// portfolioData.forEach(function(articleObject) {
//   portfolioArray.push(new PortfolioConstructor(articleObject));
// });
//
// portfolioArray.forEach(function(about) {
//   $('#about').append(about.toHtml());
// });


'use strict';



function PortfolioConstructor(proj) {
  this.name = proj.name;
  this.siteName = proj.siteName;
  this.description = proj.description;
  this.portfolioUrl = proj.portfolioUrl;
  this.publishedOn = proj.publishedOn;
}

PortfolioConstructor.all = [];

PortfolioConstructor.prototype.toHtml = function() {
  var template = Handlebars.compile($('#article-template').text());
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';
    return template(this);
  };

  PortfolioConstructor.loadAll = function(projData){
    projData.sort(function(a,b) {
      return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
    });
  }

portfolioData.forEach(function(articleObject) {
  PortfolioConstructor.push(new PortfolioConstructor(articleObject));
});

// PortfolioConstructor.forEach(function(about) {
//   $('#about').append(about.toHtml());
// });

PortfolioConstructor.fetchAll = function() {
  if (localStorage.projData) {
    PortfolioConstructor.loadAll(JSON.parse(localStorage.projData));
    articleView.initIndexPage();
  } else {
    $(() => {
      $.ajax({
        url: '/starter-code/data/hackerIpsum.json'
      }).done(function(data) {
        localStorage.setItem('rawData', JSON.stringify(data));
        PortfolioConstructor.loadAll(JSON.parse(localStorage.projData));
        appView.initIndexPage();
      });
    });
  }
}
