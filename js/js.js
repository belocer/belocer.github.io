var test = document.getElementById('test');
var oldScrollY = 0;
/*window.onscroll = function () {
 var scrolled = window.pageYOffset || document.documentElement.scrollTop;
 var dY = scrolled - oldScrollY;
 if (dY > 0) {
 test.style.top = "-40px";
 } else {
 test.style.top = "40px";
 }
 oldScrollY = scrolled;
 };
 window.onscroll = function () {
 var scrolled = window.pageYOffset || document.documentElement.scrollTop;
 if (scrolled > 100) {
 document.getElementById('test').removeAttribute("class");
 document.getElementById('test').setAttribute("class", "opacit");
 } else if (scrolled < 100) {
 document.getElementById('test').removeAttribute("class");
 document.getElementById('test').setAttribute("class", "inplace");
 }
 };*/
var min_menu = document.getElementById('min_menu');
var opacit = document.querySelector('.opacit');

function fn() {
    if (window.innerWidth < 859) {
        min_menu.innerHTML = '<span class="cross" style="border-radius:50%;font-size:30px;"><i class="fa fa-bars" aria-hidden="true"></i></span>';
        min_menu.style.background = 'transparent';
    } else if (window.innerWidth > 859) {
        min_menu.innerHTML = '<li><a href="#body">Контакты</a></li>\n' + '<li><a href="#work">Работы</a></li>\n' + '<li><a href="#dizain">Дизайн</a></li>\n' + '<li><a href="#sertificate">Сертификаты</a></li>\n' + '<li><a href="#task">Задачи</a></li>\n' + '<li><a href="#vk_comments">Чат</a></li>';
        min_menu.style.background = 'rgba(12, 42, 95, 0.81);';
        var link_menu = document.getElementById('min_menu');
        smooth_scroll(link_menu, scrollY);
    }

    /*
     * Скрол по меню
     */
    function smooth_scroll(link_menu, scrollys) {
        /* link_menu.addEventListener('click', function (e) {
         e.preventDefault();

         switch (e.target.textContent) {
         case"Контакты":
         var w = 0;
         break;
         case"Работы":
         w = 1100;
         break;
         case"Дизайн":
         w = 2140;
         break;
         case"Сертификаты":
         w = 2970;
         break;
         case"Задачи":
         w = 3980;
         break;
         case"Чат":
         w = 4480;
         break;
         default:
         w = 0;
         break;
         }
         if (scrollys < w) {
         var intervalID = setInterval(function () {
         scrollTo(0, scrollys += 100);
         if (scrollys >= w) {
         clearInterval(intervalID);
         }
         }, 10);
         } else if (scrollys > w) {
         intervalID = setInterval(function () {
         scrollTo(0, scrollys -= 100);
         if (scrollys <= w) {
         clearInterval(intervalID);
         }
         }, 10);
         }
         });
         }*/
    }
}

window.addEventListener("resize", fn);
window.addEventListener("load", fn);
min_menu.addEventListener('click', function () {
    var x = min_menu.dataset.menu;
    if (x === '0') {
        min_menu.innerHTML = '<li><a href="#body">Контакты</a></li><li><a href="#work">Работы</a></li><li><a href="#dizain">Дизайн</a></li><li><a href="#sertificate">Сертификаты</a></li><li><a href="#task">Задачи</a></li><li><a href="#vk_comments">Чат</a></li>';
        min_menu.dataset.menu = 1;
    } else if (x === '1') {
        if (window.innerWidth < 859) {
            min_menu.innerHTML = '<span class="cross" style="border-radius:50%;font-size:30px;"><i class="fa fa-bars" aria-hidden="true"></i></span>';
            min_menu.dataset.menu = 0;
        }
    }
});

/*
 * Хотелось бы!
 */
if (window.innerWidth > 859) {
    var head = document.querySelector('.description_head1');
    var img = document.querySelector('.description_img');
    var dream0 = document.querySelector('.dream0');
    var dream1 = document.querySelector('.dream1');
    var dream2 = document.querySelector('.dream2');
    head.addEventListener('mouseover', function () {
        img.setAttribute('class', 'description_img1');
        dream0.style.display = 'inline-block';
        dream1.style.display = 'inline-block';
        dream2.style.display = 'inline-block';
    });
    head.addEventListener('mouseout', function () {
        document.querySelector('.description_img1').setAttribute('class', 'description_img');
        dream0.style.display = 'none';
        dream1.style.display = 'none';
        dream2.style.display = 'none';
    });
    setInterval(function () {
        if (document.querySelector('.dream2 p').innerText === 'Хотелось бы написать ИИ на Javascript. И ещё написать ремастеринг игры "Command & Conquer 3: Tiberium Wars"') {
            document.querySelector('.dream2 p').innerText = 'С удовольствием пошёл бы стажёром на 1-2 месяца, за подзатыльники. Или поработал бы, с маленькой оплатой, и маленькими требованиями)';
        } else {
            document.querySelector('.dream2 p').innerText = 'Хотелось бы написать ИИ на Javascript. И ещё написать ремастеринг игры "Command & Conquer 3: Tiberium Wars"';
        }
    }, 3000);
}
if (window.innerWidth < 1200) {
    document.querySelector('.ico_back1').style.display = 'none';
    document.querySelector('.ico_back2').style.display = 'none';
    document.querySelector('.ico_back3').style.display = 'none';
    document.querySelector('.ico_back4').style.display = 'none';
    document.querySelector('.ico_back5').style.display = 'none';
    document.querySelector('.ico_back6').style.display = 'none';
    document.querySelector('.ico_back7').style.display = 'none';
    document.querySelector('.ico_back8').style.display = 'none';
    document.querySelector('.ico_back9').style.display = 'none';
    document.querySelector('.ico_back10').style.display = 'none';
    document.querySelector('.ico_back11') ? document.querySelector('.ico_back11').style.display = 'none' : '';
    document.querySelector('.ico_back12').style.display = 'none';
    document.querySelector('.ico_back13').style.display = 'none';
    document.querySelector('.ico_back14').style.display = 'none';
    document.querySelector('.ico_back15').style.display = 'none';
    document.querySelector('.ico_back16').style.display = 'none';
    document.querySelector('.ico_back17').style.display = 'none';
    document.querySelector('.ico_back18') ? document.querySelector('.ico_back18').style.display = 'none' : '';
    document.querySelector('#pluso').style.display = 'none';
}

/*
 * Меняющийся цвет бэкграунда шапки сайта
 */
/* var bg = document.querySelector('.bg');
 var r = 20;
 var g = 20;
 var b = 240;
 var timerIdr = 0;
 var timerIdg = 0;
 var timerIdb = 0;

 redStart(r, g, b);

 function redStart(r=20, g=20, b=20) {
 timerIdr = setInterval(function () {
 r++;
 b--;
 bg.style.background = "rgba(" + r + "," + g + "," + b + ", 1)";
 if (r == 240) {
 clearInterval(timerIdr);
 greenStart(r, g, b);
 }
 }, 100);
 }

 function greenStart(r, g, b) {
 timerIdg = setInterval(function () {
 g++;
 r--;
 bg.style.background = "rgba(" + r + "," + g + "," + b + ", 1)";
 if (g == 240) {
 clearInterval(timerIdg);
 blueStart(r, g, b);
 }
 }, 100);
 }

 function blueStart(r, g, b) {
 timerIdb = setInterval(function () {
 b++;
 g--;
 bg.style.background = "rgba(" + r + "," + g + "," + b + ", 1)";
 if (r <= 20 && g <= 20 && b >= 240) {
 clearInterval(timerIdb);
 timerIdCicle = setInterval(function () {
 b--;
 if (b == 20) {
 clearInterval(timerIdCicle);
 }
 }, 100);
 clearInterval(timerIdg);
 redStart(r, g, b);
 } else if (r == 20 && g == 20 && b == 20) {
 clearInterval(timerIdg);
 redStart(r, g, b);
 }
 }, 100);
 }*/

/*
 * Отрабатываю загрузку
 */


/*
 document.cookie = "userName=Vasya";
 var date = new Date(new Date().getTime() + 60 * 1000);
 document.cookie = "userName=Vasya; path=/; expires=" + date.toUTCString();

 function get_cookie ( cookie_name ){

 var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );

 if ( results ){
 return ( unescape ( results[2] ) );
 }else{
 return null;
 }
 }
 var z = get_cookie("userName");

 if (z !== "Vasya"){
 window.addEventListener('load', function () {
 $('#loaded_page').fadeOut(17000);
 $('.fa-spinner').fadeOut(17000);
 if ($('#loaded_page').style.display != 'none') {
 $('#loaded_page').style.display = 'none';
 }
 $('.fa-spinner').style.display = 'none';
 });

 */

/*    window.addEventListener('load', function () {
 $('#loaded_page').fadeOut(18000);
 $('.fa-spinner').fadeOut(18000);
 if ($('#loaded_page').style.display != 'none') {
 $('#loaded_page').style.display = 'none';
 }
 $('.fa-spinner').style.display = 'none';
 });*/

// Slick
$(document).ready(function () {
    $('.sl').slick({autoplay: true, autoplaySpeed: 5000, dots: true, arrows: false});
});

/*// Анимация приветствия
 function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

 // ——————————————————————————————————————————————————
 // TextScramble
 // ——————————————————————————————————————————————————

 var TextScramble = function () {
 function TextScramble(el) {
 _classCallCheck(this, TextScramble);

 this.el = el;
 this.chars = '!<>-_\\/[]{}—=+*^?#________';
 this.update = this.update.bind(this);
 }

 TextScramble.prototype.setText = function setText(newText) {
 var _this = this;

 var oldText = this.el.innerText;
 var length = Math.max(oldText.length, newText.length);
 var promise = new Promise(function (resolve) {
 return _this.resolve = resolve;
 });
 this.queue = [];
 for (var i = 0; i < length; i++) {
 var from = oldText[i] || '';
 var to = newText[i] || '';
 var start = Math.floor(Math.random() * 40);
 var end = start + Math.floor(Math.random() * 40);
 this.queue.push({ from: from, to: to, start: start, end: end });
 }
 cancelAnimationFrame(this.frameRequest);
 this.frame = 0;
 this.update();
 return promise;
 };

 TextScramble.prototype.update = function update() {
 var output = '';
 var complete = 0;
 for (var i = 0, n = this.queue.length; i < n; i++) {
 var _queue$i = this.queue[i];
 var from = _queue$i.from;
 var to = _queue$i.to;
 var start = _queue$i.start;
 var end = _queue$i.end;
 var char = _queue$i.char;

 if (this.frame >= end) {
 complete++;
 output += to;
 } else if (this.frame >= start) {
 if (!char || Math.random() < 0.28) {
 char = this.randomChar();
 this.queue[i].char = char;
 }
 output += '<span class="dud">' + char + '</span>';
 } else {
 output += from;
 }
 }
 this.el.innerHTML = output;
 if (complete === this.queue.length) {
 this.resolve();
 } else {
 this.frameRequest = requestAnimationFrame(this.update);
 this.frame++;
 }
 };

 TextScramble.prototype.randomChar = function randomChar() {
 return this.chars[Math.floor(Math.random() * this.chars.length)];
 };

 return TextScramble;
 }();*/

// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

/*var phrases = ['Привет,', 'ты читаешь это', 'значит\'ты нашёл меня', 'я тот кто воплатит', 'твои\'мечты в реальность', 'вот и я', 'готовь список желаний'];

 var el = document.querySelector('.text');
 var fx = new TextScramble(el);

 var counter = 0;
 var next = function next() {
 fx.setText(phrases[counter]).then(function () {
 setTimeout(next, 800);
 });
 counter = (counter + 1) % phrases.length;
 };

 next();
 */