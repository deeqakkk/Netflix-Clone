const jwt = require("jsonwebtoken");
// this file is for user verification
function verify(req, res, next) {
    // authheader is a passing token in the form of array
    // e.g header
    // key : value
    // token   : Bearer JWT token

    const authHeader = req.headers.token;
    if (authHeader) {
        // we are skipping the first element of the array and taking the 2nd one
        const token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) res.status(403).json({ message: "Token is not valid" });
            // once verified the token is valid we will go to next
            req.user = user;
            next();


        });

    } else return res.status(401).json({ message: "You are not authenticated!" });
}

module.exports = verify;