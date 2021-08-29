# Base64

- Base64 compact library with [atob](https://developer.mozilla.org/ja/docs/Web/API/WindowOrWorkerGlobalScope/atob) and [btoa](https://developer.mozilla.org/ja/docs/Web/API/WindowOrWorkerGlobalScope/btoa). (Base64.js - 355 bytes)
- ES module for web and [Deno](https://deno.land)

## sample app

https://code4fukui.github.io/Base64/

## usage

```js
import { Base64 } from "https://code4fukui.github.io/Base64/Base64.js";

console.log(Base64.encode(new Uint8Array([1, 2, 0xfe, 0xff])));
console.log(Base64.decode("AQL+/w=="));
```
