var $ = require('jquery');
require('waypoints/lib/noframework.waypoints.js');
require('sweetalert');


var scripts = (function() {
	
	// Define DOM variables
	browser = $(window);
	body = $('body');
	header = $('#header');
	navbar = $('.navigation');
	responsiveNav = navbar.find('#toggle-responsive');
	navLinks = navbar.find('#nav-links');

	// Events
	new WOW().init();
	browser.on("scroll", function() {
		var hasScrolled = browser.scrollTop();
		header.innerHeight() <= hasScrolled ? navbar.addClass("fixed") : navbar.removeClass("fixed")
	});


	// Toogle hamburger menu when clicked
	responsiveNav.on("click", function() {
		navLinks.toggleClass('visible-nav invisible-nav');
	})

	//Navigate the user to a section of the page when he clicks on its associated navbar link
	navLinks.find('a').on("click", function(event) {
		event.preventDefault();
		var link = $(this);
		var goTo = body.find(link.attr("href"));
		$('body, html').animate({
			scrollTop: (goTo.offset().top - navbar.outerHeight(true))
		}, 800);
	});

	// Create waypoints for every major section of the site
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

	// Animations for progress bars 
	body.find('.skill--bar').each(function(index) {
		$(this).width($(this).data('width'));
	});

	// Event for contact form
	/*body.find('#contact-form').submit(function(event) {
		event.preventDefault();
		form = $(this).serializeArray();
		$.ajax({
			url: "https://formspree.io/carlosandrex@gmail.com",
			type: "POST",
			dataType: "json",
			data: form
		})
		.fail(function() {
			swal({
				title: "Ups!",
				text: "Something went wrong, did you use a valid email?",
				type: "warning",
				confirmButtonColor: "#68c3a3"
			});
		})
		.done(function() {
			swal({
				title: "Message received!",
				text: "Thank you for contacting me, I will answer you shortly!",
				type: "success",
				confirmButtonColor: "#68c3a3"
			});
		});
		
	})*/
})();