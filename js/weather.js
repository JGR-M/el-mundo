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
            // <a onclick="M.toast({html: 'I am a toast'})" class="btn">Toast!</a>
        }
    })

});


function show(data){
    return  "<h3>" + data.name + ", " + data.sys.country + "</h3>" +
            "<h4><strong>Weather</strong>: <img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>" + data.weather[0].main + "</h4>" + 
            "<h4><strong>Temperature</strong>: "  + data.main.temp + "&deg;F</h4>";
            // "<h3><strong>Humidity</strong>: "  + data.main.humidity + "</h3>";
}




    // js for weather applicationCache, working

    // connected to clasico.html,  button id submitWeather
