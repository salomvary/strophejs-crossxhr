## What's this?
A Strophe plugin to enable cross-domain XHR without using Flash. 
The limitation is that both domains have to be under the same 
"superdomain", in addition both protocol and port must be the
same. The plugin utilizes the 
[document.domain](https://developer.mozilla.org/en/document.domain) 
hack.

## Trying the example code
Suppose your XMPP BOSH service is at http://chat.example.com:5280/http-bind and want to use it from http://example.com:5280/test.html

Get the code:

	git clone http://github.com/salomvary/strophejs-crossxhr.git
	cd strophejs-crossxhr
	git submodule init
	git submodule update

Customize the code:

- edit service, jid and password in test.html
- serve test.html from example.com:5280
- set your domain in newxhr.html 
- serve newhxr.html from chat.example.com:5280
- open http://example.com:5280/test.html in your browser

## Documentation
See JSDoc comments in strophe-crosshxr.js and the example code.

## Compatibility
Tested with:

- Chrome 11
- Firefox 4
- IE9-8-7

Should work in others though...
