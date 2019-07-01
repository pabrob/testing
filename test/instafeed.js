/* PLEASE NOTE
If nothing loads the pen has exceeded the Instagram API
request limit. 
*/

var userFeed = new Instafeed({
  get: 'user',
  userId: '779874361',
  accessToken: '779874361.1677ed0.cfb7873fb12f4096a970269c592e9771',
  sortBy: 'most-recent',
  limit: 9,
  template: '<div class="img"><a href="{{link}}"><img src="{{image}}" /></a></div>'
});
userFeed.run();

function getUserPic() {
  var access_token = "779874361.1677ed0.cfb7873fb12f4096a970269c592e9771";
  var user_id = "779874361";
  var url = "https://api.instagram.com/v1/users/" + user_id + "?access_token=" + access_token + "&callback=?";
  $.getJSON(url, function(data) {
    $(".user").append("<img src='" + data.data.profile_picture + "' />");
  });
}
getUserPic();

function mediaCount() {
  var user_id = "779874361";
  var access_token = "779874361.1677ed0.cfb7873fb12f4096a970269c592e9771";
  var url = "https://api.instagram.com/v1/users/" + user_id + "?access_token=" + access_token + "&callback=?";

  $.getJSON(url, function(data) {
    $('.followers').prepend(data.data.counts.followed_by.toString());
  });
}

mediaCount();

function followerCount() {
  var user_id = "779874361";
  var access_token = "779874361.1677ed0.cfb7873fb12f4096a970269c592e9771";
  var url = "https://api.instagram.com/v1/users/" + user_id + "?access_token=" + access_token + "&callback=?";

  $.getJSON(url, function(data) {
    $('.following').prepend(data.data.counts.follows.toString());
  });
}

followerCount();

function postCount() {
  var user_id = "779874361";
  var access_token = "779874361.1677ed0.cfb7873fb12f4096a970269c592e9771";
  var url = "https://api.instagram.com/v1/users/" + user_id + "?access_token=" + access_token + "&callback=?";

  $.getJSON(url, function(data) {
    $('.media').prepend(data.data.counts.media.toString());
  });
}

postCount();