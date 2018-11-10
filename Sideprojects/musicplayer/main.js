var static = require('node-static');
const isDev = require('electron-is-dev')
if (isDev) {
    var file = new static.Server('./page')
} else {
    var file = new static.Server('./resources/app.asar/page')
}


var server = require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        var ua = request.headers['user-agent']
        console.log(ua)
        if(ua.includes("Electron") && ua.includes("MusicPlayer")){
            file.serve(request, response)
        }
    }).resume()
}).listen(48116)

server.on('error', function (e) {
  // Handle your error here
  console.log(e);
});

const electron = require('electron')
const { app, BrowserWindow, globalShortcut } = electron

function createWindow () {
  // Create the browser window.
  const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize
  win = new BrowserWindow({ alwaysOnTop: true, width: 10, height: 10, frame: true, icon: './ico/icon.ico', backgroundColor: '#121212', webPreferences: {devTools: false} })
  win.setMenu(null);
  win.setContentSize(319,497)
  
  win.setPosition(width-win.getSize()[0]+7,height-win.getSize()[1]+5)
  //win.setResizable(false)
  win.on('closed', () => {
    win = null
    app.quit();
  })
  
  globalShortcut.register('f5', function() {
        //app.relaunch()
        //app.exit(0)
        win.reload()
	})
    
    globalShortcut.register('f6', function() {
        //app.relaunch()
        //app.exit(0)
        
	})
    
    globalShortcut.register('f4', function() {
		win = null
        app.quit();
	})
  

  // and load the index.html of the app.
  win.loadURL('http://localhost:48116/IwMw8vEsdSPXi5K8FQtaFQ91hbb99juSPhoXN3p0VeYekIn0zQ.html', {"extraHeaders" : "pragma: no-cache\n"})
  //win.loadURL('http://localhost')
  //win.webContents.openDevTools();
}

app.on('ready', createWindow)
