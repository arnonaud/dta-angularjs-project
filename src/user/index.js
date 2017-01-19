import angular from 'angular';
import ngRoute from 'angular-route';
import bootstrap from 'angular-ui-bootstrap';

import { EldestFilter } from './eldest.filter';
import { UsersController } from './users.controller';
import { UserService } from './user.service';
import { UserController } from './user.controller'
import { DtaGravatar } from './dta-gravatar/dta-gravatar.component'
import { DtaUser } from './dta-user/dta-user.component'

export default angular.module('user', [
    ngRoute,
    bootstrap
])
.controller('UsersController', UsersController)
.controller('UserController', UserController)
.filter('eldest', EldestFilter)
.service('UserService', UserService)
.config(function($routeProvider){
    $routeProvider
        .when('/users', {
            template: require('./users.html'),
            controller: 'UsersController',
            controllerAs: 'ctrl'
        })
        .when('/user/:id',{
            template: require('./user.html'),
            controller: 'UserController',
            controllerAs: 'ctrl'
        })
        .when('/addUser/:id?', {
            template: require('./adduser.html'),
            controller: 'UserController',
            controllerAs: 'ctrl'
        })
})
.component('dtaGravatar', DtaGravatar)
.component('dtaUser', DtaUser)
.name;

