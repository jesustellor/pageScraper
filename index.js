const PORT = 3000;
const express = require('express');
const app = express();
const axios = require('axios');
const cheerio = require('cheerio');

app.get('/', (req, res) => {
    res.json("Welcome to my API")
})

const articles = [];

app.get('/news', (req, res) => {
    axios.get('https://www.bbc.com/news')
    .then((response) => {
        const html = response.data;
        console.log(html);
        const $ = cheerio.load(html);
        const articles = [];
        $('a:contains("Watch")', html).each(function() {
            const text = $(this).text();
            const url = $(this).attr('href');
            articles.push({
                text,
                url
            })
        })
        res.json(articles);
    }).catch((err) => {
        console.log(err)
    });
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
})  