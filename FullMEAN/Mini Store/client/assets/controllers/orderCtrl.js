app.controller('orderCtrl', ['$scope', 'storeFactory', function($scope, SF) {

    function getProducts() {
        SF.getProducts()
            .then( (res) => $scope.products = res.data )
            .catch( (err) => console.log('Error:', err) )
    }
    function getCustomers() {
        SF.getCustomers()
            .then( (res) => $scope.customers = res.data )
            .catch( (err) => console.log('Error:', err) )
    }

    function getOrders() {
        SF.getOrders()
        .then( (res) => $scope.orders = res.data )
        .catch( (err) => console.log('Error:', err) )
    }
    getCustomers();
    getProducts();
    getOrders();

    function updateProduct(id, quan) {
        SF.updateProduct(id, quan)
            .then( getProducts )
            .catch( (err) => console.log('Error:', err) )
    }

    $scope.addOrder = function() {
        let quantity = {quantity: $scope.prod.quantity-$scope.order.quantity};
        $scope.order._product = $scope.prod._id;
        SF.addOrder($scope.order)
            .then( (res) => {
                updateProduct($scope.prod._id, quantity);
                getOrders();
                $scope.order = {};
            })
            .catch( (err) => console.log('Error:', err) )
    }

    $scope.delOrder = function(orderId, orderQuan, prodId, prodQuan) {
        if(!confirm("Confirm Delete!"))  return false;
        else {
            let quantity = {quantity: orderQuan+prodQuan};
            updateProduct(prodId, quantity);
            SF.delOrder(orderId)
                .then( getOrders )
                .catch( (err) => console.log('Error:', err) )
        }
    }

    $scope.sortby = '_id';
    $scope.reverse = true;
    $scope.sortBy = function(field) {
        $scope.reverse = ($scope.sortby === field) ? !$scope.reverse : false;
        $scope.sortby = field;
    }
}])
