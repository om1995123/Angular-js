var AuthController = /** @class */ (function () {
    function AuthController($location, authService) {
        this.$location = $location;
        this.authService = authService;
        this.user = {
            username: "",
            password: ""
        };
        if (this.authService.isUserLoggedIn()) {
            alert("Already logged in!");
            this.$location.path("/catalog");
        }
    } // Removed unused $scope
    AuthController.prototype.login = function () {
        this.authService.loginUser(this.user.username, this.user.password);
        alert("Logged in!");
        this.$location.path("/catalog");
    };
    AuthController.$inject = ["$location", "AuthService"]; // Fix service name (match registered name)
    return AuthController;
}());
export { AuthController };
