$("button").click(function(){
    var flickrapiurl = "https://www.flickr.com/services/feeds/photos_public.gne?format=json&tags=" + $("#search").val()
    $.ajax({
        
        url: flickrapiurl,
        type:'GET',
        dataType:'jsonp',
        jsonpCallback:'jsonFlickrFeed',
        timeout: 2500,
        success: function(result, status, xhr){
            $.each(result.items, function(i, item){
                $("<img>").attr("src", item.media.m).appendTo("#mydiv");
                if(i==5)
                {
                    return false;
                }

            });
           
        },
        error: function(result){
                console.log('Complete with error');
        },
        complete: function(){
            console.log('Complete');
        }

    })


    /*var flickrapiurl = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

    $.getJSON(flickrapiurl,{
        // CONFIG OPTIONS
        tags: "sun, beach",
        tagmode: "any",
        format: "json" 

    }).done(function(data){
        console.log(data);
        $.each(data.items, function(index, item){
            console.log(item);
            $("<img>").attr("src", item.media.m).appendTo("#mydiv");

            if(index==4){

                return false;

            }

        });
    }).fail(function(){
        //failure

        alert("Ajax called failed")

    })
*/  

})




