import { getSurvey } from "../controllers/application";
import {
  for_information,
  //   getFor_information,
} from "../controllers/for_information";

module.exports = (app) => {
  app.post("/api/for_information", for_information);
  app.get('/api/getTriple',getSurvey)
  //   app.get("/api/for_information", getFor_information);
};
