const app = require('./src/app');
const port = process.env.$PORT || process.env.PORT || 8080;



app.listen(port, () => {
    console.log(`process.env.$PORT || process.env.PORT || 8080 ${process.env.$PORT || process.env.PORT || 8080}`)
})
