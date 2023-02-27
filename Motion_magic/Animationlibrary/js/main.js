/*********************************************************************
 *********************animation classes add on click  ****************
 **** ****************************************************************/
$(".buttons li").click(function () {
  var activeClass = $(".buttons .active").data("class");

  $(".buttons li").removeClass("active");
  $(this).addClass("active");

  $("p").removeClass(activeClass);
  $("p").addClass($(this).data("class"));
});

/*********************************************************************
 *********************Active class add on click ****************
 **** ****************************************************************/

var selector = ".fromcenter ";
$(selector).on("click", function () {
  $(selector).removeClass("active");
  $(this).addClass("active");
});
/*********************************************************************
 ********************************slider js **************************
 **** ****************************************************************/
$(".slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipe: false,
});

var swiper = new Swiper(".swiper-container", {
  pagination: ".swiper-pagination",
  slidesPerView: "auto",
  paginationClickable: true,
  spaceBetween: 0,
  nextButton: ".swiper-button-next",
  prevButton: ".swiper-button-prev",
});

/*********************************************************************
 ********************************Clipboard js **************************
 **** ****************************************************************/

document.querySelectorAll(".fromcenter").forEach((item) => {
  item.addEventListener("click", async (event) => {
    try {
      await navigator.clipboard.writeText(event.target.innerText);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  });
});
/*********************************************************************
 ********************************Toaster js **************************
 **** ****************************************************************/

function showAlert(value) {
  var sheets = document
  .getElementsByTagName('link');
    sheets[1].href = value;

  var myAlert = document.getElementById("myAlert");
  myAlert.className = "show";
  setTimeout(function () {
    hideAlert();
  }, 3000);
}
function hideAlert() {
  myAlert.className = myAlert.className.replace("show", "");
}
