$(function () {

  // Main Menu reveal on phones
  $('.menu-link').click(function (e) {
		e.preventDefault();

		$('.global-nav--list').slideToggle('fast');
		return false;
	});

});
