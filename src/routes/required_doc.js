const { Application_form, getApplication, getByID, postFinance, getFinance, getCharges, getFiles, getF, generateFile_no, getPlots } = require("../controllers/application");
const { required_doc, list_doc, getList } = require("../controllers/require_doc")


module.exports = (app)=>{
app.post('/api/required_docs',required_doc)
app.post('/api/list_doc',list_doc)
app.post("/api/Application_form", Application_form);
app.get('/api/getList',getList)
app.get('/api/get-application',getApplication);
app.get('/api/getByID',getByID)
app.post('/api/post-finace',postFinance);
app.get('/api/getfinance',getFinance)
app.get('/api/getCharges',getCharges)
app.get('/api/generate',getFiles)
app.get('/api/getF',getF)
app.post('/api/generate-file-no',generateFile_no)
app.get('/api/plots',getPlots)
}