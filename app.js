// () 


	


const navClick = () => {
	const menu = document.querySelector(".menu");
	const xmenu = document.querySelector(".xmenu");
	const nav = document.querySelector(".nav");
	const content = document.querySelector(".content");
	const redauto = document.getElementById("redauto")
	menu.addEventListener(('click'), () => {
		nav.classList.remove("nav-style2");
		nav.classList.add("nav-style1");
	
		xmenu.classList.toggle("xmenu-style");
		menu.style.display = "none";
		content.classList.remove("nav-style2");
		content.classList.add("nav-style1");
		redauto.src = "images/redauto.png";
	
	});
	  xmenu.addEventListener(('click'), () => {
		nav.classList.remove("nav-style1");
		nav.classList.add("nav-style2");
	
		xmenu.classList.toggle("xmenu-style");
		menu.style.display = "inline-block";
		content.classList.remove("nav-style1");
		content.classList.add("nav-style2");
		redauto.src = "images/auto.png";
	
	});
};
navClick();


	$(document).ready(function(){
  $('.slider').slick({
	  infinite: true,
	  speed: 500,
	  cssEase: 'linear',
	  type: true,
	  default: true,
	  prevArrow: $('.right-arrow'),
	  nextArrow: $('.left-arrow')
  
  });
});

// const onScroll = () => {
// 	const text = document.querySelector(".main__container--text");
// 	document.addEventListener('scroll', ()=>  {
// 	text.classList.add = ("appear");


// });
// }
// onScroll(); 










