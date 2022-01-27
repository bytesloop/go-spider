// 以下代码需要利用浏览器环境执行

var total = 0
for (let index = 1; index < 2; index++) {
  await fetch('http://spider.wangluozhe.com/challenge/api/7', {
    headers: {
      accept: 'application/json, text/javascript, */*; q=0.01',
      'accept-language': 'en',
      'cache-control': 'no-cache',
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      pragma: 'no-cache',
      'x-requested-with': 'XMLHttpRequest'
    },
    referrer: 'http://spider.wangluozhe.com/challenge/7',
    referrerPolicy: 'strict-origin-when-cross-origin',
    body:
      `page=${index}&count=10&_signature=` +
      window.byted_acrawler(window.sign()),
    method: 'POST',
    mode: 'cors',
    credentials: 'include'
  })
    .then(response => response.json())
    .then(data => {
      //var total = data.reduce((a, b) => a + b)
      console.log(data)
      if (Object.keys(data).length != 0) {
        data.data.forEach(item => {
          total += item.value
        })
      }
      console.log(`${index} - ${total}`)
    })
}
