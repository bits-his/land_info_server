import db from "../models";



export const postComments = (req,res)=>{
const {file_no='',document_no='',comments='',comment_by='',comment_to=''}=req.body;
const {query_type=''}=req.query;

db.sequelize.query(`CAll lis.comments(:file_no,:document_no,:comments,:comment_by,:comment_to,:query_type)`,
{
replacements:{
    file_no,document_no,comments,comment_by,comment_to,query_type
}
}).then((results)=>res.json({success:true,results}))
.catch((err)=>res.status(500).json({success:false,err}))

}

export const getCommets = (req,res)=>{
    
    db.sequelize.query(`CAll lis.comments(:file_no,:document_no,:comments,:comment_by,:comment_to,:query_type)`,
    
    ).then((results)=>res.json({success:true,results}))
    .catch((err)=>res.status(500).json({success:false,err}))
    
    }