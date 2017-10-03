$(document).ready(function(){
	var scrollpos = 0;

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 200) {
			$("body").css("background-image", "url(images/hands/2.jpg)");
			console.log(scrollpos);
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 400) {
			$("body").css("background-image", "url(images/hands/3.jpg)");
			console.log(scrollpos);
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 600) {
			$("body").css("background-image", "url(images/hands/4.jpg)");
			console.log(scrollpos);
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 800) {
			$("body").css("background-image", "url(images/hands/5.jpg)");
			console.log(scrollpos);
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 1000) {
			$("body").css("background-image", "url(images/hands/6.jpg)");
			$("#clap").css("opacity", "1");
			$("#clap").css("font-size", "10vw");
			console.log(scrollpos);
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 1200) {
			$("body").css("background-image", "url(images/hands/7.jpg)");
			$("#clap").css("font-size", "20vw");
			console.log(scrollpos);
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 1400) {
			$("body").css("background-image", "url(images/hands/8.jpg)");
			$("#clap").css("opacity", "0");
			console.log(scrollpos);
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 1600) {
			$("body").css("background-image", "url(images/hands/9.jpg)");
			console.log(scrollpos);
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 1800) {
			$("body").css("background-image", "url(images/hands/10.jpg)");
			console.log(scrollpos);
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 2000) {
			$("body").css("background-image", "url(images/hands/11.jpg)");
			console.log(scrollpos);
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 2200) {
			$("body").css("background-image", "url(images/hands/12.jpg)");
			console.log(scrollpos);
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 2400) {
			$("body").css("background-image", "url(images/hands/13.jpg)");
			console.log(scrollpos);
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 2600) {
			$("body").css("background-image", "url(images/hands/14.jpg)");
			console.log(scrollpos);
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 2800) {
			$("body").css("background-image", "url(images/hands/15.jpg)");
			console.log(scrollpos);
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 3000) {
			$("body").css("background-image", "url(images/hands/16.jpg)");
			console.log(scrollpos);
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 3200) {
			$("body").css("background-image", "url(images/hands/17.jpg)");
			console.log(scrollpos);
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 3400) {
			$("body").css("background-image", "url(images/hands/18.jpg)");
			$("#clap").css("opacity", "1");
			$("#clap").css("font-size", "10vw");
			console.log(scrollpos);
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 3600) {
			$("body").css("background-image", "url(images/hands/19.jpg)");
			$("#clap").css("font-size", "20vw");
			console.log(scrollpos);
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 3800) {
			$("body").css("background-image", "url(images/hands/20.jpg)");
			$("#clap").css("opacity", "0");
			console.log(scrollpos);
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 4000) {
			$("body").css("background-image", "url(images/hands/21.jpg)");
			console.log(scrollpos);
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 4200) {
			$("body").css("background-image", "url(images/hands/22.jpg)");
			console.log(scrollpos);
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 4400) {
			$("body").css("background-image", "url(images/hands/23.jpg)");
			console.log(scrollpos);
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 4600) {
			$("body").css("background-image", "url(images/hands/24.jpg)");
			console.log(scrollpos);
		}
	})

	$(document).scroll(function(){
		scrollpos = $(this).scrollTop();
		if(scrollpos > 4800) {
			$("body").css("background-image", "url(images/hands/1.jpg)");
			console.log(scrollpos);
		}
	})

	$(window).scroll(function(){
		if(scrollpos + window.innerHeight >= document.body.scrollHeight) {
			window.scrollTo(0,0);
		}
	})

	var clap = new AudioFade('#clapsound', 1000).init();

})