package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"strconv"
	"strings"

	"github.com/robertkrimen/otto"
)

func check(err error) {
	if err != nil {
		panic(err)
	}
}

// 执行js文件
func execjs() string {
	bytes, err := ioutil.ReadFile("1.js")
	check(err)
	vm := otto.New()
	_, err = vm.Run(string(bytes))
	check(err)
	value, err := vm.Call("getSign", nil)
	check(err)
	return value.String()
}

// 在线 JSON to Go Struct https://transform.tools/json-to-go
type NumData struct {
	Data []struct {
		Value int `json:"value"`
	} `json:"data"`
}

// post请求
func get_signature(page int) int {
	url := "http://spider.wangluozhe.com/challenge/api/4"
	method := "POST"
	payload := strings.NewReader(`page=` + strconv.Itoa(page) + `&count=10&_signature=` + execjs())
	client := &http.Client{}
	req, err := http.NewRequest(method, url, payload)
	check(err)

	req.Header.Add("Pragma", "no-cache")
	req.Header.Add("Cache-Control", "no-cache")
	req.Header.Add("Accept", "application/json, text/javascript, */*; q=0.01")
	req.Header.Add("DNT", "1")
	req.Header.Add("X-Requested-With", "XMLHttpRequest")
	req.Header.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36 Edg/97.0.1072.62")
	req.Header.Add("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8")
	req.Header.Add("Origin", "http://spider.wangluozhe.com")
	req.Header.Add("Referer", "http://spider.wangluozhe.com/challenge/4")
	req.Header.Add("Accept-Language", "en,zh-CN;q=0.9,zh;q=0.8,en-GB;q=0.7,en-US;q=0.6,zh-TW;q=0.5")
	req.Header.Add("Cookie", "session=067ab14c-6782-492d-b896-dcfe84af7d8e.OMiVVCs55dHWTPWE9vCb4AzSVj4")

	res, err := client.Do(req)
	check(err)
	defer res.Body.Close()
	fmt.Printf("res.StatusCode: %d\n", res.StatusCode)
	body, err := ioutil.ReadAll(res.Body)
	check(err)
	//fmt.Println(string(body))

	// 解析json
	var numData NumData
	err = json.Unmarshal(body, &numData)
	check(err)
	total := 0
	for _, num := range numData.Data {
		total += num.Value
	}
	fmt.Printf("Page: %d, Total: %d\n", page, total)
	return total
}

func main() {
	result := 0
	for i := 1; i < 101; i++ {
		result += get_signature(i)
	}
	fmt.Printf("Sum of the total number of 100 pages: %d\n", result)
}
