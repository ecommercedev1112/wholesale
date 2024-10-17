
$(document).ready(function(){ 

  /*code here*/
  $(".media--adapt").removeAttr("style");  

  setTimeout(function(){
     

    $('.jdgm-widget-actions-wrapper').remove().clone().appendTo('.jdgm-rev-widg__summary');
    $( ".jdgm-histogram.jdgm-temp-hidden" ).wrap( "<div class='reveiwbox'></div>" );
    $(".jdgm-prev-badge .jdgm-prev-badge__stars").append("<span style='font-weight:600'>4.9</span>");
   
    // $product_price =   $('price-item.price-item--regular').text();
    
    
  }, 3000);




 var swiper = new Swiper(".ingredientsSwiper", {
   slidesPerView: 4,
      centeredSlides: false,
      spaceBetween: 0,
    
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
     $('.price-item.price-item--regular').each(function(i){
         console.log("test1");
               $price = $(this).text().replace("From","");
              $(this).text($price);
       // var myNewString = myString.replace("data-", "");
        console.log($price);
        
      });
});


$('details.mega-menu, .mega-menu__content').hover(
  function() {
    $(this).attr('open', '');
  },
  function() {
    $(this).removeAttr('open');
  }
);

document.querySelectorAll('.accordion-item h2').forEach((accordionToggle) => { 
  accordionToggle.addEventListener('click', () => { 
  const accordionItem = accordionToggle.parentNode; 
  const accordionContent = accordionToggle.nextElementSibling; 
   if (accordionContent.style.maxHeight) { 
       accordionContent.style.maxHeight = null; 
       accordionItem.classList.remove('active'); 
      } else {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'; 
            accordionItem.classList.add('active'); 
        }
    });
});

const accordionBtns = document.querySelectorAll(".accordion");
accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("is-open");
    let content = this.nextElementSibling;
    console.log(content);
    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);
    }
  };
});

var links = document.links;
for (let i = 0, linksLength = links.length ; i < linksLength ; i++) {
  if (links[i].hostname !== window.location.hostname) {
    links[i].target = '_blank';
    links[i].rel = 'noreferrer noopener';
  }
}
