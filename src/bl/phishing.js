const axios = require('axios');
const { parse } =  require('node-html-parser')

class Phishing {
    constructor() {
        this.moblieHeaders = {
            'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/97.0.4692.71 Mobile/15E148 Safari/604.1'
        }
    }

    async isPhishing(url) {
        try {
            const d = new URL(url)
            const { data } = await axios.get(url, {
                headers: {
                    ...this.moblieHeaders
                }
            });
            const html = parse(data);
            const arr = html.querySelectorAll('head *')
            const length = arr.length
            console.log('arr.length: ', arr.length)
            console.log('d: ', d)
            const href = d.href
            return { url: href , isPhishing: length < 15};
        } catch (e) {
            console.error('isPhishing e: ', e)
            return {};
        }

    }
}

const phishing = new Phishing();

module.exports = phishing;
