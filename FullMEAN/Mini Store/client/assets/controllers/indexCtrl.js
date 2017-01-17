app.controller('indexCtrl', ['$scope', 'storeFactory', function($scope, SF) {

    function getRecentProducts() {
        SF.getRecentProducts()
            .then( (res) => $scope.products = res.data )
            .catch( (err) => console.log('Error:', err) )
    }
    function getRecentOrders() {
        SF.getRecentOrders()
            .then( (res) => $scope.orders = res.data )
            .catch( (err) => console.log('Error:', err) )
    }
    function getRecentCustomers() {
        SF.getRecentCustomers()
            .then( (res) => $scope.customers = res.data )
            .catch( (err) => console.log('Error:', err) )
    }
    getRecentProducts();
    getRecentOrders();
    getRecentCustomers();

}])
