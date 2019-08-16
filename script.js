$('.gallery-item').on('click', function () {
  $(this).parent().css({ width: '70%' }).children().css({ height: '450px' });
  $(this).addClass('full-page').siblings().addClass('shrink');
  $('.close').css({ display: 'block' });
});

$('.close').on('click', function () {
  $('.gallery-list').css({ width: '70%' }).children().css({ height: '250px' });
  $('.gallery-item').removeClass('full-page');
  $('.gallery-item').siblings().removeClass('shrink');
  $('.close').css({ display: 'none', transition: 'display .3s ease .5s' });
});