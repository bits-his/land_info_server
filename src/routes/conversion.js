const { conversion } = require("../controllers/conversion")
module.exports = (app) => {
    app.post("/api/conversion", conversion);
    // app.post('/api/list_doc',list_doc)
};
