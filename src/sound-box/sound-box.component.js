class SoundBoxController{
    constructor() {}

    $onInit() {
        this.sounds = [
            { url: 'http://192.168.99.41:1337/10415.mp3', title: 'SON 1' },
            { url: 'http://192.168.99.41:1337/3634.mp3', title: 'SON 2' },
            { url: 'http://192.168.99.41:1337/4072.mp3', title: 'SON 3' },
            { url: 'http://192.168.99.41:1337/10425.mp3', title: 'SON 4' },
            { url: 'http://192.168.99.41:1337/4072.mp3', title: 'SON 5' },
            { url: 'http://192.168.99.41:1337/6111.mp3', title: 'SON 6' }
        ];
    }
    saveSound(){
        this.sounds.push(this.sound);
        this.sound='{title:"",url:""}';
    }
    clearSound(title){
        this.sounds = this.sounds.filter(s => s.title !== title);
    }

}

export const SoundBox = {
    template: require('./sound-box.html'),
    controller:SoundBoxController
}