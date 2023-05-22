import db from "../models";

export const layout_policies = (req, res) => {
  const {
    layout_number = "",
    policy_item_id = "",
    policy_name = "",
    item_description = "",
    item_value = "",
    survey_charges = '',
    development_charges = '',
    term = '', annual_ground_rent = ''
  } = req.body;
  const { in_query_type = "Insert" } = req.query;
  db.sequelize
    .query(
      `CALL lis.layout_policies(:layout_number,:policy_item_id,:policy_name,:item_description,:item_value,:survey_charges,:development_charges,:termannual_ground_rent,:in_query_type)`,
      {
        replacements: {
          layout_number,
          policy_item_id,
          policy_name,
          item_description,
          item_value: parseInt(item_value),
          survey_charges,
          development_charges, term,
          annual_ground_rent,
          in_query_type
        },
      }
    )
    .then((results) => res.json({ succes: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ succes: false });
    });
};


export const plots = (req, res) => {

  const { layout_number = '', Plots_numbers = '', beacon_numbers = '', status = '', plan_number = '', location = '' } = req.body;
  db.sequelize.query(`CALL lis.plots_numbers(:layout_number,:Plots_numbers,:beacon_numbers,:status,:plan_number,:location,'Insert')`, {
    replacements: {
      layout_number, Plots_numbers, beacon_numbers, status, plan_number, location
    }
  }).then((results) => res.json({ succes: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ succes: false });
    });
}