import angular from 'angular';
import ngRoute from 'angular-route';

import UserModule from './user';
import SoundBox from './sound-box';


angular.module('app', [
    ngRoute,
    UserModule,
    SoundBox
])


.value('Version', '1.0.0')
.config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            template: '<h1>Bienvenue</h1>'
        })
        .when('/about', {
            template: '<h1>About</h1>'
        })
        .when('/sound',{
            template:  `<sound-box></sound-box>`
        })
        .otherwise('/')
})
.run(function() {
  console.log('PizzaYOLO !');
})