var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      key: options.key,
      maxResults: options.max,
      q: options.query,
      part: 'snippet',
      type: 'video',
    },
    contentType: 'application/json',
    success: function(data) {
      callback(data.items);
    },
    error: function(error) {
      console.error('Failed', error);
    }
  });

};

window.searchYouTube = searchYouTube;
