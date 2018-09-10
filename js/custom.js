var userFeed = new Instafeed({
    get: 'user',
    userId: 'YOUR_USER_ID',
    accessToken: 'YOUR_ACCESS_TOKEN_KEY',
    limit:12,
    resolution:'standard_resolution',
    sortBy:'most-recent',
    template:'<div class="col-lg-3 gallery instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid" /></a></div>'
});
userFeed.run();

// This will create a single gallery from all elements that have class "gallery-item"
$('.gallery').magnificPopup({
  type: 'image',
  delegate:'a',
  gallery:{
    enabled:true
  }
});