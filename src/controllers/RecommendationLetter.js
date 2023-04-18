import db from "../models"

export const RecommendationLetter = (req, res) => {
    const {
        application_file_number = 1,
        location = '',
        plot_no = '',
        plan_no = '',
        term = '',
        value_of_proposed_development = '',
        time_of_completion = '',
        annual_ground_rent = '',
        development_charges = '',
        survey_charges = '',
        recommendation_DLand = '',
        Dland_signature = '',
        Dland_sign_date = '',
        recommendation_permsec = '',
        Permsec_signature = '',
        PermSec_sign_date = '',
        grant_approve_reject = '',
        comm_govt_signature = '',
        Comm_govt_signature_date = '',
        recommendation_id = '',
        query_type = 'Insert',
        // application_file_number:''
    } = req.body
    console.log(req.body)
    db.sequelize.query(`CALL lis.create_recommendation_letter(:application_file_number,:location,:plot_no,:plan_no,:term,:value_of_proposed_development,:time_of_completion,:annual_ground_rent,:development_charges,:survey_charges,:recommendation_DLand,:Dland_signature,:Dland_sign_date,:recommendation_permsec,:Permsec_signature,:PermSec_sign_date,:grant_approve_reject,:comm_govt_signature,:Comm_govt_signature_date,:recommendation_id,:query_type)`, {
        replacements: {
            application_file_number: parseInt(application_file_number),
            location,
            plot_no,
            plan_no,
            term,
            value_of_proposed_development,
            time_of_completion,
            annual_ground_rent,
            development_charges,
            survey_charges,
            recommendation_DLand,
            Dland_signature,
            Dland_sign_date,
            recommendation_permsec,
            Permsec_signature,
            PermSec_sign_date,
            grant_approve_reject,
            comm_govt_signature,
            Comm_govt_signature_date,
            recommendation_id,
            query_type,
            // application_id:2
        }
    }).then((results) => res.status(200).json({ success: true, results }))
        .catch((err) => { console.log(err); res.status(500).json({ success: false }) })
}


// export default { RecommendationLetter }