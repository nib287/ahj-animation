export default class LikekWidget {
    constructor() {
        this.button = document.getElementsByClassName('like__button').item(0);
        this.box = document.getElementsByClassName('like__box').item(0);
        this.activeHeart = null
    }

    init() {
        this.button.addEventListener('mouseenter', () => this.createElement());
        this.button.addEventListener('mouseleave', () => this.activeHeart.remove());
    }

    createElement() {
        const heart = document.createElement('img');
        heart.src = 'img/heart.png'
        heart.classList.add('like__heart');
        this.box.append(heart);
        heart.classList.add(this.getRandomClassAnimation());
        this.activeHeart = heart
        this.activeHeart.addEventListener('animationend', (e) => {
            this.createElement();
            e.target.remove();
        });
    }

    getRandomClassAnimation() {
        const randomeNumber = Math.random();
        if(randomeNumber < 0.25) {
            return 'animation1';
        } else if(randomeNumber < 0.5) {
            return 'animation2';
        } else if(randomeNumber < 0.75) {
            return 'animation3';
        } else {
            return 'animation4';
        }  
    }
}