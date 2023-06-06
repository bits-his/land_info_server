const { Assignment, GetAllAssignment, GetAssignmentById } = require("../controllers/Assignment");

module.exports = (app) => {
    app.post("/api/assignment", Assignment);
    app.get("/app/get-all-assignments", GetAllAssignment)
    app.get("/app/get-assignment", GetAssignmentById)
};
