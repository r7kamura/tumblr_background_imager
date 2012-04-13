var TumblrImager = {
  // will be set in this.getImageUrls
  urls: [],

  // interval sec between changing images
  interval: 3.5 * 1000,

  init: function(args) {
    this.json              = args.json;
    this.containerSelector = args.containerSelector;

    this.updateUrls();
    this.shuffleUrls();
    this.startRotation();
  },

  updateUrls: function() {
    var self = this;
    $.each(self.json.posts, function() {
      self.urls.push(this['photo-url-1280']);
    });
  },

  startRotation: function() {
    var self = this;

    self.rotateUrl(function(url) { self.changeImage(url) });

    setInterval(function() {
      self.rotateUrl(function(url) { self.changeImage(url) });
    }, self.interval);
  },

  changeImage: function() {
    var self = this;
    this.rotateUrl(function(url) {
      $(self.containerSelector).css('backgroundImage', 'url(' + url + ')');
    });
  },

  rotateUrl: function(callback) {
    var url = this.urls.shift();
    callback(url);
    this.urls.push(url);
  },

  shuffleUrls: function() {
    this.urls = this.shuffle(this.urls);
  },

  shuffle: function (array) {
    var i = array.length;
    while (--i) {
      var j = Math.floor(Math.random() * (i + 1));
      if (i == j) continue;
      var k = array[i];
      array[i] = array[j];
      array[j] = k;
    }
    return array;
  }
};

// `tumblr_api_read is passed from another script tag`
$(function() {
  TumblrImager.init({
    json: tumblr_api_read,
    containerSelector: 'body'
  });
});
