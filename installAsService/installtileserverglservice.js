// make sure you run npm install -g node-windows first
// then link this directory with npm link node-windows
// don't try allowServiceLogin, instead it will use localsystem, then you need to change it to 
// networkservice, along with giving permissions for network service to access the relevant files


var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'TileServer-gl',
  description: 'TileServer-gl (native) Service.',
  script: 'c:\\tileserver-gl\\src\\main.js',
  scriptOptions: '--port 8082',  
  workingDirectory: 'c:\\tileserver-gl'
  //, allowServiceLogon: true -- set to network service using service.msc
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();