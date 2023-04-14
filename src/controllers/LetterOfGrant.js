import db from "../models"

export const LetterOfGrant = (req, res) => {
    const {
        letter_id = '',
        file_no = '',
        date_of_issue = '',
        serial_no = '',
        permsec_signature = '',
        signature_date = '',
        query_type = 'Insert',
    } = req.body
    console.log(req.body)
    db.sequelize.query(`CALL lis.letter_of_grant(:letter_id,:file_no,:date_of_issue,:serial_no,:permsec_signature,:signature_date,:query_type)`, {
        replacements: {
            letter_id: parseInt(letter_id),
            file_no: parseInt(file_no),
            date_of_issue,
            serial_no: parseInt(serial_no),
            permsec_signature,
            signature_date,
            query_type,
        }
    }).then((results) => res.status(200).json({ success: true, results }))
        .catch((err) => { console.log(err); res.status(500).json({ success: false }) })
}