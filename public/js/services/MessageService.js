//public/js/services/MessageService.js

angular.module('MessageService', []).factory('Message', ['$http', function($http) {

    return {
    	// only supporting GET and POST, maybe DELETE in the future
        get : function() {
            return $http.get('/api/messages');
        },
        create : function(nerdData) {
            return $http.post('/api/messages', nerdData);
        },
        // delete : function(id) {
        //     return $http.delete('/api/nerds/' + id);
        // }
    }       

}]);