import css from './sound-button.component.css';

class SoundButtonController{
    constructor ($scope) {
        this.$scope = $scope;
    }

    $onInit () {
      
    }

    $onChanges (changes) {
        if (changes.sound && changes.sound.currentValue) {
            this.audio = new Audio(changes.sound.currentValue.url);
            this.title = changes.sound.currentValue.title || changes.sound.currentValue.url.split('/').pop();
            this.audio.onended = () => this.$scope.$apply();
           

        }
    }

    toggle(){
        if(this.audio.paused) this.audio.play(); 
        else {
            this.audio.pause();
        }
    }
    clearSound(){
         this.onDelete()
    }
}

export const SoundButton = {
     bindings: {
        sound:'<',
        onDelete:'&'
    },
    template: require('./sound-button.component.html'),
    controller: SoundButtonController
} 