(function() {
    cardForm = {
        name: "",
        top5: [1, 2, 3, 4, 5],
    };
    url = "https://hummingbird.me/api/v2";
    query = "/anime/2";
    $.ajax({
        url: url + query,
    }).done(function(data) {
        console.log(data);
    }.fail(function() {
    alert( "error" );
  })
);

}());
