var waypoint = new Waypoint({
  element: document.getElementById('info'),
  handler: function(direction) {
    $(document).ready(function(){
		if (direction === 'down'){	
			// console.log("i if");
			// var innerWidth = window.innerWidth;
			// if(innerWidth < 770){
			// 	console.log("innerWidth är liten: " + innerWidth);
			// }
			
			
			$("#mainNav").css("background-color", "rgba(255,255,255, 1.0)");
			$("#nav-text").css("color", "#000");
			$("#nav-textTva").css("color", "#000");
			$("#nav-textFyr").css("color", "#000");
			$("#nav-textFem").css("color", "#000");
			$("#nav-textTre").css("color", "#000");
			$(".nav-button").css("color", "#000");
			$(".nav-button").css("border-color", "#000");
			$(".icon-bar").css("background-color", "#000");
			$(".navbar-default").css("border-color", "rgba(200,200,200, 0.5)");
		}
		else {
			// console.log("i else");
			$("#mainNav").css("background-color", "rgba(255,255,255, 0.0)");
			$("#nav-text").css("color", "#fff");
			$("#nav-textTva").css("color", "#fff");
			$("#nav-textTre").css("color", "#fff");
			$("#nav-textFyr").css("color", "#fff");
			$("#nav-textFem").css("color", "#fff");
			$(".nav-button").css("color", "#fff");
			$(".nav-button").css("border-color", "#fff");
			$(".icon-bar").css("background-color", "#fff");
			$(".navbar-default").css("border-color", "rgba(200,200,200, 0.0)");
		}
	});
  },
  offset: 100
});



