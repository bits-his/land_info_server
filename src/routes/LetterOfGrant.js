import { LetterOfGrant, getGrant } from '../controllers/LetterOfGrant';


module.exports = (app) => {
    app.post(
        '/api/create-letter-of-grant',
        LetterOfGrant
    );
    app.get('/api/getGrant',getGrant)
};
