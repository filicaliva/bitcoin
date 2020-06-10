let owl = $('.owl-carousel');
owl.owlCarousel({
    items: 6,
    loop:true,
    autoplay:true,
    autoplayTimeout: 2000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:3,
        },
        400:{
            items: 4,
        },
        600:{
            items: 5,
        },
        1000:{
            items:6,          
        }
    }
});

$(window).bind('scroll', function() {
    var currentTop = $(window).scrollTop();
    var elems = $('.scrollspy');
    elems.each(function(index){
      var elemTop 	= $(this).offset().top;
      var elemBottom 	= elemTop + $(this).height();
      if(currentTop >= elemTop && currentTop <= elemBottom){
        var id 		= $(this).attr('id');
        var navElem = $('a[href="#' + id+ '"]');
    navElem.parent().addClass('active').siblings().removeClass( 'active' );
      }
    })
}); 

document.getElementById('on').onclick = function() {
    document.getElementById('login').classList.add('show');
  }
  
  document.getElementById('login').onclick = function() {
    document.getElementById('login').classList.remove('show');
  }
  
  document.getElementById('login-container').onclick = function() {
    event.stopPropagation();
  }

document.getElementById('og').onclick = function() {
    document.getElementById('registration').classList.add('show');
}
  document.getElementById('registration').onclick = function() {
    document.getElementById('registration').classList.remove('show');
  }

  document.getElementById('video').onmouseover = function() {
    document.getElementById('main-cat').classList.add('main-cat');
}
  document.getElementById('video').onmouseout = function() {
    document.getElementById('main-cat').classList.remove('main-cat');
    document.getElementById('main-cat').classList.add('main-cat-down');
  }

  document.getElementById('register-container').onclick = function() {
    event.stopPropagation();
  }
  
  var player = new Playerjs({id:"player", file:"https://www.youtube.com/watch?v=6xOhg5Efusk"});

window.addEventListener("resize", function() {
  window.location.reload();
})