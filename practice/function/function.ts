function fun_one(arg1?:string, arg2?:string, arg3?:string):void {
	if(arg1 != undefined) {
		document.write(arg1 + '<br>');
    }
    if(arg2 != undefined) {
        document.write(arg2 + '<br>');
    }
    if(arg3 != undefined) {
        document.write(arg3 + '<br>');
    }
}
fun_one("10")
fun_one("Shashank", "Mayank", "Divya")
