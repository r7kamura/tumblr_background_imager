var TumblrImager = {
  // will be set in this.getImageUrls
  imageUrls: [],

  // interval sec between changing images
  imageInterval: 3 * 1000,

  init: function(args) {
    this.json              = args.json;
    this.containerSelector = args.containerSelector;

    this.updateImageUrls();
    this.shuffleImageUrls();
    this.startImagesSlot();
  },

  updateImageUrls: function() {
    var self = this;
    $.each(self.json.posts, function() {
      self.imageUrls.push(this['photo-url-1280']);
    });
  },

  startImagesSlot: function() {
    var self = this;

    self.rotateImageUrl(function(url) { self.showImage(url) });

    setInterval(function() {
      self.rotateImageUrl(function(url) { self.showImage(url) });
    }, self.imageInterval);
  },

  showImage: function(url) {
    var img = $('<img />').attr('src', url);
    $(this.containerSelector).css({
      backgroundImage: 'url(' + url + ')'
    });
  },

  rotateImageUrl: function(callback) {
    var url = this.imageUrls.shift();
    callback(url);
    this.imageUrls.push(url);
  },

  shuffleImageUrls: function() {
    this.imageUrls = this.shuffle(this.imageUrls);
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
