$(document).ready(function(){
    
    cardForm = {
        name: "",
        top5: [1, 2, 3, 4, 5],
    };
    var url = "https://hummingbird.me/api/v1/anime/2";
    $.ajax({
        crossOrigin:true,
        url: url,
        success: function(data) {
          console.log(data);
     }
    });
    
    $('#anime-form').submit(function(e) {
            e.preventDefault();
            var formData = $('#anime-form').serializeArray();
            for (var i = 0; i < formDta.length; ++i) {
                console.log(formData[i]['value']);
            }
    });

});
