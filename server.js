const fs = require('fs');
const path = require('path');
const app = require('express')();
const port = 3000;
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