var config = {
	supportedPixelRatios : [1 /*, 1.3, 1.5, 2, 2.1, 3*/],
	spriteSheetPrefix : "sprite__",							// prefix of spritesheet filenames and classnames
	settings : {
		images : {
			route : "/brands/",
			targetCacheDirectory : __dirname + "/.."
		},
		css: {
			route : "/brands/",
			imageUrl : "",						// points to the target url of image directory. In this case relative to "/assets/css/{pixelResolution}"
			targetCacheDirectory : __dirname + "/../"
		}
	},
	images : {	"delicious-128.png" : {							// alias
		filename : __dirname + "/delicious-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		],
		color:"blue"
	},
	"digg-128.png" : {							// alias
		filename : __dirname + "/digg-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		],
		color:"green"
	},
	"disqus-128.png" : {							// alias
		filename : __dirname + "/disqus-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		]
	},
	"dribbble-128.png" : {							// alias
		filename : __dirname + "/dribbble-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		]
	},
	"email-128.png" : {							// alias
		filename : __dirname + "/email-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		]
	},
	"facebook-128.png" : {							// alias
		filename : __dirname + "/facebook-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		]
	},
	"flattr-128.png" : {							// alias
		filename : __dirname + "/flattr-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		]
	},
	"flickr-128.png" : {							// alias
		filename : __dirname + "/flickr-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		]
	},
	"geeklist-128.png" : {							// alias
		filename : __dirname + "/geeklist-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		]
	},
	"github-128.png" : {							// alias
		filename : __dirname + "/github-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		]
	},
	"googleplus-128.png" : {							// alias
		filename : __dirname + "/googleplus-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		]
	},
	"hackernews-128.png" : {							// alias
		filename : __dirname + "/hackernews-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		]
	},
	"instagram-128.png" : {							// alias
		filename : __dirname + "/instagram-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		]
	},
	"linkedin-128.png" : {							// alias
		filename : __dirname + "/linkedin-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		]
	},
	"pinterest-128.png" : {							// alias
		filename : __dirname + "/pinterest-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		]
	},
	"pocket-128.png" : {							// alias
		filename : __dirname + "/pocket-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		]
	},
	"posterous-128.png" : {							// alias
		filename : __dirname + "/posterous-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		]
	},
	"reddit-128.png" : {							// alias
		filename : __dirname + "/reddit-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		]
	},
	"stumbleupon-128.png" : {							// alias
		filename : __dirname + "/stumbleupon-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		]
	},
	"tumblr-128.png" : {							// alias
		filename : __dirname + "/tumblr-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		]
	},
	"twitter-128.png" : {							// alias
		filename : __dirname + "/twitter-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		]
	},
	"xing-128.png" : {							// alias
		filename : __dirname + "/xing-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		]
	}}
};

module.exports = config;