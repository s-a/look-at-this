
var fs = require("fs");



var cfg = require("./ico/.scream.js");
var css = [];

var count = 0;
for (var x in cfg.images) {
	count++;
}

var onePercent = (100/count)+0.2;
var percent= onePercent*-1;
var icons = [];
for (var fn in cfg.images) {
	var cls = fn.replace("-128.png", "");

	percent += onePercent;
	css.push(".social-icon-"+cls+"{");
	css.push("	background-position-y:"+percent+"%;");
	css.push("	background-color:"+ (cfg.images[fn].color || "yellow") + ";");

	css.push("}");

	icons.push(cls);
}


fs.writeFileSync("social-icon.css", css.join("\n"));
fs.writeFileSync("social-icon-list.js", "window.socialIcons={};window.socialIcons.list="+ JSON.stringify(icons)+ ";");