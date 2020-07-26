// Custom Scripts for Primal Template //

jQuery(function ($) {
    "use strict";


    /* --------- Wow Init ------ */

    new WOW().init();


    /*----- Preloader ----- */

    $(window).load(function () {
        setTimeout(function () {
            $('#loading').fadeOut('slow', function () {});
        }, 150);
    });


    /* ------ Lightcase ----- */

    jQuery(document).ready(function ($) {
        $('a[data-rel^=lightcase]').lightcase();
    });


});