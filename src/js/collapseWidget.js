export default class CollapseWidget {
    constructor() {
        this.button = document.getElementsByClassName('collapse__button').item(0);
        this.block = document.getElementsByClassName('collapse__block').item(0);
    }

    init() {
        this.button.addEventListener('click', () => {
            this.block.classList.toggle('collapse__opening');
            this.block.classList.toggle('collapse__closing');
        });
    }
}