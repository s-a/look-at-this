module.exports = function (grunt) {
  

	grunt.initConfig({
	    oversprite: {
	        // This is are multitask, you can create multiple sprite generators buy copying all 
	        // object with other name, see grunt.js docs for details
	        all: {
	            // List of sprites to create
	            spritelist: [
	                {
	                    // List of images to add to sprite
	                    'src': [ 'icons/500px/500px-128.png' ],
	                    // Address of target image
	                    'dest': 'publish/sprite.jpg',
	                    // OPTIONAL: Image placing algorithm: top-down, left-right, diagonal, alt-diagonal, binary-tree
	                    'algorithm': 'binary-tree',
	                    // OPTIONAL: Padding between imagesm
	                    'padding': 1,
	                    // OPTIONAL: Rendering engine: auto, canvas, gm
	                    'engine': 'gm',
	                    // OPTIONAL: Preferences for resulting image
	                    'exportOpts': {
	                        // Image formst (buy default will try to use dest extension)
	                        'format': 'jpg',
	                        // Quality of image (gm only)
	                        'quality': 90
	                    }
	                }
	            ],
	            // List of css to replace images
	            csslist: [
	                {
	                    // Source css file
	                    'src':  'style.css',
	                    // Target css file, can be the same as source
	                    'dest': 'style.sprite.css',
	                    // OPTIONAL: Normalization string. Will be added to css dir path, before paths in css. 
	                    // Use if you move the css and paths to images aren't resolving correctly now.
	                    'base': '../blocks/'
	                }
	            ]
	        }
	    }

	});

  	// Load in `grunt-spritesmith`
	// Production Build Tools from package.json
	require('load-grunt-tasks')(grunt);

	grunt.registerTask("sprite", ['spriteGenerator']);
};