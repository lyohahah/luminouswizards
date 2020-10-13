const state = [];

document.querySelector('#ABOUT').onmouseover = function (event) {
    if (!state[0]) {
        const img = document.querySelectorAll('.About-pic');
        const text = document.querySelectorAll('.p');
        const title = document.querySelectorAll('.About-text span');

        const aboutas = document.querySelector('.about__title');

        aboutas.setAttribute('style', 'left: 0');
        img[0].setAttribute('style', 'right: 0');
        text[0].setAttribute('style', 'left: 0');
        title[0].setAttribute('style', 'left: 0');
        img[1].setAttribute('style', 'left: 0');
        text[1].setAttribute('style', 'right: 0');
        title[1].setAttribute('style', 'right: 0');
        img[2].setAttribute('style', 'right: 0');
        text[2].setAttribute('style', 'left: 0');
        title[2].setAttribute('style', 'left: 0');
        state[0] = 1
    }

};

document.querySelector('#SHOWS').onmouseover = function (event) {
    if(!state[1]) {
        const wrapper = document.querySelector('.SHOWS-SECTION');
        const shows = document.querySelector('#SHOWS h1');
        shows.setAttribute('style', 'left: 0');
        wrapper.setAttribute('style', 'left: 0');
        state[1] = 1;
    }
};
    




