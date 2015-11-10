//oldData.load(path) to get old JSON data
var oldData = require('../data/posts.json');

var newPostRoute = {
  '/': {

  },
  '/newBlogPost': {
    method: 'post',
    fn: function(req, res) {
      return req;
    }
  }
}


module.exports = {
  oldData: oldData,
  newPostRoute: newPostRoute,
  
}
