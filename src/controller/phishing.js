const { Router } = require("express");
const phishingBl = require('../bl/phishing')
const routh = Router()

routh.get('/check', async (req, res) => {
   const domain = req.query.domain;
   if (!domain) return res.status(400).send();
    const  { isPhishing, url } = await phishingBl.isPhishing(domain)
    console.log("isPhishing, host: ", isPhishing, url)
    if (!url) return res.status(400).send();
    res.json({isPhishing, url})
})

module.exports = routh;
