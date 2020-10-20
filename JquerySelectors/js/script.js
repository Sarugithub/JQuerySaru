

$(document).ready(function(){
    $('#text1').text('HI').css('color', 'red').css('font-weight', 700).css('font-size', 30);
});   

// Class selector

$('.intro').css('border', '3px solid red');

// Tag Selector
$('h1').css('color', 'blue');

// attribute selector
$("a[target='_self']").css('color', 'green' );

$("a[href='https://en.wikipedia.org/wiki/India']").text('Namaste India');

$('#countrylist > li').css('color', 'red').css('font-family', 'sans-serif');

