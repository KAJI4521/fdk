$(function(){
  $('.index-btn').click(function(){
    $('.active').removeClass('active');
    var clickedIndex= $('.index-btn').index($(this));
    $('.slide').eq(clickedIndex).addClass('active');

    var slideIndex = $('.slide').index($('.active'));
    $('.change-btn').show();
    if (slideIndex ==0) {
    $('.prev-btn').hide();
  }else if(slideIndex ==$('.slide').length -1) {
    $('.next-btn').hide();
  }
  });
});
