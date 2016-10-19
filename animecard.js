(function() {
    cardForm = {
        name: "",
        top5: [1, 2, 3, 4, 5],
    };
    var url = "https://hummingbird.me/api/v1/anime/2";
    var query = "/anime/2";
    var aRequest = $.ajax({
        url: url,
        jsonp: "callback",
        dataType: "json",
    });
    aRequest.done(function(response){
      alert(response);
    });

}());
