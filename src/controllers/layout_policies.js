import db from "../models";

export const layout_policies = (req, res) => {
  const {
    layout_number = "",
    policy_item_id = "",
    policy_name = "",
    item_description = "",
    item_value = ""
  } = req.body;
  const { in_query_type = "Insert" } = req.query;
  db.sequelize
    .query(
      `CALL lis.layout_policies(:layout_number,:policy_item_id,:policy_name,:item_description,:item_value,:in_query_type)`,
      {
        replacements: {
          layout_number,
          policy_item_id,
          policy_name,
          item_description,
          item_value: parseInt(item_value),
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
