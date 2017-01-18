export class UsersController {
    constructor (UserService, Version, $timeout) {
        this.UserService = UserService;
        this.version = Version;
        this.$timeout = $timeout;
        
        this.UserService.getUsers()
            .then(users => {
                this.users = users;
            });

        this.predicat = 'name';
        this.reverse = false;
    }

    sort(predicat) {
        if (this.predicat === predicat) {
            this.reverse = !this.reverse;
        }
        this.predicat = predicat;
    }

    

    deleteUser(user) {
        
        user.delete = true;
        
        this.myTimer = this.$timeout(() => {
                this.deleteClick=false;
                user.deleted = true;
                this.UserService.deleteUser(user);
                this.users = this.users.filter(u => u.id !== user.id);
        },2000)
        
    }
 
    restoreDelete(){
        this.deleteClick=false;
        this.$timeout.cancel(this.myTimer);
        this.UserService.getUsers()
            .then(users => {
                this.users = users;
            });
    }
}