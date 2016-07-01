var $ = require('jquery');
require('waypoints/lib/noframework.waypoints.js');
require('waypoints/src/shortcuts/inview.js');





var scripts = (function() {
	
	// Define DOM variables
	browser = $(window);
	body = $('body');
	header = $('#header');
	navbar = $('.navigation');
	responsiveNav = navbar.find('#toggle-responsive');
	navLinks = navbar.find('#nav-links');

	// Events
	browser.on("scroll", function() {
		var hasScrolled = browser.scrollTop();
		header.innerHeight() <= hasScrolled ? navbar.addClass("fixed") : navbar.removeClass("fixed")
	});

	responsiveNav.on("click", function() {
		navLinks.toggleClass('visible-nav invisible-nav');
	})

	/*var inview = new Waypoint.Inview({
		element: $('.about')[0],
		enter: function(direction) {
			console.log("i have entered");
		},
		exited: function(direction) {
			console.log("I have wxited");
		}
	});*/

	navLinks.find('a').on("click", function(event) {
		event.preventDefault();
		var link = $(this);
		var goTo = body.find(link.attr("href"));
		$('body, html').animate({
			scrollTop: (goTo.offset().top - navbar.outerHeight(true))
		}, 800);
	});

})();