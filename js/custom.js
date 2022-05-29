// JavaScript Document
$(document).ready(function(){
	$(".navbar-toggle").click(function(){
		$(".menu").slideToggle()
	})
})

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//-------------========================
$('#sp').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
$('#banner').owlCarousel({
    loop:true,
	items:1,   
    nav:true,
   
})
$('#skill-chay').owlCarousel({
    loop:true,
    margin:30,
    nav:true,

    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})