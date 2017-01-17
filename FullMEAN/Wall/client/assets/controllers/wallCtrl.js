console.log('WallCtrl loaded');

app.controller('wallCtrl', ['$scope', '$location', '$cookies', 'wallFactory', function($scope, $location, $cookies, WF) {
    let user = $cookies.get('user');
    if(!user)  $location.url('/logReg');

    WF.getUser(user)
        .then( (res) => $scope.user = res.data )
        .catch( (err) => console.log(`Error: ${err}`) )

    getMsgs();

    function getMsgs() {
        WF.getMsgs()
        .then( (res) => $scope.msgs = res.data )
        .catch( (err) => console.log(`Error: ${err}`) )
    }

    $scope.signOut = function() {
        $cookies.remove('user');
        $location.url('/logReg');
    }

    $scope.postMsg = function() {
        if ($scope.msgForm.$valid) {
            WF.postMsg($scope.msg, user)
                .then( getMsgs )
                .catch( (err) => console.log(`Error: ${err}`) )
            $scope.msg = {};
        } else {
            console.log('Invalid msgForm');
        }
    }

    $scope.postComment = function(msgId, comment) {
        if (comment) {
            let comm = comment.content;
            if(comm.replace(/\s/g, '')) {
                WF.postComment(comment, user, msgId)
                    .then( getMsgs )
                    .catch( (err) => console.log(`Error: ${err}`) )
            }
        }
    }
}])
