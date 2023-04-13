const { layout_policies} = require("../controllers/layout_policies")


module.exports = (app)=>{
app.post('/api/layout_policies',layout_policies)
}