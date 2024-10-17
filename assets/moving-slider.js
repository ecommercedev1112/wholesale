  // Initialize Slick Slider
        $(document).ready(function(){
            $('.moving-text-slider').slick({
                slidesToShow: 4,
                autoplay: true, // Enable autoplay
                autoplaySpeed: 0,
                speed: 5000,
                cssEase: 'linear',
                dots: false, // You may choose to hide the navigation dots
                arrows: false, // You may choose to hide the navigation arrows
                pauseOnHover: false,
                infinite: true,
              responsive: [
                    {
                        breakpoint: 768, // Breakpoint for mobile devices
                        settings: {
                            slidesToShow: 2, // Display 1 slide at a time on mobile
                        }
                    }
                   
                ]
            });
        });