# Base64

Base64は、[atob](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob) と [btoa](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/btoa) を使用した、Base64エンコードおよびデコードのためのコンパクトなライブラリです。(Base64.js - 355バイト)

## デモ
https://code4fukui.github.io/Base64/

## 特徴
- Webおよび [Deno](https://deno.land) 向けのESモジュール

## 使い方
```js
import { Base64 } from "https://code4fukui.github.io/Base64/Base64.js";

console.log(Base64.encode(new Uint8Array([1, 2, 0xfe, 0xff])));
console.log(Base64.decode("AQL+/w=="));
```

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) をご覧ください。
