import * as t from "https://deno.land/std/testing/asserts.ts";
import { Base64 } from "./Base64.js";

Deno.test("encode", () => {
  const test = new Uint8Array(256);
  for (let i = 0; i < 256; i++) {
    test[i] = i;
  }
  t.assertEquals(Base64.encode(test), "AAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltcXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fn+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+/w==");
});
Deno.test("decode", () => {
  const test = new Uint8Array(256);
  for (let i = 0; i < 256; i++) {
    test[i] = i;
  }
  const s = "AAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltcXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fn+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+/w==";
  const bin = Base64.decode(s);
  //console.log("bin", bin.length);
  //t.assertEquals(bin, test);
});
Deno.test("performance", () => {
  const size = 1024 * 1024;
  // const size = 1024 * 1024 * 64;
  const test = new Uint8Array(size);
  t.assertEquals(Base64.decode(Base64.encode(test)), test);
});
