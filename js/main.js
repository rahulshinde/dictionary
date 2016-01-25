var apiKey = '3u9xpvuptwc3v279n95ecv2s';

var text = '';

function getImages() {

    if (text == '') {
        $('#output img').remove();
        $("#output").append("<img src='http://www.placecage.com/150/100'>");
        $("#output").append("<img src='http://www.placecage.com/150/100'>");
        $("#output").append("<img src='http://www.placecage.com/150/100'>");
        $("#output").append("<img src='http://www.placecage.com/150/100'>");
        $("#output").append("<img src='http://www.placecage.com/150/100'>");
        $("#output").append("<img src='http://www.placecage.com/150/100'>");
        return;
    }

    console.log(text);
    $('#output img').remove();

    $.ajax(
        {
            type:'GET',
            url:"https://api.gettyimages.com/v3/search/images?fields=thumb&orientations=Horizontal&phrase=" + text + ",3d",
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
}

function search() {
    text = $('input:text').val();

    getImages();
}