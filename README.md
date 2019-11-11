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

## google-tts-api

Update to the latest version.

Modify the following file `node_modules/google-home-notifier/package.json`

Find this line: `"google-tts-api": "https://github.com/darrencruse/google-tts/tarball/british-voice",`

And change to: `"google-tts-api": "latest",`

```shell
cd node_modules/google-home-notifier
npm update google-tts-api
```