authmodule.controller("loginController", function($scope) {
    $scope.user = {
        email: "onkar555suryavanshi@gmail.com",
        password: "oks"
    }
    $scope.users=[
        {
            email: "onkar555suryavanshi@gmail.com",
            password: "xyx"
        },
        {
            email: "onkar555suryavanshi@gmail.com",
            password: "system"
        },
        {
            email: "onkar555suryavanshi@gmail.com",
            password: "abc"
        },
        {
            email: "onkar555suryavanshi@gmail.com",
            password: "xyz"
        }
    ];
    $scope.onValidate = () => {
        if($scope.user){
            console.log("Welcome");
        } else {
            console.log("Invalid User!");
        }
    }
})