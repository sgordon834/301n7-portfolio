'use strict';

(module => {
  function PortfolioConstructor(rawDataObj) {
    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
  }

  PortfolioConstructor.all = [];

  PortfolioConstructor.prototype.toHtml = function() {
    let template = Handlebars.compile($('#article-template').text());

    this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
    this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';
    this.body = (this.body); //put marked in front of this

    return template(this);
  };

  PortfolioConstructor.numWordsAll = () => {
    return PortfolioConstructor.all.map((articles) => {
      var wordCount =  articles.description.split(' ');
      return wordCount.length;
    })
    .reduce((a, b) => {
      return a + b;
    })
  };

  PortfolioConstructor.loadAll = rows => {
    rows.sort((a,b) => (new Date(b.publishedOn)) - (new Date(a.publishedOn)));


    PortfolioConstructor.all = rows.map((ele)=> {return new PortfolioConstructor(ele);})
  };

  PortfolioConstructor.fetchAll = function() {
    if (localStorage.rawData) {
      PortfolioConstructor.loadAll(JSON.parse(localStorage.rawData));
      appView.initIndexPage();
      // appView.populateFilters();
      // appView.handleAuthorFilter();
      $('#blog-stats .words').text(PortfolioConstructor.numWordsAll())
    } else {
      $(() => {
        $.ajax({
          url: '/data/portfolioData.json'
        }).done(function (data) {
          localStorage.setItem('rawData', JSON.stringify(data));
          PortfolioConstructor.loadAll(JSON.parse(localStorage.rawData));
          appView.initIndexPage();
          // appView.populateFilters();
          // appView.handleAuthorFilter();
          $('#blog-stats .words').text(PortfolioConstructor.numWordsAll())
        });
      });
    }
  };

  module.PortfolioConstructor = PortfolioConstructor;
})(window);
