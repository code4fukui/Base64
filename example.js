import { Base64 } from "https://code4fukui.github.io/Base64/Base64.js";

console.log(Base64.encode(new Uint8Array([1, 2, 0xfe, 0xff])));
console.log(Base64.decode("AQL+/w=="));
