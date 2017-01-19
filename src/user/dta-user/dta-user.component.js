class DtaUserController{
    constructor(){} 

    saveUser(form,user){
        if (form.$invalid) return;
        this.onSubmit({
            $event: this.user
        });
    };
        
    $onChanges(){
        this.user = angular.copy(this.user);
    }

   
}
export const DtaUser = {
    bindings: {
        user:'<',
        onSubmit:'&'
    },
    template: require('./dta-user.component.html'),
    controller: DtaUserController
};