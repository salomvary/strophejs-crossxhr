(function() {
	var newXHR;

	Strophe.crossXHR = function(src, success, error) {
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
		iframe.setAttribute('style', 'display:none');
		document.body.appendChild(iframe);
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
