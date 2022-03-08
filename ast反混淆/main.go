package main

import (
	"encoding/base64"
	"fmt"
	"os"
	"regexp"
	"strconv"
	"strings"
)

func check(err error) {
	if err != nil {
		panic(err)
	}
}

func main() {
	// 1.读取文件 https://www.herocat.io/h5game/assets/main/index.047af.js
	data, err := os.ReadFile("./index.047af.js")
	check(err)
	dataStr := string(data)
	fmt.Println(len(dataStr))
	// 2.正则获取js数组
	r1, _ := regexp.Compile("var hc_0x401c=\\[(.*?)\\];")
	matchArr1 := r1.FindStringSubmatch(dataStr)
	fmt.Println(len(matchArr1[0]))
	// 3.分割数组
	strArr := strings.Split(matchArr1[1], ",")
	fmt.Println(len(strArr))
	// 4.调整数组
	for i := 1; i < 435; i++ {
		strArr = append(strArr[1:], strArr[0]) //将第一个元素移动最后
	}
	// 4.Base64解码字符串
	decodeBytes, err := base64.StdEncoding.DecodeString(strings.Trim(strArr[0x54e0], "'"))
	check(err)
	fmt.Println(string(decodeBytes))
	// 5.正则查找
	r2, _ := regexp.Compile("hc_0x5b82\\('(\\w+)'\\)")
	matchArr2 := r2.FindAllStringSubmatch(dataStr, -1)
	fmt.Println(len(matchArr2))
	fmt.Println(matchArr2[0], matchArr2[0][1], matchArr2[len(matchArr2)-1])
	// 6.循环替换
	for k, v := range matchArr2 {
		num, err := strconv.ParseInt(v[1], 0, 64)
		check(err)
		dByte, err := base64.StdEncoding.DecodeString(strings.Trim(strArr[num], "'"))
		check(err)
		dStr := string(dByte)
		fmt.Println(k, string(dStr))
		// 7.替换字符串
		if strings.Contains(string(dStr), "'") {
			dataStr = strings.Replace(dataStr, v[0], "\""+dStr+"\"", 1)
		} else {
			dataStr = strings.Replace(dataStr, v[0], "'"+dStr+"'", 1)
		}
	}
	// 正则删除 ascii 控制字符
	r3, _ := regexp.Compile("([\u0000-\u0008])+")
	matchArr3 := r3.FindAllString(dataStr, -1)
	for _, v := range matchArr3 {
		dataStr = strings.Replace(dataStr, v, "", 1)
	}
	// 8.写入文件
	f, err := os.Create("./index.decode.js")
	check(err)
	l, err := f.WriteString(dataStr)
	check(err)
	fmt.Println(l, "bytes written successfully")
	err = f.Close()
	check(err)
}
