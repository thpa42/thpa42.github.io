$(document).ready(function(){
	
	// Question 4
	// IMPLEMENT "SHOW MODAL" WHEN "CLICK ON LOGIN BUTTON FROM MAIN PAGE" HERE
	$(".link1").click(function(){
		$("#modal-container").show();
	})

	$(".link2").click(function(){
		$("#modal-container2").show();
	})

	$(".link3").click(function(){
		$("#modal-container3").show();
	})

	$(".link4").click(function(){
		$("#modal-container4").show();
	})

	$(".Submit").click(function(){
		$("#modal-container").hide();
		$("#modal-container2").hide();
		$("#modal-container3").hide();
		$("#modal-container4").hide();
	})

	$(".Cancel").click(function(){
		$("#modal-container").hide();
		$("#modal-container2").hide();
		$("#modal-container3").hide();
		$("#modal-container4").hide();
	})
	$(".Cancel").hover(function(){
		$(".Cancel").css("width", "-=2");
	})
	$(".Cancel").hover(function(){
		setTimeout(function() {$(".Cancel").css("width", "+=2");
		}, 1000);
	})

	$("#linkedin").hover(
		function(){$("#linkedin").animate({width: "-=5", height:"-=2"}, 100);},        
    	function(){$("#linkedin").animate({width: "+=5", height:"+=2"}, 100);}
);    	
	

	$("#modal-overlay").click(function(){
		$("#modal-container").hide();
	})
	$("#modal-overlay2").click(function(){
		$("#modal-container2").hide();
	})
	$("#modal-overlay3").click(function(){
		$("#modal-container3").hide();
	})
	$("#modal-overlay4").click(function(){
		$("#modal-container4").hide();
	})
});