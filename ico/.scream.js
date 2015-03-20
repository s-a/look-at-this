var config = {
	supportedPixelRatios : [1],
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
		color:"#3274D1"
	},
	"digg-128.png" : {							// alias
		filename : __dirname + "/digg-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		],
		color:"#14589E"
	},
	"disqus-128.png" : {							// alias
		filename : __dirname + "/disqus-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		],
		color:"#2E9FFF"
	},
	"dribbble-128.png" : {							// alias
		filename : __dirname + "/dribbble-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		],
		color:"#EA4C89"
	},
	"email-128.png" : {							// alias
		filename : __dirname + "/email-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		],
		color:"#ccc"
	},
	"facebook-128.png" : {							// alias
		filename : __dirname + "/facebook-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		],
		color:"#3B5998"
	},
	"flattr-128.png" : {							// alias
		filename : __dirname + "/flattr-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		],
		color:"#F67C1A"
	},
	"flickr-128.png" : {							// alias
		filename : __dirname + "/flickr-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		],
		color:"#0063DB"
	},
	"geeklist-128.png" : {							// alias
		filename : __dirname + "/geeklist-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		],
		color:"#8CC63E"
	},
	"github-128.png" : {							// alias
		filename : __dirname + "/github-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		],
		color:"#4183C4"
	},
	"googleplus-128.png" : {							// alias
		filename : __dirname + "/googleplus-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		],
		color:"#D14836"
	},
	"hackernews-128.png" : {							// alias
		filename : __dirname + "/hackernews-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		],
		color:"#FF6600"
	},
	"instagram-128.png" : {							// alias
		filename : __dirname + "/instagram-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		],
		color:"#3F729B"
	},
	"linkedin-128.png" : {							// alias
		filename : __dirname + "/linkedin-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		],
		color:"#007FB1"
	},
	"pinterest-128.png" : {							// alias
		filename : __dirname + "/pinterest-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		],
		color:"#CB2027"
	},
	"pocket-128.png" : {							// alias
		filename : __dirname + "/pocket-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		],
		color:"#EF4056"
	},
	"posterous-128.png" : {							// alias
		filename : __dirname + "/posterous-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		],
		color:"red"
	},
	"reddit-128.png" : {							// alias
		filename : __dirname + "/reddit-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		],
		color:"#FF4500"
	},
	"stumbleupon-128.png" : {							// alias
		filename : __dirname + "/stumbleupon-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		],
		color:"#EB4924"
	},
	"tumblr-128.png" : {							// alias
		filename : __dirname + "/tumblr-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		],
		color:"#2C4762"
	},
	"twitter-128.png" : {							// alias
		filename : __dirname + "/twitter-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		],
		color:"#00ACED"
	},
	"xing-128.png" : {							// alias
		filename : __dirname + "/xing-128.png",				// original filename
		sprite: "social-icon",										// determines if the image should be included within specified sprite sheet
		batch : [											// image processing shell scripts with paramters
			"-resize", "x128"								// -size width[xheight][+offset]
		],
		color:"#006567"
	}}
};

module.exports = config;