/**
 * Created by Raf on 16/05/2015.
 */
/*$("body").height($(document).height());
 //$("#menu").width($(document).width());
 $(".contentWrapper").width($(document).width());
 $(".contentWrapper").height($(document).height());*/

$(".movie").hover(
    function () {
        $(this).find(".editright").show("fast");
        $(this).find(".info").hide("fast");
    }, function () {
        $(this).find(".editright").hide("fast");
        $(this).find(".info").show("fast");
    }
);
/*$( document ).ready(function() {
    $(".menuSelected").hide();
});*/

//TODO: testen slider
$(".menuChooser").click(function(){
    /* var $target = $($(this).attr('target')),
     $other = $target.siblings('.active');
     if (!$target.hasClass('active')) {
     $other.each(function (index, self) {
     var $this = $(this);
     $this.removeClass('active').animate({height: 'toggle'}, 200);
     });
     $target.addClass('active').show().css({
     left: -($target.width())
     }).animate({height: 'toggle'}, 200);
     }*/

    var $target = $(this).attr('target');
    var activeTab = $(".active");
    var activetabid = activeTab.attr('id');

    activetabid = "#"+activetabid;
    if(String(activetabid) != String($target)){
        activeTab.animate({height: 'toggle'}, 200);
        $(".menuChooser").each(function(){
            $(this).find( ".menuSelected").hide();
        });
       // activeTab.find( ".menuSelected").hide();
        activeTab.removeClass("active");

        $(this).find(".menuSelected").show();

        $($target).addClass("active");
        $($target).animate({height: 'toggle'}, 200);
    }

});
//TODO: info
$(".movie .fa-pencil").click(function(){
    alert("clicked");
    $(this).closest( ".movieInformation").show();

});

