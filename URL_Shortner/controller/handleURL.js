const url = require('../models/url')

function generateShortURL() {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let shortURL = '';

    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        shortURL += characters[randomIndex];
    }

    return shortURL;
}

const addNewURL = async (req, res) => {
    const body = req.body;
    const generatedUrl = generateShortURL()
    const result = await url.create({
        url : body.url,
        shortURL : generatedUrl,
        count : 0
    })
    console.log(result);
    return res.status(201).send({generatedURL : generatedUrl})
}

const getURLByShortURL = async (req, res) => {
    const shortURL = req.params.id;
    const originalURL = await url.findOne({shortURL:shortURL})
    const result = await url.findOneAndUpdate({url:originalURL.url},{count:originalURL.count+1},{new:true})
    return res.status(200).send({originalURL : originalURL.url})
}

const getAnalytics = async (req, res) => {
    const shortURL = req.params.id;
    const originalURL = await url.findOne({ shortURL: shortURL })
    console.log(originalURL);
    return res.status(200).send({ originalURL: originalURL.url, count : originalURL.count})
}

module.exports = {addNewURL, getURLByShortURL, getAnalytics}