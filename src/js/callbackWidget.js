export default class CallbackWidget {
    constructor() {
        this.button = document.getElementsByClassName('callback__button').item(0);
        this.wrapper = document.getElementsByClassName('callback__wrapper-inner').item(0);
        this.close = document.getElementsByClassName('callback__close').item(0);
    }

    init() {
        this.button.addEventListener('click', () => {
            this.button.classList.remove('button__hover');
            this.button.classList.add('callback__minimize');
            this.button.classList.remove('callback__maximize');
            this.wrapper.classList.remove('callback__minimize');
            this.wrapper.classList.add('callback__maximize');
        });

        this.close.addEventListener('click', () => {
            this.wrapper.classList.remove('callback__maximize');
            this.wrapper.classList.add('callback__minimize');
            this.button.classList.add('button__hover'); 
            this.button.classList.remove('callback__minimize');
            this.button.classList.add('callback__maximize');        
        });
    }
}
