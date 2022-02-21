const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken");


// UPDATE
router.put("/:id", verify, async(req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {

        // this will check in case we are changing the password if not move forward
        if (req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(
                req.body.password,
                process.env.SECRET_KEY
            ).toString();
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, { new: true });
            // {new:true} means that it will return the updated user
            res.status(200).json(updatedUser);
        } catch (err) {
            res.send(500).json({
                message: err.message
            });
        }
    } else {
        res.status(403).json({ message: "You can only update your account!" });
    }
});

// DELETE
router.delete("/:id", verify, async(req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted...");
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You can delete only your account!");
    }
});


// GET
router.get("/find/:id", verify, async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { passowrd, ...info } = user._doc;
        res.status(200).json(info);
    } catch (err) {
        res.send(500).json({
            message: err.message,
        });
    }
});
// GET ALL
router.get("/", verify, async(req, res) => {
    const query = req.query.new;
    if (req.user.isAdmin) {
        try {
            // if there is a query then only fetch latest 10 users
            const users = query ? await User.find().limit(10) : await User.find();

            res.status(200).json(users);
        } catch (err) {
            res.send(500).json({
                message: err.message,
            });
        }
    } else {
        res.status(403).json({ message: "You are not allowed to see all users" });
    }
});
// GET USER STATS

module.exports = router;