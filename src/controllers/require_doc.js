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
    const arr = []
    req.body.forEach(item=>{
        const {
            type_application='',
            document_id=0,
            description='',
            document_name=''
        }=item;
        const {in_query_type=''}=req.query;
        arr.push(db.sequelize.query(`CALL lis.list_of_documents(:type_application,:document_name,:description,:in_query_type)`,{
            replacements:{
                // document_id:parseInt(document_id),
                type_application,
                document_name,
                description,
                in_query_type
            }
        }))
    })
    Promise.all(arr).then((results)=>res.json({succes:true,results}))
    .catch((err)=>{console.log(err);res.status(500).json({succes:false})})
    }

    export const getList = (req,res)=>{
         db.sequelize.query(`SELECT * FROM lis.list_document
         ORDER BY document_id ASC`)
         .then((results)=>res.json({success:true,results}))
         .catch((err)=>{console.log(err);res.status(500).json({success:false})})
    }