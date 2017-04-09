
var appView = {};

appView.populateFilters = function() {
  console.log('hello');
  $('article').not('.template').each(function() {
    var authorName, category, optionTag;
    authorName = $(this).find('address a').text();
    console.log(authorName);
    optionTag = '<option value="' + authorName + '">' + authorName + '</option>';
    $('#author-filter').append(optionTag);
    category = $(this).attr('data-category');
    optionTag = '<option value="' + category + '">' + category + '</option>';
    if ($('#category-filter option[value="' + category + '"]').length === 0) {
      $('#category-filter').append(optionTag);
    }
  });
};

appView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      /* TODO: If the select box changes to an option that has a value, we should:
          1. Hide all of the articles
          2. Fade in only the articles that match based on on the author
            that was aselected. Hint: use an attribute selector to find
            those articles that match the value, and then fade them in.
        */
      $('article').hide();
      // debugger;
      $('article[data-name="' + $(this).val() + '"]').fadeIn('slow');
      } else {
    /* Otherwise, we should:
        1. Show all the articles except the template */
        $("article").not(".template").fadeIn('slow');
    }
    $('#category-filter').val('');
  });
};

appView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide();

  $('article').on('click', '.read-on', function(){
    event.preventDefault();
    // $(this).parent().find('*').fadeIn('fast');
    $(this).siblings('section.article-body').children().toggle();
    // $(this).hide();
    if ($(this).html() === 'Read on →') {
      $(this).html('Read less &larr;');
    }
    else {
      $(this).html('Read on →');
    }
  });
};


$(function(){
  appView.populateFilters();
});
// appView.handleAuthorFilter();
