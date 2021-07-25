# Base64

- Base64 compact library with [atob](https://developer.mozilla.org/ja/docs/Web/API/WindowOrWorkerGlobalScope/atob) and [btoa](https://developer.mozilla.org/ja/docs/Web/API/WindowOrWorkerGlobalScope/btoa). (Base64.js - 308 bytes)
- ES module for web and [Deno](https://deno.land)

## usage

```js
import { Base64 } from "https://code4fukui.github.io/Base64/Base64.js";

console.log(Base64.encode(new Uint8Array(4)));
console.log(Base64.decode("MCwwLDAsMA=="));
```
