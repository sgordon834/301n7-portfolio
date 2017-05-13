'use strict';

(module => {

const appView = {};

appView.populateFilters = function() {
  console.log('pop filters');
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      var val = $(this).find('h1').text();
      var optionTag = `<option value="${val}">${val}</option>`;

      if ($(`#author-filter option[value="${val}"]`).length === 0) {
        $('#author-filter').append(optionTag);
      }
    }
  });
};

appView.handleAuthorFilter = function() {
  console.log('hello');
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $(`article[data-author="${$(this).val()}"]`).fadeIn('slow');
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#category-filter').val('');
  });
};


appView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function(e) {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
  // $('.tab-content').show();
  $('.main-nav .tab:first').click();
};


appView.setTeasers = function() {
  $('.article-description').hide(); // *:nth-of-type(n+2)

  $('article').on('click', '.read-on', function (event) {
    event.preventDefault();
    $(this).siblings('section.article-description').toggle();
    // $(this).hide();
    if ($(this).html() === 'Read on →') {
      $(this).html('Read less &larr;');
    } else {
      $(this).html('Read on →');
    }
  });
};

appView.initIndexPage = function() {
  PortfolioConstructor.all.forEach(function (article) {
    $('#articles').append(article.toHtml())
  });

// appView.initIndexPage = () => {
//     $('#ajax-spinner').fadeOut();
//     $('#filters').fadeIn();
//     PortfolioConstructor.all.forEach(article => {
//       $('#articles').append(article.toHtml('#article-template'));
//       // if($(`#category-filter option:contains("${article.category}")`).length === 0) {
//       //   $('#category-filter').append(article.toHtml('#category-filter-template'));
//       // }
//       if($(`#author-filter option:contains("${article.author}")`).length === 0) {
//         $('#author-filter').append(article.toHtml('#author-filter-template'));
//       }
//     });

// appView.initPage = function() {
//
//   $('#blog-stats .words').text(PortfolioConstructor.numWordsAll());
// };

  appView.populateFilters();
  appView.handleAuthorFilter();
  appView.handleMainNav();
  appView.setTeasers();

};

module.appView = appView;

})(window);
