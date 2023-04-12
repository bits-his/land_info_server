import db from "../models";

export const customer = (req, res) => {
  const {
    id = "",
    Applicant_full_name= "",
    registration_particulars= "",
    Business_location= "",
    correspondance_address= "",
    Annual_income= "",
    Allocated_before= "",
    Applicant_nationality= "",
    State_of_origin= "",
    occupation_business= "",
    nature_of_business= "",
    company_registered_under= "",
    when_where_occupancy_no= "",
    purpose_of_land_use= "",
    purpose_of_land_use= "",
    acitivity_intended_to_undertake= "",
    type_of_building_erected= "",
    estimated_amount_to_spenr= "",
    source_financing= "",
    length_of_term_required= "",
    do_you_have_biz_in_kano= "",
    address_of_local_rep= "",
    power_of_attorney_if_any= "",
    location_of_land_required= "",
    application_date= "",
    application_id= "",
    query_type= "",
  } = req.body;

  db.sequelize
    .query(
      `call create_customer(:id,:query_type,:agent,:arrival_date,:country,:customer_name,:day,:departure_date,:guest_type,:hotel,:meal,:night,:passport,:room_no,:room_type,:status,:room_view)`,
      {
        replacements: {
          id,
          customer_name,
          guest_type,
          hotel,
          agent,
          room_type,
          room_no,
          arrival_date,
          departure_date,
          night,
          day,
          status,
          meal,
          country,
          passport,
          query_type,
          room_view,
        },
      }
    )
    .then((resp) =>{console.log(resp); res.status(200).json({ success: true, resp })})
    .catch((err) => {
      console.log(err);
      res.status(500).json({ success: false });
    });
};

export const getCustomer = (req, res) => {
     db.sequelize
      .query
      (` SELECT id,customer_name,guest_type,hotel,agent,room_type,room_no,arrival_date,departure_date,night,day,status,meal,country,room_view,passport FROM customer`)
      .then((resp) => res.status(200).json({ success: true, resp }))
      .catch((err) => {
        console.log(err);
        res.status(500).json({ success: false });
      });
  };
// export { customer};