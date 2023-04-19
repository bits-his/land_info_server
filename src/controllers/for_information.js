import db from "../models";

export const for_information = (req, res) => {
  const {
    id = "",
    tittle = "",
    department = "",
    file_name = "",
    signture_date = "",
  } = req.body;
  const { in_query_type = "Insert" } = req.query;
  db.sequelize
    .query(
      `CALL lis.for_information(:id,:tittle,:department,:signture_date,:file_name:,in_query_type)`,
      {
        replacements: {
          id,
          tittle,
          department,
          signture_date,
          file_name,
          in_query_type,
        },
      }
    )
    .then((results) => res.json({ succes: true, results }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ succes: false });        
    });
};
