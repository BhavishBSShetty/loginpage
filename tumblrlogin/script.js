 $(function () {
    
    var element = $('#logoimg,#imagewrapper,#imagewrapper,#imagewrapper,#imagewrapper,#imagewrapper,#imagewrapper,#imagewrapper,#imagewrapper,#imagewrapper,#imagewrapper,#imagewrapper,#imagewrapper,#imagewrapper,#imagewrapper,#imagewrapper,#imagewrapper,#imagewrapper,#imagewrapper');
    var element1 = $('#imagewrapper1,#imagewrapper1,#imagewrapper1,#imagewrapper1,#imagewrapper1,#imagewrapper1,#imagewrapper1,#imagewrapper1,#imagewrapper1,#imagewrapper1,#imagewrapper1,#imagewrapper1,#imagewrapper1,#imagewrapper1,#imagewrapper1,#imagewrapper1,#imagewrapper1,#imagewrapper1');
    var element2 = $('#imagewrapper2,#imagewrapper2,#imagewrapper2,#imagewrapper2,#imagewrapper2,#imagewrapper2,#imagewrapper2,#imagewrapper2,#imagewrapper2,#imagewrapper2,#imagewrapper2,#imagewrapper2,#imagewrapper2,#imagewrapper2,#imagewrapper2,#imagewrapper2,#imagewrapper2,#imagewrapper2');
 
    $(window).scroll(function () {
      if ($(window).scrollTop() > 450) {
       
        element.addClass("animateMe");
        element1.addClass("animateMe1");
        element2.addClass("animateMe2");
      }
    });  
  });
  

window.sr =ScrollReveal();



sr.reveal('.animate-bottom',{
  origin:'bottom',
  duration: 2000,
  distance:'28rem',
  delay:300
});

sr.reveal('.animate-bottom2',{
  origin:'bottom',
  duration: 2000,
  distance:'28rem',
  delay:300
});
