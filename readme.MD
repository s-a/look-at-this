# LOOK AT THIS
[![Build Status](http://img.shields.io/travis/s-a/look-at-this.svg?style=flat-square)](https://travis-ci.org/s-a/look-at-this)
[![NPM Version](http://img.shields.io/npm/v/look-at-this.svg?style=flat-square)](https://www.npmjs.org/package/look-at-this)
[![Bower](http://img.shields.io/bower/v/look-at-this.svg?style=flat-square)](http://bower.io/search/?q=look-at-this)


## About
Just another social sharing plugin. Yeah o.O ... but here are the pros!

 - It is realy realy ***lightweight***. (You only need a css and js file)
 - It is ***responsive***.
 - ***Customizable link button CSS and template***.
 - It works as ***standalone***. No jQuery or other libs needed.
 - It respects the users ***privacy***.


## Installation

 - ```npm install look-at-this``` or ```bower install look-at-this```
 - Take a look at this [online demo example](https://s-a.github.io/look-at-this/dist)


## Change share url, title and so on?
By default the settings are stored like this:
```
	if (!window.socialIcons.setup){
		window.socialIcons.setup = {
			"title":document.title,
			"url":location.href
		};
	}
```
So you can set them to what you need. This informations are masked per social network in the url property at [.scream.js](https://github.com/s-a/look-at-this/blob/master/ico/.scream.js#L22)


## Responsive showcase
[![Responsive showcase](responsive-showcase.gif)](https://s-a.github.io/look-at-this/dist)


## How to add a brand?

 - Install https://github.com/s-a/scream-js
 - Add a file to ```/ico``` folder
 - Add the file entry to ```/ico/.scream.js```
 - execute ```scream .scream.js --build```
 - execute ```node bundle.js```
 - execute ```grunt build```


## Contributing

 - Fork it!
 - Create your feature branch: `git checkout -b my-new-feature`
 - Commit your changes: `git commit -am 'Add some feature'`
 - Run the tests: `npm test`
 - Push to the branch: `git push origin my-new-feature`
 - Submit a pull request :D


## License
MIT and GPL

## Credits

Icon Pack by [Dan Leech](https://github.com/danleech) at [Simple Icons](https://github.com/danleech/simple-icons)