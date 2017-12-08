$(document).ready(function(){
	var scrollpos = 0;

// Title Sequence //


// Artist //

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos < 200) {
			$("#artist").css("opacity", "1");
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 200) {
			$("#artist").css("opacity", ".75");
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 400) {
			$("#artist").css("opacity", ".5");
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 600) {
			$("#artist").css("opacity", ".25");
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 800) {
			$("#artist").css("opacity", "0");
		}
	})



	// Title //

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos < 1200) {
			$("#showtitle").css("opacity", "1");
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 1200) {
			$("#showtitle").css("opacity", ".75");
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 1400) {
			$("#showtitle").css("opacity", ".5");
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 1600) {
			$("#showtitle").css("opacity", ".25");
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 1800) {
			$("#showtitle").css("opacity", "0");
		}
	})



	// Quote //

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos < 1800) {
			$("#quote").css("opacity", "0");
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 2200) {
			$("#quote").css("opacity", ".05");
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 2200) {
			$("#quote").css("opacity", ".15");
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 2400) {
			$("#quote").css("opacity", ".45");
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 3000) {
			$("#quote").css("opacity", ".15");
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 3400) {
			$("#quote").css("opacity", ".05");
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 3800) {
			$("#quote").css("opacity", "0");
		}
	})


	// Info Button //

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos < 3800) {
			$(".infobutton").css("opacity", "0");
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 4900) {
			$(".infobutton").css("opacity", "1");
		}
	})

	// Exhibition Info Hover + Button Switch //

	$("#info").hide();
	$(".infobutton").click(function(){
		$("#info").slideToggle(500);
		$("body").toggleClass("no-scroll");
	});


	var menu= true;
	$("#menuOff").hide();
    $(".infobutton").click(function(){
        if (menu==true) {
            $("#menuOn").hide();
            $("#menuOff").show();
            
            menu=false;
        }
        else {

           $("#menuOff").hide();
           $("#menuOn").show();

            menu=true;   
        }   
    });



	// Works Hover Hide//


	// Sky //

	$("#one").hover(function(){
		$("#two").css("opacity", "0");
		$("#three").css("opacity", "0");
		$("#four").css("opacity", "0");
		$("#five").css("opacity", "0");
		$("#six").css("opacity", "0");
		$("#seven").css("opacity", "0");
		$("#eight").css("opacity", "0");
		$("#nine").css("opacity", "0");
		$("#ten").css("opacity", "0");
		$("#eleven").css("opacity", "0");
		$("#twelve").css("opacity", "0");
		$("#thirteen").css("opacity", "0");
		$("#fourteen").css("opacity", "0");
		$("#fifteen").css("opacity", "0");
		$("#sixteen").css("opacity", "0");
		$("#seventeen").css("opacity", "0");
	},function(){
        $("#two").css("opacity", "1");
        $("#three").css("opacity", "1");
        $("#four").css("opacity", "1");
        $("#five").css("opacity", "1");
        $("#six").css("opacity", "1");
        $("#seven").css("opacity", "1");
        $("#eight").css("opacity", "1");
        $("#nine").css("opacity", "1");
        $("#ten").css("opacity", "1");
        $("#eleven").css("opacity", "1");
        $("#twelve").css("opacity", "1");
        $("#thirteen").css("opacity", "1");
        $("#fourteen").css("opacity", "1");
        $("#fifteen").css("opacity", "1");
        $("#sixteen").css("opacity", "1");
        $("#seventeen").css("opacity", "1");
	});

	// Bottoms //

	$("#two").hover(function(){
		$("#one").css("opacity", "0");
		$("#three").css("opacity", "0");
		$("#four").css("opacity", "0");
		$("#five").css("opacity", "0");
		$("#six").css("opacity", "0");
		$("#seven").css("opacity", "0");
		$("#eight").css("opacity", "0");
		$("#nine").css("opacity", "0");
		$("#ten").css("opacity", "0");
		$("#eleven").css("opacity", "0");
		$("#twelve").css("opacity", "0");
		$("#thirteen").css("opacity", "0");
		$("#fourteen").css("opacity", "0");
		$("#fifteen").css("opacity", "0");
		$("#sixteen").css("opacity", "0");
		$("#seventeen").css("opacity", "0");
	},function(){
        $("#one").css("opacity", "1");
        $("#three").css("opacity", "1");
        $("#four").css("opacity", "1");
        $("#five").css("opacity", "1");
        $("#six").css("opacity", "1");
        $("#seven").css("opacity", "1");
        $("#eight").css("opacity", "1");
        $("#nine").css("opacity", "1");
        $("#ten").css("opacity", "1");
        $("#eleven").css("opacity", "1");
        $("#twelve").css("opacity", "1");
        $("#thirteen").css("opacity", "1");
        $("#fourteen").css("opacity", "1");
        $("#fifteen").css("opacity", "1");
        $("#sixteen").css("opacity", "1");
        $("#seventeen").css("opacity", "1");
	});

	// Grapefruit //

	$("#three").hover(function(){
		$("#one").css("opacity", "0");
		$("#two").css("opacity", "0");
		$("#four").css("opacity", "0");
		$("#five").css("opacity", "0");
		$("#six").css("opacity", "0");
		$("#seven").css("opacity", "0");
		$("#eight").css("opacity", "0");
		$("#nine").css("opacity", "0");
		$("#ten").css("opacity", "0");
		$("#eleven").css("opacity", "0");
		$("#twelve").css("opacity", "0");
		$("#thirteen").css("opacity", "0");
		$("#fourteen").css("opacity", "0");
		$("#fifteen").css("opacity", "0");
		$("#sixteen").css("opacity", "0");
		$("#seventeen").css("opacity", "0");
	},function(){
        $("#one").css("opacity", "1");
        $("#two").css("opacity", "1");
        $("#four").css("opacity", "1");
        $("#five").css("opacity", "1");
        $("#six").css("opacity", "1");
        $("#seven").css("opacity", "1");
        $("#eight").css("opacity", "1");
        $("#nine").css("opacity", "1");
        $("#ten").css("opacity", "1");
        $("#eleven").css("opacity", "1");
        $("#twelve").css("opacity", "1");
        $("#thirteen").css("opacity", "1");
        $("#fourteen").css("opacity", "1");
        $("#fifteen").css("opacity", "1");
        $("#sixteen").css("opacity", "1");
        $("#seventeen").css("opacity", "1");
	});

	// Hammer //

	$("#four").hover(function(){
		$("#one").css("opacity", "0");
		$("#two").css("opacity", "0");
		$("#three").css("opacity", "0");
		$("#five").css("opacity", "0");
		$("#six").css("opacity", "0");
		$("#seven").css("opacity", "0");
		$("#eight").css("opacity", "0");
		$("#nine").css("opacity", "0");
		$("#ten").css("opacity", "0");
		$("#eleven").css("opacity", "0");
		$("#twelve").css("opacity", "0");
		$("#thirteen").css("opacity", "0");
		$("#fourteen").css("opacity", "0");
		$("#fifteen").css("opacity", "0");
		$("#sixteen").css("opacity", "0");
		$("#seventeen").css("opacity", "0");
	},function(){
        $("#one").css("opacity", "1");
        $("#two").css("opacity", "1");
        $("#three").css("opacity", "1");
        $("#five").css("opacity", "1");
        $("#six").css("opacity", "1");
        $("#seven").css("opacity", "1");
        $("#eight").css("opacity", "1");
        $("#nine").css("opacity", "1");
        $("#ten").css("opacity", "1");
        $("#eleven").css("opacity", "1");
        $("#twelve").css("opacity", "1");
        $("#thirteen").css("opacity", "1");
        $("#fourteen").css("opacity", "1");
        $("#fifteen").css("opacity", "1");
        $("#sixteen").css("opacity", "1");
        $("#seventeen").css("opacity", "1");
	});

	// Night Air //

	$("#five").hover(function(){
		$("#one").css("opacity", "0");
		$("#two").css("opacity", "0");
		$("#three").css("opacity", "0");
		$("#four").css("opacity", "0");
		$("#six").css("opacity", "0");
		$("#seven").css("opacity", "0");
		$("#eight").css("opacity", "0");
		$("#nine").css("opacity", "0");
		$("#ten").css("opacity", "0");
		$("#eleven").css("opacity", "0");
		$("#twelve").css("opacity", "0");
		$("#thirteen").css("opacity", "0");
		$("#fourteen").css("opacity", "0");
		$("#fifteen").css("opacity", "0");
		$("#sixteen").css("opacity", "0");
		$("#seventeen").css("opacity", "0");
	},function(){
        $("#one").css("opacity", "1");
        $("#two").css("opacity", "1");
        $("#three").css("opacity", "1");
        $("#four").css("opacity", "1");
        $("#six").css("opacity", "1");
        $("#seven").css("opacity", "1");
        $("#eight").css("opacity", "1");
        $("#nine").css("opacity", "1");
        $("#ten").css("opacity", "1");
        $("#eleven").css("opacity", "1");
        $("#twelve").css("opacity", "1");
        $("#thirteen").css("opacity", "1");
        $("#fourteen").css("opacity", "1");
        $("#fifteen").css("opacity", "1");
        $("#sixteen").css("opacity", "1");
        $("#seventeen").css("opacity", "1");
	});

	// Sky Machine //

	$("#six").hover(function(){
		$("#one").css("opacity", "0");
		$("#two").css("opacity", "0");
		$("#three").css("opacity", "0");
		$("#four").css("opacity", "0");
		$("#five").css("opacity", "0");
		$("#seven").css("opacity", "0");
		$("#eight").css("opacity", "0");
		$("#nine").css("opacity", "0");
		$("#ten").css("opacity", "0");
		$("#eleven").css("opacity", "0");
		$("#twelve").css("opacity", "0");
		$("#thirteen").css("opacity", "0");
		$("#fourteen").css("opacity", "0");
		$("#fifteen").css("opacity", "0");
		$("#sixteen").css("opacity", "0");
		$("#seventeen").css("opacity", "0");
	},function(){
        $("#one").css("opacity", "1");
        $("#two").css("opacity", "1");
        $("#three").css("opacity", "1");
        $("#four").css("opacity", "1");
        $("#five").css("opacity", "1");
        $("#seven").css("opacity", "1");
        $("#eight").css("opacity", "1");
        $("#nine").css("opacity", "1");
        $("#ten").css("opacity", "1");
        $("#eleven").css("opacity", "1");
        $("#twelve").css("opacity", "1");
        $("#thirteen").css("opacity", "1");
        $("#fourteen").css("opacity", "1");
        $("#fifteen").css("opacity", "1");
        $("#sixteen").css("opacity", "1");
        $("#seventeen").css("opacity", "1");
	});

	// Self Portrait //

	$("#seven").hover(function(){
		$("#one").css("opacity", "0");
		$("#two").css("opacity", "0");
		$("#three").css("opacity", "0");
		$("#four").css("opacity", "0");
		$("#five").css("opacity", "0");
		$("#six").css("opacity", "0");
		$("#eight").css("opacity", "0");
		$("#nine").css("opacity", "0");
		$("#ten").css("opacity", "0");
		$("#eleven").css("opacity", "0");
		$("#twelve").css("opacity", "0");
		$("#thirteen").css("opacity", "0");
		$("#fourteen").css("opacity", "0");
		$("#fifteen").css("opacity", "0");
		$("#sixteen").css("opacity", "0");
		$("#seventeen").css("opacity", "0");
	},function(){
        $("#one").css("opacity", "1");
        $("#two").css("opacity", "1");
        $("#three").css("opacity", "1");
        $("#four").css("opacity", "1");
        $("#five").css("opacity", "1");
        $("#six").css("opacity", "1");
        $("#eight").css("opacity", "1");
        $("#nine").css("opacity", "1");
        $("#ten").css("opacity", "1");
        $("#eleven").css("opacity", "1");
        $("#twelve").css("opacity", "1");
        $("#thirteen").css("opacity", "1");
        $("#fourteen").css("opacity", "1");
        $("#fifteen").css("opacity", "1");
        $("#sixteen").css("opacity", "1");
        $("#seventeen").css("opacity", "1");
	});

	// Sales List //

	$("#eight").hover(function(){
		$("#one").css("opacity", "0");
		$("#two").css("opacity", "0");
		$("#three").css("opacity", "0");
		$("#four").css("opacity", "0");
		$("#five").css("opacity", "0");
		$("#six").css("opacity", "0");
		$("#seven").css("opacity", "0");
		$("#nine").css("opacity", "0");
		$("#ten").css("opacity", "0");
		$("#eleven").css("opacity", "0");
		$("#twelve").css("opacity", "0");
		$("#thirteen").css("opacity", "0");
		$("#fourteen").css("opacity", "0");
		$("#fifteen").css("opacity", "0");
		$("#sixteen").css("opacity", "0");
		$("#seventeen").css("opacity", "0");
	},function(){
        $("#one").css("opacity", "1");
        $("#two").css("opacity", "1");
        $("#three").css("opacity", "1");
        $("#four").css("opacity", "1");
        $("#five").css("opacity", "1");
        $("#six").css("opacity", "1");
        $("#seven").css("opacity", "1");
        $("#nine").css("opacity", "1");
        $("#ten").css("opacity", "1");
        $("#eleven").css("opacity", "1");
        $("#twelve").css("opacity", "1");
        $("#thirteen").css("opacity", "1");
        $("#fourteen").css("opacity", "1");
        $("#fifteen").css("opacity", "1");
        $("#sixteen").css("opacity", "1");
        $("#seventeen").css("opacity", "1");
	});


	// Bag Piece //

	$("#nine").hover(function(){
		$("#one").css("opacity", "0");
		$("#two").css("opacity", "0");
		$("#three").css("opacity", "0");
		$("#four").css("opacity", "0");
		$("#five").css("opacity", "0");
		$("#six").css("opacity", "0");
		$("#seven").css("opacity", "0");
		$("#eight").css("opacity", "0");
		$("#ten").css("opacity", "0");
		$("#eleven").css("opacity", "0");
		$("#twelve").css("opacity", "0");
		$("#thirteen").css("opacity", "0");
		$("#fourteen").css("opacity", "0");
		$("#fifteen").css("opacity", "0");
		$("#sixteen").css("opacity", "0");
		$("#seventeen").css("opacity", "0");
	},function(){
        $("#one").css("opacity", "1");
        $("#two").css("opacity", "1");
        $("#three").css("opacity", "1");
        $("#four").css("opacity", "1");
        $("#five").css("opacity", "1");
        $("#six").css("opacity", "1");
        $("#seven").css("opacity", "1");
        $("#eight").css("opacity", "1");
        $("#ten").css("opacity", "1");
        $("#eleven").css("opacity", "1");
        $("#twelve").css("opacity", "1");
        $("#thirteen").css("opacity", "1");
        $("#fourteen").css("opacity", "1");
        $("#fifteen").css("opacity", "1");
        $("#sixteen").css("opacity", "1");
        $("#seventeen").css("opacity", "1");
	});


	// Cut Piece //

	$("#ten").hover(function(){
		$("#one").css("opacity", "0");
		$("#two").css("opacity", "0");
		$("#three").css("opacity", "0");
		$("#four").css("opacity", "0");
		$("#five").css("opacity", "0");
		$("#six").css("opacity", "0");
		$("#seven").css("opacity", "0");
		$("#eight").css("opacity", "0");
		$("#nine").css("opacity", "0");
		$("#eleven").css("opacity", "0");
		$("#twelve").css("opacity", "0");
		$("#thirteen").css("opacity", "0");
		$("#fourteen").css("opacity", "0");
		$("#fifteen").css("opacity", "0");
		$("#sixteen").css("opacity", "0");
		$("#seventeen").css("opacity", "0");
	},function(){
        $("#one").css("opacity", "1");
        $("#two").css("opacity", "1");
        $("#three").css("opacity", "1");
        $("#four").css("opacity", "1");
        $("#five").css("opacity", "1");
        $("#six").css("opacity", "1");
        $("#seven").css("opacity", "1");
        $("#eight").css("opacity", "1");
        $("#nine").css("opacity", "1");
        $("#eleven").css("opacity", "1");
        $("#twelve").css("opacity", "1");
        $("#thirteen").css("opacity", "1");
        $("#fourteen").css("opacity", "1");
        $("#fifteen").css("opacity", "1");
        $("#sixteen").css("opacity", "1");
        $("#seventeen").css("opacity", "1");
	});

	// Piece for Nam June Paik //

	$("#eleven").hover(function(){
		$("#one").css("opacity", "0");
		$("#two").css("opacity", "0");
		$("#three").css("opacity", "0");
		$("#four").css("opacity", "0");
		$("#five").css("opacity", "0");
		$("#six").css("opacity", "0");
		$("#seven").css("opacity", "0");
		$("#eight").css("opacity", "0");
		$("#nine").css("opacity", "0");
		$("#ten").css("opacity", "0");
		$("#twelve").css("opacity", "0");
		$("#thirteen").css("opacity", "0");
		$("#fourteen").css("opacity", "0");
		$("#fifteen").css("opacity", "0");
		$("#sixteen").css("opacity", "0");
		$("#seventeen").css("opacity", "0");
	},function(){
        $("#one").css("opacity", "1");
        $("#two").css("opacity", "1");
        $("#three").css("opacity", "1");
        $("#four").css("opacity", "1");
        $("#five").css("opacity", "1");
        $("#six").css("opacity", "1");
        $("#seven").css("opacity", "1");
        $("#eight").css("opacity", "1");
        $("#nine").css("opacity", "1");
        $("#ten").css("opacity", "1");
        $("#twelve").css("opacity", "1");
        $("#thirteen").css("opacity", "1");
        $("#fourteen").css("opacity", "1");
        $("#fifteen").css("opacity", "1");
        $("#sixteen").css("opacity", "1");
        $("#seventeen").css("opacity", "1");
	});
	

	// Plastic Ono Band //

	$("#twelve").hover(function(){
		$("#one").css("opacity", "0");
		$("#two").css("opacity", "0");
		$("#three").css("opacity", "0");
		$("#four").css("opacity", "0");
		$("#five").css("opacity", "0");
		$("#six").css("opacity", "0");
		$("#seven").css("opacity", "0");
		$("#eight").css("opacity", "0");
		$("#nine").css("opacity", "0");
		$("#ten").css("opacity", "0");
		$("#eleven").css("opacity", "0");
		$("#thirteen").css("opacity", "0");
		$("#fourteen").css("opacity", "0");
		$("#fifteen").css("opacity", "0");
		$("#sixteen").css("opacity", "0");
		$("#seventeen").css("opacity", "0");
	},function(){
        $("#one").css("opacity", "1");
        $("#two").css("opacity", "1");
        $("#three").css("opacity", "1");
        $("#four").css("opacity", "1");
        $("#five").css("opacity", "1");
        $("#six").css("opacity", "1");
        $("#seven").css("opacity", "1");
        $("#eight").css("opacity", "1");
        $("#nine").css("opacity", "1");
        $("#ten").css("opacity", "1");
        $("#eleven").css("opacity", "1");
        $("#thirteen").css("opacity", "1");
        $("#fourteen").css("opacity", "1");
        $("#fifteen").css("opacity", "1");
        $("#sixteen").css("opacity", "1");
        $("#seventeen").css("opacity", "1");
	});


	// Painting to Nail //

	$("#thirteen").hover(function(){
		$("#one").css("opacity", "0");
		$("#two").css("opacity", "0");
		$("#three").css("opacity", "0");
		$("#four").css("opacity", "0");
		$("#five").css("opacity", "0");
		$("#six").css("opacity", "0");
		$("#seven").css("opacity", "0");
		$("#eight").css("opacity", "0");
		$("#nine").css("opacity", "0");
		$("#ten").css("opacity", "0");
		$("#eleven").css("opacity", "0");
		$("#twelve").css("opacity", "0");
		$("#fourteen").css("opacity", "0");
		$("#fifteen").css("opacity", "0");
		$("#sixteen").css("opacity", "0");
		$("#seventeen").css("opacity", "0");
	},function(){
        $("#one").css("opacity", "1");
        $("#two").css("opacity", "1");
        $("#three").css("opacity", "1");
        $("#four").css("opacity", "1");
        $("#five").css("opacity", "1");
        $("#six").css("opacity", "1");
        $("#seven").css("opacity", "1");
        $("#eight").css("opacity", "1");
        $("#nine").css("opacity", "1");
        $("#ten").css("opacity", "1");
        $("#eleven").css("opacity", "1");
        $("#twelve").css("opacity", "1");
        $("#fourteen").css("opacity", "1");
        $("#fifteen").css("opacity", "1");
        $("#sixteen").css("opacity", "1");
        $("#seventeen").css("opacity", "1");
	});

	// Box of Smile //

	$("#fourteen").hover(function(){
		$("#one").css("opacity", "0");
		$("#two").css("opacity", "0");
		$("#three").css("opacity", "0");
		$("#four").css("opacity", "0");
		$("#five").css("opacity", "0");
		$("#six").css("opacity", "0");
		$("#seven").css("opacity", "0");
		$("#eight").css("opacity", "0");
		$("#nine").css("opacity", "0");
		$("#ten").css("opacity", "0");
		$("#eleven").css("opacity", "0");
		$("#twelve").css("opacity", "0");
		$("#thirteen").css("opacity", "0");
		$("#fifteen").css("opacity", "0");
		$("#sixteen").css("opacity", "0");
		$("#seventeen").css("opacity", "0");
	},function(){
        $("#one").css("opacity", "1");
        $("#two").css("opacity", "1");
        $("#three").css("opacity", "1");
        $("#four").css("opacity", "1");
        $("#five").css("opacity", "1");
        $("#six").css("opacity", "1");
        $("#seven").css("opacity", "1");
        $("#eight").css("opacity", "1");
        $("#nine").css("opacity", "1");
        $("#ten").css("opacity", "1");
        $("#eleven").css("opacity", "1");
        $("#twelve").css("opacity", "1");
        $("#thirteen").css("opacity", "1");
        $("#fifteen").css("opacity", "1");
        $("#sixteen").css("opacity", "1");
        $("#seventeen").css("opacity", "1");
	});


	// This Is Not Here //

	$("#fifteen").hover(function(){
		$("#one").css("opacity", "0");
		$("#two").css("opacity", "0");
		$("#three").css("opacity", "0");
		$("#four").css("opacity", "0");
		$("#five").css("opacity", "0");
		$("#six").css("opacity", "0");
		$("#seven").css("opacity", "0");
		$("#eight").css("opacity", "0");
		$("#nine").css("opacity", "0");
		$("#ten").css("opacity", "0");
		$("#eleven").css("opacity", "0");
		$("#twelve").css("opacity", "0");
		$("#thirteen").css("opacity", "0");
		$("#fourteen").css("opacity", "0");
		$("#sixteen").css("opacity", "0");
		$("#seventeen").css("opacity", "0");
	},function(){
        $("#one").css("opacity", "1");
        $("#two").css("opacity", "1");
        $("#three").css("opacity", "1");
        $("#four").css("opacity", "1");
        $("#five").css("opacity", "1");
        $("#six").css("opacity", "1");
        $("#seven").css("opacity", "1");
        $("#eight").css("opacity", "1");
        $("#nine").css("opacity", "1");
        $("#ten").css("opacity", "1");
        $("#eleven").css("opacity", "1");
        $("#twelve").css("opacity", "1");
        $("#thirteen").css("opacity", "1");
        $("#fourteen").css("opacity", "1");
        $("#sixteen").css("opacity", "1");
        $("#seventeen").css("opacity", "1");
	});

	// War Is Over //

	$("#sixteen").hover(function(){
		$("#one").css("opacity", "0");
		$("#two").css("opacity", "0");
		$("#three").css("opacity", "0");
		$("#four").css("opacity", "0");
		$("#five").css("opacity", "0");
		$("#six").css("opacity", "0");
		$("#seven").css("opacity", "0");
		$("#eight").css("opacity", "0");
		$("#nine").css("opacity", "0");
		$("#ten").css("opacity", "0");
		$("#eleven").css("opacity", "0");
		$("#twelve").css("opacity", "0");
		$("#thirteen").css("opacity", "0");
		$("#fourteen").css("opacity", "0");
		$("#fifteen").css("opacity", "0");
		$("#seventeen").css("opacity", "0");
	},function(){
        $("#one").css("opacity", "1");
        $("#two").css("opacity", "1");
        $("#three").css("opacity", "1");
        $("#four").css("opacity", "1");
        $("#five").css("opacity", "1");
        $("#six").css("opacity", "1");
        $("#seven").css("opacity", "1");
        $("#eight").css("opacity", "1");
        $("#nine").css("opacity", "1");
        $("#ten").css("opacity", "1");
        $("#eleven").css("opacity", "1");
        $("#twelve").css("opacity", "1");
        $("#thirteen").css("opacity", "1");
        $("#fourteen").css("opacity", "1");
        $("#fifteen").css("opacity", "1");
        $("#seventeen").css("opacity", "1");
	});

	// Eyeblink //

	$("#seventeen").hover(function(){
		$("#one").css("opacity", "0");
		$("#two").css("opacity", "0");
		$("#three").css("opacity", "0");
		$("#four").css("opacity", "0");
		$("#five").css("opacity", "0");
		$("#six").css("opacity", "0");
		$("#seven").css("opacity", "0");
		$("#eight").css("opacity", "0");
		$("#nine").css("opacity", "0");
		$("#ten").css("opacity", "0");
		$("#eleven").css("opacity", "0");
		$("#twelve").css("opacity", "0");
		$("#thirteen").css("opacity", "0");
		$("#fourteen").css("opacity", "0");
		$("#fifteen").css("opacity", "0");
		$("#sixteen").css("opacity", "0");
	},function(){
        $("#one").css("opacity", "1");
        $("#two").css("opacity", "1");
        $("#three").css("opacity", "1");
        $("#four").css("opacity", "1");
        $("#five").css("opacity", "1");
        $("#six").css("opacity", "1");
        $("#seven").css("opacity", "1");
        $("#eight").css("opacity", "1");
        $("#nine").css("opacity", "1");
        $("#ten").css("opacity", "1");
        $("#eleven").css("opacity", "1");
        $("#twelve").css("opacity", "1");
        $("#thirteen").css("opacity", "1");
        $("#fourteen").css("opacity", "1");
        $("#fifteen").css("opacity", "1");
        $("#sixteen").css("opacity", "1");
	});

	// Works Info Hover //
	
	$("#oneinfo").hide();
	$("#one").click(function(){
		$("#oneinfo").slideToggle(0);
		$("body").toggleClass("no-scroll");
		$("#content").hide();
		$(".infobutton").hide();
	});

	$("#oneinfo").click(function(){
		$("#oneinfo").slideToggle(0);
		$("body").removeClass("no-scroll");
		$("#content").show();
		$("#menuOn").show();
	});

	$("#twoinfo").hide();
	$("#two").click(function(){
		$("#twoinfo").slideToggle(0);
		$("body").toggleClass("no-scroll");
		$("#content").hide();
		$(".infobutton").hide();
	});

	$("#twoinfo").click(function(){
		$("#twoinfo").slideToggle(0);
		$("body").removeClass("no-scroll");
		$("#content").show();
		$("#menuOn").show();
	});

	$("#threeinfo").hide();
	$("#three").click(function(){
		$("#threeinfo").slideToggle(0);
		$("body").toggleClass("no-scroll");
		$("#content").hide();
		$(".infobutton").hide();
	});

	$("#threeinfo").click(function(){
		$("#threeinfo").slideToggle(0);
		$("body").removeClass("no-scroll");
		$("#content").show();
		$("#menuOn").show();
	});

	$("#fourinfo").hide();
	$("#four").click(function(){
		$("#fourinfo").slideToggle(0);
		$("body").toggleClass("no-scroll");
		$("#content").hide();
		$(".infobutton").hide();
	});

	$("#fourinfo").click(function(){
		$("#fourinfo").slideToggle(0);
		$("body").removeClass("no-scroll");
		$("#content").show();
		$("#menuOn").show();
	});


});
