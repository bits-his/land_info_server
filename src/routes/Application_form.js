const { Application_form } = require("../controllers/Application_form");

module.exports = (app) => {
  app.post("/api/Application_form", Application_form);
  // app.post('/api/list_doc',list_doc)
};
