$(document).ready(function(){
    // hero slider
    $('#hero-slider').owlCarousel({
        loop:true,
        nav:true,
        items:1,
        dots: false,
        smartSpeed:1000,
        navText:['PREV','NEXT'],
        responsive:{
            0:{
                nav:false
            },
            600:{
                nav:true
            },

        }
    })

        // Project slider
        $('#project-slider').owlCarousel({
            loop:true,
            nav:false,
            dots: true,
            smartSpeed:1000,
            margin:24,
            responsive:{
                0:{
                    items:1,
                    margin:0
                },
                768:{
                    items:2
                },
                1140:{
                    items:2,
                    center:true
                },
    
            }
        })

        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots:true,
            items:1,
            smartSpeed:800,
         
        })
});

