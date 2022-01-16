// https://www.cnblogs.com/ikdl/p/15668271.html
// Hook debugger
Function.prototype.constructor_ = Function.prototype.constructor
Function.prototype.constructor = function (x) {
  if (x == 'debugger') {
    return function () {}
  }
  return Function.prototype.constructor_(x)
}
// Hook setInterval
window.setInterval_ = setInterval
setInterval = function (x1, x2) {
  if (x2 != 0x7d0) {
    return window.setInterval_(x1, x2)
  }
}
;(function () {
  //严谨模式 检查所有错误
  'use strict'
  //window 为要 hook 的对象，这里是 hook 的 _signature
  var _signatureTemp = ''
  Object.defineProperty(window, '_signature', {
    //hook set 方法也就是赋值的方法
    set: function (val) {
      console.log('Hook 捕获到 _signature 设置->', val)
      debugger
      _signatureTemp = val
      return val
    },
    //hook get 方法也就是取值的方法s
    get: function () {
      return _signatureTemp
    }
  })
})()

// var window = {}

var iｉl = 'jsjiami.com.v6'
console.log(iｉl)
// window['setInterval'](function () {
//   if (typeof iｉl == 'undefined' || iｉl != 'jsjiami.com.v6') {
//     var Ilil11iI = []
//     while (Ilil11iI['length'] > -1) {
//       Ilil11iI['push'](Ilil11iI['length'] ^ 0x2)
//     }
//   }
//   iliI1lli()
// }, 0x7d0)
;(function () {
  var iiIIiil = (function () {
    var IllIlIlI = !![]
    return function (I1i1ii1, lI11i1lI) {
      var illIIIl = IllIlIlI
        ? function () {
            if (lI11i1lI) {
              var I111lI1 = lI11i1lI['apply'](I1i1ii1, arguments)
              lI11i1lI = null
              return I111lI1
            }
          }
        : function () {}
      IllIlIlI = ![]
      return illIIIl
    }
  })()
  var l1liii11 = (function () {
    var ilI1ilI = !![]
    return function (iIliII1l, IlliIIi1) {
      var li11lII1 = ilI1ilI
        ? function () {
            if (IlliIIi1) {
              var li11lIl1 = IlliIIi1['apply'](iIliII1l, arguments)
              IlliIIi1 = null
              return li11lIl1
            }
          }
        : function () {}
      ilI1ilI = ![]
      return li11lII1
    }
  })()

  window['sign'] = function sign() {
    return Date['parse'](new Date())['toString']()
  }
  window['byted_acrawler'] = function byted_acrawler() {
    return IIl1llI1(sign())
  }
  ;(function () {
    // 函数检测
    // ;(function () {
    //   iiIIiil(this, function () {
    //     var ii1iill = new RegExp('function *\\( *\\)')
    //     var iliIIil = new RegExp(
    //       '\\+\\+ *(?:(?:[a-z0-9A-Z_]){1,8}|(?:\\b|\\d)[a-z0-9_]{1,8}(?:\\b|\\d))',
    //       '\x69'
    //     )
    //     var IIIi1iii = iliI1lli('init')
    //     if (
    //       !ii1iill['test'](IIIi1iii + 'chain') ||
    //       !iliIIil['test'](IIIi1iii + 'input')
    //     ) {
    //       IIIi1iii('\x30')
    //     } else {
    //       iliI1lli()
    //     }
    //   })()
    // })()
    //禁用console.log();
    // var lliIIi1I = l1liii11(this, function () {
    //   var IlII1li1 = function () {}
    //   var IIlIIiii
    //   try {
    //     var IiIiIlil = Function(
    //       'return (function() {}.constructor("return this")( ));'
    //     )
    //     IIlIIiii = IiIiIlil()
    //   } catch (liilIIii) {
    //     IIlIIiii = window
    //   }
    //   if (!IIlIIiii['console']) {
    //     IIlIIiii['console'] = (function (IlII1li1) {
    //       var llii1li1 = {}
    //       llii1li1['log'] = IlII1li1
    //       llii1li1['warn'] = IlII1li1
    //       llii1li1['debug'] = IlII1li1
    //       llii1li1['info'] = IlII1li1
    //       llii1li1['error'] = IlII1li1
    //       llii1li1['exception'] = IlII1li1
    //       llii1li1['trace'] = IlII1li1
    //       return llii1li1
    //     })(IlII1li1)
    //   } else {
    //     IIlIIiii['console']['log'] = IlII1li1
    //     IIlIIiii['console']['warn'] = IlII1li1
    //     IIlIIiii['console']['debug'] = IlII1li1
    //     IIlIIiii['console']['info'] = IlII1li1
    //     IIlIIiii['console']['error'] = IlII1li1
    //     IIlIIiii['console']['exception'] = IlII1li1
    //     IIlIIiii['console']['trace'] = IlII1li1
    //   }
    // })
    // lliIIi1I()
    ;('use strict')
    var i1Iiil1 = ''
    Object['defineProperty'](window, 'code', {
      set: function (iil1l1I1) {
        i1Iiil1 = iil1l1I1
        return iil1l1I1
      },
      get: function () {
        return i1Iiil1
      }
    })
  })()
  ;(function () {
    'use strict'
    var i1I1i1li = ''
    Object['defineProperty'](window, '_signature', {
      set: function (illllli1) {
        i1I1i1li = illllli1
        return illllli1
      },
      get: function () {
        return i1I1i1li
      }
    })
  })()

  var iiil1 = 0x0
  var l11il1l1 = ''
  var ii1Ii = 0x8

  function i1Il11i(iiIll1i) {
    return lIIiiI1l(iIIiIlli(IIl111li(iiIll1i), iiIll1i['length'] * ii1Ii))
  }

  function I1lIIlil(l11l1iIi) {
    return I1i11ll(iIIiIlli(IIl111li(l11l1iIi), l11l1iIi['length'] * ii1Ii))
  }

  function lllIIiI(IIi1lIil) {
    return l1IlIlIi(iIIiIlli(IIl111li(IIi1lIil), IIi1lIil['length'] * ii1Ii))
  }

  function IilIlI1i(ll1l1ii1, Ilil1i11) {
    return lIIiiI1l(Iii1I1il(ll1l1ii1, Ilil1i11))
  }

  function llII11iI(IllliliI, IIIIilI) {
    return I1i11ll(Iii1I1il(IllliliI, IIIIilI))
  }

  function l11l1iil(liii1iI1, lilii111) {
    return l1IlIlIi(Iii1I1il(liii1iI1, lilii111))
  }
  ;(function () {
    // 检测toString，如果失败或者错误就返回window.signs()
    // try {
    //   let iI1lil1i = eval
    //   if (
    //     iI1lil1i + '' == 'function eval() { [native code] }' &&
    //     iI1lil1i['toString']() + '' == 'function eval() { [native code] }' &&
    //     iI1lil1i['toString'] + '' == 'function toString() { [native code] }'
    //   ) {
    //     window['code'] = 'gnature = window.byted_acrawler(window.sign())'
    //   } else {
    //     window['code'] = 'gnature = window.byted_acrawlers(window.signs())'
    //   }
    // } catch (i1iIliIi) {
    //   window['code'] = 'gnature = window.byted_acrawlers(window.signs())'
    // }
    window['code'] = 'gnature = window.byted_acrawler(window.sign())'
  })()

  function lIliIIII() {
    return i1Il11i('abc') == '900150983cd24fb0d6963f7d28e17f72'
  }

  function iIIiIlli(lIliI1I1, lllI11lI) {
    lIliI1I1[lllI11lI >> 0x5] |= 0x80 << lllI11lI % 0x20
    lIliI1I1[(((lllI11lI + 0x40) >>> 0x9) << 0x4) + 0xe] = lllI11lI
    var ill1Ill = 0x67452301
    var iI1l1iIi = -0x10325477
    var I1l1iI1 = -0x67452302
    var IIlili = 0x10325476
    for (var lii11ii = 0x0; lii11ii < lIliI1I1['length']; lii11ii += 0x10) {
      var IlIIIIl1 = ill1Ill
      var il1I1li = iI1l1iIi
      var lilIlIi1 = I1l1iI1
      var lli11i1i = IIlili
      ill1Ill = iiiIillI(
        ill1Ill,
        iI1l1iIi,
        I1l1iI1,
        IIlili,
        lIliI1I1[lii11ii + 0x0],
        0x7,
        -0x28955b88
      )
      IIlili = iiiIillI(
        IIlili,
        ill1Ill,
        iI1l1iIi,
        I1l1iI1,
        lIliI1I1[lii11ii + 0x1],
        0xc,
        -0x173848aa
      )
      I1l1iI1 = iiiIillI(
        I1l1iI1,
        IIlili,
        ill1Ill,
        iI1l1iIi,
        lIliI1I1[lii11ii + 0x2],
        0x11,
        0x242070db
      )
      iI1l1iIi = iiiIillI(
        iI1l1iIi,
        I1l1iI1,
        IIlili,
        ill1Ill,
        lIliI1I1[lii11ii + 0x3],
        0x16,
        -0x3e423112
      )
      ill1Ill = iiiIillI(
        ill1Ill,
        iI1l1iIi,
        I1l1iI1,
        IIlili,
        lIliI1I1[lii11ii + 0x4],
        0x7,
        -0xa83f051
      )
      IIlili = iiiIillI(
        IIlili,
        ill1Ill,
        iI1l1iIi,
        I1l1iI1,
        lIliI1I1[lii11ii + 0x5],
        0xc,
        0x4787c62a
      )
      I1l1iI1 = iiiIillI(
        I1l1iI1,
        IIlili,
        ill1Ill,
        iI1l1iIi,
        lIliI1I1[lii11ii + 0x6],
        0x11,
        -0x57cfb9ed
      )
      iI1l1iIi = iiiIillI(
        iI1l1iIi,
        I1l1iI1,
        IIlili,
        ill1Ill,
        lIliI1I1[lii11ii + 0x7],
        0x16,
        -0x2b96aff
      )
      ill1Ill = iiiIillI(
        ill1Ill,
        iI1l1iIi,
        I1l1iI1,
        IIlili,
        lIliI1I1[lii11ii + 0x8],
        0x7,
        0x698098d8
      )
      IIlili = iiiIillI(
        IIlili,
        ill1Ill,
        iI1l1iIi,
        I1l1iI1,
        lIliI1I1[lii11ii + 0x9],
        0xc,
        -0x74bb0851
      )
      I1l1iI1 = iiiIillI(
        I1l1iI1,
        IIlili,
        ill1Ill,
        iI1l1iIi,
        lIliI1I1[lii11ii + 0xa],
        0x11,
        -0xa44f
      )
      iI1l1iIi = iiiIillI(
        iI1l1iIi,
        I1l1iI1,
        IIlili,
        ill1Ill,
        lIliI1I1[lii11ii + 0xb],
        0x16,
        -0x76a32842
      )
      ill1Ill = iiiIillI(
        ill1Ill,
        iI1l1iIi,
        I1l1iI1,
        IIlili,
        lIliI1I1[lii11ii + 0xc],
        0x7,
        0x6b901122
      )
      IIlili = iiiIillI(
        IIlili,
        ill1Ill,
        iI1l1iIi,
        I1l1iI1,
        lIliI1I1[lii11ii + 0xd],
        0xc,
        -0x2678e6d
      )
      I1l1iI1 = iiiIillI(
        I1l1iI1,
        IIlili,
        ill1Ill,
        iI1l1iIi,
        lIliI1I1[lii11ii + 0xe],
        0x11,
        -0x5986bc72
      )
      iI1l1iIi = iiiIillI(
        iI1l1iIi,
        I1l1iI1,
        IIlili,
        ill1Ill,
        lIliI1I1[lii11ii + 0xf],
        0x16,
        0x49b40821
      )
      ill1Ill = lillIii1(
        ill1Ill,
        iI1l1iIi,
        I1l1iI1,
        IIlili,
        lIliI1I1[lii11ii + 0x1],
        0x5,
        -0x9e1da9e
      )
      IIlili = lillIii1(
        IIlili,
        ill1Ill,
        iI1l1iIi,
        I1l1iI1,
        lIliI1I1[lii11ii + 0x6],
        0x9,
        -0x3fbf4cc0
      )
      I1l1iI1 = lillIii1(
        I1l1iI1,
        IIlili,
        ill1Ill,
        iI1l1iIi,
        lIliI1I1[lii11ii + 0xb],
        0xe,
        0x265e5a51
      )
      iI1l1iIi = lillIii1(
        iI1l1iIi,
        I1l1iI1,
        IIlili,
        ill1Ill,
        lIliI1I1[lii11ii + 0x0],
        0x14,
        -0x16493856
      )
      ill1Ill = lillIii1(
        ill1Ill,
        iI1l1iIi,
        I1l1iI1,
        IIlili,
        lIliI1I1[lii11ii + 0x5],
        0x5,
        -0x29d0efa3
      )
      IIlili = lillIii1(
        IIlili,
        ill1Ill,
        iI1l1iIi,
        I1l1iI1,
        lIliI1I1[lii11ii + 0xa],
        0x9,
        0x2441453
      )
      I1l1iI1 = lillIii1(
        I1l1iI1,
        IIlili,
        ill1Ill,
        iI1l1iIi,
        lIliI1I1[lii11ii + 0xf],
        0xe,
        -0x275e197f
      )
      iI1l1iIi = lillIii1(
        iI1l1iIi,
        I1l1iI1,
        IIlili,
        ill1Ill,
        lIliI1I1[lii11ii + 0x4],
        0x14,
        -0x182c0438
      )
      ill1Ill = lillIii1(
        ill1Ill,
        iI1l1iIi,
        I1l1iI1,
        IIlili,
        lIliI1I1[lii11ii + 0x9],
        0x5,
        0x21e1cde6
      )
      IIlili = lillIii1(
        IIlili,
        ill1Ill,
        iI1l1iIi,
        I1l1iI1,
        lIliI1I1[lii11ii + 0xe],
        0x9,
        -0x3cc8f82a
      )
      I1l1iI1 = lillIii1(
        I1l1iI1,
        IIlili,
        ill1Ill,
        iI1l1iIi,
        lIliI1I1[lii11ii + 0x3],
        0xe,
        -0xb2af279
      )
      iI1l1iIi = lillIii1(
        iI1l1iIi,
        I1l1iI1,
        IIlili,
        ill1Ill,
        lIliI1I1[lii11ii + 0x8],
        0x14,
        0x455a14ed
      )
      ill1Ill = lillIii1(
        ill1Ill,
        iI1l1iIi,
        I1l1iI1,
        IIlili,
        lIliI1I1[lii11ii + 0xd],
        0x5,
        -0x561c16fb
      )
      IIlili = lillIii1(
        IIlili,
        ill1Ill,
        iI1l1iIi,
        I1l1iI1,
        lIliI1I1[lii11ii + 0x2],
        0x9,
        -0x3105c08
      )
      I1l1iI1 = lillIii1(
        I1l1iI1,
        IIlili,
        ill1Ill,
        iI1l1iIi,
        lIliI1I1[lii11ii + 0x7],
        0xe,
        0x676f02d9
      )
      iI1l1iIi = lillIii1(
        iI1l1iIi,
        I1l1iI1,
        IIlili,
        ill1Ill,
        lIliI1I1[lii11ii + 0xc],
        0x14,
        -0x72d5b376
      )
      ill1Ill = liIiiiiI(
        ill1Ill,
        iI1l1iIi,
        I1l1iI1,
        IIlili,
        lIliI1I1[lii11ii + 0x5],
        0x4,
        -0x5c6be
      )
      IIlili = liIiiiiI(
        IIlili,
        ill1Ill,
        iI1l1iIi,
        I1l1iI1,
        lIliI1I1[lii11ii + 0x8],
        0xb,
        -0x788e097f
      )
      I1l1iI1 = liIiiiiI(
        I1l1iI1,
        IIlili,
        ill1Ill,
        iI1l1iIi,
        lIliI1I1[lii11ii + 0xb],
        0x10,
        0x6d9d6122
      )
      iI1l1iIi = liIiiiiI(
        iI1l1iIi,
        I1l1iI1,
        IIlili,
        ill1Ill,
        lIliI1I1[lii11ii + 0xe],
        0x17,
        -0x21ac7f4
      )
      ill1Ill = liIiiiiI(
        ill1Ill,
        iI1l1iIi,
        I1l1iI1,
        IIlili,
        lIliI1I1[lii11ii + 0x1],
        0x4,
        -0x5b4115bc
      )
      IIlili = liIiiiiI(
        IIlili,
        ill1Ill,
        iI1l1iIi,
        I1l1iI1,
        lIliI1I1[lii11ii + 0x4],
        0xb,
        0x4bdecfa9
      )
      I1l1iI1 = liIiiiiI(
        I1l1iI1,
        IIlili,
        ill1Ill,
        iI1l1iIi,
        lIliI1I1[lii11ii + 0x7],
        0x10,
        -0x944b4a0
      )
      iI1l1iIi = liIiiiiI(
        iI1l1iIi,
        I1l1iI1,
        IIlili,
        ill1Ill,
        lIliI1I1[lii11ii + 0xa],
        0x17,
        -0x41404390
      )
      ill1Ill = liIiiiiI(
        ill1Ill,
        iI1l1iIi,
        I1l1iI1,
        IIlili,
        lIliI1I1[lii11ii + 0xd],
        0x4,
        0x289b7ec6
      )
      IIlili = liIiiiiI(
        IIlili,
        ill1Ill,
        iI1l1iIi,
        I1l1iI1,
        lIliI1I1[lii11ii + 0x0],
        0xb,
        -0x155ed806
      )
      I1l1iI1 = liIiiiiI(
        I1l1iI1,
        IIlili,
        ill1Ill,
        iI1l1iIi,
        lIliI1I1[lii11ii + 0x3],
        0x10,
        -0x2b10cf67
      )
      iI1l1iIi = liIiiiiI(
        iI1l1iIi,
        I1l1iI1,
        IIlili,
        ill1Ill,
        lIliI1I1[lii11ii + 0x6],
        0x17,
        0x4881d03
      )
      ill1Ill = liIiiiiI(
        ill1Ill,
        iI1l1iIi,
        I1l1iI1,
        IIlili,
        lIliI1I1[lii11ii + 0x9],
        0x4,
        -0x262b2fc7
      )
      IIlili = liIiiiiI(
        IIlili,
        ill1Ill,
        iI1l1iIi,
        I1l1iI1,
        lIliI1I1[lii11ii + 0xc],
        0xb,
        -0x1924661b
      )
      I1l1iI1 = liIiiiiI(
        I1l1iI1,
        IIlili,
        ill1Ill,
        iI1l1iIi,
        lIliI1I1[lii11ii + 0xf],
        0x10,
        0x1fa27cf8
      )
      iI1l1iIi = liIiiiiI(
        iI1l1iIi,
        I1l1iI1,
        IIlili,
        ill1Ill,
        lIliI1I1[lii11ii + 0x2],
        0x17,
        -0x3b53a99b
      )
      ill1Ill = Ili1iIll(
        ill1Ill,
        iI1l1iIi,
        I1l1iI1,
        IIlili,
        lIliI1I1[lii11ii + 0x0],
        0x6,
        -0xbd6ddbc
      )
      IIlili = Ili1iIll(
        IIlili,
        ill1Ill,
        iI1l1iIi,
        I1l1iI1,
        lIliI1I1[lii11ii + 0x7],
        0xa,
        0x432aff97
      )
      I1l1iI1 = Ili1iIll(
        I1l1iI1,
        IIlili,
        ill1Ill,
        iI1l1iIi,
        lIliI1I1[lii11ii + 0xe],
        0xf,
        -0x546bdc59
      )
      iI1l1iIi = Ili1iIll(
        iI1l1iIi,
        I1l1iI1,
        IIlili,
        ill1Ill,
        lIliI1I1[lii11ii + 0x5],
        0x15,
        -0x36c5fc7
      )
      ill1Ill = Ili1iIll(
        ill1Ill,
        iI1l1iIi,
        I1l1iI1,
        IIlili,
        lIliI1I1[lii11ii + 0xc],
        0x6,
        0x655b59c3
      )
      IIlili = Ili1iIll(
        IIlili,
        ill1Ill,
        iI1l1iIi,
        I1l1iI1,
        lIliI1I1[lii11ii + 0x3],
        0xa,
        -0x70f3336e
      )
      I1l1iI1 = Ili1iIll(
        I1l1iI1,
        IIlili,
        ill1Ill,
        iI1l1iIi,
        lIliI1I1[lii11ii + 0xa],
        0xf,
        -0x100b83
      )
      iI1l1iIi = Ili1iIll(
        iI1l1iIi,
        I1l1iI1,
        IIlili,
        ill1Ill,
        lIliI1I1[lii11ii + 0x1],
        0x15,
        -0x7a7ba22f
      )
      ill1Ill = Ili1iIll(
        ill1Ill,
        iI1l1iIi,
        I1l1iI1,
        IIlili,
        lIliI1I1[lii11ii + 0x8],
        0x6,
        0x6fa87e4f
      )
      IIlili = Ili1iIll(
        IIlili,
        ill1Ill,
        iI1l1iIi,
        I1l1iI1,
        lIliI1I1[lii11ii + 0xf],
        0xa,
        -0x1d31920
      )
      I1l1iI1 = Ili1iIll(
        I1l1iI1,
        IIlili,
        ill1Ill,
        iI1l1iIi,
        lIliI1I1[lii11ii + 0x6],
        0xf,
        -0x5cfebcec
      )
      iI1l1iIi = Ili1iIll(
        iI1l1iIi,
        I1l1iI1,
        IIlili,
        ill1Ill,
        lIliI1I1[lii11ii + 0xd],
        0x15,
        0x4e0811a1
      )
      ill1Ill = Ili1iIll(
        ill1Ill,
        iI1l1iIi,
        I1l1iI1,
        IIlili,
        lIliI1I1[lii11ii + 0x4],
        0x6,
        -0x8ac817e
      )
      IIlili = Ili1iIll(
        IIlili,
        ill1Ill,
        iI1l1iIi,
        I1l1iI1,
        lIliI1I1[lii11ii + 0xb],
        0xa,
        -0x42c50dcb
      )
      I1l1iI1 = Ili1iIll(
        I1l1iI1,
        IIlili,
        ill1Ill,
        iI1l1iIi,
        lIliI1I1[lii11ii + 0x2],
        0xf,
        0x2ad7d2bb
      )
      iI1l1iIi = Ili1iIll(
        iI1l1iIi,
        I1l1iI1,
        IIlili,
        ill1Ill,
        lIliI1I1[lii11ii + 0x9],
        0x15,
        -0x14792c6f
      )
      ill1Ill = l111i1I(ill1Ill, IlIIIIl1)
      iI1l1iIi = l111i1I(iI1l1iIi, il1I1li)
      I1l1iI1 = l111i1I(I1l1iI1, lilIlIi1)
      IIlili = l111i1I(IIlili, lli11i1i)
    }
    return Array(ill1Ill, iI1l1iIi, I1l1iI1, IIlili)
  }

  function l1Ii1ili(IIl1i1ii, lI1li11l, lIll1lIi, ilIii1, ll11l1, I111ilI1) {
    return l111i1I(
      Il1111lI(
        l111i1I(l111i1I(lI1li11l, IIl1i1ii), l111i1I(ilIii1, I111ilI1)),
        ll11l1
      ),
      lIll1lIi
    )
  }

  function iiiIillI(
    lI1lIll,
    iI1I1i11,
    iI1IilI,
    IIll1Il,
    lIiIIi,
    ii1Il1Ii,
    illlI11l
  ) {
    return l1Ii1ili(
      (iI1I1i11 & iI1IilI) | (~iI1I1i11 & IIll1Il),
      lI1lIll,
      iI1I1i11,
      lIiIIi,
      ii1Il1Ii,
      illlI11l
    )
  }

  function lillIii1(
    Il1Il11,
    iI1IiIi,
    IliilIl,
    i11l111I,
    I1II1il1,
    liiiIl1,
    ll1Il1ll
  ) {
    return l1Ii1ili(
      (iI1IiIi & i11l111I) | (IliilIl & ~i11l111I),
      Il1Il11,
      iI1IiIi,
      I1II1il1,
      liiiIl1,
      ll1Il1ll
    )
  }

  function liIiiiiI(
    I1ii11Il,
    lIiI1Ili,
    ii11lili,
    ll1liiiI,
    lIIIl11l,
    lI1II1Il,
    lliiiI
  ) {
    return l1Ii1ili(
      lIiI1Ili ^ ii11lili ^ ll1liiiI,
      I1ii11Il,
      lIiI1Ili,
      lIIIl11l,
      lI1II1Il,
      lliiiI
    )
  }

  function Ili1iIll(
    ii11lIll,
    iIiilli1,
    IIIlli1,
    iiIl1iII,
    Iillilll,
    lIIiI1II,
    iiiIlIl1
  ) {
    return l1Ii1ili(
      IIIlli1 ^ (iIiilli1 | ~iiIl1iII),
      ii11lIll,
      iIiilli1,
      Iillilll,
      lIIiI1II,
      iiiIlIl1
    )
  }

  function Iii1I1il(l11ll1ll, IIlii1lI) {
    var Il1IlI1i = IIl111li(l11ll1ll)
    if (Il1IlI1i['length'] > 0x10)
      Il1IlI1i = iIIiIlli(Il1IlI1i, l11ll1ll['length'] * ii1Ii)
    var IiiiIlII = Array(0x10),
      llIii11l = Array(0x10)
    for (var i1liIi = 0x0; i1liIi < 0x10; i1liIi++) {
      IiiiIlII[i1liIi] = Il1IlI1i[i1liIi] ^ 0x36363636
      llIii11l[i1liIi] = Il1IlI1i[i1liIi] ^ 0x5c5c5c5c
    }
    var ilIl1I1i = iIIiIlli(
      IiiiIlII['concat'](IIl111li(IIlii1lI)),
      0x200 + IIlii1lI['length'] * ii1Ii
    )
    return iIIiIlli(llIii11l['concat'](ilIl1I1i), 0x200 + 0x80)
  }

  function l111i1I(IIllIi1l, IIllI1l1) {
    var IIll1I11 = (IIllIi1l & 0xffff) + (IIllI1l1 & 0xffff)
    var i1iiiiI = (IIllIi1l >> 0x10) + (IIllI1l1 >> 0x10) + (IIll1I11 >> 0x10)
    return (i1iiiiI << 0x10) | (IIll1I11 & 0xffff)
  }

  function IIl1llI1(Iiilii1i) {
    return i1Il11i(Iiilii1i)
  }
  // 检测 setInterval 方法
  //   ;(function () {
  //     try {
  //       var lI1IlIli = window['setInterval']
  //       gcdw = setInterval
  //       if (
  //         gcdw + '' == 'function setInterval() { [native code] }' &&
  //         gcdw['toString']() + '' == 'function setInterval() { [native code] }' &&
  //         gcdw['toString'] + '' == 'function toString() { [native code] }'
  //       ) {
  //         window['code'] = 'gnature = window.byted_acrawler(window.sign())'
  //       } else {
  //         window['code'] = 'gnature = window.byted_acrawlers(window.signs())'
  //       }
  //     } catch (i1lIill) {
  //       window['code'] = 'gnature = window.byted_acrawlers(window.signs())'
  //     }
  //   })()

  function Il1111lI(IilIiii1, iiI1i1i1) {
    return (IilIiii1 << iiI1i1i1) | (IilIiii1 >>> (0x20 - iiI1i1i1))
  }

  function IIl111li(lIiIIIi) {
    var IIli1i1 = Array()
    var lIliI1i1 = (0x1 << ii1Ii) - 0x1
    for (
      var lIiiil1 = 0x0;
      lIiiil1 < lIiIIIi['length'] * ii1Ii;
      lIiiil1 += ii1Ii
    )
      IIli1i1[lIiiil1 >> 0x5] |=
        (lIiIIIi['charCodeAt'](lIiiil1 / ii1Ii) & lIliI1i1) << lIiiil1 % 0x20
    return IIli1i1
  }

  function l1IlIlIi(IIIiliII) {
    var I1l1III1 = ''
    var llIi1il1 = (0x1 << ii1Ii) - 0x1
    for (
      var iIii1ll = 0x0;
      iIii1ll < IIIiliII['length'] * 0x20;
      iIii1ll += ii1Ii
    )
      I1l1III1 += String['fromCharCode'](
        (IIIiliII[iIii1ll >> 0x5] >>> iIii1ll % 0x20) & llIi1il1
      )
    return I1l1III1
  }

  function IIlIliii(II1, iIIiIIi1) {
    // try {
    //   href = window['document']['location']['href']
    //   check_screen = screen['availHeight']
    //   window['code'] = 'gnature = window.byted_acrawler(window.sign())'
    //   return ''
    // } catch (I1IiI1il) {
    //   window['code'] = 'gnature = window.byted_acrawlers(window.signs())'
    //   return ''
    // }
    window['code'] = 'gnature = window.byted_acrawler(window.sign())'
  }

  function lIIiiI1l(lilll1I1) {
    var ililI1i = iiil1 ? '0123456789ABCDEF' : '0123456789abcdef'
    var Iii1iiIl = ''
    for (var Illi1ill = 0x0; Illi1ill < lilll1I1['length'] * 0x4; Illi1ill++) {
      Iii1iiIl +=
        ililI1i['charAt'](
          (lilll1I1[Illi1ill >> 0x2] >> ((Illi1ill % 0x4) * 0x8 + 0x4)) & 0xf
        ) +
        ililI1i['charAt'](
          (lilll1I1[Illi1ill >> 0x2] >> ((Illi1ill % 0x4) * 0x8)) & 0xf
        )
    }
    return Iii1iiIl
  }

  function I1i11ll(liliII) {
    var iiiiII1I =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    var IiilIl = ''
    for (
      var iliIiii1 = 0x0;
      iliIiii1 < liliII['length'] * 0x4;
      iliIiii1 += 0x3
    ) {
      var I1IlIIIi =
        (((liliII[iliIiii1 >> 0x2] >> (0x8 * (iliIiii1 % 0x4))) & 0xff) <<
          0x10) |
        (((liliII[(iliIiii1 + 0x1) >> 0x2] >>
          (0x8 * ((iliIiii1 + 0x1) % 0x4))) &
          0xff) <<
          0x8) |
        ((liliII[(iliIiii1 + 0x2) >> 0x2] >> (0x8 * ((iliIiii1 + 0x2) % 0x4))) &
          0xff)
      for (var IIIl1ilI = 0x0; IIIl1ilI < 0x4; IIIl1ilI++) {
        if (iliIiii1 * 0x8 + IIIl1ilI * 0x6 > liliII['length'] * 0x20)
          IiilIl += l11il1l1
        else
          IiilIl += iiiiII1I['charAt'](
            (I1IlIIIi >> (0x6 * (0x3 - IIIl1ilI))) & 0x3f
          )
      }
    }
    return IiilIl
  }
  // 禁用定时器debugger
  //   setInterval(function () {
  //     debugger
  //     console['log']()
  //   }, 0x7d0)
  window['get_sign'] = function () {
    //eval(IIlIliii() + IlIliI1l() + iIlII1I1() + window['code'])
    eval('window._signature = window.byted_acrawler(window.sign())')
  }
  window['get_sign']()
})()

function iliI1lli(lil1I1) {
  function lili11I(l11I11l1) {
    if (typeof l11I11l1 === 'string') {
      return function (lllI11i) {}
        ['constructor']('debugger;')
        ['apply']('counter')
    } else {
      if (
        ('' + l11I11l1 / l11I11l1)['length'] !== 0x1 ||
        l11I11l1 % 0x14 === 0x0
      ) {
        ;(function () {
          return !![]
        }
          ['constructor']('debu' + 'gger')
          ['call']('action'))
      } else {
        ;(function () {
          return ![]
        }
          ['constructor']('debu' + 'gger')
          ['apply']('stateObject'))
      }
    }
    lili11I(++l11I11l1)
  }
  try {
    if (lil1I1) {
      return lili11I
    } else {
      lili11I(0x0)
    }
  } catch (liIlI1il) {}
}
iｉl = 'jsjiami.com.v6'
