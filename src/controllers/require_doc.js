import db from "../models"

export const required_doc =(req,res)=>{
const {
    application_id='',
    document_id='',
    document_name='',
    document_object=''
}=req.body;
const {in_query_type=''}=req.query;
db.sequelize.query(`CALL lis.create_rquired_documents(:application_id,:document_id,:document_name,:document_object,:in_query_type)`,{
    replacements:{
        application_id:parseInt(application_id),
        document_id:parseInt(document_id),
        document_name,
        document_object,
        in_query_type
    }
}).then((results)=>res.json({succes:true,results}))
.catch((err)=>{console.log(err);res.status(500).json({succes:false})})
}

export const list_doc =(req,res)=>{
    const {
        type_application='',
        document_id='',
        description='',
        document_name=''
    }=req.body;
    const {in_query_type=''}=req.query;
    db.sequelize.query(`CALL lis.list_of_documents(:document_id,:type_application,:document_name,:description,:in_query_type)`,{
        replacements:{
            document_id:parseInt(document_id),
            type_application,
            document_name,
            description,
            in_query_type
        }
    }).then((results)=>res.json({succes:true,results}))
    .catch((err)=>{console.log(err);res.status(500).json({succes:false})})
    }