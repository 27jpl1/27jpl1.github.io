$(document).ready(function() {
  var num_foxes = 0;
  var num_advice = 0;
    $('#random-clicker').click(function() {
      if(num_foxes == num_advice){
        num_foxes += 1;
        $.ajax({
          dataType: "json",
          url: "https://randomfox.ca/floof/",
          success: function(results) {
            console.log(results["image"]);
            if (results["image"].endsWith(".mp4")) {
              $('#fox').attr("src", "Images/download.jpg");
            } else {
              $('#fox').attr("src", results["image"]);
            }
          },
          error: function(xhr,status,error) {
            console.log(error);
          }
        });
      }
      else if(num_foxes > num_advice){
        $("#error-message").text("You cannot skip over the fox without it giving you it's adivce.")
      }
    });

    $('#advice-clicker').click(function(){
      if(num_foxes == num_advice){
        $("#error-message").text("You must meet a new fox before receiving new advice")
      }
      else{
        num_advice += 1;
        $.ajax({
          dataType: "json",
          url: "https://www.boredapi.com/api/activity",
          success: function(results){
            console.log(results["activity"]);
            $("#advice").text(results["activity"])
          },
          error: function(xhr,status,error) {
            console.log(error);
          }
        })
      }
    })
  }); 