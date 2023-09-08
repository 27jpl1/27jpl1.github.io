$(document).ready(function() {
    $('#clicker').click(function() {
      $.ajax({
        dataType: "json",
        url: "https://randomfox.ca/floof/",
        success: function(results) {
          console.log(results["image"]);
          if (results["image"].endsWith(".mp4")) {
            $('#dog').attr("src", "images/blank.png");
          } else {
            $('#dog').attr("src", results["image"]);
          }
        },
        error: function(xhr,status,error) {
          console.log(error);
        }
      });
    });
  });