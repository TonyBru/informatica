var static = require('node-static');
var file = new static.Server('./page')

var server = require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response)
    }).resume()
}).listen(8080)

server.on('error', function (e) {
  // Handle your error here
  console.log(e);
});


const { app, BrowserWindow, globalShortcut } = require('electron')

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({ alwaysOnTop: true, width: 327, height: 495, frame: false, icon: './ico/icon.ico', backgroundColor: '#121212', webPreferences: {devTools: false} })
  win.setPosition(1920-327,1080-495)
  win.setResizable(false)
  win.on('closed', () => {
    win = null
    app.quit();
  })
  
  globalShortcut.register('f5', function() {
        //app.relaunch()
        //app.exit(0)
        win.reload()
	})
    
    globalShortcut.register('f4', function() {
		win = null
        app.quit();
	})
  

  // and load the index.html of the app.
  win.loadURL('http://localhost:8080', {"extraHeaders" : "pragma: no-cache\n"})
  //win.loadURL('http://localhost')
  //win.webContents.openDevTools();
}

app.on('ready', createWindow)
