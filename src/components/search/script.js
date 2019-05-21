app.controller('myCtrl', ($scope, $http) => {
    
    $scope.search = '';
    $scope.err    = '';
    $scope.img    = "";
    $scope.getSearch = () => {
        
        if( $scope.search == '' ) {
            $scope.err = 'Erro, digite um usuario valido!';
        } else { 
            const endpoints = [
                'https://api.github.com/users/' + $scope.search,
                'https://api.github.com/users/' + $scope.search + '/repos',
                'https://api.github.com/users/' + $scope.search + '/starred'
            ];
            const   arr = [];
            for (let i = 0; i < endpoints.length; i++) {
                arr.push( endpoints[i] );
            }
            const   user    = arr[0], 
                    repos   = arr[1],
                    starred = arr[2];

            const   getApi = ( name, edp ) => {
                window.cieloSpinner(true)
                $http.get( edp ).then( ( res ) => {
                    var arrData = JSON.stringify( res ) ;
                    sessionStorage.setItem( name, arrData );
                    window.location.href = "#!results";
                }).catch(function(e){
                    window.cieloSpinner(false)
                    $scope.err = 'Erro, digite um usuario valido!';
                    console.log("Erro ao procurar um nome valido!", e);
                    throw e; 
                 });
            };        

            getApi( 'user' , user);
            getApi( 'repos', repos);
            getApi( 'starred', starred);

        }
    };
    $scope.getkeys = function (event) {
        if( event.keyCode == 13 ){
            $scope.getSearch();
        }
    }
}); 