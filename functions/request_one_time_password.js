const admin = require('firebase-admin');

module.exports = function(req, res) {
    if (!req.body.phone) {
        return res.status(422).send({ error: 'You must provide a phone number' });
    }

    const phone = String(req.body.phone).replace(/[^\d]/g, "");

    admin.auth().getUser(phone)
        .then( userRecord => {
            const code = Math.floor( 1000 + Math.random() * 8999 );
        })
        .catch((err) => {
            // res.status(422).send({ error: 'User not found' });
            res.status(422).send({ error: err });
        });
};

