'use strict';(function(){function h(a,b){e?self.postMessage(a,b):k.postMessage(a,b)}function m(a,b){a||console.error("workerapi: No callback was provided to onMessage!");if(b)if(e)b.onmessage=a;else b.on("message",a);else if(e)self.onmessage=a;else k.on("message",a)}function f(a,b,c){b||(b=Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10),d++,b=`${b}-${d}`,1E5<d&&(d=0));return{workerId:c,messageId:b,message:a}}let e="undefined"!==typeof self,k;e||(k=require("worker_threads").parentPort);
let d=0,l,n=a=>{a=a.data?a.data:a;switch(a.message.type){case "GET_CONSTANTS_DONE":h(f(a.message,a.messageId));break;case "UPDATED":{a=new Uint8ClampedArray(a.message.graphicsFrameBuffer);let b=new Uint8ClampedArray(92160);for(let c=0;144>c;++c){let e=480*c,f=640*c;for(let c=0;160>c;++c){let d=e+3*c,g=f+(c<<2);b[g+0]=a[d+0];b[g+1]=a[d+1];b[g+2]=a[d+2];b[g+3]=255}}a=b}h(f({type:"UPDATED",imageDataArrayBuffer:a.buffer}),[a.buffer])}};m(a=>{a=a.data?a.data:a;switch(a.message.type){case "CONNECT":l=a.message.ports[0];
m(n,l);h(f(void 0,a.messageId));break;case "GET_CONSTANTS":l.postMessage(f({type:"GET_CONSTANTS"},a.messageId));break;default:console.log(a)}})})()
