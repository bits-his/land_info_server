const { Assignment, GetAllAssignment } = require("../controllers/Assignment");

module.exports = (app) => {
    app.post("/api/assignment", Assignment);
    app.get("/app/get-all-assignments", GetAllAssignment)
};
