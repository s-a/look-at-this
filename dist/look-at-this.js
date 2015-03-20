window.socialIcons={};window.socialIcons.list=[{"name":"delicious","color":"#3274D1","url":"https://delicious.com/save?v=5&provider={{provider}}&noui&jump=close&url={{url}}&title={{title}}"},{"name":"digg","color":"#14589E","url":"http://digg.com/tools/diggthis/confirm?url={{url}}"},{"name":"email","color":"#ccc","url":"mailto:?subject={{subject}}&body={{body}}"},{"name":"facebook","color":"#3B5998","url":"https://www.facebook.com/sharer/sharer.php?u={{url}}&t={{title}}"},{"name":"flattr","color":"#F67C1A","url":"https://flattr.com/submit/auto?url={{url}}"},{"name":"github","url":"G"},{"name":"googleplus","color":"#D14836","url":"https://plus.google.com/share?url={{url}}"},{"name":"hackernews","color":"#FF6600","url":"https://news.ycombinator.com/submitlink?u={{url}}&t={{title}}"},{"name":"linkedin","color":"#007FB1","url":"http://www.linkedin.com/shareArticle?mini=true&url={{url}}&title={{title}}&source={{provider}}"},{"name":"pinterest","color":"#CB2027","url":"http://pinterest.com/pin/create/bookmarklet/?media={{media}}&url={{url}}&is_video=false&description={{body}}"},{"name":"posterous","color":"red","url":"http://posterous.com/share?linkto={{url}}"},{"name":"reddit","color":"#FF4500","url":"http://reddit.com/submit?url={{url}}&title={{title}}"},{"name":"stumbleupon","color":"#EB4924","url":"http://www.stumbleupon.com/submit?url={{url}}&title={{title}}"},{"name":"tumblr","color":"#2C4762","url":"http://www.tumblr.com/share/link?url={{url}}&name={{title}}&description={{body}}"},{"name":"twitter","color":"#00ACED","url":"http://www.twitter.com/share?url={{url}}&text={{body}}"},{"name":"xing","color":"#006567","url":"https://www.xing.com/app/user?op=share;url={{url}}"}];
// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function(){
	var cache = {};

	var tmpl = function tmpl(str, data){
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

	var onShareButtonClickEvent = function() {
		window.open(this.href);
		return false;
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
    			if (brandName === "github"){
    				btn.href = window.socialIcons.setup.githubUrl;
    			} else {
	    			var url = cfg.url;
					var pattern = /\{\{([^}]+)\}\}/g;
					var match;
					while ((match = pattern.exec(cfg.url)) !== null){
						var parmName = match[1];
						var parmValue = window.socialIcons.setup[parmName];
						if (!parmValue){
							parmValue = "";
						}
						url = url.replace("{{" + parmName + "}}", encodeURIComponent(parmValue));
					}

	    			btn.href = url;
	    			//btn.onclick = onShareButtonClickEvent;

    			}
    		} else { 
    			console.error("no valid share url found", cfg);
    		}
    	}
		//results.social-share-button
	});

	if (!window.socialIcons.setup){
		window.socialIcons.setup = {
			"title":document.title,
			"url":location.href,
			"subject":"Look at this my friend",
			"body":"Take a look at this website. It is awesome! " + location.href
		};
	}

})();