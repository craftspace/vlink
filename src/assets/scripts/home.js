define([], function() {
  "use strict";

  var init = function(text) {
    console.log("Home", text);
  };

  return {
    init: init
  };
});