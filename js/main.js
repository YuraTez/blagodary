const header = document.querySelector(".header")
const fakeHeader = document.querySelector(".fake-header");
let widthWindow = window.innerWidth
fakeHeader.style.height = header.offsetHeight + "px"
const pageContent = document.querySelector(".page-content")
const headerSearch = document.querySelector(".header-search")

function positionSearchResize() {
    let position = pageContent.getBoundingClientRect().left;
    if (position > 0) {
        headerSearch.setAttribute('style', `position:absolute; left: ${position}px`)
    }
}

if (pageContent && widthWindow > 1024) {
    positionSearchResize()
    window.addEventListener("resize", () => {
        positionSearchResize()
    })
}

let listsArr = {
    minsk: ["Любой", "Минская область", "Брестская область", "Гродненская область", "Гомельская область", "Могилевская область", "Витебская область"],
    brest: ["Любой", "Фрунзунский", "Лененский", "Московский"],
    grodno: ["Любой", "Фрунзунский", "Лененский", "Московский"],
    gomel: ["Любой", "Фрунзунский", "Лененский", "Московский"],
    mogilev: ["Любой", "Фрунзунский", "Лененский", "Московский"],
    vit: ["Любой", "Фрунзунский", "Лененский", "Московский"]
};

const listOld = document.querySelectorAll(".custom-old");

window.onload = selectCountry;


function selectAdd() {
    listOld.forEach((el) => {
        el.onchange = selectCountry;
    })
}

selectAdd()

function selectCountry(ev) {
    $('[data-select="new-list"]').empty();
    let itemSelect = this.value || "minsk", o;
    for (let i = 0; i < listsArr[itemSelect].length; i++) {
        o = new Option(listsArr[itemSelect][i], i, false, false);

        $('[data-select="new-list"]').append(o);

    }
    ;
    $('.custom-select').styler();

    $('.new-select').trigger('refresh');

}

console.log()

if (innerWidth > 1220) {

    if ($('.viewed-slider').hasClass("viewed-slider--big")) {
        $('.viewed-slider--big').slick({
            infinite: true,
            dots: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            appendArrows: '.viewed-slider-arrows',
            prevArrow: '.viewed-slider-prev',
            nextArrow: '.viewed-slider-next',
        });
    } else {
        $('.viewed-slider').slick({
            infinite: true,
            dots: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            appendArrows: '.viewed-slider-arrows',
            prevArrow: '.viewed-slider-prev',
            nextArrow: '.viewed-slider-next',
        });
    }
}

function favoriteCard(el){
    el.classList.toggle("active");
}

document.addEventListener("click", ()=>{
    let target = event.target;
    if (target.classList.contains("favorite-card")) {
        event.preventDefault()
        favoriteCard(target)
    }
})

/*function moreItem(item) {
    $('.' + item).on('click', function () {

        let target = event.target;

        if (target.classList.contains("favorite-card")) {
            event.preventDefault()
            favoriteCard(target)
        }
    });
}
moreItem("viewed-slider__item");
moreItem("announcements-list__item");
moreItem("announcements-card__item");*/

$('.card-slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    appendArrows: '.card-slider-arrows',
    prevArrow: '.card-slider-prev',
    nextArrow: '.card-slider-next',
    asNavFor: '.card-slider-main-nav'
});
$('.card-slider-main-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.card-slider-main',
    arrows: false,
    centerMode: true,
    focusOnSelect: true
});




let heightImgCard = 319 / 233
let heightSliderCard = 800 / 535


function imgResize() {
    $('.viewed-slider__item-img').height($('.viewed-slider__item-img').width() / heightImgCard);
}

function sliderResize() {
    $('.card-slider-main').height($('.card-slider-main').width() / heightSliderCard);
}


imgResize()
sliderResize()

$(window).resize(function () {
    imgResize()
    sliderResize()
});


const announcementsSwitch = document.querySelector(".announcements-switch");

if (widthWindow < 457) {
    $(".announcements-content__item--list").removeClass("active");
    $(".announcements-content__item--card").addClass("active");
}

if (announcementsSwitch) {
    announcementsSwitch.addEventListener("click", () => {
        let target = event.target;
        $(".announcements-switch__item").removeClass("active");
        if (target.closest(".switch-list")) {
            $(".switch-list").addClass("active");
            $(".announcements-content__item--card").removeClass("active");
            $(".announcements-content__item--list").addClass("active");
        } else if (target.closest(".switch-card")) {
            $(".switch-card").addClass("active");
            $(".announcements-content__item--list").removeClass("active");
            $(".announcements-content__item--card").addClass("active");
        }
    })
}

$("#header-search").on("focus", function () {
    $(".header-search").addClass("active")
})

$("#header-search").on("focusout", function () {
    $(".header-search").removeClass("active")
})

$(".btn-reset").on("click", function () {

    setTimeout(function () {
        $('.custom-old').trigger('refresh');
        $('.new-select').trigger('refresh');
    }, 0);

})

const categoryListItem = document.querySelectorAll(".category-list__item--pop-up");
const categoryBlockList = document.querySelectorAll(".category-content");


function removeActive(arr, active, data) {
    arr.forEach((el) => {
        let dataContentBlock = el.getAttribute("data-category");
        el.classList.remove(active)
        if (dataContentBlock === data) {
            el.classList.add("is-active")
        }
    })
}

if (categoryListItem) {
    categoryListItem.forEach((el) => {
        el.addEventListener("click", () => {
            event.preventDefault()
            let dataValue = el.getAttribute("data-category")

            removeActive(categoryListItem, "is-active");
            removeActive(categoryBlockList, "is-active", dataValue);
            el.classList.add("is-active")


        })
    })
}

const btnCategoryOpen = document.querySelector(".btn-category-open");
btnCategoryClose = document.querySelector(".btn-category-close");
categoryPopUp = document.querySelector(".category-pop-up");

if (btnCategoryOpen) {
    btnCategoryOpen.addEventListener("click", () => {
        categoryPopUp.classList.add("active");
    })

    btnCategoryClose.addEventListener("click", () => {
        categoryPopUp.classList.remove("active");
    })
}


const btnOpenFilter = document.querySelector(".btn-filter");
const formFilter = document.querySelector(".aside__item-form");
const popUpOverlay = document.querySelector(".popUp-overlay")
const popUpCross = document.querySelector(".popUp-cross");

if (btnOpenFilter) {
    btnOpenFilter.addEventListener("click", () => {
        formFilter.classList.add("active");
        popUpOverlay.classList.add("active");
    })
}

popUpCross.addEventListener("click", () => {
    formFilter.classList.remove("active");
    popUpOverlay.classList.remove("active");
})

let scrollForm = $('.aside-form'),
    scrollForm_sh = scrollForm.length > 0 ? scrollForm[0].scrollHeight : false,
    scrollForm_h = scrollForm.length > 0 ? scrollForm.height() : false;

const ScrollBlock = document.querySelector('.aside-form');

if (ScrollBlock) {
    const hasVerScroll = ScrollBlock.scrollHeight > ScrollBlock.clientHeight;

    if (hasVerScroll && scrollForm_sh) {

        scrollForm.scroll(function () {
            if ($(this).scrollTop() >= scrollForm_sh - scrollForm_h) {
                $(".btn-reset--scroll").addClass("active");
            } else {
                $(".btn-reset--scroll").removeClass("active");
            }
        });
    } else {
        $(".btn-reset--scroll").addClass("active");
    }

}


/*меню в шапке*/

$(function () {
    $(document).on("click", ".mobile_menu_container .parent", function (e) {
        e.preventDefault();
        let text = event.target.innerText
        const crossTemplate = `
        <span class="popUp-cross mobile_menu__cross">
                             <svg>
                <use xlink:href="assets/img/sprites/sprite.svg#cross-popup"></use>
            </svg>
                        </span>
        `

        event.target.nextElementSibling.querySelector("a").innerHTML = text + crossTemplate
        $(".mobile_menu_container .activity").removeClass("activity");
        $(this).siblings("ul").addClass("loaded").addClass("activity");
    });
    $(document).on("click", ".mobile_menu_container .back", function (e) {
        e.preventDefault();
        $(".mobile_menu_container .activity").removeClass("activity");
        $(this).parent().parent().removeClass("loaded");
        $(this).parent().parent().parent().parent().addClass("activity");
    });
    $(document).on("click", ".mobile_menu", function (e) {
        e.preventDefault();
        $(".mobile_menu_container").addClass("loaded");
        $(".mobile_menu_overlay").fadeIn();
    });
    $(document).on("click", ".mobile_menu_overlay", function (e) {
        $(".mobile_menu_container").removeClass("loaded");
        $(this).fadeOut(function () {
            $(".mobile_menu_container .loaded").removeClass("loaded");
            $(".mobile_menu_container .activity").removeClass("activity");
        });
    });
    $(document).on("click", ".mobile_menu__cross", function (e) {
        $(".mobile_menu_container").removeClass("loaded");
        $(".mobile_menu_overlay").fadeOut(function () {
            $(".mobile_menu_container .loaded").removeClass("loaded");
            $(".mobile_menu_container .activity").removeClass("activity");
        });
    });

})

$('.menu-subcategory').on('click', function () {
    event.preventDefault()
    let dropdown = $(this).parent();
    $(this).toggleClass("active");
    dropdown.find(".menu-subcategory-content").slideToggle("slow");
});

$('.sign-in--mobile.is-active').on('click', function () {
    $(".menu-authorized").addClass("active");
});

$('.menu-authorized__cross').on('click', function () {
    $(".menu-authorized").removeClass("active");
});

$('.btn-pick-up').on('click', function () {
    $(".phone-list").slideDown("slow")
});



if($(".card-description-text").length){
    let innerHeight = $(".card-description-text").height();
    let curHeight = $(".card-description-text").get(0).scrollHeight;

    $('.card-description-text-btn').on('click', function () {
        if(!this.classList.contains('active')){
            $(".card-description-text").animate({height: curHeight}, 1000);
        }else{
            $(".card-description-text").animate({height: innerHeight}, 1000);
        }
        $(".card-description-text-btn").toggleClass("active");
        $(".card-description-text").toggleClass("active");
    });
}





$('.total-rating').on('click', function () {
    $('.substrate').addClass("active")
    $('.popUp-grade').addClass("active")
});

$('.complain').on('click', function () {
    $('.substrate').addClass("active")
    $('.popUp-complain').addClass("active")
});

$('.modal-cross').on('click', function () {
    $('.substrate').removeClass("active")
    $('.popUp').removeClass("active")
});

$('.substrate').on('click', function () {
    $('.substrate').removeClass("active")
    $('.popUp').removeClass("active")
});

$('.complain-form').on('submit', function () {
    $('.popUp').removeClass("active")
    $('.popUp-successful').addClass("active")
});
