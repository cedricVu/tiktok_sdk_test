import express from 'express';
import * as js_sdk from 'business_api_client';
const app = express()
const port = 3000

let api = new js_sdk.ToolApi()
let advertiserId = "Your_advertiser_id";
let accessToken = "Your_accessToken_id";

app.get('/', (req, res) => {
    api.toolLanguage(advertiserId, accessToken, (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            console.log('toolLanguage called successfully. Returned data: ' + JSON.stringify(data));
        }
    });
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})