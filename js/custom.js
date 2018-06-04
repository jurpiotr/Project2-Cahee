var mark = document.getElementsByClassName("tooltip-mark");

var i;

for (i = 0; i < mark.length; i++) {
  mark[i].onclick = function(event) {
    event.preventDefault();

    var parent = this.parentElement;

    if (parent.classList.contains("show")) {
      parent.classList.remove("show");
    } else {
      parent.classList.add("show");
    }
  };
}

//SCROLL ANIMATION
$(window).on("scroll", function() {
  var scrollTop = $(window).scrollTop();

  if (scrollTop > 90) {
    $("#navigation").addClass("scroll-below");
  } else {
    $("#navigation").removeClass("top0");
  }

});

$(window).scroll(function() {
  var height = $(window).scrollTop();

  var menuList = menu.classList;

  if (height > 30) {
    //console.log(menu);

    if (!menuList.contains("scroll")) {
      menuList.add("scroll");

      //console.log(menuList);
    }
  } else if (height <= 30) {
    if (menuList.contains("scroll")) {
      menuList.remove("scroll");

      //console.log(menuList);
    }
  }
});


$('a[href^="#"]').on('click', function(event) {

     var target = $(this.getAttribute('href'));
 
     if( target.length ) {
 
         event.preventDefault();
 
         $('html, body').stop().animate({
 
             scrollTop: target.offset().top -0
 
         }, 1000);
 
     }
 
 });

 $('a[href*=“#”]:not([href=“#”])').click(function() {

     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    
       var target = $(this.hash);
    
       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    
       if (target.length) {
    
         $('html, body').animate({
    
           scrollTop: target.offset().top
    
         }, 1000);
    
         return false;
    
       }
    
     }
    
    });