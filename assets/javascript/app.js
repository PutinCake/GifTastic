$(document).ready(function(){

    $(".animal").on("click", function() {
        //set search word
        var animal = $(this).data('name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";
        //ajax function
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function(response) {
                console.log(response)
                var results = response.data;
                for (var i = 0; i < results.length; i++) {

                    var animalDiv = $('<div>');

                    var p =$("<p>");
                    p.text("Rating: " + results[i].rating);

                    var animalImage = $("<img>");
                    animalImage.addClass("anImg")
                    animalImage.attr("src", results[i].images.fixed_height.url);
                    animalImage.attr("data-still", results[i].images.fixed_height_still.url)
                    animalImage.attr("data-animate", results[i].images.fixed_height.url)

                    .attr("data-state", "still");
                    animalDiv.append(p);
                    animalDiv.append(animalImage);
                    animalDiv.prependTo($("#gifs"));
                }

                $(".anImg").on("click", function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == "still") {
                    $(this).attr("src", $(this).data("animate"));
                    $(this).attr("data-state", "animate");
                    } else { 
                    $(this).attr("src", $(this).data("still"));
                    $(this).attr("data-state", "still");
                    }      
                });
            });
    });
    //add the search terms to buttons section
    var animals = [""];

    //input section button============================================================
    $("#theButton").on("click", function(){
         //set search word
        var animalButton = $("#gif-input").val();
        var newButton = $("<button>").addClass( "btn btn-info animal").attr('data-name', animalButton).html(animalButton).css({'margin': '5px'});
        
        $("#animalsbuttons").append(newButton);

        queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animalButton + "&api_key=dc6zaTOxFJmzC&limit=10";
        //ajax function
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function(response) {
                console.log(response)
                var results = response.data;
                for (var i = 0; i < results.length; i++) {

                    var animalDiv = $('<div>');

                    var p =$("<p>");
                    p.text("Rating: " + results[i].rating);

                    var animalImage = $("<img>");
                    animalImage.addClass("anImg")
                    animalImage.attr("src", results[i].images.fixed_height.url);
                    animalImage.attr("data-still", results[i].images.fixed_height_still.url)
                    animalImage.attr("data-animate", results[i].images.fixed_height.url)

                    .attr("data-state", "still");
                    animalDiv.append(p);
                    animalDiv.append(animalImage);
                    animalDiv.prependTo($("#gifs"));
                }

                $(".anImg").on("click", function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == "still") {
                    $(this).attr("src", $(this).data("animate"));
                    $(this).attr("data-state", "animate");
                    } else { 
                    $(this).attr("src", $(this).data("still"));
                    $(this).attr("data-state", "still");
                    }      
                });
            });

        $("#gif-input").val("");
        return false;
    })
  
});