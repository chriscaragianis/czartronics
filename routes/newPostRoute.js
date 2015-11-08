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

module.exports = newPostRoute;
