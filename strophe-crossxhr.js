(function() {
	//XXX weird but required for IE
	document.domain = document.domain;

	var newXHR;

	/**
	 * Initializes crossdomain XMLHttpRequest.
	 *
	 * @param {String} src URL of newxhr.html
	 * @param {Function} [success] called on successful IFRAME load
	 * @param {Function} [error] called on failed IFRAME load
	 */
	Strophe.crossXHR = function(src, success, error) {
		if(! newXHR) {
			var iframe = document.createElement('iframe');
			iframe.onload = function() {
				var err;
				try {
					newXHR = this.contentWindow.newXHR;
				} catch(e) {
					err = e;
				}
				if(! newXHR) {
					error && error(err);
				} else {
					success && success();
				}
			};
			iframe.src = src;
			iframe.style.display = 'none';
			document.body.appendChild(iframe);
		} else {
			success();
		}
	};

	Strophe.Request.prototype._newXHR = function () {
		if(newXHR) {
			var xhr = newXHR();

			if(xhr.overrideMimeType) {
				xhr.overrideMimeType("text/xml");
			}
			xhr.onreadystatechange = this.func.bind(null, this);

			return xhr;
		} else {
			throw new Error('crossXHR not initialized, call Strophe.crossXHR() first!');
		}
	};

})();
