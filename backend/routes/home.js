const router = require('express').Router();


// Front page of the API - shows all endpoints
router.route('/').get(async (req, res) => {
    try {
        myJson = {
            "Endpoints": [{
                "Endpoint 1": "/ai/prompt for gpt 3.5 turbo",
                "Endpoint 2": "/ai/stability for stable diffusion",
            }],
            "Json inputs": [{
                "Endpoint 1": [{
                    "prompt": "string - the prompt to be used for gpt 3.5 turbo",
                    "jwt": "string - The access token you get from supabase",
                }],
                "Endpoint 2": [{
                    "prompt": "string - the prompt to be used for generating images",
                    "jwt": "string - The access token you get from supabase",
                    "type": "string - The type of image you want to generate - eg: anime, cartoon, etc",
                }],
            }]
        };
        res.status(200).json(myJson);
        return;
    }
    catch (err) {
        res.status(500).json({ "error_message": "error", "error": err });
        return;
    }

});

module.exports = router;