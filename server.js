const fs = require('fs');
const path = require('path');
const app = require('express')();
const port = 3000;
const home = require('google-home-notifier');

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

app.get('/', (req, res) => {
    const mp3URL = 'http://192.168.10.41:3000/audio/gomikasu.mp3';
    const msg = 'Say "OK Google, Stop" to stop play music.';

    home.device("Google-Home-Mini-da65fcc536a9da79539c09325b43bd74", 'ja'); // 研究室
    home.play(mp3URL, () => console.log(msg));
    res.send('ok');
});
