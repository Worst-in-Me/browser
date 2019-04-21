const {
  app,
  BrowserWindow
} = require('electron');


let win;

app.on('ready', () => {

    win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
    });

    win.loadURL(`file:///${__dirname}/index.html`);

    win.on('closed', () => {
        win = null;
    });

});