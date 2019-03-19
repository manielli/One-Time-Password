module.exports = function(req, res) {
    // User enters a code which he/she had received
    // We need to find the user and his/her phone number
    if (!req.body.phone || !req.body.code) {
        return res.status(422).send({ error: 'Phone and code both must be provided!'});
    }

    // Compare the codes
    const phone = String(req.body.phone).replace(/[^\d]/g);
    const code = parseInt(code);


    // Mark code as no longer being valid

    
    // Return a JWT to user


};
