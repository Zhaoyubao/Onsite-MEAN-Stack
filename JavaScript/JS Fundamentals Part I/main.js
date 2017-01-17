var x = [3,5,'Dojo', 'rocks', 'Michael', 'Sensei'];
for(var i = 0; i < x.length; i++) {
    console.log(x[i])
}
x.push(100);
x.push(["hello", "world", "JavaScript is Fun"]);
console.log(x);
var sum = 0;
for(var i = 1; i <= 500; i++) {
    sum += i;
}
console.log("Sum:", sum);
var arr =  [1, 5, 90, 25, -3, 0];
var min = sum = arr[0];
for(var i = 1; i < arr.length; i++) {
    if(arr[i] < min )  min = arr[i];
    sum += arr[i];
}
console.log("Min: %d\tAverage: %d", min ,sum/arr.length);
var new_ninja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}
for(var key in new_ninja) {
    console.log(key+" : "+new_ninja[key]);
}
