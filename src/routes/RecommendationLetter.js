import passport from 'passport';
import config from '../config/config';
import { allowOnly } from '../services/routesHelper';
import {RecommendationLetter, getAp, getList, getPolicy, getRec, layoutPolicies} from '../controllers/RecommendationLetter';


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
};
