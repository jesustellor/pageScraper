const PORT = 3000;
const express = require('express');
const app = express();
const axios = require('axios');
const cheerio = require('cheerio');

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
})