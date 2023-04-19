import moment from "moment";
import db from "../models";

function getNextCode(description, callback = (f) => f, error = (f) => f) {
  db.sequelize
  
    .query(
      `SELECT last_number + 1 as next_code FROM lis."Number_gerenerator" WHERE description='${description}'`,
    )
    .then(callback)
    .catch(error);
}

function updateNextCode(description, callback = (f) => f, error = (f) => f) {
  db.sequelize
    .query(
      `UPDATE lis."Number_gerenerator" set last_number = last_number + 1 WHERE description='${description}'`,
    )
    .then(callback)
    .catch(error);
}


export const Application_form = (req, res) => {

  const {
    Applicant_full_name = null,
    registration_particulars = null,
    Business_location = null,
    correspondance_address = null,
    Annual_income = null,
    Allocated_before = null,
    Applicant_nationality = null,
    State_of_origin = null,
    occupation_business = null,
    nature_of_business = null,
    company_registered_under = null,
    when_where_occupancy_no = null,
    purpose_of_land_use = null,
    purpose_for_application_required = null,
    acitivity_intended_to_undertake = null,
    type_of_building_erected = null,
    estimated_amount_to_spenr = null,
    source_financing = null,
    length_of_term_required = null,
    do_you_have_biz_in_kano = null,
    address_of_local_rep = null,
    power_of_attorney_if_any = null,
    location_of_land_required = null,
    application_date = null,
    application_id = null,
    query_type = "Insert",
    type=''
  } = req.body;
  console.log(req.body);
  // const { in_query_type = null } = req.query;
     getNextCode(
          'applicant',
          (resp) => {
            if (resp && resp.length) {
              let nextCode = resp[0][0].next_code; 
            
              db.sequelize
                .query(
                  `CALL  lis.application_form(:Applicant_full_name,:registration_particulars,:Business_location,:correspondance_address,:Annual_income,:Allocated_before,:Applicant_nationality,:State_of_origin,:occupation_business,:nature_of_business,:company_registered_under,:when_where_occupancy_no,:purpose_of_land_use,:purpose_for_application_required,:acitivity_intended_to_undertake,:type_of_building_erected,:estimated_amount_to_spenr,:source_financing,:length_of_term_required,:do_you_have_biz_in_kano,:address_of_local_rep,:power_of_attorney_if_any,:location_of_land_required,:application_date,:application_id,:status,:type,:query_type)`,
                  {
                    replacements: {
                      Applicant_full_name,
                      registration_particulars,
                      Business_location,
                      correspondance_address,
                      Annual_income: parseInt(Annual_income),
                      Allocated_before,
                      Applicant_nationality,
                      State_of_origin,
                      occupation_business,
                      nature_of_business,
                      company_registered_under,
                      when_where_occupancy_no,
                      purpose_of_land_use,
                      purpose_for_application_required,
                      acitivity_intended_to_undertake,
                      type_of_building_erected,
                      estimated_amount_to_spenr: parseInt(estimated_amount_to_spenr),
                      source_financing,
                      length_of_term_required,
                      do_you_have_biz_in_kano,
                      address_of_local_rep,
                      power_of_attorney_if_any,
                      location_of_land_required,
                      application_date,
                      application_id:`APP/${moment().format('YYYY')}/${nextCode}`,
                      query_type,
                      status:'application',
                      type

                    },
                  }
                ) .then((results) => {
                  updateNextCode('applicant') 
                  res.json({ success: true, results, application_id:`APP/${moment().format('YYYY')}/${nextCode}` })
                })
                .catch((err) => {
                  console.log(err);
                  res.status(500).json({ succes: false });
                });
            }})
   
};

export const getApplication =(req,res)=>{

  db.sequelize.query(`SELECT * FROM lis."Application_form"`)
  .then((results)=>res.json({success:true,results}))
  .catch((err)=>res.status(500).json({success:true,}))
}


export const getByID =(req,res)=>{
  const {status=''}=req.query;

  db.sequelize.query(`SELECT * FROM lis."Application_form" WHERE status='${status}'`)
  .then((results)=>res.json({success:true,results}))
  .catch((err)=>res.status(500).json({success:true,}))
}

export const postFinance =(req,res)=>{
  // const {in_qu=''}=req.query;
const {application_id="", applicant_full_name="", amount="", description="",type=''}=req.body;
  db.sequelize.query(`CALL lis._finance(:application_id,:applicant_full_name,:amount,:description,0,${parseInt(amount)},:type,'Insert')`,
  {
    replacements:{
      application_id, applicant_full_name, amount:parseInt(amount), description,type
    }
  })
  .then((results)=>{

   type=== 'commercial' || 'residential'? db.sequelize.query(`UPDATE lis."Application_form" set status='application-fee-paid' where application_id='${application_id}' `):''
    type==='grant'?
    db.sequelize.query(`UPDATE lis.letter_of_grant set status='grant-fee-paid' where file_no='${application_id}' `):''
    res.json({success:true,results})})
  .catch((err)=>res.status(500).json({success:true,}))
}

export const getFinance =(req,res)=>{
 db.sequelize.query(`SELECT * FROM lis.finance`)
  .then((results)=>res.json({success:true,results}))
  .catch((err)=>res.status(500).json({success:true,}))
}
export const getCharges =(req,res)=>{
  db.sequelize.query(`SELECT * FROM lis.charges`)
   .then((results)=>res.json({success:true,results}))
   .catch((err)=>res.status(500).json({success:true,}))
 }

 export const getFiles =(req,res)=>{
  const {application_id=''}=req.query;

  db.sequelize.query(`SELECT * FROM lis."Application_form" WHERE Application_id='${application_id}'`)
  .then((results)=>res.json({success:true,results}))
  .catch((err)=>res.status(500).json({success:false,}))
}
export const getF =(req,res)=>{
  const {application_id=''}=req.query;

  db.sequelize.query(`SELECT * FROM lis.finance WHERE application_id='${application_id}'`)
  .then((results)=>res.json({success:true,results}))
  .catch((err)=>res.status(500).json({success:false,}))
}

export const generateFile_no =(req,res)=>{
  const {application_id=''}=req.query;
  getNextCode(
    'applicant',
    (resp) => {
      if (resp && resp.length) {
        let nextCode = resp[0][0].next_code; 
        db.sequelize.query(`UPDATE lis."Application_form" set file_no='COM/${moment().format('YYYY')}/${nextCode}' WHERE application_id='${application_id}'`)
  .then((results)=>{
    db.sequelize.query(`UPDATE lis."Application_form" set status='file_no_generated' WHERE application_id='${application_id}'`)
    res.json({success:true,results,file_no:`COM/${moment().format('YYYY')}/${nextCode}`})
    updateNextCode('applicant') 
  })
  .catch((err)=>res.status(500).json({success:false,}))
      }})

}

export const getPlots =(req,res)=>{

  db.sequelize.query(`SELECT a.layout_address,a.layout_number,b.plots_numbers,b.beacon_numbers from lis.list_of_available_layouts a join lis.plots_numbers b on a.layout_number=b.layout_number`)
  .then((results)=>res.json({success:true,results}))
  .catch((err)=>res.status(500).json({success:false,}))
}

export const report_on_application = (req,res)=>{
const {right_of_occupancy_number='',does_shape_agrees_with_town_plan='', GKN_no='', applicant_plan_sufficient='', is_ground_open='', is_the_plot_completely_beaconed='', tracing_number='', deposition_no='', it_lies_on_unplanned_layout='', lay_on_layout_no='', seperate_survey_required='', does_it_lies_area_town_plan='', Town_plan_no='',the_area_shown_is_for_purpose_aapplied_for='',has_the_place_hold_titile_before='',does_railway_runs_through_the_plot='',is_the_plot_along_side_federal_road='',area_applied_for=''}=req.body;
db.sequelize.query(`INSERT INTO lis.report_on_application(
	right_of_occupancy_number, "GKN_no", applicant_plan_sufficient, is_ground_open, is_the_plot_completely_beaconed, tracing_number, deposition_no, it_lies_on_unplanned_layout, lay_on_layout_no, seperate_survey_required, does_it_lies_area_town_plan, "Town_plan_no", does_shape_agrees_with_town_plan, the_area_shown_is_for_purpose_aapplied_for, has_the_place_hold_titile_before, does_railway_runs_through_the_plot, is_the_plot_along_side_federal_road, area_applied_for, yes_no_id)
	VALUES ('${right_of_occupancy_number}', '${GKN_no}', '${applicant_plan_sufficient}', '${is_ground_open}', '${is_the_plot_completely_beaconed}', '${tracing_number}', '${deposition_no}', '${it_lies_on_unplanned_layout}', '${lay_on_layout_no}', '${seperate_survey_required}', '${does_it_lies_area_town_plan}', '${Town_plan_no}', '${does_shape_agrees_with_town_plan}', '${the_area_shown_is_for_purpose_aapplied_for}', '${has_the_place_hold_titile_before}', '${does_railway_runs_through_the_plot}', '${is_the_plot_along_side_federal_road}', '${area_applied_for}', 11)`)
  .then((results)=>res.json({success:true,results}))
  .catch((err)=>res.status(500).json({success:false,}))
}