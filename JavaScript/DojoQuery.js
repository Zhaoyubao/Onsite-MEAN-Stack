var $Dojo = (function() {
    return function(id) {
        this.element = document.getElementById(id);

        this.click = function(callback) {
            this.element.addEventListener("click", callback);
        }
        this.hover = function(cb1, cb2) {
          this.element.addEventListener('mouseover', cb1);
          this.element.addEventListener('mouseleave', cb2);
        }
        // Need to return 'this' object
        return this;
    };
})();

var button = $Dojo('button')

$Dojo('button').click(function() {
    console.log("Button was clicked");
});

button.hover(function() {
  console.log('mouse went over button');
}, function() {
  console.log('mouse left button');
});
