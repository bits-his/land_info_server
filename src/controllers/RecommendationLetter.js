import db from "../models"

export const RecommendationLetter = (req, res) => {
    const {
        application_file_number = '',
        location = '',
        plot_no = '',
        plan_no = '',
        term = '',
        value_of_proposed_development = 0,
        time_of_completion = '',
        annual_ground_rent = '',
        development_charges = 0,
        survey_charges = '',
        recommendation_DLand = '',
        Dland_signature = '',
        Dland_sign_date ='2024-07-07',
        recommendation_permsec = '',
        Permsec_signature = '',
        PermSec_sign_date ='2024-07-07',
        grant_approve_reject = '',
        comm_govt_signature = '',
        Comm_govt_signature_date ='2024-07-07',
        recommendation_id = '',
        // query_type = 'Insert',
        status=''
        // application_file_number:''
    } = req.body
    const {query_type = '',}=req.query;
    console.log(req.body)
    db.sequelize.query(`CALL lis.create_recommendation_letter(:application_file_number,:location,:plot_no,:plan_no,:term,:value_of_proposed_development,:time_of_completion,:annual_ground_rent,:development_charges,:survey_charges,:recommendation_DLand,:Dland_signature,:Dland_sign_date,:recommendation_permsec,:Permsec_signature,:PermSec_sign_date,:grant_approve_reject,:comm_govt_signature,:Comm_govt_signature_date,:recommendation_id,:status,:query_type)`, {
        replacements: {
            application_file_number,
            location,
            plot_no,
            plan_no,
            term,
            value_of_proposed_development:value_of_proposed_development===''?0:value_of_proposed_development,
            time_of_completion,
            annual_ground_rent,
            development_charges:development_charges===''?0:development_charges,
            survey_charges:survey_charges===''?0:survey_charges,
            recommendation_DLand,
            Dland_signature,
            Dland_sign_date:Dland_sign_date===''?'2024-07-07':Dland_sign_date,
            recommendation_permsec,
            Permsec_signature,
            PermSec_sign_date:PermSec_sign_date===''?'2024-07-07':PermSec_sign_date,
            grant_approve_reject,
            comm_govt_signature,
            Comm_govt_signature_date:Comm_govt_signature_date===''?'2024-07-07':Comm_govt_signature_date,
            recommendation_id,
            query_type,
            status:query_type==='update'?'approved':status
            // application_id:2
        }
    }).then((results) =>{ 
        res.status(200).json({ success: true, results })
    })
        .catch((err) => { console.log(err); res.status(500).json({ success: false }) })
}

export const getList = (req,res)=>{
    const {status=''}=req.query;
    db.sequelize.query(`SELECT *  FROM lis.recommendation_letter where status='${status}'`)
    .then((results)=>res.json({success:true,results}))
    .catch((err)=>{console.log(err);res.status(500).json({success:false})})
}


export const layoutPolicies = (req,res)=>{

    const {layout_number='', policy_name='', item_description='', item_value='',in_query_type='Insert'}=req.body;
    db.sequelize.query(`CALL lis.layout_policies(:layout_number,:policy_name,:item_description,:item_value,:in_query_type)`,{
        replacements:{
            layout_number, policy_name, item_description, item_value:parseInt(item_value),in_query_type
        }
    }) .then((results)=>res.json({success:true,results}))
    .catch((err)=>{console.log(err);res.status(500).json({success:false})})
}


export const getPolicy = (req,res)=>{
    const {layout_number=''}=req.query;
    db.sequelize.query(`SELECT * FROM lis.layout_policies where layout_number='${layout_number}'`)
    .then((results)=>res.json({success:true,results}))
    .catch((err)=>{console.log(err);res.status(500).json({success:false})})
}

export const getRec = (req,res)=>{
    const {application_file_number=''}=req.query;
    db.sequelize.query(`SELECT * FROM lis.recommendation_letter where application_file_number='${application_file_number}'`)
    .then((results)=>res.json({success:true,results}))
    .catch((err)=>{console.log(err);res.status(500).json({success:false})})
}

export const getAp = (req,res)=>{
    const {file_no=''}=req.query;
    db.sequelize.query(`SELECT * FROM lis."Application_form" where file_no='${file_no}'`)
    .then((results)=>res.json({success:true,results}))
    .catch((err)=>{console.log(err);res.status(500).json({success:false})})
}
// export default { RecommendationLetter }