app.controller('spinnerCtrl', ($scope) => {

    window.cieloSpinner = ( value ) => {

        if (value === true) {

            angular.element(document.querySelector(".spinners")).addClass("show")

        } else {
            
            angular.element(document.querySelector(".spinners")).removeClass("show")
            angular.element(document.querySelector(".spinners")).addClass("hide")

        }
    };

}); 