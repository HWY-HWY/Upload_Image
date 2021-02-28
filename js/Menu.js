//functions
(function(){
    var menu = function(){
        $(document).click(function(e){
            var container = $('#offcanvas-menu,.js-kratos-nav-toggle');
            if(!container.is(e.target)&&container.has(e.target).length===0){
                if($('.nav-toggle').hasClass('toon')){
                    $('.nav-toggle').removeClass('toon');
                    $('#offcanvas-menu').css('right','-240px');
                }
            }
        });
        $('#kratos-header-section:not(.color-banner) ul>li').hover(function(){
            $(this).children('ul').slideDown(150)
        },function(){$(this).children('ul').stop(true,false).slideUp(200)});
    }
    $(function(){
        menu();
    });
}());