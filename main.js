const {app, BrowserWindow} = require('electron');

app.whenReady().then(()=>{
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true,
            
        },
        center: true, 
    });
    win.setMenu(null);
    win.setIcon('./resources/logo/pst_logo.ico')
    win.loadFile('./views/index.html');
})