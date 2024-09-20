const PORT = 3000;
const express = require('express');
const app = express();
const axios = require('axios');
const cheerio = require('cheerio');


// list of websites to scrape.. adjust as needed
const newspapers = [
    {
    name: "theTimes",
    address: "https://www.thetimes.com/",
    },
    {
    name: "theGuardian",
    address: "https://www.theguardian.com/uk",
    },
    // {
    // name: "theHill",
    // address: "https://thehill.com/video/full-show-fed-cuts-interest-rates-joe-rogan-shocked-trump-1st-shooting-forgotten-west-wing-is-25/10057614/",
    // },
    {
    name: "theIndependent",
    address: "https://www.independent.co.uk",
    },
    {
    name: "theSun",
    address: "https://www.thesun.co.uk",
    }
]

const articles = [];
// adjust cheerio selector as needed, set to a:contains
newspapers.forEach(item => {
    axios.get(item.address)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        $('a:contains("Watch")', html).each(function() {
            const title = $(this).text();
            const url = $(this).attr('href');
            articles.push({
                title,
                url,
            })
        })
    })
})



// test route welcome to api..
app.get('/', (req, res) => {
    res.json("Welcome to my API")
})

app.get('/news', (req, res) => {
    res.json(articles)
})

//creating global array to push data to. moved to top to cover
// newspapers array.

//news route scrapes data from bbc.com using cheerio to select 
//a tag that contains the text "Watch"
// app.get('/news', (req, res) => {
//     axios.get('https://www.bbc.com/news')
//     .then((response) => {
//         const html = response.data;
//         console.log(html);
//         const $ = cheerio.load(html);
//         const articles = [];
// // for each instance of a tag that contains the text "Watch"
// // add the text and href to the articles array
//         $('a:contains("Watch")', html).each(function() {
//             const text = $(this).text();
//             const url = $(this).attr('href');
//             articles.push({
//                 text,
//                 url
//             })
//         })
//         res.json(articles);
//         // catch errors
//     }).catch((err) => {
//         console.log(err)
//     });
// })

//listen for port to see if server is running.
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
})  