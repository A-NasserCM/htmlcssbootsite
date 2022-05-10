$(window).scroll(function(){
    if($(window).scrollTop() > 0)  {
        $('.navbar').css('background', 'red');
    } else {
        $('.navbar').css('background', 'transparent');
    }
       
});