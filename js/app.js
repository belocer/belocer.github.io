"use strict";var test=document.getElementById("test"),oldScrollY=0;window.onscroll=function(){var e=window.pageYOffset||document.documentElement.scrollTop,t=e-oldScrollY;test.style.top=0<t?"-40px":"40px",oldScrollY=e},window.onscroll=function(){var e=window.pageYOffset||document.documentElement.scrollTop;100<e?(document.getElementById("test").removeAttribute("class"),document.getElementById("test").setAttribute("class","opacit")):e<100&&(document.getElementById("test").removeAttribute("class"),document.getElementById("test").setAttribute("class","inplace"))};var min_menu=document.getElementById("min_menu"),opacit=document.querySelector(".opacit");function fn(){if(window.innerWidth<859)min_menu.innerHTML='<span class="cross" style="border-radius:50%;font-size:30px;"><i class="fa fa-bars" aria-hidden="true"></i></span>',min_menu.style.background="transparent";else if(859<window.innerWidth){min_menu.innerHTML='<li><a href="#body">Контакты</a></li>\n<li><a href="#work">Работы</a></li>\n<li><a href="#dizain">Дизайн</a></li>\n<li><a href="#sertificate">Сертификаты</a></li>\n<li><a href="#task">Задачи</a></li>\n<li><a href="#vk_comments">Чат</a></li>',min_menu.style.background="rgba(12, 42, 95, 0.81);";document.getElementById("min_menu");scrollY}}if(window.addEventListener("resize",fn),window.addEventListener("load",fn),min_menu.addEventListener("click",function(){var e=min_menu.dataset.menu;"0"===e?(min_menu.innerHTML='<li><a href="#body">Контакты</a></li><li><a href="#work">Работы</a></li><li><a href="#dizain">Дизайн</a></li><li><a href="#sertificate">Сертификаты</a></li><li><a href="#task">Задачи</a></li><li><a href="#vk_comments">Чат</a></li>',min_menu.dataset.menu=1):"1"===e&&window.innerWidth<859&&(min_menu.innerHTML='<span class="cross" style="border-radius:50%;font-size:30px;"><i class="fa fa-bars" aria-hidden="true"></i></span>',min_menu.dataset.menu=0)}),859<window.innerWidth){var head=document.querySelector(".description_head1"),img=document.querySelector(".description_img"),dream0=document.querySelector(".dream0"),dream1=document.querySelector(".dream1"),dream2=document.querySelector(".dream2");head.addEventListener("mouseover",function(){img.setAttribute("class","description_img1"),dream0.style.display="inline-block",dream1.style.display="inline-block",dream2.style.display="inline-block"}),head.addEventListener("mouseout",function(){document.querySelector(".description_img1").setAttribute("class","description_img"),dream0.style.display="none",dream1.style.display="none",dream2.style.display="none"}),setInterval(function(){'Хотелось бы написать ИИ на Javascript. И ещё написать ремастеринг игры "Command & Conquer 3: Tiberium Wars"'===document.querySelector(".dream2 p").innerText?document.querySelector(".dream2 p").innerText="С удовольствием пошёл бы стажёром на 1-2 месяца, за подзатыльники. Или поработал бы, с маленькой оплатой, и маленькими требованиями)":document.querySelector(".dream2 p").innerText='Хотелось бы написать ИИ на Javascript. И ещё написать ремастеринг игры "Command & Conquer 3: Tiberium Wars"'},3e3)}window.innerWidth<1200&&(document.querySelector(".ico_back1").style.display="none",document.querySelector(".ico_back2").style.display="none",document.querySelector(".ico_back3").style.display="none",document.querySelector(".ico_back4").style.display="none",document.querySelector(".ico_back5").style.display="none",document.querySelector(".ico_back6").style.display="none",document.querySelector(".ico_back7").style.display="none",document.querySelector(".ico_back8").style.display="none",document.querySelector(".ico_back9").style.display="none",document.querySelector(".ico_back10").style.display="none",document.querySelector(".ico_back11")&&(document.querySelector(".ico_back11").style.display="none"),document.querySelector(".ico_back12").style.display="none",document.querySelector(".ico_back13").style.display="none",document.querySelector(".ico_back14").style.display="none",document.querySelector(".ico_back15").style.display="none",document.querySelector(".ico_back16").style.display="none",document.querySelector(".ico_back17").style.display="none",document.querySelector(".ico_back18")&&(document.querySelector(".ico_back18").style.display="none"),document.querySelector("#pluso").style.display="none");var bg=document.querySelector(".bg"),r=20,g=20,b=240,timerIdr=0,timerIdg=0,timerIdb=0;function redStart(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:20,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:20,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:20;timerIdr=setInterval(function(){e++,n--,bg.style.background="rgba("+e+","+t+","+n+", 1)",240==e&&(clearInterval(timerIdr),greenStart(e,t,n))},100)}function greenStart(e,t,n){timerIdg=setInterval(function(){t++,e--,bg.style.background="rgba("+e+","+t+","+n+", 1)",240==t&&(clearInterval(timerIdg),blueStart(e,t,n))},100)}function blueStart(e,t,n){timerIdb=setInterval(function(){n++,t--,bg.style.background="rgba("+e+","+t+","+n+", 1)",e<=20&&t<=20&&240<=n?(clearInterval(timerIdb),timerIdCicle=setInterval(function(){20==--n&&clearInterval(timerIdCicle)},100),clearInterval(timerIdg),redStart(e,t,n)):20==e&&20==t&&20==n&&(clearInterval(timerIdg),redStart(e,t,n))},100)}function startAnimate(){var e=document.querySelectorAll(".circles"),t=document.querySelectorAll(".item"),n=[];function r(t,n,e,r,i,l){var o=setInterval(function(){var e=t.lastElementChild.textContent;e=e.substring(0,e.length-1),e++,t.lastElementChild.innerHTML=e+"%",t.lastElementChild.textContent==n+"%"&&clearInterval(o)},e),a=setInterval(function(){var e=getComputedStyle(r).strokeDasharray.split(" ");e[0]=e[0].substring(0,e[0].length-3),r.style.strokeDasharray=Math.floor(e[0])+1+", 282.6",r.style.strokeDasharray==i+", 282.6"&&clearInterval(a)},l)}for(var i=0;i<e.length;i++)n.push(e[i].lastElementChild.getAttribute("class").split("circle-")[1]);var l=document.querySelector(".circles .circle-75"),o=document.querySelector(".circles .circle-47"),a=document.querySelector(".circles .circle-54");r(t[0],n[0],300,l,217,18),r(t[1],n[1],500,o,132,30),r(t[2],n[2],700,a,157,50)}redStart(r,g,b),$(document).ready(function(){$(".sl").slick({autoplay:!0,autoplaySpeed:5e3,dots:!0,arrows:!1})}),jQuery(document).ready(function(){particlesJS.load("particles-js","json/particles.json",function(){})}),window.addEventListener("DOMContentLoaded",startAnimate);