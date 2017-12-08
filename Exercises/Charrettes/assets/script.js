$(document).ready(function(){

	$('#button-3').click(function() {
		$(this).animate({
			marginLeft: '3.5in',
			marginTop: '-2.28in',
		}, 1000 );
		$(this).css("cursor", "default");
	});

	$('#button-4').click(function() {
  		$(this).addClass('circle');
  		$(this).css("cursor", "default");
	});

	$("#button-6").click(function(){
    	alert("Either be groovy or leave, man.");
    	// $("img").css("opacity", "1");
    	// $("#button-6").css("padding", "0px");
    	// $("#button-6").css("width", "260px");
    	// $("#button-6").css("height", "260px");
    	// $("#button-6").css("border", "5px dashed white");
	});

	$('#button-7').click(function() {
  		$(this).css("cursor", "progress");
	});

	$("container2d").click(function(){
		if ($(this).text() == "OK")
  		 $(this).text("KO")
		else
   		 $(this).text("OK");
	});

	$("#button-9").click(function(){
		$(this).animate({
			marginLeft: '30in',
		}, 4000 );
	});

	$("#button-10").click(function(){
		$(this).animate({
			marginTop: '-2.28in',
		}, 1000 );
		$(this).css("cursor", "default");
	});

	    var button11= 0;
    $("#button-11").click(function(){
        button11++;
        $("#counter").html(button11);
        
    });
    
    $("#button-12").click(function(){ 
            var ad = Math.round(Math.random() * 255);
            var bd = Math.round(Math.random() * 255);
            var cd = Math.round(Math.random() * 255);
            $( "#button-12" ).css("background-color", "RGB(" + ad + "," + bd + "," + cd + ")");
    });

    var button13=true;
    $("#button-13").click(function(){
        $( ".item" ).animate({"height":"500px"},800);
        $( ".item" ).delay(800).animate({"height":"100px"},800);
    });

    $('#button-14').click('click touchstart', function() {
		$(this).animate({height: '10px'}, 600);
		$(this).animate({height: '400px'}, 600);
		$(this).animate({height: '100'}, 800);

	});

	$("#button-16").click(function(){
		$(this).css("cursor", "help");
	});

    var button17= 0;
    $("#button-17").click(function(){
        $( "#button-17" ).append( "<p class=\"asterisk\" id=" + button17 +">&#x274B;</p>").fadeIn(2000);
        $( "#" + button17 ).css( "top", (Math.random()*100) + "%");
        $( "#" + button17 ).css( "left", (Math.random()*100) + "%");
        
        button17++;
    });

    var button18= true;
    $("#button-18").click(function(){
        if (button18==true) {
            $( "body" ).css( "-webkit-filter", "grayscale(100%)");
            $( "body" ).css( "filter", "grayscale(100%)");
            
            button18=false;
        }
        else {
            $( "body" ).css( "-webkit-filter", "grayscale(0%)");
            $( "body" ).css( "filter", "grayscale(0%)");
            
            button18=true;
        }    
    });

    var button19=0;
    $("#button-19").click(function(){
        while (button19<1) {
            $("#frown").delay(2000).append("&#9785;");
            button19++;
        }
        button19=0;
  
    });

    var button20= true;
    $("#button-20").click(function(){
        if (button20==true) {
            $( "#lock" ).css("position", "fixed");
            $( "#lock" ).css("display", "inherit");
            
            button20=false;
        }
        else {

            $( "#lock" ).css("display", "none");

            button20=true;
            
        }   
    });

    var button22= true;
    $("#button-22").click(function(){
        if (button22==true) {
            $( "body" ).css("background-color", "#454B52");
            $( ".item" ).css("opacity", ".1");
            $( "#button-22" ).css("opacity", "1");
            $( "#ca" ).css("opacity", "1");
            
            button22=false;
        }
        
        else {
            $( "body" ).css("background-color", "white");
            $( ".item" ).css("opacity", "1");
            
            button22=true;
        }
    });

     var button23= 2;
    $("#button-23").click(function(){
        window.print();
        
    });

    var button24= true;
    $("#button-24").click(function(){
        if (button24==true) {
            $( "body" ).css("-webkit-filter", "invert(100%)");
            $( "body" ).css("filter", "invert(100%)");
            $( "body" ).css("background-color", "black");
            $( "#button-24" ).css("-webkit-filter", "invert(100%)");
            $( "#button-24" ).css("filter", "invert(100%)");
            $( "#button-24" ).css("background-color", "black");
            button24=false;
        }
        
        else {
            $( "body" ).css("-webkit-filter", "invert(0)");
            $( "body" ).css("filter", "invert(0)");
            $( "body" ).css("background-color", "white");
            $( "#button-24" ).css("-webkit-filter", "invert(0)");
            $( "#button-24" ).css("filter", "invert(0)");
            $( "#button-24" ).css("background-color", "white");
            button24=true;
        }
        
    });

    var button25= true;
    $("#button-25").click(function(){
        
        if (button25==true) {
            $( "#button-25" ).css( "width", "600px" );
            button25=false;
        }
        else {
            $( "#button-25" ).css( "width", "100px" );
            button25=true;
        }    
        
    });

    var button27= 0;
    $("#button-27").click(function(){

        $( "#button-27" ).css( "top", (Math.random()*10) + "%");
        $( "#button-27" ).css( "left", (Math.random()*10) + "%");
        $( "#button-27" ).css( "right", (Math.random()*10) + "%");
        $( "#button-27" ).css( "bottom", (Math.random()*10) + "%");
        
        button27++;
    });

    var button28=true;
    $("#button-28").click(function(){
        $( ".item" ).animate({"opacity":"0"},600);
        $( ".item" ).delay(800).animate({"opacity":"1"},600);

    });

    var button29= true;
    $("#button-29").click(function(){
        if (button29==true) {
            $( "body" ).css("background-color", "mediumvioletred");
            $( ".item" ).css("background-color", "mediumvioletred");
            $( "#button-29" ).css("border", "5px dashed white");
            button29=false;
        }
        
        else {
            $( "body" ).css("background-color", "white");
            $( ".item" ).css("background-color", "white");
            $( "#button-29" ).css("border", "5px dashed mediumvioletred");
            button29=true;
        }
        
    });

    var button30= 0;
    $("#button-30").click(function(){
        $( this ).append( "<marquee class=\"moveIt\" id=\"marq" + button30 +"\">&#9756;</marquee>");
        button30++;
      
    });

    var button31= 0;
    $("#button-31").click(function(){
        if (button31==0) {
            $( "#green" ).css( "width", "700px");
            $( "#green" ).css( "height", "700px");
            $( "#green" ).css( "border-radius", "500px");
            $( "#whatif" ).animate({opacity: "1"}, 500); 
            button31++;
        }
        else if (button31==1) {
            $( "#whatif" ).html( "and what if in your sleep you dreamed,");
            button31++;
        }
        else if (button31==2) {
            $( "#whatif" ).html( "and what if in your dreams you went to heaven");
            button31++;
        }
        else if (button31==3) {
            $( "#whatif" ).html( "and there you plucked a strange and beautiful flower,");
            button31++;
        }
        else if (button31==4) {
            $( "#whatif" ).html( "and what if when you woke");
            button31++;
        }
        else if (button31==5) {
            $( "#whatif" ).html( "you had the flower in your hand?");
            button31++;
        }
        else if (button31==6) {
            $( "#whatif" ).html( "... Ah, what then?");
            button31++;
        }
        else if (button31==7) {
            $( "#whatif" ).animate({opacity: "0"}, 500);
            button31++;
        }
        else if (button31==8) {
            $( "#green" ).delay(1000).css( "width", "50px");
            $( "#green" ).delay(1000).css( "height", "50px");

            button31=0;
        }
        
    });

    $("#button-32").click(function(){
        $( "#button-32" ).delay(0).animate({"left":"1%"},10);
        $( "#button-32" ).delay(20).animate({"left":"-1%"},10);
        $( "#button-32" ).delay(30).animate({"left":"1%"},10);
        $( "#button-32" ).delay(40).animate({"left":"-1%"},10);
        $( "#button-32" ).delay(50).animate({"left":"0%"},10);

    });

    $("#button-33").click(function(){
	    $(this).css({ '-webkit-filter': "drop-shadow(10px 10px 5px darkblue)"});
	});

	var button34= true;
    $("#button-34").click(function(){
        $( "body" ).animate({scrollTop: $("#button-35").offset().top}, 2000);
  
    });

    $("#button-35").click(function(){
        var person = prompt("Please enter your name");
        $( '#screenX').html( "i love " + person );
  
    });

     var button36= 0;
    $("#button-36").click(function(){
    	if (button36==true) {
            $(this).css("border", "5px dashed skyblue");
            button36=false;
        }
        
        else {
            $(this).css("border", "20px dashed skyblue");
            button36=true;
        }
	});

    var button37= true;
    $("#button-37").click(function(){
        if (button37==true) {
            $( "body" ).animate({"max-width":"300px"},600);
            button37=false;
        }
        else {
            $( "body" ).animate({"max-width":"2200px"},600);
            button37=true;
        }    
    });

    var button38= true;
    $("#button-38").click(function(){
        
        if (button38==true) {
            $( ".item" ).addClass('circle');
            button38=false;
        }
        else {
            $( ".item" ).removeClass('circle');
            button38=true;
        }    
        
    });

    var button39= 0;
    $("#button-39").click(function(){
        $( "#button-39" ).append( "<p class=\"smile\" id=" + button39 +">&#9786;</p>").fadeIn(2000);
        $( "#" + button39 ).css( "top", 0 + "%");
        $( "#" + button39 ).css( "left", 5 + "%");
        
        button39++;
    });

    $("#button-40").click(function(){
		$(this).addClass('skew');
	});

	$("#button-41").click(function(){
		$(this).animate({
			marginTop: '-2.28in',
		}, 1000 );
		$(this).css("cursor", "default");
	});

	var button42= true;
    $("#button-42").click(function(){
        
        if (button42==true) {
            $( ".item" ).css('height', '1px');
            $( ".item" ).css('width', '1px');
            button42=false;
        }
        else {
            $( ".item" ).css('height', '100px');
            $( ".item" ).css('width', '100px');
            button42=true;
        }    
        
    });

    var button43= true;
    $("#button-43").click(function(){
        
        if (button43==true) {
            $( "#button-43" ).css( "height", "300px" );
            $( "#button-43" ).css( "width", "300px" );
            button43=false;
        }
        else {
            $( "#button-43" ).css( "height", "100px" );
            $( "#button-43" ).css( "width", "100px" );
            button43=true;
        }    
        
    });

     var button44= 0;
    $("#button-44").click(function(){
    	if (button44==true) {
            $(this).css("border", "5px dashed cyan");
            button44=false;
        }
        
        else {
            $(this).css("border", "20px dotted cyan");
            button44=true;
        }
	});

	$('#button-45').click(function() {
  		$(this).css("background-color", "indigo");
  		$(this).css("border", "5px dashed white");
  		$(this).css("cursor", "default");
	});

	var button46= 0;
    $("#button-46").click(function(){
        $( "#button-46" ).append( "<p class=\"sun\" id=" + button46 +">&#9788;</p>").fadeIn(2000);
        $( "#" + button46 ).css( "top", 50 + "%");
        $( "#" + button46 ).css( "right", 5 + "%");
        
        button46++;
    });

    $('#button-47').click(function() {
  		$(this).css("border", "5px dashed white");
	});

	$("#button-48").click(function(){
		$(this).animate({
			marginTop: '-2.28in',
			width: '50px',
			height: '50px',
		}, 1000 );
		$(this).css("cursor", "default");
	});

	$("#button-49").click(function(){
        var person = prompt("Please enter your name");
        $( '#screenY').html( "thanks for playing  " + person + "!" );
  
    });

    var button50= true;
    $("#button-50").click(function(){
        location.reload();
    });

});