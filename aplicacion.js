$(document).ready(function(){
    var T1 = $("#titulo1");

    T1.mouseenter(function(){
        var idTit1 = $(this).attr("id");
        $("#titulo1").text(idTit1);
        $(this).fadeTo("fast", 0);
    });

    T1.mouseout(function(){
        $("#titulo1").text("Este sería el título");
        $(this).fadeTo("fast", 1);
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