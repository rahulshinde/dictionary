var apiKey = '3u9xpvuptwc3v279n95ecv2s';

$.ajax(
    {
        type:'GET',
        url:"https://api.gettyimages.com/v3/search/images?fields=comp&orientations=Horizontal&phrase=friendship,3d",
         beforeSend: function (request)
            {
                request.setRequestHeader("Api-Key", apiKey);
            }})
    .done(function(data){
        console.log("Success with data")
        console.log(data)
        for(var i = 0;i<data.images.length;i++)
        {
           $("#output").append("<img src='" + data.images[i].display_sizes[0].uri + "'/>");
        }
    })
    .fail(function(data){
        alert(JSON.stringify(data,2))
    });