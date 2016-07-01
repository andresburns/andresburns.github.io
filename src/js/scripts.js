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

	navLinks.find('a').on("click", function(event) {
		event.preventDefault();
		var link = $(this);
		var goTo = body.find(link.attr("href"));
		$('body, html').animate({
			scrollTop: (goTo.offset().top - navbar.outerHeight(true))
		}, 800);
	});

	/*$('.waypoint').each(function(index) {
		var inview = new Waypoint.Inview({
			element: $(this)[0],
			enter: function(direction) {
				navLinks.find('.active-link').removeClass("active-link");
				section = this.element.id;
				selector = "a[href='" + "#" + section + "']";
				navLinks.find(selector).addClass("active-link");

			},
			exited: function(direction) {
				section = this.element.id;
				selector = "a[href='" + "#" + section + "']";
				navLinks.find(selector).removeClass("active-link");
			}
		});
	})*/

	$('.waypoint').each(function(index) {
		var waypoint = new Waypoint({
			element: $(this)[0],
			handler: function(direction) {
				navLinks.find('.active-link').removeClass("active-link");
				section = this.element.id;
				selector = "a[href='" + "#" + section + "']";
				navLinks.find(selector).addClass("active-link");
			},
			offset: "30%"
		})
	})
})();