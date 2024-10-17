$(document).ready(function(){
            $('.image-slider').slick({
                dots: false,
              slidesToShow: 3,
              centerMode: true,
              centerPadding: '50px',
              responsive: [
                    {
                        breakpoint: 768, // Breakpoint for mobile devices
                        settings: {
                            slidesToShow: 1, // Display 1 slide at a time on mobile
                        }
                    }
                   
                ]
            });
        });