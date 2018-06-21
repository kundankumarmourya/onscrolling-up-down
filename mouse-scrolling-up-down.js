
var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop;
   if (st > lastScrollTop || st == 0) //or window top zero 
   {
        // downscroll code
     $(".main-menu").removeClass("show-menu");
       $(".main-menu").addClass("hide-menu");
      
   } else {
       // Upscroll code
       $(".main-menu").addClass("show-menu");
        $(".main-menu").removeClass("hide-menu");
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

