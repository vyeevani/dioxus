function monkeyPatchConsole(ws){const console=window.console,log=console.log,info=console.info,warn=console.warn,error=console.error,debug=console.debug;console.log=function(...args){if(ws.readyState===WebSocket.OPEN)ws.send(JSON.stringify({Log:{level:"log",messages:args}}));log.apply(console,args)},console.info=function(...args){if(ws.readyState===WebSocket.OPEN)ws.send(JSON.stringify({Log:{level:"info",messages:args}}));info.apply(console,args)},console.warn=function(...args){if(ws.readyState===WebSocket.OPEN)ws.send(JSON.stringify({Log:{level:"warn",messages:args}}));warn.apply(console,args)},console.error=function(...args){if(ws.readyState===WebSocket.OPEN)ws.send(JSON.stringify({Log:{level:"error",messages:args}}));error.apply(console,args)},console.debug=function(...args){if(ws.readyState===WebSocket.OPEN)ws.send(JSON.stringify({Log:{level:"debug",messages:args}}));debug.apply(console,args)}}export{monkeyPatchConsole};