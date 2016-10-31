// $(document).ready(function() {
//     // $('#anime-form').submit(function(e) {
//     //         e.preventDefault();
//     //         var formData = $('#anime-form').serializeArray();
//     //         for (var i = 0; i < formData.length; ++i) {
//     //             console.log(formData[i]['value']);
//     //         }
//     // });
//
//     function appendData() {
//         var animeList = [];
//         var cardForm = {
//             title: '',
//             url: ''
//         };
//         for (var i = 0; i < 5; i++) {
//             var url = "https://hummingbird.me/api/v1/anime/" +getRandomNumber();
//             var data = $.parseJSON($.ajax({
//                 crossOrigin: true,
//                 url: url,
//                 async: false,
//                 dataType: "json",
//                 success: function(data) {
//                     // // title // url
//                     // cardForm.title = data.title;
//                     // cardForm.url = data.url;
//                     // cardForm.cover_image = data.cover_image;
//                 }
//             }).responseText);
//             animeList.push(data);
//         }
//         return animeList;
//     }
//     var animelist = appendData();
//     console.log(animelist);
//     for(var i = 0; i < animelist.length; i++){
//       $('.top-5-list').append("<li><a href=" + animelist[i].url + ">" + animelist[i].title + "</a></li>");
//     }
//     $('.top-anime').attr("src",animelist[0].cover_image);
//     function getRandomNumber(){
//       return Math.floor(Math.random() * 100);
//     }
// });
