var window=self;importScripts("../audio-min.js");var deinterleave=function(e,r){for(var a=r.format.channelsPerFrame,s=e.length/a,t=new Float32Array(s*a),o=0;o<s;o++)for(var f=0;f<a;f++)t[f*s+o]=e[o*a+f];return t};self.addEventListener("message",(function(e){if(e.data.ogg||importScripts("../ogg.js","../vorbis.js","../opus.js"),e.data.mp3||importScripts("../mpg123.js"),e.data.ping)self.postMessage({ping:!0});else{var r=e.data.buffer,a=AV.Asset.fromBuffer(r);a.on("error",(function(e){self.postMessage({arrayBuffer:r,error:String(e)},[r])})),a.decodeToBuffer((function(e){var s=deinterleave(e,a),t={array:s,sampleRate:a.format.sampleRate,channels:a.format.channelsPerFrame};self.postMessage({rawAudio:t,arrayBuffer:r},[s.buffer,r])}))}}),!1);