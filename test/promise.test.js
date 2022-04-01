const assert = require("assert");

function timeout(ms, promise) {
  // TODO: your code goes here
}

describe("promise timeout utility", function () {
  it("times out when promise does not resolve", function (done) {
    timeout(1, new Promise(() => {})).catch(function (err) {
      assert.equal(err, "Timeout");
      done();
    });
  });

  it("does not time out when promise resolves earlier", function (done) {
    timeout(100, Promise.resolve("data")).then(function (data) {
      assert.equal(data, "data");
      done();
    });
  });

  it("does not time out when promise resolves earlier", function (done) {
    timeout(100, Promise.reject("error")).catch(function (err) {
      assert.equal(err, "error");
      done();
    });
  });
});
