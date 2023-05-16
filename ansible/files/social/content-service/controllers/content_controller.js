'use strict';


//const mongoose = require('mongoose'),
    const myContent = require('../models/content')//mongoose.model('Contents');

exports.allContentList = async function (req, res) {
    let result = await myContent.find({});
    res.json(result)
};

exports.createUser = function (req, res) {
    const newUser = new User(req.body);
    newUser.save(function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};


exports.viewUser = function (req, res) {
    User.findById(req.params.userId, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};


exports.updateUser = function (req, res) {
    User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};



    /*authCallback = (req, res) => {
        console.log(req, "req")
        console.log(req, "req")
        //res.redirect("https://localhost:8080/Success")
        const {filename, title, description} = JSON.parse(req.query.state);
        oAuth.getToken(req.query.code, (err, tokens) => {
            if (err) {
                console.log(err);
                return;
            }

            oAuth.setCredentials(tokens);

            youtube.videos.insert({

                resource: {
                    snippet: {title, description},
                    status: {privacyStatus: 'private'}

                },

                part: 'snippet,status',
                media: {

                    body: fs.createReadStream(filename)
                }

            }, (err, data) => {

                console.log("Done");
                process.exit();

            })

        })
    }*/

//}


