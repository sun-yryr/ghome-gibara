const fs = require('fs');
const path = require('path');
const app = require('express')();
const home = require('google-home-notifier');
/* user config */
const hostURL = "http://192.168.10.41"
const port = 3000;
const homeDeviceName = "Google-Home-Mini-da65fcc536a9da79539c09325b43bd74";
const lang = "ja";
/* ----------- */

app.listen(port, console.log('port: ' + port));
app.get('/audio/:file', (req, res) => {
    const f = req.params.file;
    const p = path.join('audio', f);
    fs.readFile(p, (err, data) => {
        if (err)
            res.status(400).send(err.toString());
        else {
            res.setHeader('Content-Length', data.length);
            res.write(data);
            res.end();
        }
    });
});

app.get('/gmks', (req, res) => {
    const fileName = 'gomikasu.mp3'
    const mp3URL = `${hostURL}:${port}/audio/${fileName}`;
    const msg = 'Say "OK Google, Stop" to stop play music.';

    home.device(homeDeviceName, lang);
    home.play(mp3URL, () => console.log(msg));
    res.send('ok');
});

app.get('/warenijisanjizo', (req, res) => {
    const fileName = 'warenijisanjizo.mp3'
    const mp3URL = `${hostURL}:${port}/audio/${fileName}`;
    const msg = 'Say "OK Google, Stop" to stop play music.';

    home.device(homeDeviceName, lang);
    home.play(mp3URL, () => console.log(msg));
    res.send('ok');
});