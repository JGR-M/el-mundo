$(document).ready(function() {

    $('#submitWeather').click(function() {

        var city = $('#city').val();

        if(city != ''){

            $.ajax({

                // always remember to add 's' at the HTTPS
                url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial' + '&APPID=4ed06e5c3a62464b150f64d2de562fea',
                type: "GET",
                dataType: "jsonp",
                success: function(data){
                    var widget = show(data);

                    $("#show").html(widget);

                    $('#city').val('');
                }


            });


        }else { 
            $('#error').html("Field cannot be empty.");
        }
    })

});


function show(data){
    return  "<h3><strong>Weather</strong>: "+ data.weather[0].main +"</h3>" + 
            "<h3><strong>Temperature</strong>: "  + data.main.temp + "</h3>";
}




    // js for weather applicationCache, working

    // connected to clasico.html,  button id submitWeather
