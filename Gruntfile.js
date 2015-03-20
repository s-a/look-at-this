var projectVersion = require("./package.json").version;
module.exports = function(grunt) {
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		jshint: {
			beforeconcat: ['./social-icon.js']
		},
		clean: {
		 	build: {
				src: ['./dist/sprite__social-icon.png', './dist/look-at-this.min.js', './dist/look-at-this.min.css', './dist/look-at-this.js', './dist/look-at-this.css', '!./dist/index.html'],
				options: { force: true }
		 	}
		},
		bump: {
			options: {
				files: ['package.json', 'bower.json'], 
				updateConfigs: [],
				commit: false,
				commitMessage: 'Release v%VERSION%',
				commitFiles: ['package.json', 'bower.json'], // '-a' for all files
				createTag: true,
				tagName: 'v%VERSION%',
				tagMessage: 'Version %VERSION%',
				push: false,
				pushTo: '',
				gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d' // options to use with '$ git describe'
			}
		},

		copy: {
			default: {
				files: [
					{
						expand: true,
						src: ["sprite__social-icon.png"],
						dest: "./dist",
						flatten: false
					}
				]
			}
		},

		uglify: {
			options: {
				beautify: false,
				mangle: true,
				preserveComments: false
			},
			my_target: {
				files: {
					'./dist/look-at-this.min.js': [
						"./dist/look-at-this.js"
					]
				}
			}
		},
		concat: {
			options: {
			  separator: '\n',
			},
			dist_js: {
				src: [
					"./social-icon-list.js", 
					"./social-icon.js",
				],
				dest: './dist/look-at-this.js',
			},
			dist_css: {
				src: [
					"./social-icon.css", 
					"./main.css",
				],
				dest: './dist/look-at-this.css',
			},
		},
		cssmin: {
			combine: {
				files: {
					'./dist/look-at-this.min.css': [
						'./dist/look-at-this.css'
					]
				}
			}
		},
	});


	// Production Build Tools
	require('load-grunt-tasks')(grunt);


	// Default Production Build task(s).
	grunt.registerTask(
		'default', [
			//'jshint',
			'clean:build',
			'concat',
			'uglify',
			'cssmin',
			'copy',
			'bump'
		]
	);

	grunt.registerTask("build", ['default']);
};