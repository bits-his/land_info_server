const { conversion, getConversion } = require("../controllers/conversion")
module.exports = (app) => {
    app.post("/api/conversion", conversion);
    app.get('/api/getConversion',getConversion)
    // app.post('/api/list_doc',list_doc)
};
