$(document).ready(function() {

        
//Make a tag auto scroll to position//
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 800);
            return false;
    });
//End of scroll animation    
    
$('.header').addClass('animated bounceInUp')
    
    
 //navigation animation effects
    
    
//intro animation bar
 $('nav').addClass('animated slideInRight');

 $( '.link1' ).mouseenter(function() {
     $('.link1').addClass('animated tada');
});
    
$( '.link1' ).mouseleave(function() {
    $('.link1').removeClass('animated tada');
});

$( '.link2' ).mouseenter(function() {
     $('.link2').addClass('animated tada');
});
    
$( '.link2' ).mouseleave(function() {
    $('.link2').removeClass('animated tada');
});

$( '.link3' ).mouseenter(function() {
     $('.link3').addClass('animated tada');
});
    
$( '.link3' ).mouseleave(function() {
    $('.link3').removeClass('animated tada');
});

$( '.link4' ).mouseenter(function() {
     $('.link4').addClass('animated tada');
});
    
$( '.link4' ).mouseleave(function() {
    $('.link4').removeClass('animated tada');
});
    
$( '.link5' ).mouseenter(function() {
     $('.link5').addClass('animated tada');
});
    
$( '.link5' ).mouseleave(function() {
    $('.link5').removeClass('animated tada');
});// End of navigation animations//
    
//Scroll animation for image gallery//
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 2200) {
        $('.image-show').show();
        $('.image-show').addClass('animated flipInX')
    }
});
   
//Data Visulization//
    
//Get context with jQuery - using jQuery's .get() method.
var ctx = $("#myChart").get(0).getContext("2d");
var ctx2 = $("#myChart2").get(0).getContext("2d");
//This will get the first returned node in the jQuery collection.
var myNewChart = new Chart(ctx);
    

    

    
    var data = [
	{
		value: 300,
		color:"#0CE891"
	},
	{
		value : 150,
		color : "#FFF94A"
	},
	{
		value : 75,
		color : "#FF6F1F"
	},
	{
		value : 37.5,
		color : "#FF380D"
	},
	{
		value : 16.25,
		color : "#FF0000"
	}

]
    


    new Chart(ctx).Doughnut(data);
    
    
    var data = {
	labels : ["Jalapeno","Thai Chili","Habanero","Ghost Chili"],
	datasets : [
		{
			fillColor : "red",
			strokeColor : "black",
			data : [8000,100000,350000,1000000]
		}
	]
}
    
    
    
    
    new Chart(ctx2).Bar(data);

$(window).scroll(function(){
     var scroll = $(window).scrollTop();
if(scroll >=700){
$('.data,.data img,.data canvas').show();
$('.data,.data img,.data canvas').addClass('animated flipInX');


}
    });
    
    
$('.jalapeno').mouseenter(function(){
    $('.jinfo').fadeIn();
    
});

$('.jalapeno').mouseleave(function(){
    $('.jinfo').fadeOut();
    
});
    
$('.habanero').mouseenter(function(){
    $('.hinfo').fadeIn();
    
});

$('.habanero').mouseleave(function(){
    $('.hinfo').fadeOut();
    
});
    
$('.thai').mouseenter(function(){
    $('.tinfo').fadeIn();
    
});

$('.thai').mouseleave(function(){
    $('.tinfo').fadeOut();
    
});
    
$('.ghost').mouseenter(function(){
    $('.ginfo').fadeIn();
    
});

$('.ghost').mouseleave(function(){
    $('.ginfo').fadeOut();
    
});








});