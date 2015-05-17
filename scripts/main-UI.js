/**
 * Created by Raf on 16/05/2015.
 */
/*$("body").height($(document).height());
 //$("#menu").width($(document).width());
 $(".contentWrapper").width($(document).width());
 $(".contentWrapper").height($(document).height());*/

$(".movie").hover(
    function () {
        if($(this).hasClass("chosenMovie") == false) {
            $(this).find(".editright").show("fast");
            $(this).find(".info").hide("fast");
        }
    }, function () {
        $(this).find(".editright").hide("fast");
        $(this).find(".info").show("fast");
    }

);


$(".menuChooser").click(function(){
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
$(".movie .fa-pencil").click(function(){
    var movie = $(this).closest( ".movie");
    if(movie.hasClass("chosenMovie") == false){
        collapseOldChosenMovie();
        movie.find(".editright").hide("fast");
        movie.find(".info").show("fast");
        //$(this).closest( ".movieInformation").show();
        movie.addClass("chosenMovie",750,"easeInOutQuint");
        movie.find(".thumbs").addClass("focussedThumb", 750, "easeInOutQuint");
        movie.find(".movieText").animate({"margin-left": "150px"},750, "easeInOutQuint");
        movie.find(".movieInformation").show(750, "easeInOutQuint", function(){
            fitInfo();
        });

    }
});
$(".confirmOrCancel .fa-times").click(function () {
    collapseOldChosenMovie();
});

function collapseOldChosenMovie(){
   var movie = $(".movie.chosenMovie");
    movie.removeClass("chosenMovie",750,"easeInOutQuint");
    movie.find(".thumbs").removeClass("focussedThumb", 750, "easeInOutQuint");
    movie.find(".movieText").animate({"margin-left": "25px"},750, "easeInOutQuint");
    movie.find(".movieInformation").hide(750, "easeInOutQuint");
}
function fitInfo(){
    $(".movieInformation").width(($(".chosenMovie").width() - $(".focussedThumb").width()) -7);
}

