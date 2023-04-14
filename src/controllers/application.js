import db from "../models";

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
  } = req.body;
  console.log(req.body);
  // const { in_query_type = null } = req.query;
  db.sequelize
    .query(
      `CALL  lis.application_form(:Applicant_full_name,:registration_particulars,:Business_location,:correspondance_address,:Annual_income,:Allocated_before,:Applicant_nationality,:State_of_origin,:occupation_business,:nature_of_business,:company_registered_under,:when_where_occupancy_no,:purpose_of_land_use,:purpose_for_application_required,:acitivity_intended_to_undertake,:type_of_building_erected,:estimated_amount_to_spenr,:source_financing,:length_of_term_required,:do_you_have_biz_in_kano,:address_of_local_rep,:power_of_attorney_if_any,:location_of_land_required,:application_date,:application_id,:query_type)`,
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
          application_id,
          query_type,
        },
      }
    )
    .then((results) => res.json({ succes: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ succes: false });
    });
};
// export { Application_form};