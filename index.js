const PORT = 3000;
const express = require('express');
const app = express();
const axios = require('axios');
const cheerio = require('cheerio');

// test route welcome to api..
app.get('/', (req, res) => {
    res.json("Welcome to my API")
})

//creating global array to push data to.
const articles = [];

//news route scrapes data from bbc.com using cheerio to select 
//a tag that contains the text "Watch"
app.get('/news', (req, res) => {
    axios.get('https://www.bbc.com/news')
    .then((response) => {
        const html = response.data;
        console.log(html);
        const $ = cheerio.load(html);
        const articles = [];
// for each instance of a tag that contains the text "Watch"
// add the text and href to the articles array
        $('a:contains("Watch")', html).each(function() {
            const text = $(this).text();
            const url = $(this).attr('href');
            articles.push({
                text,
                url
            })
        })
        res.json(articles);
        // catch errors
    }).catch((err) => {
        console.log(err)
    });
})

//listen for port to see if server is running.
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
})  