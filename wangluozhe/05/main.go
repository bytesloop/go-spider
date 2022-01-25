package main

import (
	"fmt"

	"github.com/robertkrimen/otto"
)

func check(err error) {
	if err != nil {
		panic(err)
	}
}

func main() {
	vm := otto.New()
	script, err := vm.Compile("", `var abc; if (!abc) abc = 0; abc += 2; bota(abc);`)
	check(err)
	value, err := vm.Run(script)
	check(err)
	fmt.Println(value)

	// bytes, err := ioutil.ReadFile("2.js")
	// check(err)
	// vm := otto.New()
	// script, err := vm.Compile("", string(bytes))
	// check(err)
	// _, err = vm.Run(script)
	// check(err)
	// value, err := vm.Call("getSign", nil)
	// check(err)
	// fmt.Println(value.String())
}
