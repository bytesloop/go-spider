const fs = require('fs')

// 调整 hc_0x401c 数组
var num = 435;
while (--num) {
	hc_0x401c['push'](hc_0x401c['shift']())
}
// base64解码数组
function base64Decode(_0x4ca71f) {
	var _0x467626 = atob(_0x4ca71f);
	var _0x4e1ef4 = [];
	for (var _0x18c8bc = 0x0, _0xd918b = _0x467626['length']; _0x18c8bc < _0xd918b; _0x18c8bc++) {
		_0x4e1ef4 += '%' + ('00' + _0x467626['charCodeAt'](_0x18c8bc)['toString'](0x10))['slice'](-0x2);
	}
	return decodeURIComponent(_0x4e1ef4);
}

var dArr = [];

hc_0x401c.forEach(item => dArr.push(base64Decode(item)))


console.log(Buffer.from(hc_0x8042[0x4ad8], 'base64').toString('utf-8'))
// 1. 读取文件
fs.readFile('./herocat.js', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data.length)
  // 2. 正则替换
  var re = /hc_0x2bf8\('(\w+)'\)/gim
  console.log(
    Buffer.from(
      hc_0x8042[parseInt(data.match(re)[0].match(/hc_0x2bf8\('(\w+)'\)/)[1])],
      'base64'
    ).toString('utf-8')
  )
  data.match(re).forEach(item => {
    console.log(item)
    data = data.replaceAll(
      item,
      `"${Buffer.from(
        hc_0x8042[parseInt(item.match(/hc_0x2bf8\('(\w+)'\)/)[1])],
        'base64'
      ).toString('utf-8')}"`
    )
  })
  // 3. 写入文件
  fs.writeFile('./decode-herocat.js', data, err => {
    if (err) throw err
    console.log('decode-herocat.js saved! ')
  })
})
