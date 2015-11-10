//LOAD OLD POST DATA
var assert = require('assert');
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
    assert.equal(JSON.stringify(makeBlog.newPostRoute['/newBlogPost'].fn({title:"A blog post"})), '{"title":"A blog post"}');
  });
});

describe('collateData', function() {
  var target = {
     "0001": {
       "title": "A blog post"
     }
     "0002": {
       "title": "A blog post"
     }
  };
  before(function() {
  });
  it('should create a new object from old and new data', function() {
    assert.equal(JSON.stringify(makeBlog.))
  });
});
