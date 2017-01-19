export class UserController {
    constructor($routeParams, UserService, $location){
       this.UserService = UserService; 
       this.$location = $location;
       this.UserService.getUser($routeParams.id)
            .then(user => this.user = user);
    };

    saveUser($event) {
        this.UserService.saveUser($event)
            .then(() => this.$location.path('/users'));
    }
}

