let closeBtn = document.querySelector('.close-icon');
let popupModal = document.querySelector('section.custom_popup_module');
closeBtn.addEventListener('click', function(){
    localStorage.setItem('popState','shown');
    popupModal.classList.add('hide');
});
  var input = document.querySelector("#phone");
window.intlTelInput(input, {
  separateDialCode: true
});

$(".the-popup-form select").on("change",function () {
    let selectValue = $(this).val();
    $("input#downshift-0-input").val(selectValue);
})
$(".the-nav-email email").on("change",function () {
    let selectEmailValue = $(this).val();
    $("email_101680521").val(selectEmailValue);
})
$(".newsletter-input-cus input").on("change",function () {
    let selectPhoneValue = $(this).val();
    $("phone_number_101680522").val(selectPhoneValue);
})
$(document).ready(function(){
    $(".the-unlock-bt").click(function(){
        $(".button.needsclick.go952291206.kl-private-reset-css-Xuajs1").click();
    });
});