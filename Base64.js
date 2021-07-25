class Base64 {
  static encode(bin) {
    return btoa(bin);
  }
  static decode(text) {
    const s = atob(text);
    const ss = s.split(",");
    const res = new Uint8Array(ss.length);
    for (let i = 0; i < ss.length; i++) {
      res[i] = parseInt(ss[i]);
    }
    return res;
  }
}

export { Base64 };
