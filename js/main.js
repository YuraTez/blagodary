/*
let navWidth = $('.nav-list').width();

if (window.innerWidth > 1070) {
    $('.nav').width(navWidth);
}


$('#header-search').on('click', function () {
    if (window.innerWidth > 1070) {
        $('.nav-list').width(435);
    } else {
        $('#header-search').removeClass("is-active");
        $('.header-search-cross--mobile').addClass("is-active");
        $(".overlay-search").addClass("active");
        $(".burger").removeClass("active");
        $(".header").removeClass("active");
    }
    $(".header-search-content").addClass("active");
});

$('#header-input-search').on('input', function () {
    var msg = $(this).val();
    if (window.innerWidth > 1070) {
        if (msg !== "") {
            $(".search-block-list").addClass("active");
            $("#search-btn-search").removeClass("active");
            $(".header-btn-cross").addClass("active");
            $(".overlay-search").addClass("active");
            $(".header").addClass("search");

        } else {
            $(".header-btn-cross").removeClass("active");
            $(".search-block-list").removeClass("active");
            $("#search-btn-search").addClass("active");
            $(".overlay-search").removeClass("active");
            $(".header").removeClass("search");
        }
    } else {
        if (msg !== "") {
            $(".search-block-list").addClass("active");
            $(".header").addClass("search");

        } else {
            $(".search-block-list").removeClass("active");
        }
    }

});


$('.search-catalog').on('input', function () {
    var msg = $(this).val();

        if (msg !== "") {
            $(".cross-catalog").addClass("active");
            $(".catalog-btn-search").removeClass("active");

        } else {
            $(".cross-catalog").removeClass("active");
            $(".catalog-btn-search").addClass("active");
        }
});

$(".cross-catalog").on('click', function () {
    $('.search-catalog').val("");
    $(".cross-catalog").removeClass("active");
    $(".catalog-btn-search").addClass("active");
});


$('.header-btn-cross').on('click', function () {
    $('#header-input-search').val('');
    $(".search-block-list").removeClass("active");
    $(".header-search-content").removeClass("active");
    $(".header-btn-cross").removeClass("active");
    $("#search-btn-search").addClass("active");
    $(".overlay-search").removeClass("active");
    $(".header").removeClass("search");
    if (window.innerWidth > 1070) {
        $('.nav-list').width(navWidth);
    }


});


$('.main-slider').slick({
    dots: false,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    appendArrows: '.main-slider-arrows',
    prevArrow: '.main-slider-prevArrow',
    nextArrow: '.main-slider-nextArrow'
});


$(document).ready(function () {
    let $slider = $('#main-slider');
    let sliderCounter = document.getElementsByClassName("slider-counter");
    let sliderCounterSum = document.getElementsByClassName("slider-counter-sum");


    let updateSliderCounter = function (slick, currentIndex, nextSlide) {
        let next = nextSlide + 1;
        let allSlides = slick.slideCount;
        $(sliderCounter).text(next);
        $(sliderCounterSum).text(allSlides);


    };
    let sliderCounterSumNew = document.querySelector(".slider-counter-sum");
    if (sliderCounterSumNew !== null){
        sliderCounterSumNew.innerHTML = $("#main-slider").slick("getSlick").slideCount;
    }


    $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        updateSliderCounter(slick, currentSlide, nextSlide);

    });
});


$('#novelties-slider').slick({
    infinite: false,
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    appendArrows: '.novelties-slider-arrows',
    prevArrow: '.novelties-slider-prevArrow',
    nextArrow: '.novelties-slider-nextArrow',
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 1,
                variableWidth: true,
            }
        }
    ]
});


var tx = document.getElementsByTagName('textarea');
for (var i = 0; i < tx.length; i++) {
    tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
    tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
    if (this.value !== "") {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) - 8 + 'px';
    } else {
        this.style.height = 47 + 'px';
        this.style.height = (this.scrollHeight) + 'px';
    }
}


function activePopUp() {
    $(".overlay").addClass("active");
}


function notActivePopUp() {
    $(".overlay").removeClass("active");
}


$('.call-btn').on('click', function () {
    $(".pop-up--call").addClass("active");
    activePopUp()
});

$('.pop-up-cross').on('click', function () {
    this.closest(".pop-up").classList.remove("active");
    if(this.closest(".favorite-error")){
        $(".overlay-body").removeClass("active");
    }else{
        notActivePopUp()
    }
});

$('.pop-up-subscribe-btn').on('click', function () {
    $(".pop-up--subscribe-new").addClass("active");
    activePopUp()
});

$('.overlay').on('click', function () {
    $(".pop-up").removeClass("active");
    $(".header-search-content").removeClass("active");
    notActivePopUp()
});


$('.overlay-search').on('click', function () {
    $(".header-search-content").removeClass("active");
    $(".header").removeClass("search");
    $(".search-block-list").removeClass("active");
    $('#header-input-search').val('');
    $(".header-btn-cross").removeClass("active");
    if (window.innerWidth > 1070) {
        $('.nav-list').width(navWidth);
    } else {
        $("#header-search-cross").removeClass("is-active");
        $("#header-search").addClass("is-active");

    }
    notActivePopUp()
});


$('#header-search-cross').on('click', function () {
    $(".header-search-content").removeClass("active");
    $(".header").removeClass("search");
    $(".search-block-list").removeClass("active");
    $('#header-input-search').val('');
    $(".header-btn-cross").removeClass("active");
    $("#header-search-cross").removeClass("is-active");
    $("#header-search").addClass("is-active");

    notActivePopUp()
});


$('#subscribe-message').on('click', function () {
    $(".pop-up--subscribe-new").addClass("active");
    activePopUp()
});


$('#instagram-slider').slick({
    infinite: true,
    dots: false,
    arrows: false,
    speed: 500,
    swipe: true,
    slidesToShow: 1,
    slidesToScroll: 2,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 4
            }
        }
    ]
});

let mapBlock = document.getElementById("map")

if(mapBlock !== null){
    /!*ymaps.ready(init);
    let imgItems = ["assets/img/item-1-lodging.svg"];
    var placemarks = [
            {
                latitude: 53.93516,
                longitude: 27.49469,
                balloonContent: [`<div class="organization">
                     <div class="contacts-list__item">
                    <div class="contacts-item-title">
                        Офис:
                    </div>
                    <div class="contacts-item-time">
                        <div class="contacts-item-time__text">
                            Ежедневно:
                        </div>
                        <div class="contacts-item-time__time">
                            9:00-18:00
                        </div>
                    </div>
                    <div class="contacts-item-location">
                        г. Минск, пр-т Победителей д.103, 4 этаж, помещение 3 (Бизнес-центр Отеля "Виктория Олимп")
                    </div>
                    <div class="contacts-item-phone">
                        <a href="tel:375173087860">+375 (17) 308-78-60</a>
                    </div>
                    <div class="contacts-item-email">
                        <a href="mailto:company@belkraft.by">company@belkraft.by</a>
                    </div>
                    <div class="contacts-item-btn">
                        <a href="#" class="button-gray route">Проложить маршрут</a>
                    </div>
                </div>
                </div>`],
                hintContent: [`<div class="organization">
                     <div class="contacts-list__item">
                    <div class="contacts-item-title">
                        Офис:
                    </div>
                    <div class="contacts-item-time">
                        <div class="contacts-item-time__text">
                            Ежедневно:
                        </div>
                        <div class="contacts-item-time__time">
                            9:00-18:00
                        </div>
                    </div>
                    <div class="contacts-item-location">
                        г. Минск, пр-т Победителей д.103, 4 этаж, помещение 3 (Бизнес-центр Отеля "Виктория Олимп")
                    </div>
                    <div class="contacts-item-phone">
                        <a href="tel:375173087860">+375 (17) 308-78-60</a>
                    </div>
                    <div class="contacts-item-email">
                        <a href="mailto:company@belkraft.by">company@belkraft.by</a>
                    </div>
                    <div class="contacts-item-btn">
                        <a href="#" class="button-gray route">Проложить маршрут</a>
                    </div>
                </div>
                </div>`],
                iconCaption: 'Очень длиннный, но невероятно интересный текст',
            },

        ],
        geoObjects = [];


    function init() {
        var map = new ymaps.Map('map', {
                center: [53.935, 27.5],
                zoom: 15,
                controls: ["zoomControl"],
                behaviors: ["drag"]
            },
        );

        for (var i = 0; i < placemarks.length; i++) {

            geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
                {
                    hintContent: placemarks[i].hintContent,
                    balloonContent: placemarks[i].balloonContent.join('')
                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: imgItems[0],
                    iconImageSize: [54, 65],
                    iconImageOffset: [-25, -25],
                });
        }


        var clusterer = new ymaps.Clusterer({
            clusterIcons: [
                {
                    href: imgItems[0],
                    size: [35, 43],
                    offset: [-25, -25]
                }
            ],
            clusterIconContentLayout: null
        });

        map.geoObjects.add(clusterer);
        clusterer.add(geoObjects);
    }*!/

    ymaps.ready(init);

    var placemarks = [
            {
                latitude: 53.93516,
                longitude: 27.49469,
                balloonContent: [`<div class="organization">
                     <div class="contacts-list__item">
                    <div class="contacts-item-title">
                        Офис:
                    </div>
                    <div class="contacts-item-time">
                        <div class="contacts-item-time__text">
                            Ежедневно:
                        </div>
                        <div class="contacts-item-time__time">
                            9:00-18:00
                        </div>
                    </div>
                    <div class="contacts-item-location">
                        г. Минск, пр-т Победителей д.103, 4 этаж, помещение 3 (Бизнес-центр Отеля "Виктория Олимп")
                    </div>
                    <div class="contacts-item-phone">
                        <a href="tel:375173087860">+375 (17) 308-78-60</a>
                    </div>
                    <div class="contacts-item-email">
                        <a href="mailto:company@belkraft.by">company@belkraft.by</a>
                    </div>
                    <div class="contacts-item-btn">
                        <a href="#" class="button-gray route">Проложить маршрут</a>
                    </div>
                </div>
                </div>`],
                hintContent: [`<div class="organization">
                     <div class="contacts-list__item">
                    <div class="contacts-item-title">
                        Офис:
                    </div>
                    <div class="contacts-item-time">
                        <div class="contacts-item-time__text">
                            Ежедневно:
                        </div>
                        <div class="contacts-item-time__time">
                            9:00-18:00
                        </div>
                    </div>
                    <div class="contacts-item-location">
                        г. Минск, пр-т Победителей д.103, 4 этаж, помещение 3 (Бизнес-центр Отеля "Виктория Олимп")
                    </div>
                    <div class="contacts-item-phone">
                        <a href="tel:375173087860">+375 (17) 308-78-60</a>
                    </div>
                    <div class="contacts-item-email">
                        <a href="mailto:company@belkraft.by">company@belkraft.by</a>
                    </div>
                    <div class="contacts-item-btn">
                        <a href="#" class="button-gray route">Проложить маршрут</a>
                    </div>
                </div>
                </div>`]
            },
        ],
        geoObjects= [];

    function init() {
        var map = new ymaps.Map('map', {
            center: [53.935, 27.5],
            zoom: 15,
            controls: ['zoomControl'],
            behaviors: ['drag']
        });

        for (var i = 0; i < placemarks.length; i++) {
            geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
                {
                    hintContent: placemarks[i].hintContent,
                    balloonContent: placemarks[i].balloonContent.join('')
                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'assets/img/item-1-lodging.svg',
                    iconImageSize: [35, 43],
                    iconImageOffset: [-25, -25],

                });
        }

        var clusterer = new ymaps.Clusterer({
            clusterIcons: [
                {
                    href: 'img/burger.png',
                    size: [100, 100],
                    offset: [-50, -50]
                }
            ],
            clusterIconContentLayout: null
        });

        map.geoObjects.add(clusterer);
        clusterer.add(geoObjects);
    }
}




$('.nav-list__item.level1 a').on('click', function (event) {

    if(event.target.tagName !== "A"){
        event.preventDefault();
        if ($(this).siblings('.nav-submenu').hasClass("active")) {
            $('.nav-submenu').removeClass('active');
        } else {
            $('.nav-submenu').removeClass('active');
            $(this).siblings('.nav-submenu').addClass('active');
        }
    }

});

$('.button').on('click', function () {

});


$('.burger').on('click', function () {
    $(this).toggleClass("active");
    $(".header").toggleClass("active");
    $(".header-search-content").removeClass("active");
    $(".header").removeClass("search");
    $(".search-block-list").removeClass("active");
    $('#header-input-search').val('');
    $(".header-btn-cross").removeClass("active");
    $("#header-search-cross").removeClass("is-active");
    $("#header-search").addClass("is-active");
    notActivePopUp()
});

$('.btn-to-top').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 370,
        easing: "linear"
    });

    return false;
});



$('.filter-dropdown-header').on('click', function () {
    let dropdown = $(this).parent(".filter-dropdown");
    dropdown.toggleClass("active");
    dropdown.find(".filter-dropdown-content").slideToggle( "slow");
});



function upBtnBlock(el){
    el.on('click', function () {
        let dropdown = $(this).closest(".filter-dropdown");
        let dropdownList =  $('.form-btn-container')
        $('.form-btn-container').removeClass("active");
        dropdown.find(".form-btn-container").slideDown( "slow");
        dropdown.find(".form-btn-container").addClass("active");


        $.each(dropdownList, function (index, value) {

            if(!value.classList.contains("active")){

                $(value).slideUp(300);
            }

        });


    });
}
upBtnBlock($('.filter-color__item'))
upBtnBlock($('.filter-el-name'))


$('.filter-color__item').on('click', function () {
    $(this).toggleClass("active");
});


$('.filter-btn-reset').on('click', function () {
    $('.filter-color__item').removeClass("active");
});



$('.card-slider').slick({
    infinite: true,
    dots: false,
    arrows: true,
    speed: 500,
    swipe: true,
    slidesToShow: 1,
    slidesToScroll: 1,
});


$('.card-colors__item').on('click', function () {
    $(this).toggleClass("active");
});

$('.slide-favorite').on('click', function () {
    let flag = false
    $(".card-colors__item").each(function (index){
        if($(this).hasClass("active")){
            flag = true
            return flag
        }
    })
    if(!flag){
        $(".favorite-error").addClass("active");
        $(".overlay-body").addClass("active");
    }
});

$('.favorite-btn-back').on('click', function () {
    $(".favorite-error").removeClass("active");
    $(".overlay-body").removeClass("active");

});


if(window.innerWidth < 768){
    $('.slide-favorite').html("  <div class=\"favorite-img\">\n" +
        "                                <svg width=\"17\" height=\"15\" viewBox=\"0 0 17 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
        "                                    <path d=\"M5.21755 0.59082C2.74828 0.59082 0.726562 2.60175 0.726562 5.05273C0.726562 6.42727 1.53757 7.64639 2.8483 9.05278C4.15903 10.4592 6.00087 12.0868 8.2232 14.2959H8.22337C8.29617 14.3682 8.39532 14.409 8.49862 14.409C8.60193 14.409 8.7009 14.3682 8.77387 14.2959C11.004 12.0868 12.8475 10.4597 14.1563 9.05278C15.4653 7.64604 16.272 6.42639 16.272 5.05273C16.272 2.60179 14.2504 0.59082 11.781 0.59082C10.3155 0.59082 9.26251 1.46623 8.49898 2.52942C7.73546 1.46623 6.68244 0.59082 5.21693 0.59082H5.21755ZM5.21755 1.35845C6.54248 1.35845 7.4882 2.17183 8.16591 3.29108C8.23594 3.40725 8.36265 3.47853 8.49958 3.47853C8.63651 3.47853 8.76321 3.40725 8.83324 3.29108C9.51095 2.17201 10.4567 1.35845 11.7816 1.35845C13.8248 1.35845 15.4959 3.01829 15.4959 5.05268C15.4959 6.12583 14.8494 7.17516 13.585 8.53408C12.3855 9.82296 10.5927 11.4307 8.50115 13.4846C6.41527 11.4298 4.62025 9.82177 3.41867 8.53277C2.15213 7.17384 1.50318 6.12517 1.50318 5.0529C1.50318 3.01851 3.17426 1.35867 5.21751 1.35867L5.21755 1.35845Z\" fill=\"#333333\"/>\n" +
        "                                </svg>\n" +
        "                            </div>В избранное")
}



$('.more-card-color').on('click', function () {
    $(this).toggleClass("active");
    $(".card-colors").toggleClass("active");
});

$('.main-viewing-btn').on('click', function () {
    event.preventDefault()
    $(".pop-up-card").addClass("active");
    $(".overlay-modal").addClass("active");
});

$('.map-nav__item-arrow').on('click', function () {
    let dropdown = $(this).parent();
    $(this).toggleClass("active");
    dropdown.toggleClass("active");
    dropdown.find(".map-nav-dropdown").slideToggle( "slow");
});

if(window.innerWidth < 768){
    console.log('111')
    $(".favorites-remove").html("" +
        "<span class=\"favorites-remove-cross\">\n" +
        "                        <svg width=\"9\" height=\"9\" viewBox=\"0 0 9 9\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
        "<path d=\"M0.890951 0.888021C1.14139 0.637587 1.54729 0.637587 1.79759 0.888021L4.81979 3.91022L7.84199 0.888021C8.09243 0.637587 8.49833 0.637587 8.74863 0.888021C8.99907 1.13846 8.99907 1.54436 8.74863 1.79466L5.72643 4.81686L8.74863 7.83906C8.99907 8.0895 8.99907 8.4954 8.74863 8.7457C8.4982 8.99614 8.09229 8.99599 7.84199 8.7457L4.81979 5.7235L1.79759 8.7457C1.54716 8.99599 1.14125 8.99599 0.890951 8.7457C0.640516 8.49527 0.640516 8.08936 0.890951 7.83906L3.91315 4.81686L0.890951 1.79466C0.640516 1.54423 0.640516 1.13832 0.890951 0.888021Z\" fill=\"black\"/>\n" +
        "</svg>\n" +
        "                    </span>");
}

$('.fake-zoom').on('click', function (e) {
    evt = e || window.event;
    $(this).hide(0);
    starter = document.elementFromPoint(evt.clientX, evt.clientY);
    console.log(starter)
    starter.click();
    $(this).show(0);
});*/



let listsArr = {
    minsk: ["Любой", "Минская область", "Брестская область", "Гродненская область","Гомельская область","Могилевская область","Витебская область"],
    brest: ["Любой", "Фрунзунский", "Лененский", "Московский"],
    grodno: ["Любой", "Фрунзунский", "Лененский", "Московский"],
    gomel: ["Любой", "Фрунзунский", "Лененский", "Московский"],
    mogilev: ["Любой", "Фрунзунский", "Лененский", "Московский"],
    vit: ["Любой", "Фрунзунский", "Лененский", "Московский"]
};

const listOld = document.querySelectorAll(".custom-old");

window.onload = selectCountry;


function selectAdd(){
    listOld.forEach((el)=>{
        el.onchange = selectCountry;
    })
}
selectAdd()

function selectCountry(ev){
    $('[data-select="new-list"]').empty();
    let itemSelect = this.value || "minsk", o;
    for(let i = 0; i < listsArr[itemSelect].length; i++){
        o = new Option(listsArr[itemSelect][i],i,false,false);

        $('[data-select="new-list"]').append(o);

    };
    $('.custom-select').styler();

    $('.new-select').trigger('refresh');

}

$('.viewed-slider').slick({
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendArrows: '.viewed-slider-arrows',
    prevArrow: '.viewed-slider-prev',
    nextArrow: '.viewed-slider-next',
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 1,
                variableWidth: true,
            }
        }
    ]
});


function moreItem(item){
    $('.' + item).on('click', function () {

        let target = event.target;

        if(target.classList.contains("favorite-card")){
            event.preventDefault()
            target.classList.toggle("active");
        }
    });
}
moreItem("viewed-slider__item");
moreItem("announcements-list__item");
moreItem("announcements-card__item");


let heightImgCard = 319/233

function imgResize(){
    $('.viewed-slider__item-img').height($('.viewed-slider__item-img').width() / heightImgCard);
}
imgResize()

$(window).resize(function(){
    imgResize()
});

const announcementsSwitch = document.querySelector(".announcements-switch");

announcementsSwitch.addEventListener("click", () => {
    let target = event.target;
    $(".announcements-switch__item").removeClass("active");
    if (target.closest(".switch-list")) {
        $(".switch-list").addClass("active");
        $(".announcements-content__item--card").removeClass("active");
        $(".announcements-content__item--list").addClass("active");
    }
    else if (target.closest(".switch-card")) {
        $(".switch-card").addClass("active");
        $(".announcements-content__item--list").removeClass("active");
        $(".announcements-content__item--card").addClass("active");
    }
})


$("#header-search").on("focus", function (){
    $(".header-search").addClass("active")
})

$("#header-search").on("focusout", function (){
    $(".header-search").removeClass("active")
})

$(".btn-reset").on("click", function (){

    setTimeout(function(){
        $('.custom-old').trigger('refresh');
        $('.new-select').trigger('refresh');
    }, 0);

})












