class Base64 {
  static encode(bin) {
    const ss = [];
    bin.map(b => ss.push(String.fromCharCode(b)));
    return btoa(ss.join(""));
  }
  static decode(text) {
    const s = atob(text);
    const res = new Uint8Array(s.length);
    for (let i = 0; i < s.length; i++) {
      res[i] = s.charCodeAt(i);
    }
    return res;
  }
}

export { Base64 };
