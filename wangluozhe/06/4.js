var et = {}
!(function () {
  var i = '25',
    s = '0',
    v = '37',
    l = 'f',
    d = '7',
    p = 'bas',
    h = 'e64',
    g = 'ode',
    w = 3
  function m(o) {
    for (var s = Zn(sn, nn, '2'), v = 0, f = o['length'], l = []; v < f; ) {
      var d =
        (A[o.charAt(v++)] << parseInt(C + s, 8)) |
        (A[o.charAt(v++)] << parseInt('1100', 2)) |
        (A[o.charAt(v++)] << 6) |
        A[o.charAt(v++)]
      l.push(
        d >> parseInt('20', 8),
        (d >> 8) & parseInt(Gn('┆बऋঠৡ६য়ঀ'), 2),
        d & parseInt(i + b, 10)
      )
    }
    return l
  }
  function I(e) {
    var a = (L, _, m(e))
    if (a[0] != w) return (error = 'error'), void 0
    var o = a[1],
      i = []
    return S(a, +2, i, +0, o), x(i) == o ? i : void 0
  }
  for (
    var y = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
      A = {},
      O = 0;
    O < 64;
    O++
  )
    A[y.charAt(O)] = O
  function S(n, e, a, o, i) {
    for (var c = n['length']; e < c; )
      (a[o++] = n[e++] ^ (i & parseInt(255, 10))),
        (i = ~(i * parseInt('10000011', 2)))
  }
  function x(t) {
    for (var r = '7', e = 0, o = 0, i = t['length']; o < i; o++)
      e = (e << 5) - e + t[o]
    return e & parseInt(v + r, 8)
  }
  function L(n) {
    var t = x(n),
      e = [w, t]
    return S(n, +0, e, +2, t), M(e)
  }
  function M(o) {
    for (var i = '7', s = 0, v = o['length'], f = []; s < v; ) {
      var p = (o[s++] << 16) | (o[s++] << parseInt('10', 8)) | o[s++]
      f.push(
        y.charAt(p >> parseInt('10010', 2)),
        y.charAt((p >> parseInt('12', 10)) & parseInt('3' + l, 16)),
        y.charAt((p >> 6) & parseInt(i + d, 8)),
        y.charAt(p & parseInt('3f', 16))
      )
    }
    return f.join('')
  }
  ;(et['base64Encode'] = M),
    (et['base64Decode'] = m),
    (et['encode'] = L),
    (et['decode'] = I)
})()

var rt = (function () {
  function v(t) {
    this['base_fileds'] = t // [4, 4, 4, 4, 1, 1, 1, 3, 2, 2, 2, 2, 2, 2, 2, 4, 2, 1]
    for (var u = 0, v = t.length; u < v; u++) this[u] = 0 // 初始化数组
  }
  return (
    (v['prototype']['toBuffer'] = function () {
      for (
        var r = this['base_fileds'], e = [], o = -1, i = 0, s = r['length'];
        i < s;
        i++
      )
        for (
          var v = this[i], f = r[i], l = (o += f);
          (e[l] = v & parseInt(255, 10)), --f != 0;

        )
          --l, (v >>= 8)
      return e
    }),
    v
  )
})()

function getSign() {
  S = new rt([4, 4, 4, 4, 1, 1, 1, 3, 2, 2, 2, 2, 2, 2, 2, 4, 2, 1])
  S[0] = 2321745343 //  ot.random() 随机值
  S[1] = 1611313000 // serverTimeNow
  S[2] = (Date.now() / 1000) >>> 0 // timeNow
  S[3] = 1297487468 // ot.strhash(navigator.userAgent)
  S[4] = 1 // ut.getPlatform()
  S[5] = 10 // ut.getBrowserIndex()
  S[6] = 5 //  ut.getPluginNum()
  S[7] = 0 // it.getMouseMove()
  S[8] = 0 // it.getMouseClick()
  S[9] = 0 // it.getMouseWhell()
  S[10] = 0 // it.getKeyDown()
  S[11] = 0 // it.getClickPos().x
  S[12] = 0 // it.getClickPos().y
  S[13] = 3684 // ut.getBrowserFeature()
  S[14] = 0
  S[15] = 0 // 固定值
  S[16] = 1 // 请求次数累加
  S[17] = 3 // 固定值
  // console.log(S)
  var n = S.toBuffer()
  return et.encode(n)
}
