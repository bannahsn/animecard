(function() {
    cardForm = {
        name: "",
        top5: [1, 2, 3, 4, 5],
    };
    $.ajaxSetup({
        error: function(jqXHR, exception) {
            if (jqXHR.status === 0) {
                alert('Not connect.\n Verify Network.');
            } else if (jqXHR.status == 404) {
                alert('Requested page not found. [404]');
            } else if (jqXHR.status == 500) {
                alert('Internal Server Error [500].');
            } else if (exception === 'parsererror') {
                alert('Requested JSON parse failed.');
            } else if (exception === 'timeout') {
                alert('Time out error.');
            } else if (exception === 'abort') {
                alert('Ajax request aborted.');
            } else {
                alert('Uncaught Error.\n' + jqXHR.responseText);
            }
        }
    });
    var url = "https://hummingbird.me/api/v1/anime/2";
    var query = "/anime/2";
    $.ajax({
        crossOrigin:true,
        url: url,
        success: function(data) {
          console.log(data);
     }
    });
}());
