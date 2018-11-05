var static = require('node-static');
var file = new static.Server(`./page`)

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response)
    }).resume()
}).listen(80)


const { app, BrowserWindow, globalShortcut } = require('electron')

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({ alwaysOnTop: true, width: 327, height: 502, frame: false, icon: './ico/icon.ico', backgroundColor: '#121212', webPreferences: {devTools: false} })
  win.setPosition(1920-327,1080-502)
  win.setResizable(false)
  win.on('closed', () => {
    win = null
    app.quit();
  })
  
  globalShortcut.register('f5', function() {
        app.relaunch()
        app.exit(0)
	})
    
    globalShortcut.register('f4', function() {
		win = null
        app.quit();
	})
  

  // and load the index.html of the app.
  win.loadURL('http://localhost')
}

app.on('ready', createWindow)