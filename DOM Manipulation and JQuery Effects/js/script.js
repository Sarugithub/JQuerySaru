$(document).ready(function(){


// Tag Selector
$('h1').css('color', 'blue');

// Appending form fields using jquery -> 'append' method and class selector -> 'myform'

$('.myform').append(" Email <input id= 'email' type = 'text' name ='email' title='Enter your personal email address'/> <br> <br>");
$('.myform').append(" Password <input id='pwd' type = 'password' name ='password' title = 'Enter Password'/> <br> <br>");
$('.myform').append(" Address <input id='add' type = 'string' name ='address'/> <br> <br>");
$('.myform').append(" DateOfBirth <input id='dob' type = 'text' name ='dob'/> <br> <br>");
$('.myform').append("<input type='submit' name='submit'> ");


// Removing the label and input field of lastname
$('label[for=lname]').remove();
$('#lname').remove();


// Modifying attributes of 'Email' and 'DateOfBirth' field using 'attr()' method 

$("#email").attr("type", "email");
$("#dob").attr("type", "date");

// Creating Sliding panel using jQuery sliding methods
$("#knowmore").click(function(){
    $("#details").toggle("slow");
})

// Creating animated tooltips with Jquery on hovering buttons

$('#email').tooltip({

    track: true,
    content: "Please enter your personal email address",
    show: {effect: "highlight", duration: 3000}

});
$('#pwd').tooltip({
    track: true,
    content: "Please enter 8 digit password",
    show: {effect: "highlight", duration: 3000}
});



});