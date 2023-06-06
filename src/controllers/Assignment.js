import db from "../models";

export const Assignment = (req, res) => {
    const {
        full_name_of_the_applicant = null,
        residential_address = null,
        correspondence_address = null,
        right_of_occupancy_number = null,
        purpose_of_right_of_occupancy = null,
        name_of_original_holder = null,
        full_name_of_assignee = null,
        residential_address_assignee = null,
        postal_address = null,
        nationality_state_of_origin = null,
        stage_of_development = null,
        plot_is_developed_or_not = null,
        amount_of_consideration = null,
        date = null,
        signature_of_applicant = null,
        signature_of_assignees = null,
        status = null,
        query_type = "Insert",
    } = req.body;
    console.log(req.body);
    // const { in_query_type = null } = req.query;
    db.sequelize
        .query(
            `CALL lis.assignment(:full_name_of_the_applicant,:residential_address,:correspondence_address,:right_of_occupancy_number,:purpose_of_right_of_occupancy,:name_of_original_holder,:full_name_of_assignee,:residential_address_assignee,:postal_address,:nationality_state_of_origin,:stage_of_development,:plot_is_developed_or_not,:amount_of_consideration,:date,:signature_of_applicant,:signature_of_assignees,:status,:query_type )`,
            {
                replacements: {
                    full_name_of_the_applicant,
                    residential_address,
                    correspondence_address,
                    right_of_occupancy_number,
                    purpose_of_right_of_occupancy,
                    name_of_original_holder,
                    full_name_of_assignee,
                    residential_address_assignee,
                    postal_address,
                    nationality_state_of_origin,
                    stage_of_development,
                    plot_is_developed_or_not,
                    amount_of_consideration,
                    date,
                    signature_of_applicant,
                    signature_of_assignees,
                    status,
                    query_type,
                },
            }
        )
        .then((results) => res.json({ success: true, results }))
        .catch((err) => {
            console.log(err);
            res.status(500).json({ success: false });
        });
};

export const GetAllAssignment = (req, res) => {

    db.sequelize.query(`SELECT * FROM lis."assignment"`)
        .then((results) => res.json({ success: true, results }))
        .catch((err) => res.status(500).json({ success: true, }))
}


export const GetAssignmentById = (req, res) => {
    const { right_of_occupancy_number = '' } = req.query;

    db.sequelize.query(`SELECT * FROM lis."assignment" WHERE right_of_occupancy_number='${right_of_occupancy_number}'`)
        .then((results) => res.json({ success: true, results }))
        .catch((err) => res.status(500).json({ success: true, }))
}