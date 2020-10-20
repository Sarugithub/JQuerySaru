$(document).ready(function(){

    $('.abc').scroll(function(){

        $('h3').css('display', 'inline').fadeOut(1000);
       // alert('Scrolled');
    })

    $(submit).on('click', function(){

        valid=true;
        
        if($('#fname').val() == '')
        {
             $('#showerr1').html('Please enter firstname, should not be empty');
             $('#showerr1').css('color', 'red');
            //alert("Please enter your firstname");
            //valid =false;
        }


        if($('#fname').val().length <5 || $('#fname').val().length >20)
        {
            $('#showerr11').html('Username should be between 5 and 20 characters');
            $('#showerr11').css('color', 'red');
            //alert("Please enter your email address");
            //valid = false;
        }

        if($('#lname').val() == '')
        {
             $('#showerr2').html('Please enter lastname, should not be empty');
             $('#showerr2').css('color', 'red');
            //alert("Please enter your firstname");
            //valid =false;
        }

         
        if($('#pwd').val()=='')
        {
            $('#showerrpwd').html('Please enter password, should not be empty');
            $('#showerrpwd').css('color', 'red');
            //alert("Please enter your email address");
            //valid = false;
        }

        if($('#pwd').val().length<8)
        {
            $('#showerr22').html('Password should be less than 8 characters');
            $('#showerr22').css('color', 'red');
        }

         
        if($('#retypepwd').val()=='')
        {
            $('#showerrretypepwd').html('Please retype password, should not be empty');
            $('#showerrretypepwd').css('color', 'red');
            //alert("Please enter your email address");
            //valid = false;
        }

        if($('pwd').val()!= $('#retypepwd').val())
        {
            $('#showerr33').html('Passwords dont match');
            $('#showerr33').css('color', 'red');
        }

        
        if($('#email').val()=='')
        {
            $('#showerr3').html('Please enter email, should not be empty');
            $('#showerr3').css('color', 'red');
            //alert("Please enter your email address");
            //valid = false;
        }

        if($('#address').val()=='')
        {
            $('#showerr4').html('Please enter address, should not be empty');
            $('#showerr4').css('color', 'red');
            // alert("Please enter your address");
            // valid = false;
        }
        
        if(validateEmail(email))
        {
            alert("Email is correct format");
        }
        else
        {
            alert("Email is not a correct format");
        }

        
        
    })

})

function validateEmail(email)
    {
        var reg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return reg.test(email); 
    }





