# Base64

Base64は、小さくコンパクトなBase64エンコーダ/デコーダライブラリです。[atob](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob)と[btoa](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/btoa)を使用しています。(Base64.js - 355 bytes)

## デモ
https://code4fukui.github.io/Base64/

## 機能
- WebおよびDenoで使用できるESモジュール

## 使い方
```js
import { Base64 } from "https://code4fukui.github.io/Base64/Base64.js";

console.log(Base64.encode(new Uint8Array([1, 2, 0xfe, 0xff])));
console.log(Base64.decode("AQL+/w=="));
```

## ライセンス
MIT License