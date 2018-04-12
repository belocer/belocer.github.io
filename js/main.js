jQuery(document).ready(function () {
 particlesJS.load('particles-js', 'json/particles.json', function () {
 });
 });



/* Анимация для кругов */
window.addEventListener("DOMContentLoaded", startAnimate);

function startAnimate () {
    var circles = document.querySelectorAll('.circles');
    var item = document.querySelectorAll('.item');
    var numArr = [];

    function takePercentage(str) {
        // Либо так:
        //console.log(str.slice(-2));
        //return str.slice(-2);
        //Либо так:
        let s = str.split("circle-")
        //console.log(s[1]);
        return s[1];
    }

    function runNum(el, stopNum, speed) {
        let timerId = setInterval(function(){

            let s = el.lastElementChild.textContent;
            s = s.substring(0, s.length - 1);
            s++;
            el.lastElementChild.innerHTML = s + "%";
            if(el.lastElementChild.textContent == stopNum + "%"){
                clearInterval(timerId);
            }

        }, speed);
    }

    for(let i = 0; i < circles.length; i++) {
        numArr.push(takePercentage(circles[i].lastElementChild.getAttribute('class')));
    }

    runNum(item[0], numArr[0], 150);
    runNum(item[1], numArr[1], 200);
    runNum(item[2], numArr[2], 300);

    /*Анимация кругов*/
    var oneCircle = document.querySelector(".circles .circle-75");
    var twoCircle = document.querySelector(".circles .circle-47");
    var threeCircle = document.querySelector(".circles .circle-54");

    aggregate(oneCircle, 217, 18);
    aggregate(twoCircle, 132, 30);
    aggregate(threeCircle, 157, 50);

    function aggregate(el, stopNum, speed) {
        let timerId = setInterval(function(){

            let styleArr = getComputedStyle(el);
            let firstVal = styleArr.strokeDasharray.split(" ");
            firstVal[0] = firstVal[0].substring(0, firstVal[0].length - 3);
            el.style.strokeDasharray = Math.floor(firstVal[0]) + 1 + ", 282.6";

            if(el.style.strokeDasharray == stopNum + ", 282.6"){
                clearInterval(timerId);
            }

        }, speed);
    }

}

