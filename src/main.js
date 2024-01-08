const { app, BrowserWindow } = require('electron')
const path = require('path')

const isDev = process.env.NODE_ENV !== 'production';

const createWindow = () => {
  const win = new BrowserWindow({
    height: 600,
    width: isDev ? 1420 : 800,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  if (isDev) {
    win.webContents.openDevTools();
  }

  win.loadFile(path.join(__dirname, 'views', 'index.html'))
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
})