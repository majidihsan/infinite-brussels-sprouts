var page = 2
$('.more-sprouts').on('click', function(event) {
  event.preventDefault();

  var request = $.ajax({
    method: "GET",
    url: "/tweets.json?page=" + page
  });

  request.done(function(data) {
    data.forEach(function(tweet) {
      $(".tweets").append("<li class = 'tweet'>" + "<div class='body'>" + tweet["text"] + "</div>" + "<div class='user'>" + tweet["username"] + "</div>" + "</li>");
    })
    page++
    alert("Page has been updated with new Tweets");
  })
});
