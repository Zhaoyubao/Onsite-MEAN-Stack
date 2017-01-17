function fib() {
    let prev = 0, curr = 1;
    return () => {
        [prev, curr] = [curr, curr + prev];
        console.log(curr);
    }
}
var fibCounter = fib();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
