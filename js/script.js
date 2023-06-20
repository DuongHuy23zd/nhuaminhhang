jQuery(document).ready(function () {
  /*Menu mobi*/
  $(".hamberger-menu").click(function () {
    $(".menu-mobi").addClass("active");
  });
  $(".menu-mobi-close").click(function () {
    $(".menu-mobi").removeClass("active");
  });
  $(".main-menu-mobi ul>li.menu-item-has-children").append(
    "<span class='arrrow'>+</span>"
  );
  $(".arrrow").click(function () {
    $(this).parent().children("ul").toggle(500);
  });
  /*End Menu mobi*/
  new WOW().init();
  $("#traildetails-slider-image").slick({
    dots: false,
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    speed: 1000,
    variableWidth: true,
    arrows: true,
  });
});

$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2300,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToScroll: 1,
  });
});

// // Lắng nghe sự kiện click trên các phần tử <a> trong danh sách
// var navLinks = document.querySelectorAll('.nav-link');
// navLinks.forEach(function(link) {
//   link.addEventListener('click', function(event) {
//     event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết

//     var targetId = link.getAttribute('href'); // Lấy giá trị của thuộc tính href
//     var targetElement = document.querySelector(targetId); // Lấy phần tử mục tiêu bằng cách sử dụng giá trị href
//     if (targetElement) {
//       // Cuộn đến phần tử mục tiêu với hiệu ứng cuộn trong 1 giây
//       targetElement.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start',
//         inline: 'nearest',
//         duration: 1000
//       });
//     }
//   });
// });
