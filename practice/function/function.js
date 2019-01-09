var dbfun = function (arg1, arg2) {
    document.write(arg1() + arg2());
};
var SuccessCallback = function () {
    return "Success....!";
};
var errorCallback = function () {
    return "Error...!";
};
// document.write(SuccessCallback(), errorCallback());
console.log(SuccessCallback(), errorCallback());
