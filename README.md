# Base64

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

Base64 is a compact library for Base64 encoding and decoding, using [atob](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob) and [btoa](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/btoa). (Base64.js - 355 bytes)

## Demo
https://code4fukui.github.io/Base64/

## Features
- ES module for web and [Deno](https://deno.land)

## Usage
```js
import { Base64 } from "https://code4fukui.github.io/Base64/Base64.js";

console.log(Base64.encode(new Uint8Array([1, 2, 0xfe, 0xff])));
console.log(Base64.decode("AQL+/w=="));
```

## License
MIT License