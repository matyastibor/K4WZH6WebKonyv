$(document).ready(function(){

    $(".bovebbenBtn").click(function(){
        var id = $(this).attr("rel");
        $("#leiras"+id).toggle("slow");
    });    

});
