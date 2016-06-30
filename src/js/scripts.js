var $ = require('jquery');


var scripts = (function() {
	
	// Define DOM variables
	browser = $(window);
	header = $('#header');
	navbar = $('.navigation');
	responsiveNav = navbar.find('#toggle-responsive');
	navLinks = navbar.find('#nav-links');
	console.log(navLinks);


	// Events
	browser.on("scroll", function() {
		var hasScrolled = browser.scrollTop();
		header.innerHeight() <= hasScrolled ? navbar.addClass("fixed") : navbar.removeClass("fixed")
	});

	responsiveNav.on("click", function() {
		navLinks.toggleClass('visible-nav invisible-nav');
	})




	


})();