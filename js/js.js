// Меню по скролу
window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 500) {
        document.getElementById('test').removeAttribute("class");
        document.getElementById('test').setAttribute("class", "opacit");

    } else if (scrolled < 100) {
        document.getElementById('test').removeAttribute("class");
        document.getElementById('test').setAttribute("class", "inplace");

    }
};

// меню моб версия
var min_menu = document.getElementById('min_menu');
var min_menu_1 = document.getElementById('min_menu_1');
var opacit = document.querySelector('.opacit');

function fn() {
    if (window.innerWidth < 859) {
        min_menu.innerHTML = '<span class="cross" style="border-radius:50%;font-size:30px;"><i class="fa fa-bars" aria-hidden="true"></i></span>';
        min_menu.style.background = 'transparent';
    } else if (window.innerWidth > 859) {
        min_menu.innerHTML = '<li><a href="#">Контакты</a></li>\n' +
            '<li><a href="#work">Работы</a></li>\n' +
            '<li><a href="#dizain">Дизайн</a></li>\n' +
            '<li><a href="#certificate">Сертификаты</a></li>\n' +
            '<li><a href="#task">Задачи</a></li>';
        min_menu.style.background = 'rgba(232, 232, 232, 0.91)';

        /* Плавный скролл */
        var link_menu = document.getElementById('min_menu');
        smooth_scroll(link_menu, scrollY);

        function smooth_scroll(link_menu, scrollys) {

            link_menu.addEventListener('click', function (e) {
                e.preventDefault();

                switch (e.target.textContent) {
                    case "Работы":
                        var w = 500;
                        break;
                    case "Дизайн":
                        w = 1825;
                        break;
                    case "Сертификаты":
                        w = 5190;
                        break;
                    case "Задачи":
                        w = 6020;
                        break;
                    default:
                        w = 0;
                        break;
                }

                if (scrollys < w) {

                    var intervalID = setInterval(function () {

                        scrollTo(0, scrollys += 15);
                        if (scrollys >= w) {
                            clearInterval(intervalID);
                        }
                    }, 5);

                } else if (scrollys > w) {
                    intervalID = setInterval(function () {

                        scrollTo(0, scrollys -= 15);
                        if (scrollys <= w) {
                            clearInterval(intervalID);
                        }
                    }, 5);
                }
            });
        }

    }
}

window.addEventListener("resize", fn);
window.addEventListener("load", fn);

// Отрабатываю октрытие и закрытие меню
min_menu.addEventListener('click', function (e) {

    var x = min_menu.dataset.menu;
    //console.log(x);
    if (x === '0') {
        min_menu.innerHTML = '<li><a href="#">Контакты</a></li><li><a href="#work">Работы</a></li><li><a href="#dizain">Дизайн</a></li><li><a href="#certificate">Сертификаты</a></li><li><a href="#task">Задачи</a></li>';
        min_menu.dataset.menu = 1;
    } else if (x === '1') {
        if (window.innerWidth < 859) {
            min_menu.innerHTML = '<span class="cross" style="border-radius:50%;font-size:30px;"><i class="fa fa-bars" aria-hidden="true"></i></span>';
            min_menu.dataset.menu = 0;
        }
    }
});
