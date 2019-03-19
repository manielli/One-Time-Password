cons admin = require('firebase-admin');

module.exports = function(req, res) {
    // Verify the user provided a phone number
    if (!req.body.phone) {
        return res.status(422).send({ error: 'Bad Input' });
    }

    // Fromat the phone number to remove dashes and parentheses'
    const phone = String(req.body.phone).replace(/[^\d]/g, "");
    
    // Create a new user account using that phone number


    // Respond to the user request, saying the account was made
};
