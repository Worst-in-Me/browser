const {
  app,
  BrowserWindow
} = require('electron');

app.on('ready', () => {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false
    });

    win.webContents.session.setProxy({ pr });

    win.loadURL(`file:///${__dirname}/index.html`);

    win.on('closed', () => {
        win = null;
    });
});
