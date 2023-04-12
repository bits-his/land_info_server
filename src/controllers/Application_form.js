import db from "../models";

export const Application_form = (req, res) => {
  const {
    Applicant_full_name = "",
    registration_particulars = "",
    Business_location = "",
    correspondance_address = "",
    Annual_income = "",
    Allocated_before = "",
    Applicant_nationality = "",
    State_of_origin = "",
    occupation_business = "",
    nature_of_business = "",
    company_registered_under = "",
    when_where_occupancy_no = "",
    purpose_of_land_use = "",
    // purpose_of_land_use = "",
    acitivity_intended_to_undertake = "",
    type_of_building_erected = "",
    estimated_amount_to_spenr = "",
    source_financing = "",
    length_of_term_required = "",
    do_you_have_biz_in_kano = "",
    address_of_local_rep = "",
    power_of_attorney_if_any = "",
    location_of_land_required = "",
    application_date = "",
    application_id = "",
    query_type = "",
  } = req.body;
  // const { in_query_type = "" } = req.query;
  db.sequelize
    .query(
      `call Application_form(:Applicant_full_name,:registration_particulars,:Business_location,:correspondance_address,:Annual_income,:Allocated_before,:Applicant_nationality,:State_of_origin,:occupation_business,:nature_of_business,:company_registered_under,:when_where_occupancy_no,:purpose_of_land_use,:purpose_of_land_use,:acitivity_intended_to_undertake,:type_of_building_erected,:estimated_amount_to_spenr,:source_financing,:length_of_term_required,:do_you_have_biz_in_kano,:address_of_local_rep,:power_of_attorney_if_any,:location_of_land_required,:application_date,:application_id,:query_type,)`,
      {
        replacements: {
          Applicant_full_name,
          registration_particulars,
          Business_location,
          correspondance_address,
          Annual_income,
          Allocated_before,
          Applicant_nationality,
          State_of_origin,
          occupation_business,
          nature_of_business,
          company_registered_under,
          when_where_occupancy_no,
          purpose_of_land_use,
          purpose_of_land_use,
          acitivity_intended_to_undertake,
          type_of_building_erected,
          estimated_amount_to_spenr,
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
