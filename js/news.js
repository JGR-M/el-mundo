$(document).ready(function() {

    $('#submitWeather').click(function() {

        var city = $('#city').val();

        if(city != ''){

            $.ajax({

                // always remember to add 's' at the HTTPS
                url: 'https://newsapi.org/v2/everything?q=' + city + '&apiKey=3c9bbdb9dac74117a9f683ae109a4a4b',
                type: "GET",
                dataType: "json",
                success: function(data){
                    var widget = news(data);

                    $("#show-news").html(widget);

                    $('#city').val('');
                }


            });
            
        };
    });

});

function news(data){
    return  "<h4><strong>Current News </strong> <br>" + data.status + ', ' +  data.business + "</h4>";
};