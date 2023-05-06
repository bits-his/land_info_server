import db from "../models";

export const conversion = (req, res) => {
    const {
        applicant_full_name = null,
        age = null,
        occupation = null,
        nationality = null,
        state_of_origin = null,
        home_domicile = null,
        add_in_nig = null,
        phone = null,
        name_add_of_lcl_rep = null,
        suff_desc = null,
        customary_title = null,
        purp_for_land_req = null,
        value_of_impr_offered_and_time_for_erection = null,
        applicants_src_of_financing_impr_offered = null,
        len_of_time_req = null,
        date = null,
        signature = null,
        file_no = null,
        status='pending'
    } = req.body;
    console.log(req.body);
    // const { in_query_type = null } = req.query;
    db.sequelize
        .query(
            `INSERT INTO lis.conversion(
                 applicant_full_name, age, occupation, nationality, state_of_origin, home_domicile, add_in_nig, phone, name_add_of_lcl_rep, suff_desc, customary_title, purp_for_land_req, value_of_impr_offered_and_time_for_erection, applicants_src_of_financing_impr_offered, len_of_time_req, date, signature, file_no,status)
                VALUES ('${applicant_full_name}', ${parseInt(age)}, '${occupation}', '${nationality}', '${state_of_origin}', '${home_domicile}', '${add_in_nig}', '${parseInt(phone)}', '${name_add_of_lcl_rep}', '${suff_desc}', '${customary_title}', '${purp_for_land_req}', '${value_of_impr_offered_and_time_for_erection}', '${applicants_src_of_financing_impr_offered}', '${len_of_time_req}', '${date}', '${signature}', '${file_no}','${status}')  `,

        )
        .then((results) => res.json({ succes: true, results }))
        .catch((err) => {
            console.log(err);
            res.status(500).json({ succes: false });
        });
};

export const getConversion = (req,res)=>{

    db.sequelize.query(`select * from lis.conversion where status='pending'`)
    .then((results) => res.json({ succes: true, results }))
    .catch((err) => {
        console.log(err);
        res.status(500).json({ succes: false });
    });
}
// export { Application_form};
