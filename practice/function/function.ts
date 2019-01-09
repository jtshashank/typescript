

var dbfun = ( arg1:any, arg2:any): any => {
	document.write(arg1() + arg2());
}

var SuccessCallback = () : string => {
	return "Success....!"
}

var errorCallback = () : string => {
	return "Error...!"
}
document.write(SuccessCallback(), errorCallback())

console.log(SuccessCallback(), errorCallback());
