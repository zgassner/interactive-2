$(document).ready(function(){

	$('#button-3').click(function() {
		$(this).animate({
			marginLeft: '2in',
			marginTop: '-3.3in',
		}, 1000 );
		$(this).css("cursor", "default");
	});

	$('#button-4').click(function() {
  		$(this).addClass('circle');
});

	$("#button-6").click(function(){
    	alert("Either be groovy or leave, man.");
});

	$('#button-7').click(function() {
  		$(this).css("cursor", "progress");
});

	$("#button-8").click(function(){
		if ($(this).text() == "OK")
  		 $(this).text("KO")
		else
   		 $(this).text("OK");
});

	$("#button-9").click(function(){
		$(this).animate({
			width: '1000px',
		}, 1000 );
});

});