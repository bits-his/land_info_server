const { required_doc, list_doc } = require("../controllers/require_doc")


module.exports = (app)=>{
app.post('/api/required_docs',required_doc)
app.post('/api/list_doc',list_doc)
}