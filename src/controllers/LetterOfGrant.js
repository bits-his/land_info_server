import moment from "moment";
import db from "../models"

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

export const LetterOfGrant = (req, res) => {
    const {
        letter_id = 0,
        file_no = '',
        date_of_issue = '',
        serial_no = '',
        permsec_signature = '',
        signature_date = '',
        query_type = 'Insert',
    } = req.body
    console.log(req.body)
    getNextCode(
        'grant',
        (resp) => {
          if (resp && resp.length) {
            let nextCode = resp[0][0].next_code;  
            console.log(nextCode)
            db.sequelize.query(`CALL lis.letter_of_grant(:letter_id,:file_no,:date_of_issue,:serial_no,:permsec_signature,:signature_date,:grant_number,:status,:query_type)`, {
                replacements: {
                    letter_id: parseInt(0),
                    file_no: file_no,
                    date_of_issue,
                    serial_no: parseInt(serial_no),
                    permsec_signature,
                    signature_date,
                    grant_number:`GRANT/${moment().format('YYYY')}/${nextCode}`,
                    status:'pending',
                    query_type,
                }
            }).then((results) => { updateNextCode('grant') ;res.status(200).json({ success: true, results })})
                .catch((err) => { console.log(err); res.status(500).json({ success: false }) })
          }})

}

export const getGrant = (req,res)=>{

    db.sequelize.query(`SELECT * FROM lis.letter_of_grant where status='pending'`)
    .then((results)=>res.json({success:true,results}))
  .catch((err)=>res.status(500).json({success:true,}))
}