const jsonwebtoken = require('jsonwebtoken');

const issueAuthentication = (payload, options = {} ) =>
    jsonwebtoken.sign(payload, process.env.JWT_SECRET_KEY_AUTHENTICATION, {
        expiresIn: 12 * 60 * 60, // Token will expire in 12 hours
        ...options
    });

module.exports = issueAuthentication;