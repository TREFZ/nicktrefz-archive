$(function(){
    if ($('#flickrGallery').length > 0) {
        console.log('giddyup');
        $.getJSON('http://api.flickr.com/services/feeds/photos_public.gne?id=88941545@N00&tags=portfoliogallery&lang=en-us&format=json&jsoncallback=?', function(data){
        
            var photoCount = data.items.length, photoURL, photoLink, currentPhoto, galleryHTML = '';
            
            for (p = 0; p < photoCount; p++) {
                currentPhoto = data.items[p];
                photoLink = (currentPhoto.media.m).replace("_m.jpg", "_z.jpg");
                photoURL = photoLink.replace("_z.jpg", "_s.jpg");
                galleryHTML += '<li><a rel="illustrations" href="' + photoLink + '"><img src="' + photoURL + '"/></a></li>';
            }
            
            $('#flickrGallery').html(galleryHTML);
            
            $("a[rel='illustrations']").colorbox({
                scalePhotos: true,
                maxHeight: "90%"
            });
            
        });
    }
});