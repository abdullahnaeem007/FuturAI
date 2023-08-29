// Required Modules
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Routes
const home = require('./routes/home');
const ai = require('./routes/ai');


const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());



// Initialize routes
app.use('/ai', ai);
app.use('/', home);
// 404 Error
app.get('*', function (req, res) {
    res.status(404).json({ "ERROR:": "404 - Not Found - Please use / for info on endpoints" });
});


// Start server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

