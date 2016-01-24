(function($, window, document, undefined){
    var background = $("#body-scan-screen")
    var scanner = $("#scanner")

    background.fadeIn("slow", function() {
        background.click(function() {
            scan()
        })
    })

    function scan() {
        if (scanner.length > 0) {
            scanner.css('visibility','visible').hide().fadeIn("slow", function() {
                scanner.animate({top: "580px"}, 75000, "linear", function() {
                    scanner.fadeOut("slow", function() {
                        // DONE SCANNING CALLBACK
                    })
                })
            })
        }
    }
})(jQuery, window, document);