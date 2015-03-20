// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function(){
	var cache = {};

	this.tmpl = function tmpl(str, data){
	  // Figure out if we're getting a template, or if we need to
	  // load the template - and be sure to cache the result.
	  var fn = !/\W/.test(str) ?
	    cache[str] = cache[str] ||
	      tmpl(document.getElementById(str).innerHTML) :

	    // Generate a reusable function that will serve as a template
	    // generator (and which will be cached).
	    new Function("obj",
	      "var p=[],print=function(){p.push.apply(p,arguments);};" +

	      // Introduce the data as local variables using with(){}
	      "with(obj){p.push('" +

	      // Convert the template into pure JavaScript
	      str
	        .replace(/[\r\t\n]/g, " ")
	        .split("<%").join("\t")
	        .replace(/((^|%>)[^\t]*)'/g, "$1\r")
	        .replace(/\t=(.*?)%>/g, "',$1,'")
	        .split("\t").join("');")
	        .split("%>").join("p.push('")
	        .split("\r").join("\\'") + "');}return p.join('');");

	  // Provide some basic currying to the user
	  return data ? fn( data ) : fn;
	};

	var getIconSetup = function(name) {
		for (var i = 0; i < window.socialIcons.list.length; i++) {
			var icon = window.socialIcons.list[i];
			if (icon.name === name){
				return icon;
			}
		}
		throw "Icon setup " + name + " not found";
	};


	//?v=5&provider={your-company}&noui&jump=close&url='+encodeURIComponent(location.href)+'&title='+encodeURIComponent(document.title)

	window.addEventListener("load", function load(event){
		var i;
		var templateData = {icons:[]};

		for (i = 0; i < window.socialIcons.list.length; i++) {
			var icon = window.socialIcons.list[i];
			templateData.icons.push({name:icon.name});
		}
		
		var results = document.getElementById("social-icons");
		results.innerHTML = tmpl("social_icon_template", templateData);
    	var elems = results.getElementsByTagName('a');
    	for (i = 0; i < elems.length; i++) {
    		var btn = elems[i];
    		var brandName = btn.href.split("#")[1].split("/")[1];
    		var cfg = getIconSetup(brandName);

    		if (cfg.url){
    			var url = cfg.url;

				var pattern = /\{\{([^}]+)\}\}/g;
				var match;
				while ((match = pattern.exec(cfg.url)) !== null){
					var parmName = match[1];
					var parmValue = window.socialIcons.setup[parmName];
					if (!parmValue){
						parmValue = "";
					}
					url = url.replace("{{" + parmName + "}}", encodeURIComponent(parmValue))
				}
    			debugger;
    			btn.href = url;

    		} else {
    			console.error("no valid share url found", cfg);
    		}
    	}
		//results.social-share-button
	});

	if (!window.socialIcons.setup){
		window.socialIcons.setup = {
			"title":document.title,
			"url":location.href
		};
	}

})();