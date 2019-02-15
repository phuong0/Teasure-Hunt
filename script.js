$(".ingredients, .second_sentence,.heading,  #bowl, #third_step, #fourth_step, #final").hide();

$(".button").click(function(){
    $(".heading").show();
    $(".second_sentence").show();
    $(".ingredients").fadeIn();
    $("#bowl").fadeIn();
    $("#beginning").hide();
});

$("#bowl").mouseover(function(){
    $(".ingredients").fadeOut();
    $("#bowl").fadeOut();
    $(".second_sentence").hide();
    $(".heading").hide();
    $(".heading").text("Great now double click the button");
    $("#third_step").show();
});

$(".mixing_button").dblclick(function(){
    $("#third_step").hide();
    $("#fourth_step").show();
});

$(".oven").mouseenter(function(){
    $("#fourth_step").hide();
    $("#final").show();
    $("body").css("background-color", "violet");
});
