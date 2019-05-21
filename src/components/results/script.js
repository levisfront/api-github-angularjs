app.controller('resultsCtrl', ($scope, $http) => {

    $scope.avatar       = '';
    $scope.searchName   = '';
    $scope.name         = '';
    $scope.bio          = '';
    $scope.interprise   = '';
    $scope.blog         = '';
    $scope.email        = '';
    $scope.userChecked  = '';

    const arr = [];
    const toRecover = ( name ) => {
        const array = sessionStorage.getItem( name );
        arr.push( array );
    }
    
    toRecover( 'user' );
    toRecover( 'repos' );
    toRecover( 'starred' );

    if( window.cieloSpinner() == true){
        window.cieloSpinner(false)
    }

    let user  = JSON.parse( arr[0] ),
        repo  = JSON.parse( arr[1] ),
        starr = JSON.parse( arr[2] );

    $scope.userChecked  = user.data;
    $scope.avatar       = user.data.avatar_url;
    $scope.searchName   = user.data.login;
    $scope.name         = user.data.name;
    $scope.bio          = user.data.bio;
    $scope.interprise   = user.data.company;
    $scope.blog         = user.data.blog;
    $scope.email        = user.data.email;
    $scope.repository   = repo.data;
    $scope.starreds     = starr.data;

});