require([
    'gitbook',
    'jquery'
], function(gitbook, $) {
	gitbook.events.bind("page.change", function() {
		$('.gitbook-link').remove();
	});
});
