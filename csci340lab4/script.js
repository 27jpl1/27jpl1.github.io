$(document).ready(function() {
    $('#random-clicker').click(function() {
      $.ajax({
        dataType: "json",
        url: "https://random-d.uk/api/random",
        success: function(results) {
          console.log(results["url"]);
          if (results["url"].endsWith(".mp4")) {
            $('#dog').attr("src", "images/blank.png");
          } else {
            $('#dog').attr("src", results["url"]);
          }
        },
        error: function(xhr,status,error) {
          console.log(error);
        }
      });
    });

    $('#advice-clicker').click(function(){
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
    })
  }); 