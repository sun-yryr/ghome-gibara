# ghome-gibara
ゴミカス，○ね！！！！！！！ （cv.御伽原江良）

# Usage

## mdns

Modify the following file `node_modules/mdns/lib/browser.js`

Find this line:

```js
Browser.defaultResolverSequence = [
  rst.DNSServiceResolve(), 'DNSServiceGetAddrInfo' in dns_sd ? rst.DNSServiceGetAddrInfo() : rst.getaddrinfo()
, rst.makeAddressesUnique()
];
```

And change to:

```js
Browser.defaultResolverSequence = [
  rst.DNSServiceResolve(), 'DNSServiceGetAddrInfo' in dns_sd ? rst.DNSServiceGetAddrInfo() : rst.getaddrinfo({families:[4]})
, rst.makeAddressesUnique()
];
```

## Add Voices

Please prepare mp3 file as `hoge.mp3`

1. Put `hoge.mp3` in the `/audio` directory
1. Add the following code to the next file `/server.js`

```js
// 第一引数には / から始まるパスを指定する
app.get('/', (req, res) => {
    const fileName = 'gomikasu.mp3'  // 1で追加したmp3ファイル名
    const mp3URL = `${hostURL}:${port}/audio/${fileName}`;
    const msg = 'Say "OK Google, Stop" to stop play music.';

    home.device(homeDeviceName, lang);
    home.play(mp3URL, () => console.log(msg));
    res.send('ok');
});
```
3. Please create pull request