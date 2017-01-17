app.factory('storeFactory', ['$http', function($http) {
    let factory = {};

    factory.getCustomers = function() {
        return $http.get('/customers');
    }
    factory.getRecentCustomers = function() {
        return $http.get('/customers/recent');
    }
    factory.addCustomer = function(customer) {
        return $http.post('/customers', customer);
    }
    factory.delCustomer = function(id) {
        return $http.delete(`/customers/${id}`);
    }
// =================================================
    factory.getProducts = function() {
        return $http.get('/products');
    }
    factory.getRecentProducts = function() {
        return $http.get('/products/recent');
    }
    factory.addProduct = function(product) {
        return $http.post('/products', product);
    }
    factory.updateProduct = function(id, data) {
        return $http.put(`/products/${id}`, data);
    }
    factory.delProduct = function(id) {
        return $http.delete(`/products/${id}`);
    }
// =================================================
    factory.getOrders = function() {
        return $http.get('/orders');
    }
    factory.getRecentOrders = function() {
        return $http.get('/orders/recent');
    }
    factory.addOrder = function(product) {
        return $http.post('/orders', product);
    }
    factory.delOrder = function(id) {
        return $http.delete(`/orders/${id}`);
    }
    factory.delRelatedOrder = function(id) {
        return $http.delete(`/orders/product/${id}`);
    }

    return factory;
}])
