const admin = require('firebase-admin');

module.exports = function(req, res) {
    // User enters a code which he/she had received
    // We need to find the user and his/her phone number
    if (!req.body.phone || !req.body.code) {
        return res.status(422).send({ error: 'Phone and code both must be provided!'});
    }

    // Compare the codes
    // Mark code as no longer being valid
    const phone = String(req.body.phone).replace(/[^\d]/g);
    const code = parseInt(code);

    admin.auth().getUser(phone)
        .then(() => {
            const ref = admin.database().ref('users/' + phone );
            ref.on('value', snapshot => {
                const user = snapshot.val();

                if (user.code !== code || !user.codeValid) {
                    return res.status(422).send({ error: 'Code no longer valid'});
                }

                ref.update({ codeValid: false });
                
            });
        })
        .catch(() => res.status(422).send({ error: err }))



    // Return a JWT to user


};
