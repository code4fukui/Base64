const B64S = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
const B64 = new Uint8Array(B64S.length);
for (let i = 0; i < B64S.length; i++) {
  B64[i] = B64S[i].charCodeAt(0);
}

const encode = (bin) => {
  const res = new Uint8Array(bin.length + bin.length / 2 + 3);
  let i = 0;
  let r = 0;
  const len = bin.length;
  while (i < len) {
    const c1 = bin[i++];
    const c2 = bin[i++];
    const c3 = bin[i++];
    
    const e1 = c1 >> 2;
    const e2 = ((c1 & 3) << 4) | (c2 >> 4);
    let e3 = ((c2 & 15) << 2) | (c3 >> 6);
    let e4 = c3 & 63;

    if (isNaN(c2)) {
      e3 = e4 = 64;
    } else if (isNaN(c3)) {
      e4 = 64;
    }
    res[r++] = B64[e1];
    res[r++] = B64[e2];
    res[r++] = B64[e3];
    res[r++] = B64[e4];
  }
  return new TextDecoder().decode(new Uint8Array(res.buffer, 0, r));
};

const decode = (s) => {
  s = s.replace(/[^A-Za-z0-9\+\/\=]/g, "");
  const res = new Uint8Array(s.length);

  let i = 0;
  let r = 0;
  const len = s.length;
  while (i < len) {
    const e1 = B64S.indexOf(s[i++]);
    const e2 = B64S.indexOf(s[i++]);
    const e3 = B64S.indexOf(s[i++]);
    const e4 = B64S.indexOf(s[i++]);

    const c1 = (e1 << 2) | (e2 >> 4);
    const c2 = ((e2 & 15) << 4) | (e3 >> 2);
    const c3 = ((e3 & 3) << 6) | e4;

    res[r++] = c1;
    if (e3 != 64) {
      res[r++] = c2;
    }
    if (e4 != 64) {
      res[r++] = c3;
    }
  }
  return new Uint8Array(res.buffer, 0, r);
}

export const Base64 = { encode, decode };
