$(function(){

    $('.rate-star').rateYo({
        rating: 5,
        starWidth: "15px",
        readOnly: true,
    });

    $('.product-slider__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: false
   });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        grid: false,
        skin: "round",
        prefix: "$"
    });

    $('.icon-th-list').on('click', function(){
        $('.product__item').addClass('list');
        $('.icon-th-list').addClass('active');
        $('.icon-th-large').removeClass('active')
    });
    $('.icon-th-large').on('click', function(){
        $('.product__item').removeClass('list');
        $('.icon-th-large').addClass('active');
        $('.icon-th-list').removeClass('active')
    });

    var mixer = mixitup('.products__inner-box');

   


});