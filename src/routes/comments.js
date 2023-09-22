const { getApproved, updateAppStatus, getAassign, sub_division, getSubD, Merger, getMerger } = require("../controllers/application");
const { postComments } = require("../controllers/comments")

module.exports =(app)=>{
    app.post('/api/post-comments',postComments);
    app.get('/api/get-approved',getApproved)
    app.post('/api/update-app-status',updateAppStatus)
    app.get('/api/getAssigns',getAassign)
    app.post('/api/sub-division',sub_division)
    app.get('/api/getSubD',getSubD)
    app.post('/api/merger',Merger)
    app.get('/api/getmerger',getMerger)
}   