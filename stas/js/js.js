$(document).ready(function(){

    // Плавный scroll
    $("#desktop_scroll").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 500 мс
        $('body,html').animate({scrollTop: top}, 500);


    });

    $("#scroll").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 500 мс
        $('body,html').animate({scrollTop: top}, 500);

    });

    $(window).scroll(function() {
            var scrollVal = window.scrollY;
            if (scrollVal >= 100){
                $('.desktop__menu').css({'background': '#232323'});
            }
            else {
                $('.desktop__menu').css({'background': 'transparent'});
            }
        }
    );

    var link = $('.menu-link');
    var link_active = $('.menu-link_active');
    var menu = $('.menu');
    var nav_link = $('.menu a');

    link.click(function () {
        link.toggleClass('menu-link_active');
        menu.toggleClass('menu_active');

    });
// Меню по скролу
    var scroll100 = document.querySelector('.page-header__menu ul');
    window.addEventListener('scroll', function () {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollY >= 100) {
            scroll100.setAttribute('id', 'scroll100');
        }

        if (scrollY < 100) {
            scroll100.removeAttribute('id');
        }
    });

});