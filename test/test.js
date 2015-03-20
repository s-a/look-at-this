var fs = require("fs");
var cfg = require("./../ico/.scream.js");
require('should');

describe('valid build file config', function(){

    it('it should contain color', function(){
		for (var fn in cfg.images) {
			var img = cfg.images[fn];
			img.color.length.should.be.above(1);
		}
  	});
});
