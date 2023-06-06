const { getApproved, updateAppStatus, getAassign } = require("../controllers/application");
const { postComments } = require("../controllers/comments")

module.exports =(app)=>{
    app.post('/api/post-comments',postComments);
    app.get('/api/get-approved',getApproved)
    app.post('/api/update-app-status',updateAppStatus)
    app.get('/api/getAssigns',getAassign)
}   