document.addEventListener("DOMContentLoaded", function(event) {
	var path = window.location.pathname;
	var home = document.getElementById("home");
	var tweets = document.getElementById("tweets");
	var portfolio = document.getElementById("portfolio");
	var contact = document.getElementById("contact");
	
	if(path == '/index.html'){
		var thumbnailElement = document.getElementById("profile-pic");
		thumbnailElement.addEventListener("click", function() {
			if(thumbnailElement.className == ""){
				thumbnailElement.className = "small";
			} else{
				thumbnailElement.className = "";
			}
		});
	
		home.className = "selected";
		tweets.className = "";
		portfolio.className = "";
		contact.className = "";
	}
	
	else if(path == '/'){
		home.className = "selected";
		tweets.className = "";
		portfolio.className = "";
		contact.className = "";
	}
	
	else if(path == '/tweets.html'){
		home.className = "";
		tweets.className = "selected";
		portfolio.className = "";
		contact.className = "";
	}
	
	else if(path == '/portfolio.html'){
		home.className = "";
		tweets.className = "";
		portfolio.className = "selected";
		contact.className = "";
	}
	
	else if(path == '/contact.html'){
		home.className = "";
		tweets.className = "";
		portfolio.className = "";
		contact.className = "selected";
	}
	
});