(function($) {
$(function() {

  $('ul.tabs-list').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active-tab').siblings().removeClass('active-tab')
      .closest('div.tabs').find('ul.check-list').removeClass('active').eq($(this).index()).addClass('active');
  });

});

})(jQuery);
