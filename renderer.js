const enav = new (require('electron-navigation'))({});

const opts = document.querySelector('.opts');
const popup = document.querySelector('.popup');
const shade = document.querySelector('.shade');

const toggle = () => {
    popup.classList.toggle('popup_active');
    shade.classList.toggle('shade_active');
};

opts.addEventListener('click', toggle);
shade.addEventListener('click', toggle);

const { remote, Session } = require('electron');

const form = document.querySelector('.form');
form.addEventListener('submit', e => {
    e.preventDefault();

    const { proxy: { value: val } } = form;

    remote.getCurrentWebContents().session.setProxy({
        proxyRules: val === '' ? Session.defaultSession : val
    }, () => {
        alert('Succeed');
    });
});
