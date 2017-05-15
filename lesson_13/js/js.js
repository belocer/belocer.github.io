window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if( scrolled > 100 ) {
	document.getElementById('test').removeAttribute("class");
	document.getElementById('test').setAttribute("class", "menu-fixed");
  } else if ( scrolled < 100) {
	document.getElementById('test').removeAttribute("class");
	document.getElementById('test').setAttribute("class", "one-screen__menu");
  }
}