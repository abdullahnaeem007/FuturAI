const router = require('express').Router();
const ai = require('../openai.js');
// const supa = require('../supa.js');
const stable = require('stability-client').generateAsync;
const fs = require('fs-extra')
const path = require('node:path');
// Stability - Requires a prompt and images
router.route('/stability').post(auth, async (req, res) => {
    // Prompt Checking - Validation checks
    try {
        console.log(req.body)
        if (!req.body.prompt && !req.body.prompt) {
            res.status(400).json({ "error_message": "No prompt or type given !" });
            return;
        }
        else {
            var p = req.body.prompt;

            var t = req.body.type;
            p = p.concat("High Definition, no blur, 4K, Crystal Clear, Sharp Edges "," in ", t, " style");
            console.log(p)
        }
    }
    catch (err) {
        res.status(500).json({ "error_message": "Unable to use the given prompt - in ai.js", "error": err });
        return;
    }

    //Try to get response for Stable Diffusion
    try {
        var { response, images } = await stable({
            prompt: p,
            apiKey: process.env.DREAMSTUDIO_API_KEY,
        })
        myJson = ({ "response": response, "images": images });
        res.status(200).sendFile(images[0].filePath);
    }
    catch (err) {
        res.status(500).json({ "prompt": p, "error_message": "Unable to get response from Stability - in ai.js", "error": err });
        return;
    }

    // Remove the images for local storage
    // try {
    //     // fs.remove(path.join(images[0].filePath, "../", "../"));
    // }
    // catch (err) {
    //     console.log(err);
    // }

});

// GPT 3.4 Turbo - Requires a prompt and returns a gpt response
router.route('/prompt').post(auth, async (req, res) => {
    // Prompt Checking - Validation checks

    try {
        if (!req.body.prompt) {
            res.status(400).json({ "error_message": "No prompt given !" });
            return;
        }
        else {
            var p = req.body.prompt;
        }
    }
    catch (err) {
        res.status(500).json({ "error_message": "Unable to use the given prompt - in ai.js", "error": err });
        return;
    }


    // Try to get response for Prompt from OpenAI
    try {
        const completion = await ai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                { "role": "user", "content": p },
            ],
            temperature: 0.5,

        });
        res.status(200).json({ "response": completion.data.choices[0].message.content });
        return;
    }
    catch (err) {
        res.status(500).json({ "prompt": p, "error_message": "Unable to get response from OpenAI - in ai.js", "error": err });
        return;
    }

});


// Authentication Middleware - Requires a jwt and returns a user | Checks if user is authenticated.
async function auth(req, res, next) {
    // Validation checks for existance of jwt in body 
    // try {
    //     var jwt = req.body.jwt;
    //     if (!jwt) {
    //         res.status(400).json({ "error_message": "No jwt given !" });
    //         return;
    //     }
    // }
    // catch (err) {
    //     res.status(500).json({ "error_message": "Unable to get jwt - in ai.js", "error": err });
    //     return;
    // }

    // // Check if user is indeed authenticated - if not return error
    // try {
    //     const { data } = await supa.auth.getUser(jwt)
    //     if (!data.user) {
    //         res.status(400).json({ "error_message": "Access Token is expired ! - Please login in again and/or send the latest token." });
    //         return;
    //     }
    // }
    // catch (err) {
    //     res.status(500).json({ "error_message": "Unable to connect to supabase for getting user - in ai.js", "error": err });
    //     return;
    // }


    next();
}



// For debugging - Remove in production

// router.route('/get').get(async (req, res) => {
//     let jwt = req.body.jwt;
//     const { data } = await supa.auth.getUser(jwt)
//     myJson = { data }
//     res.status(200).json(myJson);

// });

// router.route('/login').get(async (req, res) => {
//     let user = req.body.user;
//     let pass = req.body.pass;
//     let { data, error } = await supa.auth.signInWithPassword({
//         email: user,
//         password: pass,
//     });

//     myJson = { "data": data, "error": error }
//     res.status(200).json(myJson);

// });


module.exports = router;