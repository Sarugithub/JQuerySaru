

$(document).ready(function(){

    $.ajax({

        url: "https://api.github.com/users/bibeva/repos",
        datatype: "jsonp",
        success: function(returndata)
        {
           $('#div1').html(returndata[0]["owner"]["login"]);
           alert("Load was performed")
        }

    })



})