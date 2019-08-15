var logo,navwin,dd_icon,searchbox,search_icon;
function _(x){return document.getElementById(x);}
function togglenav(event){
	if(searchbox.offsetLeft == 0){
		searchbox.style.left = -searchbox.offsetWidth+"px";
		search_icon.style.backgroundColor = "transparent";
	}
	if(navwin.offsetLeft < 0){
		navwin.style.left = "0px";
		dd_icon.style.backgroundColor = "#BBB";
	} else {
		navwin.style.left = -navwin.offsetWidth+"px";
		dd_icon.style.backgroundColor = "transparent";
	}
}
function togglesearch(event){
	if(navwin.offsetLeft == 0){
		navwin.style.left = -navwin.offsetWidth+"px";
		dd_icon.style.backgroundColor = "transparent";
	}
	if(searchbox.offsetLeft < 0){
		searchbox.style.left = "0px";
		search_icon.style.backgroundColor = "#BBB";
		_("q").focus();
	} else {
		searchbox.style.left = -searchbox.offsetWidth+"px";
		search_icon.style.backgroundColor = "transparent";
	}
}
var scrollY = 0, currentY = 0, distance = 100, speed = 27, scrollanimator;
function resetScroller(){
	currentY = window.pageYOffset;
	scrollanimator = setTimeout(resetScroller, speed);
	if(currentY > 0){
		scrollY = currentY-distance;
		window.scroll(0, scrollY);
	} else {
		clearTimeout(scrollanimator);
	}
}
function scrollhandler(){
	if(window.pageYOffset > 700){
	    _("scrolltopbtn").style.display = "block";	
	} else {
		_("scrolltopbtn").style.display = "none";
	}
}
window.addEventListener("load", function(){
	logo = _("logo");
	navwin = _("navwindow");
	dd_icon = _("dd_icon");
	searchbox = _("searchbox");
	search_icon = _("search_icon");
	logo.addEventListener("click",function(){window.location='https://www.developphp.com';});
	cp_icon.addEventListener("click",togglenav);
	search_icon.addEventListener("click",togglesearch);
});
window.addEventListener("scroll", scrollhandler);