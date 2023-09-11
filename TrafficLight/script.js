$(document).ready(function() {
    var num = 0;
    $('#light-changer').click(function() {
        if(num % 3 == 2){
            $("#red").attr("fill" , "red")
            $("#green").attr("fill" , "white")
            $("#yellow").attr("fill" , "white")
            num += 1;
        }
        else if(num % 3 == 1){
            $("#yellow").attr("fill" , "yellow")
            $("#green").attr("fill" , "white")
            $("#red").attr("fill" , "white")
            num += 1;
        }
        else if(num % 3 == 0){
            $("#green").attr("fill" , "green")
            $("#yellow").attr("fill" , "white")
            $("#red").attr("fill" , "white")
            num += 1;
        }
    })
});