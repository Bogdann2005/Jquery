var options = new Typed(".typer", {
    strings: [" Officemates", "Friends", "Family"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})
$(function() {
    $(window).scroll(function() {
        $("nav").toggleClass("scroled", $(this).scrollTop() > 50);
        $(".scrollup").toggleClass("scrollupp", $(this).scrollTop() > 550);

    });

    $('#blogCarousel').carousel({
        interval: 500
    });
    $(".listitem li").click(function() {
        $(this).addClass("actived1").siblings().removeClass("actived1");
        $('.listitem_1').hide();
        $($(this).data('value')).css({ 'display': 'flex' });
    })

    $('#blogCarousel').carousel({
        interval: 500
    });

    $(window).scroll(function() {
        $("section").each(function() {

            var x = $(window).scrollTop() + $(window).height();
            var y = $(this).offset().top + $(this).height() / 2;

            if (x >= y) {
                $(this).addClass("activee");
            }

        })




    })
    // $(".listelement").mouseenter(function(){
    //     $(this).css("bacground-color","#bd6d4b")
    // })
$(".hover1").click(function(){
    $(".modal").modal('show');
})
$(".hover3").click(function(){
    $(".modal2").modal('show');
})
$(".hover4").click(function(){
    $(".modal3").modal('show');
})
$(".hover5").click(function(){
    $(".modal4").modal('show');
})
$(".hover6").click(function(){
    $(".modal5").modal('show');
})
$(".hover7").click(function(){
    $(".modal6").modal('show');
})
$(".hover8").click(function(){
    $(".modal7").modal('show');
})
$(".hover9").click(function(){
    $(".modal8").modal('show');
})
$(".hover10").click(function(){
    $(".modal9").modal('show');
})
})
