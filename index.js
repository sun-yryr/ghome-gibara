const home = require('google-home-notifier');
const mp3URL = 'http://192.168.10.49:3000/audio/gomikasu.mp3';
const msg = 'Say "OK Google, Stop" to stop play music.';

home.device("Google-Home-Mini-da65fcc536a9da79539c09325b43bd74", 'ja'); // 研究室
home.play(mp3URL, () => console.log(msg));