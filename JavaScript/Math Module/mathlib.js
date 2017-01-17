class Mathlib {
	add(a, b) {
		return a+b;
	}
	multiply(a, b) {
		return a*b;
	}
	square(a) {
		return a*a;
	}
	random(a, b) {
		return Math.floor(Math.random() * 35) + 1;
	}
}
module.exports = new Mathlib;
