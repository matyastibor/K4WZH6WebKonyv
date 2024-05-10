$(document).ready(function(){

    $("#load_data").click(function(){

        $("#area").html("");

        $("#area").append("<h2>Tokaj-Hegyalja Egyetem</h2>");

        
      
        $.getJSON("MT_orarendfull.json", function(data)
        {          

            $("#area").append("<b>Cím:</b>");
            $("#area").append("&nbsp;"+ data.cim["iranyitoszam"]);
            $("#area").append("&nbsp;"+ data.cim["varos"]);
            $("#area").append("&nbsp;"+ data.cim["cim"]);
            $("#area").append("<b>Telefonszám:</b><br><ul>");

            for(let i=0; i<data["telefonszam"].length;i++)
            {
                $("#area").append("<li>" + data["telefonszam"][i].tipus + "&nbsp;" + data["telefonszam"][i].szam + "</li>");
            }

            $("#area").append("</ul><br><b>THE PTI Órarend 2024 tavasz</b><br><br>");

            for(let i = 0; i<data.kurzus.length; i++)
            {
                $("#area").append("<b>Tárgy:</b>&nbsp;" + data.kurzus[i].idopont.nap + "<br>&nbsp;Tól:&nbsp;" + data.kurzus[i].idopont.tol + "<br>&nbsp;Ig:&nbsp;" + data.kurzus[i].idopont.ig + "<br><br>");
                $("#area").append("<b>Helyszín:</b>&nbsp;" + data.kurzus[i].helyszin + "<br><br>");
                $("#area").append("<b>Oktató:</b>&nbsp;" + data.kurzus[i].oktato + "<br><br>");
                $("#area").append("<b>Szak:</b>&nbsp;" + data.kurzus[i].szak + "<br><br>");
                $("#area").append("<b>Típus:</b>&nbsp;" + data.kurzus[i].tipus + "<br><br>");
                $("#area").append("<hr>");
            }        

        });

    });

});