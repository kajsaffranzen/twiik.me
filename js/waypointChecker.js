var waypoint = new Waypoint({
  element: document.getElementById('info'),
  handler: function(direction) {
    $(document).ready(function(){
		if (direction === 'down'){	
			$("#mainNav").css("background-color", "rgba(255,255,255, 1.0)");
			$("#nav-text").css("color", "#000");
			$("#nav-textTva").css("color", "#000");
			$("#nav-textTre").css("color", "#000");
			$(".nav-button").css("color", "#000");
			$(".nav-button").css("border-color", "#000");
			$(".navbar-default").css("border-color", "rgba(200,200,200, 0.5)");
		}
		else {
			$("#mainNav").css("background-color", "rgba(255,255,255, 0.0)");
			$("#nav-text").css("color", "#fff");
			$("#nav-textTva").css("color", "#fff");
			$("#nav-textTre").css("color", "#fff");
			$(".nav-button").css("color", "#fff");
			$(".nav-button").css("border-color", "#fff");
			$(".navbar-default").css("border-color", "rgba(200,200,200, 0.0)");
		}
	});
  }
});



