var projectVersion = require("./package.json").version;
module.exports = function(grunt) {
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		jshint: {
			beforeconcat: ['./social-icon.js']
		},
		clean: {
		 	build: {
				src: ['./dist/*'],
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
						"./social-icon.js"
					]
				}
			}
		}

	});


	// Production Build Tools
	grunt.loadNpmTasks('grunt-bump');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	
	// Default Production Build task(s).
	grunt.registerTask(
		'default', [
			//'jshint',
			'clean:build',
			'uglify',
			'copy',
			'bump'
		]
	);

	grunt.registerTask("build", ['default']);
};