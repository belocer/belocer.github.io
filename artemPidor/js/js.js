'use strict';
// Скрипт для оранжевой цифры в круге
function fun(t) {
    t.previousElementSibling.style.background = "#FE5C2E";
}
function fun2(t) {
    t.previousElementSibling.style.background = "";
}
window.onload = function () {

// Скрипт DropDown Stage Этапы работы
    var stage = document.querySelectorAll(".stage");
    var steps1 = document.querySelector(".steps1");
    var steps2 = document.querySelector(".steps2");
    var steps3 = document.querySelector(".steps3");
    var steps4 = document.querySelector(".steps4");
    var steps5 = document.querySelector(".steps5");
    var arr = [steps1, steps2, steps3, steps4, steps5];

/*function back_None(event){
    for (var i = 0; i < stage.length; i++) {
        console.log(stage[i]);        
    }
    console.log(event.target);
    console.log(event.currentTarget);
}*/

    for (var i = 0; i < stage.length; i++) {

        stage[i].addEventListener("click", function (e) {
            for (var i = 0; i < arr.length; i++) {
                arr[i].style.display = "none";                
            }
           // console.log(stage);
            document.getElementById("back_dark").setAttribute("id", "");
            // console.log(e.currentTarget.firstElementChild);
            var s = e.currentTarget.getAttribute('data-stage');
            if (s == 1) {
                document.querySelector(".steps1").style.display = "inline-block";
                document.querySelector(".steps1").style.background = "#fff";
                e.currentTarget.firstElementChild.setAttribute("id", "back_dark");
                //console.log(e.currentTarget.parentNode);
                //console.log(e.currentTarget.parentNode.firstElementChild);
                e.currentTarget.firstElementChild.parentNode.style.background = '#fff';
            }
            if (s == 2) {
                document.querySelector(".steps2").style.display = "inline-block";
                document.querySelector(".steps2").style.background = "#fff";
                e.currentTarget.firstElementChild.setAttribute("id", "back_dark");
                e.currentTarget.firstElementChild.parentNode.style.background = '#fff';
            }
            if (s == 3) {
                document.querySelector(".steps3").style.display = "inline-block";
                document.querySelector(".steps3").style.background = "#fff";
                e.currentTarget.firstElementChild.setAttribute("id", "back_dark");
                e.currentTarget.firstElementChild.parentNode.style.background = '#fff';
            }
            if (s == 4) {
                document.querySelector(".steps4").style.display = "inline-block";
                document.querySelector(".steps4").style.background = "#fff";
                e.currentTarget.firstElementChild.setAttribute("id", "back_dark");
                e.currentTarget.firstElementChild.parentNode.style.background = '#fff';
            }
            if (s == 5) {
                document.querySelector(".steps5").style.display = "inline-block";
                document.querySelector(".steps5").style.background = "#fff";
                e.currentTarget.firstElementChild.setAttribute("id", "back_dark");
                e.currentTarget.firstElementChild.parentNode.style.background = '#fff';
            }
        });
    }

    // Скрипт DropDown
    var btn = document.querySelectorAll(".dropDown li > a");

    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function (e) {
            e.preventDefault();
            //console.log(e.target.getAttribute('data-val'));
            for (var i = 0; i < btn.length; i++) {
                btn[i].setAttribute("id", "");
            }

            var erp = document.getElementById("ERP");
            var crm = document.getElementById("CRM");
            var bi = document.getElementById("BI");
            var csm = document.getElementById("CSM");
            var wms = document.getElementById("WMS");
            var it = document.getElementById("IT");

            var arr = [erp, crm, bi, csm, wms, it];

            for (var i = 0; i < arr.length; i++) {
                arr[i].style.display = "none";
            }

            if (e.target.getAttribute('data-val') == "ERP") {
                document.getElementById("ERP").style.display = "inline-block";
            }
            if (e.target.getAttribute('data-val') == "CRM") {
                document.getElementById("CRM").style.display = "inline-block";
            }
            if (e.target.getAttribute('data-val') == "BI") {
                document.getElementById("BI").style.display = "inline-block";
            }
            if (e.target.getAttribute('data-val') == "CSM") {
                document.getElementById("CSM").style.display = "inline-block";
            }
            if (e.target.getAttribute('data-val') == "WMS") {
                document.getElementById("WMS").style.display = "inline-block";
            }
            if (e.target.getAttribute('data-val') == "IT") {
                document.getElementById("IT").style.display = "inline-block";
            }
            e.target.setAttribute("id", "btn_Active");
        });
    }


        // Скрипт для оранжевой галочки
        function fn(e) {
            for (var s = 0; s < grayScale.length; s++) {
                grayScale[s].firstElementChild.setAttribute('id', '');
                grayScale[s].firstElementChild.firstElementChild.style.color = '';
            }
            e.target.firstElementChild.setAttribute("id", "active_list");
            e.target.firstElementChild.firstElementChild.style.color = "#FE5C2E";
        }

        var grayScale = document.querySelectorAll('.grayScale');
        //console.log(grayScale);
        for (var i = 0; i < grayScale.length; i++) {
            if (grayScale[i]) {
                grayScale[i].addEventListener('mouseover', fn);
            }
        }

    // Обрабатываю клик по search 
    var search = document.getElementById("search");
    search.addEventListener("click", function () {

        if (search.previousElementSibling.getAttribute("type") == "hidden") {
            search.previousElementSibling.setAttribute("type", "input");
        } else if (search.previousElementSibling.getAttribute("type") == "input") {
            search.previousElementSibling.setAttribute("type", "hidden");
        }
    });
    var search1 = document.getElementById("search1");
    search1.addEventListener("click", function () {

        if (search1.previousElementSibling.getAttribute("type") == "hidden") {
            search1.previousElementSibling.setAttribute("type", "input");
            if (window.innerWidth < 500) {
                document.getElementById("search1").style.top = "128px";
            }
        } else if (search1.previousElementSibling.getAttribute("type") == "input") {
            search1.previousElementSibling.setAttribute("type", "hidden");
            if (window.innerWidth < 500) {
                document.getElementById("search1").style.top = "";
            }
        }
    });

    // Обрабатываю потерю фокуса из инпута
    var bl = document.getElementById("input_search");
    bl.addEventListener("blur", function () {
        bl.setAttribute("type", "hidden");
    });

    // Обработка движения стрелки
    var btn_arrow = document.getElementById("btn_arrow");
    btn_arrow.addEventListener("mouseover", function () {
        btn_arrow.firstElementChild.style.left = "220px";
    });
    btn_arrow.addEventListener("mouseout", function () {
        btn_arrow.firstElementChild.style.left = "185px";
    });
    var btn_arrow1 = document.getElementById("btn_arrow1");
    btn_arrow1.addEventListener("mouseover", function () {
        btn_arrow1.firstElementChild.style.left = "220px";
    });
    btn_arrow1.addEventListener("mouseout", function () {
        btn_arrow1.firstElementChild.style.left = "185px";
    });
};

/*Определение ширины окна*/
var ico_menu = document.querySelector('.icon-align-left');  // Иконка менюшки
var menu_mob = document.querySelector('.menu_mob');         // Мобильная менюшка
var menu = document.querySelector('.menu');                 // Обычная менюшка
var add_cross = document.querySelector('add_cross');        // Перед каким элементом добавляю крестик

function fn() {
    if (window.innerWidth < 500) {
        document.getElementById("search1").style.display = "inline-block";
        ico_menu.style.display = "inline-block";
        menu.style.display = 'none';
        menu_mob.style.display = 'none';
    } else if (window.innerWidth > 500) {
        document.getElementById("search1").style.display = "none";
        menu_mob.style.display = 'none';
        ico_menu.style.display = 'none';
        //if(ico_close){ico_close.style.display = 'none';}
        menu.style.display = 'inline-block';
    }
}
window.addEventListener("resize", fn);
window.addEventListener("load", fn);

// Отрабатываю октрытие и закрытие меню
ico_menu.addEventListener('click', function (e) {
    menu_mob.style.display = 'inline-block';
    ico_menu.style.display = 'none';

    var cross = document.createElement('i');
    cross.classList.add('menu_ico');
    cross.classList.add('fa');
    cross.classList.add('fa-close');
    menu_mob.insertBefore(cross, add_cross);

});

menu_mob.addEventListener('click', function (e) {
    var ico_close = document.querySelector('.fa-close');        // Иконка крестика
    ico_close.style.display = 'none';
    menu_mob.style.display = 'none';
    ico_menu.style.display = 'inline-block';
}, true);

/*Скрипт Выпадашки для "Решения результаты свернуть развернуть"*/
var collapse = document.querySelectorAll('.collapse');
function act(event) {
    event.preventDefault();
    event.target.parentNode.style.display = "none";
    event.target.parentNode.parentNode.style.height = '242px';
    event.target.parentNode.previousElementSibling.style.display = "block";
}
function act1(event) {
    event.preventDefault();
    event.target.nextElementSibling.style.display = "block";
    event.target.parentNode.style.height = '360px';
    event.target.style.display = 'none';
    event.target.nextElementSibling.lastElementChild.style.display = "block";
}

/*Этапы работ мобильная версия*/
if (window.innerWidth < 500) {
    var stage1 = document.getElementById('stage1');
    var stage2 = document.getElementById('stage2');
    var stage3 = document.getElementById('stage3');
    var stage4 = document.getElementById('stage4');
    var stage5 = document.getElementById('stage5');

    stage1.addEventListener('click', function (e) {
        var steps1 = document.getElementById('steps1');
        document.getElementById('stage1_result').appendChild(steps1);
    });

    stage2.addEventListener('click', function (e) {
        var steps2 = document.getElementById('steps2');
        document.getElementById('stage2_result').appendChild(steps2);
    });

    stage3.addEventListener('click', function (e) {
        var steps3 = document.getElementById('steps3');
        document.getElementById('stage3_result').appendChild(steps3);
    });

    stage4.addEventListener('click', function (e) {
        var steps4 = document.getElementById('steps4');
        document.getElementById('stage4_result').appendChild(steps4);
    });

    stage5.addEventListener('click', function (e) {
        var steps5 = document.getElementById('steps5');
        document.getElementById('stage5_result').appendChild(steps5);
    });
}

/*Убираю классы row при ширине экрана меньше 1200 px*/

window.addEventListener("resize", function (){
    if (window.innerWidth < 1200) {

        document.getElementById('del_row1').setAttribute('class','');
        document.getElementById('del_row2').setAttribute('class','');
        document.getElementById('del_row3').setAttribute('class','');

    } else if (window.innerWidth > 1200) {
        document.getElementById('del_row1').setAttribute('class','row');
        document.getElementById('del_row2').setAttribute('class','row');
        document.getElementById('del_row3').setAttribute('class','row');
    }
});
