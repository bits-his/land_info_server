import passport from 'passport';
import config from '../config/config';
import { allowOnly } from '../services/routesHelper';
import {RecommendationLetter, getAp, getList, getPolicy, getRec, layoutPolicies} from '../controllers/RecommendationLetter';
import { getPlotiig, getSchedule, report_on_application, schedule_payment } from '../controllers/application';
import { plots } from '../controllers/layout_policies';


module.exports = (app) => {
    // create recommendation letter
    app.post(
        '/api/create-recommendation-letter',
        RecommendationLetter
    );
    app.get('/api/getCadestral',getList)
    app.post('/api/layout_policies',layoutPolicies)
    app.get('/api/getPolicys',getPolicy)
    app.get('/api/getAppBYID',getRec)
    app.get('/api/getreByIDs',getAp)
    app.post('/api/report_on_application',report_on_application)
    app.post('/api/schedule_payment',schedule_payment)
    app.get('/api/getSchedule',getSchedule)
    app.post('/api/plots',plots)
    app.get('/api/getPlotiig',getPlotiig)
};
