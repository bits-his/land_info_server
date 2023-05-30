import { getSurvey, updateSurvey } from "../controllers/application";
import {
  for_information,
  //   getFor_information,
} from "../controllers/for_information";

module.exports = (app) => {
  app.post("/api/for_information", for_information);
  app.get('/api/getTriple',getSurvey)
  app.post('/api/update_survey',updateSurvey)
  //   app.get("/api/for_information", getFor_information);
};
