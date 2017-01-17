app.controller('productCtrl', ['$scope', 'storeFactory', function($scope, SF) {

    function getProducts() {
        SF.getProducts()
        .then( (res) => $scope.products = res.data )
        .catch( (err) => console.log('Error:', err) )
    }
    getProducts();

    $scope.addProduct = function() {
        SF.addProduct($scope.product)
            .then( (res) => {
                console.log(res.data);
                $scope.product = {};
                getProducts();
            })
            .catch( (err) => console.log('Error:', err) )
    }

    $scope.delProduct = function(productId) {
        if(!confirm("Confirm Delete!"))  return false;
        else {
            SF.delRelatedOrder(productId)
                .then()
                .catch( (err) => console.log('Error:', err) )
            SF.delProduct(productId)
                .then( getProducts )
                .catch( (err) => console.log('Error:', err) )
        }
    }

}])
