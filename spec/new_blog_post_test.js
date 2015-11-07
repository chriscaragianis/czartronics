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
