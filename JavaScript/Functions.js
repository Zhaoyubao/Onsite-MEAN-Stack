// Basic:
function runningLogger() {
    console.log('I am running!');
}
runningLogger();

function multiplyByTen(num) {
    return num * 10;
}
console.log(multiplyByTen(5));

function stringReturnOne() {
    return "Coding";
}
function stringReturnTwo() {
    return "Dojo";
}
console.log(stringReturnOne() + stringReturnTwo());

//Medium:
function caller(param) {
    if(typeof(param) == 'function') {
        return param();
    }
}
console.log(caller(stringReturnOne));

function myDoubleConsoleLog(param1, param2) {
    if(typeof param1  === 'function' && typeof param2  === 'function') {
        return (console.log(param1() + param2()));
    }
}
myDoubleConsoleLog(stringReturnOne, stringReturnTwo);


function caller2(param) {
    console.log('starting');
    setTimeout(function(){
        if(typeof param  === 'function') {
            param(stringReturnOne, stringReturnTwo);
        }
    }, 2000);
    console.log('ending');
    return "interesting";
}
console.log(caller2(myDoubleConsoleLog));
