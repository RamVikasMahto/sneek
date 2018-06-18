$(document).ready(function(){
    $(".menu").click(function(){
        $(".dropdown").slideToggle();
       $( ".menu" ).toggleClass( "close" );
       $( ".menuBox" ).toggleClass( "full-size" );
    });
	
    $(".activitiesBox .tab-data li").click(function(){
        $(this).children('ul').slideToggle();
 });
 
});

$(function() {
    var header = $(".header");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            header.removeClass('scrollHeader').addClass("fixedHeader");
        } else {
            header.removeClass("fixedHeader").addClass('scrollHeader');
        }
    });
});

$(document).ready(function() {

 $('.activities').on("click", function(event)
 {
  event.preventDefault();

     $(this).toggleClass('active');
  $('.activitiesBox .left-side').toggle();

 });

})
 



	 $(function() {
    $( "#tabs" ).tabs();
  });




// When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);

            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 14,

 scrollwheel: false,
                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(53.032725, 5.651928),
                    center: new google.maps.LatLng(53.032725, 5.651928),

                    // How you would like to style the map.
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#009ef3"
            },
            {
                "weight": "0.01"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#00ffe8"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#00b2ff"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#00ffde"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ffe600"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text",
        "stylers": [
            {
                "hue": "#ff0000"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "hue": "#ffe100"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#00aaff"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    }
]
                };

                // Get the HTML DOM element that will contain your map
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('contact');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(53.031825, 5.656808),
                    map: map,
					icon: 'images/pin.png',
                    title: 'Snazzy!'
                });
                  // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(53.03005, 5.661028),
                    map: map,
					icon: 'images/pin1.png',
                    title: 'Snazzy!'
                });
                  // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(53.03105, 5.670028),
                    map: map,
					icon: 'images/pin2.png',
                    title: 'Snazzy!'
                });
                  // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(53.02200, 5.660028),
                    map: map,
					icon: 'images/pin3.png',
                    title: 'Snazzy!'
                });
                  // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(53.03605, 5.681028),
                    map: map,
					icon: 'images/pin4.png',
                    title: 'Snazzy!'
                });
                  // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(53.02300, 5.678500),
                    map: map,
					icon: 'images/pin6.png',
                    title: 'Snazzy!'
                });

            }



