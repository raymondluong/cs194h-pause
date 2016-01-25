(function($, window, document, undefined){
    var background = $("#body-scan-screen");
    var scanner = $("#scanner");
    console.log(scanner);

    background.fadeIn("slow", function() {
        var color = document.getElementById("#black-layer");
        background.click(function(){
            
            $("#black-layer").fadeTo(2000, 0.25);
            setTimeout(function() {
                $("#black-layer").animate({background: "white url(img/blueyellowbkgrd.png) no-repeat center"});
            }, 500);
            scan();
        });
    });

    function scan() {
        console.log('scan');
        if (scanner.length > 0) {
            scanner.css("visibility","visible").hide().fadeIn("slow", function() {
                scanner.animate({top: "580px"}, 75000, "linear", function() {
                    scanner.fadeOut("slow", function() {
                        scanner.show().css("visibility", "hidden");
                        // DONE SCANNING CALLBACK
                    });
                })
            })
        }
    }
})(jQuery, window, document);