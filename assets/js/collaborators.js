;(function () {
	var contributors_wrapper = $('#contributors');

	$.getJSON('https://api.github.com/repos/punkstar/magentotherightway.com/contributors', function (data) {
		$.each(data, function (idx, value) {
			var contrib_count = value.contributions;

			var image_alt = value.login + " has provided " + contrib_count + " contribution" + ((contrib_count == 1) ? '' : 's');

			var link = $('<a />').attr('href', value.html_url);
			var avatar = $('<img />').attr({
				'src':   value.avatar_url,
				'alt':   image_alt,
				'title': image_alt
			});

			link.append(avatar);
			contributors_wrapper.append(link);
		});
	});
})();
