jQuery(document).ready(function($) {
    //sidenav
    $('.sidenav').sidenav();
    //top link
    $('.top-wrapper a').click(function(e){
        e.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000)
    }); 
    //shop top link
    var heightHome = $('.proposition-title').height();
    $(window).scroll(function(){
        var scrollTop = getCurrentScroll();
        if(scrollTop > heightHome) {
            $('.top-wrapper').fadeIn();
        }
        else {
            $('.top-wrapper').fadeOut();
        }
    });
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
        }
}); //ready