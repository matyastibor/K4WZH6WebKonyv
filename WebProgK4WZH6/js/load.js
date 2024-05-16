$(document).ready(function(){

    $("#area").html("");     
      
    $.getJSON("elerhetosegek.json", function(data)
    {          

        $("#area").append("<b>Cím:</b>");
        $("#area").append("&nbsp;"+ data.cim["iranyitoszam"]);
        $("#area").append("&nbsp;"+ data.cim["varos"]);
        $("#area").append("&nbsp;"+ data.cim["utca"]+"<br><br>");
        $("#area").append("<b>Telefonszám:</b><br><ul>");

        for(let i=0; i<data["telefonszam"].length;i++)
        {
            $("#area").append("<li>" + data["telefonszam"][i].tipus + "&nbsp;" + data["telefonszam"][i].szam + "</li>");
        } 
        
        $("#area").append("</ul>");

    });

    
    $("#nevIpt").blur(function(){
        if($(this).val()=="") $(this).css({borderColor:"red"});
        else $(this).css({borderColor:"green"});
    });

    $("#emailIpt").blur(function(){
        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        if (testEmail.test($(this).val()) && $(this).val()!="")  $(this).css({borderColor:"green"});
        else $(this).css({borderColor:"red"});
    });
        
    $("#telefonIpt").blur(function(){
        if($.isNumeric($(this).val()) && $(this).val()!="")  $(this).css({borderColor:"green"});
        else $(this).css({borderColor:"red"});
    });
    
    $("#uzenetIpt").blur(function(){
        if($(this).val()=="") $(this).css({borderColor:"red"});
        else $(this).css({borderColor:"green"});
    });

    $("#termekIpt").blur(function(){
        if($(this).val()=="") $(this).css({borderColor:"red"});
        else $(this).css({borderColor:"green"});
    }); 
    
    $("#datumIpt").blur(function(){
        if($(this).val()=="") $(this).css({borderColor:"red"});
        else $(this).css({borderColor:"green"});
    });    


});
