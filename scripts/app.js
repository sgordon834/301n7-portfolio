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

//
// 'use strict';
//
//
//
// function PortfolioConstructor(proj) {
//   this.name = proj.name;
//   this.siteName = proj.siteName;
//   this.description = proj.description;
//   this.portfolioUrl = proj.portfolioUrl;
//   this.publishedOn = proj.publishedOn;
// }
//
// PortfolioConstructor.all = [];
//
// PortfolioConstructor.prototype.toHtml = function() {
//   var template = Handlebars.compile($('#article-template').text());
//   this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
//   this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';
//     return template(this);
//   };
//
//   PortfolioConstructor.loadAll = function(projData){
//     projData.sort(function(a,b) {
//       return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
//     });
//   }
//
// projData.forEach(function(articleObject) {
//   PortfolioConstructor.push(new PortfolioConstructor(articleObject));
// });
//
// // PortfolioConstructor.forEach(function(about) {
// //   $('#about').append(about.toHtml());
// // });
//
// PortfolioConstructor.fetchAll = function() {
//   if (localStorage.projData) {
//     PortfolioConstructor.loadAll(JSON.parse(localStorage.projData));
//     appView.initIndexPage();
//   } else {
//     $(() => {
//       $.ajax({
//         url: 'scripts/portfolioData.json'
//       }).done(function(data) {
//         localStorage.setItem('projData', JSON.stringify(data));
//         PortfolioConstructor.loadAll(JSON.parse(localStorage.projData));
//         appView.initIndexPage();
//       });
//     });
//   }
// }

//
// 'use strict';
//
// function PortfolioConstructor (rawDataObj) {
//   this.name = rawDataObj.name;
//   this.portfolioUrl = rawDataObj.portfolioUrl;
//   this.siteName = rawDataObj.siteName;
//   this.description = rawDataObj.description;
//   this.publishedOn = rawDataObj.publishedOn;
// }
// PortfolioConstructor.all = [];
//
// PortfolioConstructor.prototype.toHtml = function() {
//   let template = Handlebars.compile($('#article-template').text());
//
//   this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
//   this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';
//   this.body = (this.body); //put marked in front of this
//
//   return template(this);
// };
// PortfolioConstructor.loadAll = function(rawData) {
//   rawData.sort(function(a,b) {
//     return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
//   });
//
//   rawData.forEach(function(ele) {
//     PortfolioConstructor.all.push(new PortfolioConstructor(ele));
//   })
// }

// PortfolioConstructor.fetchAll = function() {
//   if (localStorage.rawData) {
//     PortfolioConstructor.loadAll(JSON.parse(localStorage.rawData));
//     appView.initIndexPage();
//   } else {
//     $(() => {
//       $.ajax({
//         url: 'public/data/portfolioData.json'
//       }).done(function(data) {
//         localStorage.setItem('rawData', JSON.stringify(data));
//         PortfolioConstructor.loadAll(JSON.parse(localStorage.rawData));
//         appView.initIndexPage();
//       });
//     });
//   }
// }
