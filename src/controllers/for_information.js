import db from "../models";

export const for_information = (req, res) => {
  const { file_no = "", grant_number = "", date_issue = "" } = req.body;
  const { in_query_type = "Insert" } = req.query;
  db.sequelize
    .query(
      `CALL lis.for_information(:file_no,:grant_number,:date_issue,:in_query_type)`,
      {
        replacements: {
          file_no,
          grant_number,
          date_issue,
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
