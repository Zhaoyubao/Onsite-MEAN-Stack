app.controller('customerCtrl', ['$scope', 'storeFactory', function($scope, SF) {

    function getCustomers() {
        SF.getCustomers()
            .then( (res) => $scope.customers = res.data )
            .catch( (err) => console.log('Error:', err) )
    }
    getCustomers();

    $scope.addError = false;
    $scope.addCustomer = function() {
        if ($scope.customerForm.$valid) {
            SF.addCustomer({name: $scope.customer.name.toLowerCase()})
                .then( (res) => {
                    console.log(res.data);
                    if(res.data.error)  $scope.addError = true;
                    else {
                        $scope.addError = false;
                        getCustomers();
                        $scope.customer = {};
                    }
                })
                .catch( (err) => console.log('Error:', err) )
            $scope.customerForm.$submitted = false;
            $scope.customerForm.name.$touched = false;
        }
        else  console.log('Invalid Form');
    }

    $scope.delCustomer = function(customerId) {
        if(!confirm("Confirm Delete!"))  return false;
        else {
            SF.delCustomer(customerId)
                .then( getCustomers )
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
