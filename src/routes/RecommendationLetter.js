import passport from 'passport';
import config from '../config/config';
import { allowOnly } from '../services/routesHelper';
import {RecommendationLetter} from '../controllers/RecommendationLetter';


module.exports = (app) => {
    // create recommendation letter
    app.post(
        '/api/create-recommendation-letter',
        RecommendationLetter
    );
};
