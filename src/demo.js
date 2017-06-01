function callSomething(cb) {
	
	return function () {
		var a = 2 + 2
		cb(a)
	}
}