var Shortly = (function($) {
	// Private vars
	var _this;
	
	// Constructor
	function Shortly() {
		_this = this;
		_this.__initObservers();
	}

	// Prototype
	Shortly.prototype = {
		constructor : Shortly,
		__initObservers : function() {
			$('form.shorten-url').on('submit', function() {
				_this.__processURL($('#input-url').val());
				return false;
			});

			$('#input-url').on('change', function() {
				if(_this.__isValidURL($(this).val())) {
					_this.__deactivateInvalidState();
				} else {
					_this.__activateInvalidState();
				}
			});
		},

		__processURL : function(url) {
			if(_this.__isValidURL(url)) {
				_this.__deactivateInvalidState();
				_this.__submitURL(url);
			} else {
				_this.__activateInvalidState();
			}
		},

		__isValidURL : function(url) {
			return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(url);
		},

		__activateInvalidState : function() {
			$('.form-group').addClass('has-error');
			$('.error-label').show();
		},
		
		__deactivateInvalidState : function() {
			$('.form-group').removeClass('has-error');
			$('.error-label').hide();
		},

		__submitURL : function(url) {
			// Submit to backend
			// Add result to backened
			_this.__processResult(url, window.location.protocol + '//' + window.location.hostname + '/' + (Math.random().toString(36).substring(7)).substring(0, 5));
			_this.__activateResultsState();
		},

		__processResult : function(url, shortenedUrl) {
			// Restrict max length of original url
			if(url.length > 43) {
				url = url.substring(0, 40) + '...';
			}
			var url = '<a href="' + url + '" target="_blank">' + url + '</a>';
			var shortenedUrl = '<a href="' + shortenedUrl + '" target="_blank">' + shortenedUrl + '</a>';
			var resultHTML = '<tr><td>' + url + '</td><td>' + shortenedUrl + '</td><tr>';
			$('.row.results .table tbody').prepend(resultHTML);
		},
		
		__activateResultsState : function() {
			$('hr').show();
			$('.row.results').show();
		}
	};

	return Shortly;
})(jQuery);

$(function() {
	setTimeout(function() {
		$(document.body).addClass('ready');
		window.shortList = new Shortly();
	}, 500);
});