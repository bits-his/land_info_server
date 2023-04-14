import { LetterOfGrant } from '../controllers/LetterOfGrant';


module.exports = (app) => {
    app.post(
        '/api/create-letter-of-grant',
        LetterOfGrant
    );
};
