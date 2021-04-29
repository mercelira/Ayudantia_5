$(document).ready(function(){
    
    $("button").click(function(){
        $("#titulo1").toggle();
    });

    var T2 = $("#titulo2");

    T2.click(function(){
        var idTit2 = $(this).attr("id");
        $("#titulo2").text(idTit2);
        $(this).text("Nuevo Título 2");
    });

    var D4 = $("#div4");

    D4.mouseenter(function(){
        $("#div4").css("background", "red");
    });

    D4.mouseout(function(){
        $("#div4").css("background", "white");
    })});
