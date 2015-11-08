//LOAD OLD POST DATA
var assert = require('assert');
var newPostRoute = require('../routes/newPostRoute.js');
var makeBlog = require('../blogmaker/makeBlog.js');
var exampleOldData = {
    "test": {
      "title": "A blog post",
    }
};
var exampleNewData = {
  "title": "A blog post"
}

describe('oldData', function() {
  it('should load old JSON from file', function() {
    assert.equal(JSON.stringify(makeBlog.oldData['testPost']), '{"title":"A blog post"}');
  });
});

describe('newData', function() {
  it('should create a new object from html form data', function() {
    assert.equal(JSON.stringify(newPostRoute['/newBlogPost'].fn({title:"A blog post"})), '{"title":"A blog post"}');
  })
})
