var routeToolUi = require("./tool-ui-router");

module.exports = function (app) {
  app.use("/deneme-tool", routeToolUi);
};
