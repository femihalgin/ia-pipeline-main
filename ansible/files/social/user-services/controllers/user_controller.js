'use strict';
const user = require('../models/user');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
/*const JWT_SECRET =
    "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";*/

exports.allUserList = async function (req, res) {
    let result = await user.find({});
    res.json(result)
};

exports.createUser = async function (req, res) {
    const {fname, lname, email, password, userType} = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    const userReq = {
        fname,
        lname,
        email,
        encryptedPassword
    }
    await user.create(userReq);
    res.send({ status: "ok" });
};


exports.login = async function (req, res) {
    const {email, password} = req.body;
    const JWT_SECRET =
        "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

    const userData = await user.findOne({email});
    if (!userData) {
        return res.json({error: "User Not found"});
    }
    if (await bcrypt.compare(password, userData.password)) {
        console.log(JWT_SECRET)
        const token = jwt.sign({email: userData.email}, JWT_SECRET, {
            expiresIn: "15m",
        });

        if (res.status(201)) {
            return res.json({status: "ok", data: token});
        } else {
            return res.json({error: "error"});
        }
    }
    res.json({status: "error", error: "InvAlid Password"});
};


exports.updateUser = function (req, res) {
    User.findOneAndUpdate({_id: req.params.userId}, {});
}
