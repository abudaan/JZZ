!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define("JZZ",[],e):t.JZZ=e()}(this,function(){var t,e,n,i,o,r="0.4.4";function s(){this._orig=this,this._ready=!1,this._queue=[],this._err=[]}function u(t,e){setTimeout(function(){t._resume()},e)}function a(t){t instanceof Function?t.apply(this):console.log(t)}function c(t){t instanceof Function?t.apply(this):console.log(t)}function h(t){this._break("closed"),t._resume()}function l(t){if(t.length){var e=t.shift();if(t.length){var n=this;this._slip(c,[function(){l.apply(n,[t])}])}try{this._repair(),e.apply(this)}catch(t){this._break(t.toString())}}else this._break()}function p(t,e){for(var n=0;n<t.length;n++)if(t[n]===e)return;t.push(e)}function f(t,e){for(var n=0;n<t.length;n++)if(t[n]===e)return void t.splice(n,1)}function _(){s.apply(this)}function d(){_.prototype._time||(_.prototype._time=function(){return Date.now()}),_.prototype._startTime=_.prototype._time(),_.prototype.time=function(){return _.prototype._time()-_.prototype._startTime}}function m(t,e,n){if(void 0===e)return m(t,[],[]);if(t instanceof Object){for(var i=0;i<e.length;i++)if(e[i]===t)return n[i];var o;o=t instanceof Array?[]:{},e.push(t),n.push(o);for(var r in t)t.hasOwnProperty(r)&&(o[r]=m(t[r],e,n));return o}return t}s.prototype._exec=function(){for(;this._ready&&this._queue.length;){var t=this._queue.shift();this._orig._bad?this._orig._hope&&t[0]==c?(this._orig._hope=!1,t[0].apply(this,t[1])):(this._queue=[],this._orig._hope=!1):t[0]!=c&&t[0].apply(this,t[1])}},s.prototype._push=function(t,e){this._queue.push([t,e]),s.prototype._exec.apply(this)},s.prototype._slip=function(t,e){this._queue.unshift([t,e])},s.prototype._pause=function(){this._ready=!1},s.prototype._resume=function(){this._ready=!0,s.prototype._exec.apply(this)},s.prototype._break=function(t){this._orig._bad=!0,this._orig._hope=!0,t&&this._orig._err.push(t)},s.prototype._repair=function(){this._orig._bad=!1},s.prototype._crash=function(t){this._break(t),this._resume()},s.prototype.err=function(){return m(this._err)},s.prototype.wait=function(t){if(!t)return this;var e=function(){};e.prototype=this._orig;var n=new e;return n._ready=!1,n._queue=[],this._push(u,[n,t]),n},s.prototype.and=function(t){return this._push(a,[t]),this},s.prototype.or=function(t){return this._push(c,[t]),this},s.prototype._info={},s.prototype.info=function(){var t=m(this._orig._info);return void 0===t.engine&&(t.engine="none"),void 0===t.sysex&&(t.sysex=!0),t},s.prototype.name=function(){return this.info().name},s.prototype.close=function(){var t=new s;return this._close&&this._push(this._close,[]),this._push(h,[t]),t},_.prototype=new s,_.prototype.time=function(){return 0},"undefined"!=typeof performance&&performance.now&&(_.prototype._time=function(){return performance.now()}),_.prototype._info={name:"JZZ.js",ver:r,version:r};var g,v=[],y=[];function M(){var t,e;for(this._info.engine=k._type,this._info.version=k._version,this._info.sysex=k._sysex,this._info.inputs=[],this._info.outputs=[],v=[],y=[],k._allOuts={},k._allIns={},t=0;t<k._outs.length;t++)(e=k._outs[t]).engine=k,k._allOuts[e.name]=e,this._info.outputs.push({name:e.name,manufacturer:e.manufacturer,version:e.version,engine:k._type}),v.push(e);for(t=0;t<T._outs.length;t++)e=T._outs[t],this._info.outputs.push({name:e.name,manufacturer:e.manufacturer,version:e.version,engine:e.type}),v.push(e);for(t=0;t<k._ins.length;t++)(e=k._ins[t]).engine=k,k._allIns[e.name]=e,this._info.inputs.push({name:e.name,manufacturer:e.manufacturer,version:e.version,engine:k._type}),y.push(e);for(t=0;t<T._ins.length;t++)e=T._ins[t],this._info.inputs.push({name:e.name,manufacturer:e.manufacturer,version:e.version,engine:e.type}),y.push(e)}function S(){this._slip(M,[]),k._refresh()}function w(t,e){if(void 0===t)return e.slice();var n,i,o=[];if(t instanceof RegExp){for(i=0;i<e.length;i++)t.test(e[i].name)&&o.push(e[i]);return o}for(t instanceof Function&&(t=t(e)),t instanceof Array||(t=[t]),n=0;n<t.length;n++)for(i=0;i<e.length;i++)(t[n]+""==i+""||t[n]===e[i].name||t[n]instanceof Object&&t[n].name===e[i].name)&&o.push(e[i]);return o}function O(t,e){var n;n=e instanceof RegExp?"Port matching "+e+" not found":e instanceof Object||void 0===e?"Port not found":'Port "'+e+'" not found',t._crash(n)}function I(t,e){var n=w(e,v);if(n.length){for(var i=function(t){return function(){t.engine._openOut(this,t.name)}},o=0;o<n.length;o++)n[o]=i(n[o]);t._slip(l,[n]),t._resume()}else O(t,e)}function E(t,e){var n=w(e,y);if(n.length){for(var i=function(t){return function(){t.engine._openIn(this,t.name)}},o=0;o<n.length;o++)n[o]=i(n[o]);t._slip(l,[n]),t._resume()}else O(t,e)}function C(t){this._orig._watcher._slip(q,[t]),this._orig._watcher._resume()}function b(){s.apply(this),this._handles=[],this._outs=[]}function B(t){this._receive(t)}function A(t){this._emit(t)}function x(t){t instanceof Function?p(this._orig._handles,t):p(this._orig._outs,t)}function P(t){void 0===t?(this._orig._handles=[],this._orig._outs=[]):t instanceof Function?f(this._orig._handles,t):f(this._orig._outs,t)}function L(){s.apply(this),this._handles=[]}function q(t){t instanceof Function&&(this._orig._handles.length||k._watch(),p(this._orig._handles,t))}function F(t){void 0===t?this._orig._handles=[]:f(this._orig._handles,t),this._orig._handles.length||k._unwatch()}function z(t,e,n,i){if(function(t,e,n,i){var o;if(t.length!=n.length||e.length!=i.length)return!0;for(o=0;o<t.length;o++)if(t[o].name!=n[o].name)return!0;for(o=0;o<e.length;o++)if(e[o].name!=i[o].name)return!0;return!1}(t,e,n,i)){var o,r=[],s=[],u=[],a=[],c={};for(o=0;o<t.length;o++)c[t[o].name]=!0;for(o=0;o<n.length;o++)c[n[o].name]||r.push(n[o]);for(c={},o=0;o<n.length;o++)c[n[o].name]=!0;for(o=0;o<t.length;o++)c[t[o].name]||u.push(t[o]);for(c={},o=0;o<e.length;o++)c[e[o].name]=!0;for(o=0;o<i.length;o++)c[i[o].name]||s.push(i[o]);for(c={},o=0;o<i.length;o++)c[i[o].name]=!0;for(o=0;o<e.length;o++)c[e[o].name]||a.push(e[o]);return r.length||u.length||s.length||a.length?{inputs:{added:r,removed:u},outputs:{added:s,removed:a}}:void 0}}function D(e){for(t=0;t<g._watcher._handles.length;t++)g._watcher._handles[t].apply(g,[e])}_.prototype.refresh=function(){return this._push(S,[]),this},_.prototype.openMidiOut=function(t){var e=new b;return this._push(S,[]),this._push(I,[e,t]),e},_.prototype.openMidiIn=function(t){var e=new b;return this._push(S,[]),this._push(E,[e,t]),e},_.prototype.onChange=function(t){return this._orig._watcher||(this._orig._watcher=new L),this._push(C,[t]),this._orig._watcher},_.prototype._close=function(){k._close()},b.prototype=new s,b.prototype._receive=function(t){this._emit(t)},b.prototype.send=function(){return this._push(B,[tt.apply(null,arguments)]),this},b.prototype.note=function(t,e,n,i){return this.noteOn(t,e,n),i&&this.wait(i).noteOff(t,e),this},b.prototype._emit=function(t){var e;for(e=0;e<this._handles.length;e++)this._handles[e].apply(this,[tt(t)._stamp(this)]);for(e=0;e<this._outs.length;e++){var n=tt(t);n._stamped(this._outs[e])||this._outs[e].send(n._stamp(this))}},b.prototype.emit=function(t){return this._push(A,[t]),this},b.prototype.connect=function(t){return this._push(x,[t]),this},b.prototype.disconnect=function(t){return this._push(P,[t]),this},L.prototype=new s,L.prototype.connect=function(t){return this._push(q,[t]),this},L.prototype.disconnect=function(t){return this._push(F,[t]),this};var k={},T={_outs:[],_ins:[]};function W(){if("undefined"!=typeof module&&module.exports)return t=require("jazz-midi"),k._type="node",k._main=t,k._pool=[],k._newPlugin=function(){return new t.MIDI},void Q();var t;this._break()}function j(){var t=document.createElement("div");t.style.visibility="hidden",document.body.appendChild(t);var e,n=document.createElement("object");if(n.style.visibility="hidden",n.style.width="0px",n.style.height="0px",n.classid="CLSID:1ACE1618-1C7D-4561-AEE1-34842AA85E90",n.type="audio/x-jazz",document.body.appendChild(n),n.isJazz)return e=n,k._type="plugin",k._main=e,k._pool=[e],k._newPlugin=function(){var t=document.createElement("object");return t.style.visibility="hidden",t.style.width="0px",e.style.height="0px",t.classid="CLSID:1ACE1618-1C7D-4561-AEE1-34842AA85E90",t.type="audio/x-jazz",document.body.appendChild(t),t.isJazz?t:void 0},void Q();this._break()}function N(){if(navigator.requestMIDIAccess){var t=this;return navigator.requestMIDIAccess({}).then(function(e){Z(e),t._resume()},function(e){t._crash(e)}),void this._pause()}this._break()}function R(){if(navigator.requestMIDIAccess){var t=this;return navigator.requestMIDIAccess({sysex:!0}).then(function(e){Z(e,!0),t._resume()},function(e){t._crash(e)}),void this._pause()}this._break()}function G(){var t,e,n=this;this._pause(),document.addEventListener("jazz-midi-msg",function i(o){if(t=!0,e||(e=document.getElementById("jazz-midi-msg")),e){var r,s,u,a=[];try{a=JSON.parse(e.innerText)}catch(t){}e.innerText="",document.removeEventListener("jazz-midi-msg",i),"version"===a[0]?(r=e,s=a[2],k._type="extension",k._version=s,k._sysex=!0,k._pool=[],k._inArr=[],k._outArr=[],k._inMap={},k._outMap={},k._outsW=[],k._insW=[],k._msg=r,k._newPlugin=function(){var t={id:k._pool.length};t.id?document.dispatchEvent(new CustomEvent("jazz-midi",{detail:["new"]})):t.ready=!0,k._pool.push(t)},k._newPlugin(),k._refresh=function(){k._outs=[],k._ins=[],g._pause(),document.dispatchEvent(new CustomEvent("jazz-midi",{detail:["refresh"]}))},_closeAll=function(){for(var t=0;t<this.clients.length;t++)this._close(this.clients[t])},k._openOut=function(t,e){var n=k._outMap[e];if(!n){k._pool.length<=k._outArr.length&&k._newPlugin();var i=k._pool[k._outArr.length];(n={name:e,clients:[],info:{name:e,manufacturer:k._allOuts[e].manufacturer,version:k._allOuts[e].version,type:"MIDI-out",sysex:k._sysex,engine:k._type},_start:function(){document.dispatchEvent(new CustomEvent("jazz-midi",{detail:["openout",i.id,e]}))},_close:function(t){k._closeOut(t)},_closeAll:_closeAll,_receive:function(t){var e=t.slice();e.splice(0,0,"play",i.id),document.dispatchEvent(new CustomEvent("jazz-midi",{detail:e}))}}).plugin=i,i.output=n,k._outArr.push(n),k._outMap[e]=n}t._orig._impl=n,p(n.clients,t._orig),t._info=n.info,t._receive=function(t){n._receive(t)},t._close=function(){n._close(this)},n.open||(n.plugin.ready&&n._start(),t._pause())},k._openIn=function(t,e){var n=k._inMap[e];if(!n){k._pool.length<=k._inArr.length&&k._newPlugin();var i=k._pool[k._inArr.length];(n={name:e,clients:[],info:{name:e,manufacturer:k._allIns[e].manufacturer,version:k._allIns[e].version,type:"MIDI-in",sysex:k._sysex,engine:k._type},_start:function(){document.dispatchEvent(new CustomEvent("jazz-midi",{detail:["openin",i.id,e]}))},_close:function(t){k._closeIn(t)},_closeAll:_closeAll}).plugin=i,i.input=n,k._inArr.push(n),k._inMap[e]=n}t._orig._impl=n,p(n.clients,t._orig),t._info=n.info,t._close=function(){n._close(this)},n.open||(n.plugin.ready&&n._start(),t._pause())},k._closeOut=function(t){var e=t._impl;f(e.clients,t._orig),e.clients.length||(e.open=!1,document.dispatchEvent(new CustomEvent("jazz-midi",{detail:["closeout",e.plugin.id]})))},k._closeIn=function(t){var e=t._impl;f(e.clients,t._orig),e.clients.length||(e.open=!1,document.dispatchEvent(new CustomEvent("jazz-midi",{detail:["closein",e.plugin.id]})))},k._close=function(){},k._watch=function(){k._insW=k._ins,k._outsW=k._outs,u=setInterval(function(){document.dispatchEvent(new CustomEvent("jazz-midi",{detail:["refresh"]}))},250)},k._unwatch=function(){clearInterval(u),u=void 0},document.addEventListener("jazz-midi-msg",function(t){var e,n,i,o=k._msg.innerText.split("\n");for(k._msg.innerText="",n=0;n<o.length;n++){var r=[];try{r=JSON.parse(o[n])}catch(t){}if(r.length)if("refresh"===r[0]){if(r[1].ins){for(i=0;i<r[1].ins.length;i++)r[1].ins[i].type=k._type;k._ins=r[1].ins}if(r[1].outs){for(i=0;i<r[1].outs.length;i++)r[1].outs[i].type=k._type;k._outs=r[1].outs}g._resume();var s=z(k._insW,k._outsW,k._ins,k._outs);if(s){for(k._insW=k._ins,k._outsW=k._outs,i=0;i<s.inputs.removed.length;i++)(e=k._inMap[s.inputs.removed[i].name])&&e._closeAll();for(i=0;i<s.outputs.removed.length;i++)(e=k._outMap[s.inputs.removed[i].name])&&e._closeAll();u&&D(s)}}else if("version"===r[0]){var a=k._pool[r[1]];a&&(a.ready=!0,a.input&&a.input._start(),a.output&&a.output._start())}else if("openout"===r[0]){if(e=k._pool[r[1]].output)if(r[2]==e.name){if(e.open=!0,e.clients)for(i=0;i<e.clients.length;i++)e.clients[i]._resume()}else if(e.clients)for(i=0;i<e.clients.length;i++)e.clients[i]._crash()}else if("openin"===r[0]){if(e=k._pool[r[1]].input)if(r[2]==e.name){if(e.open=!0,e.clients)for(i=0;i<e.clients.length;i++)e.clients[i]._resume()}else if(e.clients)for(i=0;i<e.clients.length;i++)e.clients[i]._crash()}else if("midi"===r[0]&&(e=k._pool[r[1]].input)&&e.clients)for(i=0;i<e.clients.length;i++){var c=tt(r.slice(3));e.clients[i]._emit(c)}}}),n._resume()):n._crash()}});try{document.dispatchEvent(new Event("jazz-midi"))}catch(t){}window.setTimeout(function(){t||n._crash()},0)}function V(){this._pause();var t=this;setTimeout(function(){t._crash()},0)}function H(t){for(var e=[W,V],n=function(t){var e=["extension","webmidi","plugin"];if(!t||!t.engine)return e;for(var n,i,o=t.engine instanceof Array?t.engine:[t.engine],r={},s=[],u=[],a=0;a<o.length;a++){var c=o[a].toString().toLowerCase();r[c]||(r[c]=!0,"none"===c&&(n=!0),"etc"===c&&(i=!0),i?u.push(c):s.push(c),f(e,c))}(i||s.length||u.length)&&(n=!1);return n?[]:s.concat(i?e:u)}(t),i=0;i<n.length;i++)"webmidi"==n[i]?(t&&!0===t.sysex&&e.push(R),t&&!0===t.sysex&&!0!==t.degrade||e.push(N)):"extension"==n[i]?e.push(G):"plugin"==n[i]&&e.push(j);return e.push(J),e}function J(){k._type="none",k._sysex=!0,k._refresh=function(){k._outs=[],k._ins=[]},k._watch=function(){},k._unwatch=function(){}}function Q(){var t;function n(){t&&(k._refresh(),t=!1)}function i(e){t=!0,setTimeout(n,0)}k._inArr=[],k._outArr=[],k._inMap={},k._outMap={},k._outsW=[],k._insW=[],k._version=k._main.version,k._sysex=!0,_closeAll=function(){for(var t=0;t<this.clients.length;t++)this._close(this.clients[t])},k._refresh=function(){var n,i;for(k._outs=[],k._ins=[],n=0;(i=k._main.MidiOutInfo(n)).length;n++)k._outs.push({type:k._type,name:i[0],manufacturer:i[1],version:i[2]});for(n=0;(i=k._main.MidiInInfo(n)).length;n++)k._ins.push({type:k._type,name:i[0],manufacturer:i[1],version:i[2]});var o=z(k._insW,k._outsW,k._ins,k._outs);if(o){for(e=0;e<o.inputs.removed.length;e++)impl=k._inMap[o.inputs.removed[e].name],impl&&impl._closeAll();for(e=0;e<o.outputs.removed.length;e++)impl=k._outMap[o.inputs.removed[e].name],impl&&impl._closeAll();k._insW=k._ins,k._outsW=k._outs,t&&D(o)}},k._openOut=function(t,e){var n=k._outMap[e];if(!n){k._pool.length<=k._outArr.length&&k._pool.push(k._newPlugin()),n={name:e,clients:[],info:{name:e,manufacturer:k._allOuts[e].manufacturer,version:k._allOuts[e].version,type:"MIDI-out",sysex:k._sysex,engine:k._type},_close:function(t){k._closeOut(t)},_closeAll:_closeAll,_receive:function(t){this.plugin.MidiOutRaw(t.slice())}};var i=k._pool[k._outArr.length];n.plugin=i,k._outArr.push(n),k._outMap[e]=n}if(!n.open){var o=n.plugin.MidiOutOpen(e);if(o!==e)return o&&n.plugin.MidiOutClose(),void t._break();n.open=!0}t._orig._impl=n,p(n.clients,t._orig),t._info=n.info,t._receive=function(t){n._receive(t)},t._close=function(){n._close(this)}},k._openIn=function(t,e){var n,i=k._inMap[e];if(!i){k._pool.length<=k._inArr.length&&k._pool.push(k._newPlugin());(i={name:e,clients:[],info:{name:e,manufacturer:k._allIns[e].manufacturer,version:k._allIns[e].version,type:"MIDI-in",sysex:k._sysex,engine:k._type},_close:function(t){k._closeIn(t)},_closeAll:_closeAll,handle:function(t,e){for(var n=0;n<this.clients.length;n++){var i=tt(e);this.clients[n]._emit(i)}}}).onmidi=(n=i,function(t,e){n.handle(t,e)});var o=k._pool[k._inArr.length];i.plugin=o,k._inArr.push(i),k._inMap[e]=i}if(!i.open){var r=i.plugin.MidiInOpen(e,i.onmidi);if(r!==e)return r&&i.plugin.MidiInClose(),void t._break();i.open=!0}t._orig._impl=i,p(i.clients,t._orig),t._info=i.info,t._close=function(){i._close(this)}},k._closeOut=function(t){var e=t._impl;f(e.clients,t._orig),e.clients.length||(e.open=!1,e.plugin.MidiOutClose())},k._closeIn=function(t){var e=t._impl;f(e.clients,t._orig),e.clients.length||(e.open=!1,e.plugin.MidiInClose())},k._close=function(){for(var t=0;t<k._inArr.length;t++)k._inArr[t].open&&k._inArr[t].plugin.MidiInClose();k.unwatch()},k._watch=function(){k._main.OnConnectMidiIn(i),k._main.OnConnectMidiOut(i),k._main.OnDisconnectMidiIn(i),k._main.OnDisconnectMidiOut(i)},k._unwatch=function(){k._main.OnConnectMidiIn(),k._main.OnConnectMidiOut(),k._main.OnDisconnectMidiIn(),k._main.OnDisconnectMidiOut()},_.prototype._time=function(){return k._main.Time()}}function Z(t,n){var i;k._type="webmidi",k._version=43,k._sysex=!!n,k._access=t,k._inMap={},k._outMap={},k._outsW=[],k._insW=[],_closeAll=function(){for(var t=0;t<this.clients.length;t++)this._close(this.clients[t])},k._refresh=function(){k._outs=[],k._ins=[],k._access.outputs.forEach(function(t,e){k._outs.push({type:k._type,name:t.name,manufacturer:t.manufacturer,version:t.version})}),k._access.inputs.forEach(function(t,e){k._ins.push({type:k._type,name:t.name,manufacturer:t.manufacturer,version:t.version})});var t=z(k._insW,k._outsW,k._ins,k._outs);if(t){for(e=0;e<t.inputs.removed.length;e++)impl=k._inMap[t.inputs.removed[e].name],impl&&impl._closeAll();for(e=0;e<t.outputs.removed.length;e++)impl=k._outMap[t.inputs.removed[e].name],impl&&impl._closeAll();k._insW=k._ins,k._outsW=k._outs,i&&D(t)}},k._openOut=function(t,e){var n=k._outMap[e];n||(n={name:e,clients:[],info:{name:e,manufacturer:k._allOuts[e].manufacturer,version:k._allOuts[e].version,type:"MIDI-out",sysex:k._sysex,engine:k._type},_close:function(t){k._closeOut(t)},_closeAll:_closeAll,_receive:function(t){this.dev.send(t.slice())}},k._access.outputs.forEach(function(t,i){t.name===e&&(n.dev=t)}),n.dev?k._outMap[e]=n:n=void 0);n?(n.dev.open&&n.dev.open(),t._orig._impl=n,p(n.clients,t._orig),t._info=n.info,t._receive=function(t){n._receive(t)},t._close=function(){n._close(this)}):t._break()},k._openIn=function(t,e){var n,i=k._inMap[e];if(!i)if(i={name:e,clients:[],info:{name:e,manufacturer:k._allIns[e].manufacturer,version:k._allIns[e].version,type:"MIDI-in",sysex:k._sysex,engine:k._type},_close:function(t){k._closeIn(t)},_closeAll:_closeAll,handle:function(t){for(var e=0;e<this.clients.length;e++){var n=tt([].slice.call(t.data));this.clients[e]._emit(n)}}},k._access.inputs.forEach(function(t,n){t.name===e&&(i.dev=t)}),i.dev){i.dev.onmidimessage=(n=i,function(t){n.handle(t)}),k._inMap[e]=i}else i=void 0;i?(i.dev.open&&i.dev.open(),t._orig._impl=i,p(i.clients,t._orig),t._info=i.info,t._close=function(){i._close(this)}):t._break()},k._closeOut=function(t){var e=t._impl;e.clients.length||e.dev.close&&e.dev.close(),f(e.clients,t._orig)},k._closeIn=function(t){var e=t._impl;f(e.clients,t._orig),e.clients.length||e.dev.close&&e.dev.close()},k._close=function(){},k._watch=function(){k._access.onstatechange=function(){i=!0,setTimeout(function(){i&&(k._refresh(),i=!1)},0)}},k._unwatch=function(){k._access.onstatechange=void 0}}var U=function(t){var e;return g||(e=t,(g=new _)._options=e,g._push(l,[H(e)]),g.refresh(),g._push(d,[]),g._push(function(){v.length||y.length||this._break()},[]),g._resume()),g};function K(){var t=this instanceof K?this:t=new K;return K.prototype.reset.apply(t,arguments),t}function X(){29.97==this.type&&!this.second&&this.frame<2&&this.minute%10&&(this.frame=2)}function Y(t){return[[24,25,29.97,30][t[7]>>1&3],(1&t[7])<<4|t[6],t[5]<<4|t[4],t[3]<<4|t[2],t[1]<<4|t[0]]}function $(t){return t<10?"0"+t:t}function tt(e){var n=this instanceof tt?this:n=new tt;if(n._from=e instanceof tt?e._from.slice():[],!arguments.length)return n;var i=e instanceof Array?e:arguments;for(t=0;t<i.length;t++)o=i[t],1==t&&n[0]>=128&&n[0]<=175&&(o=tt.noteValue(o)),(o!=parseInt(o)||o<0||o>255)&&it(i[t]),n.push(o);return n}U.info=function(){return _.prototype.info()},U.Widget=function(t){var e=new b;if(t instanceof Object)for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e._resume(),e},_.prototype.Widget=U.Widget,U.createNew=U.Widget,_.prototype.createNew=U.Widget,K.prototype.reset=function(t){if(t instanceof K)return this.setType(t.getType()),this.setHour(t.getHour()),this.setMinute(t.getMinute()),this.setSecond(t.getSecond()),this.setFrame(t.getFrame()),this.setQuarter(t.getQuarter()),this;var e=t instanceof Array?t:arguments;return this.setType(e[0]),this.setHour(e[1]),this.setMinute(e[2]),this.setSecond(e[3]),this.setFrame(e[4]),this.setQuarter(e[5]),this},K.prototype.isFullFrame=function(){return 0==this.quarter||4==this.quarter},K.prototype.getType=function(){return this.type},K.prototype.getHour=function(){return this.hour},K.prototype.getMinute=function(){return this.minute},K.prototype.getSecond=function(){return this.second},K.prototype.getFrame=function(){return this.frame},K.prototype.getQuarter=function(){return this.quarter},K.prototype.setType=function(t){if(void 0===t||24==t)this.type=24;else if(25==t)this.type=25;else if(29.97==t)this.type=29.97,X.apply(this);else{if(30!=t)throw RangeError("Bad SMPTE frame rate: "+t);this.type=30}return this.frame>=this.type&&(this.frame=29.97==this.type?29:this.type-1),this},K.prototype.setHour=function(t){if(void 0===t&&(t=0),t!=parseInt(t)||t<0||t>=24)throw RangeError("Bad SMPTE hours value: "+t);return this.hour=t,this},K.prototype.setMinute=function(t){if(void 0===t&&(t=0),t!=parseInt(t)||t<0||t>=60)throw RangeError("Bad SMPTE minutes value: "+t);return this.minute=t,X.apply(this),this},K.prototype.setSecond=function(t){if(void 0===t&&(t=0),t!=parseInt(t)||t<0||t>=60)throw RangeError("Bad SMPTE seconds value: "+t);return this.second=t,X.apply(this),this},K.prototype.setFrame=function(t){if(void 0===t&&(t=0),t!=parseInt(t)||t<0||t>=this.type)throw RangeError("Bad SMPTE frame number: "+t);return this.frame=t,X.apply(this),this},K.prototype.setQuarter=function(t){if(void 0===t&&(t=0),t!=parseInt(t)||t<0||t>=8)throw RangeError("Bad SMPTE quarter frame: "+t);return this.quarter=t,this},K.prototype.incrFrame=function(){return this.frame++,this.frame>=this.type&&(this.frame=0,this.second++,this.second>=60&&(this.second=0,this.minute++,this.minute>=60&&(this.minute=0,this.hour=this.hour>=23?0:this.hour+1))),X.apply(this),this},K.prototype.decrFrame=function(){return!this.second&&2==this.frame&&29.97==this.type&&this.minute%10&&(this.frame=0),this.frame--,this.frame<0&&(this.frame=29.97==this.type?29:this.type-1,this.second--,this.second<0&&(this.second=59,this.minute--,this.minute<0&&(this.minute=59,this.hour=this.hour?this.hour-1:23))),this},K.prototype.incrQF=function(){return this.backwards=!1,this.quarter=this.quarter+1&7,0!=this.quarter&&4!=this.quarter||this.incrFrame(),this},K.prototype.decrQF=function(){return this.backwards=!0,this.quarter=this.quarter+7&7,3!=this.quarter&&7!=this.quarter||this.decrFrame(),this},K.prototype.read=function(t){if(t instanceof tt||(t=tt.apply(null,arguments)),240==t[0]&&127==t[1]&&1==t[3]&&1==t[4]&&247==t[9])return this.type=[24,25,29.97,30][t[5]>>5&3],this.hour=31&t[5],this.minute=t[6],this.second=t[7],this.frame=t[8],this.quarter=0,this._=void 0,this._b=void 0,this._f=void 0,!0;if(241==t[0]&&void 0!==t[1]){var e=t[1]>>4,n=15&t[1];return 0==e?7==this._&&(7==this._f&&(this.reset(Y(this._a)),this.incrFrame()),this.incrFrame()):3==e?4==this._&&this.decrFrame():4==e?3==this._&&this.incrFrame():7==e&&0===this._&&(0===this._b&&(this.reset(Y(this._a)),this.decrFrame()),this.decrFrame()),this._a||(this._a=[]),this._a[e]=n,this._f=this._f===e-1||0==e?e:void 0,this._b=this._b===e+1||7==e?e:void 0,this._=e,this.quarter=e,!0}return!1},K.prototype.toString=function(){return[$(this.hour),$(this.minute),$(this.second),$(this.frame)].join(":")},U.SMPTE=K,tt.prototype=[],tt.prototype.constructor=tt;var et={};tt.noteValue=function(t){return et[t.toString().toLowerCase()]},tt.programValue=function(t){return t};var nt={c:0,d:2,e:4,f:5,g:7,a:9,b:11,h:11};for(n in nt)if(nt.hasOwnProperty(n))for(o=0;o<12&&!((i=nt[n]+12*o)>127);o++)et[n+o]=i,i>0&&(et[n+"b"+o]=i-1,et[n+"bb"+o]=i-2),i<127&&(et[n+"#"+o]=i+1,et[n+"##"+o]=i+2);for(o=0;o<128;o++)et[o]=o;function it(t){throw RangeError("Bad MIDI value: "+t)}function ot(t){return(t!=parseInt(t)||t<0||t>15)&&it(t),t}function rt(t){return(t!=parseInt(t)||t<0||t>127)&&it(t),t}function st(t){return(t!=parseInt(t)||t<0||t>16383)&&it(t),127&t}function ut(t){return(t!=parseInt(t)||t<0||t>16383)&&it(t),t>>7}var at={noteOff:function(t,e){return[128+ot(t),rt(tt.noteValue(e)),0]},noteOn:function(t,e,n){return[144+ot(t),rt(tt.noteValue(e)),rt(n)]},aftertouch:function(t,e,n){return[160+ot(t),rt(tt.noteValue(e)),rt(n)]},control:function(t,e,n){return[176+ot(t),rt(e),rt(n)]},program:function(t,e){return[192+ot(t),rt(tt.programValue(e))]},pressure:function(t,e){return[208+ot(t),rt(e)]},pitchBend:function(t,e){return[224+ot(t),st(e),ut(e)]},bankMSB:function(t,e){return[176+ot(t),0,rt(e)]},bankLSB:function(t,e){return[176+ot(t),32,rt(e)]},modMSB:function(t,e){return[176+ot(t),1,rt(e)]},modLSB:function(t,e){return[176+ot(t),33,rt(e)]},breathMSB:function(t,e){return[176+ot(t),2,rt(e)]},breathLSB:function(t,e){return[176+ot(t),34,rt(e)]},footMSB:function(t,e){return[176+ot(t),4,rt(e)]},footLSB:function(t,e){return[176+ot(t),36,rt(e)]},portamentoMSB:function(t,e){return[176+ot(t),5,rt(e)]},portamentoLSB:function(t,e){return[176+ot(t),37,rt(e)]},volumeMSB:function(t,e){return[176+ot(t),7,rt(e)]},volumeLSB:function(t,e){return[176+ot(t),39,rt(e)]},balanceMSB:function(t,e){return[176+ot(t),8,rt(e)]},balanceLSB:function(t,e){return[176+ot(t),40,rt(e)]},panMSB:function(t,e){return[176+ot(t),10,rt(e)]},panLSB:function(t,e){return[176+ot(t),42,rt(e)]},expressionMSB:function(t,e){return[176+ot(t),11,rt(e)]},expressionLSB:function(t,e){return[176+ot(t),43,rt(e)]},damper:function(t,e){return[176+ot(t),64,e?127:0]},portamento:function(t,e){return[176+ot(t),65,e?127:0]},sostenuto:function(t,e){return[176+ot(t),66,e?127:0]},soft:function(t,e){return[176+ot(t),67,e?127:0]},allSoundOff:function(t){return[176+ot(t),120,0]},allNotesOff:function(t){return[176+ot(t),123,0]},mtc:function(t){return[241,function(t){var e;switch(!t.backwards&&t.quarter>=4?t.decrFrame():t.backwards&&t.quarter<4&&t.incrFrame(),t.quarter>>1){case 0:e=t.frame;break;case 1:e=t.second;break;case 2:e=t.minute;break;default:e=t.hour}return 1&t.quarter?e>>=4:e&=15,7==t.quarter&&(25==t.type?e|=2:29.97==t.type?e|=4:30==t.type&&(e|=6)),!t.backwards&&t.quarter>=4?t.incrFrame():t.backwards&&t.quarter<4&&t.decrFrame(),e|t.quarter<<4}(t)]},songPosition:function(t){return[242,st(t),ut(t)]},songSelect:function(t){return[243,rt(t)]},tune:function(){return[246]},clock:function(){return[248]},start:function(){return[250]},continue:function(){return[251]},stop:function(){return[252]},active:function(){return[254]},sxIdRequest:function(){return[240,126,127,6,1,247]},sxFullFrame:function(t){return[240,127,127,1,1,(e=t,25==e.type?32|e.hour:29.97==e.type?64|e.hour:30==e.type?96|e.hour:e.hour),t.getMinute(),t.getSecond(),t.getFrame(),247];var e},reset:function(){return[255]}};function ct(t,e){tt[t]=function(){return new tt(e.apply(0,arguments))},b.prototype[t]=function(){return this.send(e.apply(0,arguments)),this}}for(n in at)at.hasOwnProperty(n)&&ct(n,at[n]);var ht,lt={a:10,b:11,c:12,d:13,e:14,f:15,A:10,B:11,C:12,D:13,E:14,F:15};for(n=0;n<16;n++)lt[n]=n;if(tt.prototype.getChannel=function(){var t=this[0];if(!(void 0===t||t<128||t>239))return 15&t},tt.prototype.setChannel=function(t){var e=this[0];return void 0===e||e<128||e>239?this:(void 0!==(t=lt[t])&&(this[0]=240&e|t),this)},tt.prototype.getNote=function(){var t=this[0];if(!(void 0===t||t<128||t>175))return this[1]},tt.prototype.setNote=function(t){var e=this[0];return void 0===e||e<128||e>175?this:(void 0!==(t=tt.noteValue(t))&&(this[1]=t),this)},tt.prototype.getVelocity=function(){var t=this[0];if(!(void 0===t||t<144||t>159))return this[2]},tt.prototype.setVelocity=function(t){var e=this[0];return void 0===e||e<144||e>159?this:((t=parseInt(t))>=0&&t<128&&(this[2]=t),this)},tt.prototype.getSysExChannel=function(){if(240==this[0])return this[2]},tt.prototype.setSysExChannel=function(t){return 240==this[0]&&this.length>2&&(t=parseInt(t))>=0&&t<128&&(this[2]=t),this},tt.prototype.isNoteOn=function(){var t=this[0];return!(void 0===t||t<144||t>159)&&this[2]>0},tt.prototype.isNoteOff=function(){var t=this[0];return!(void 0===t||t<128||t>159)&&(t<144||0==this[2])},tt.prototype.isSysEx=function(){return 240==this[0]},tt.prototype.isFullSysEx=function(){return 240==this[0]&&247==this[this.length-1]},tt.prototype.toString=function(){if(!this.length)return"empty";var t=function(t){for(var e=[],n=0;n<t.length;n++)e[n]=(t[n]<16?"0":"")+t[n].toString(16);return e.join(" ")}(this);if(this[0]<128)return t;var e={241:"MIDI Time Code",242:"Song Position",243:"Song Select",244:"Undefined",245:"Undefined",246:"Tune request",248:"Timing clock",249:"Undefined",250:"Start",251:"Continue",252:"Stop",253:"Undefined",254:"Active Sensing",255:"Reset"}[this[0]];if(e)return t+" -- "+e;var n=this[0]>>4;return(e={8:"Note Off",10:"Aftertouch",12:"Program Change",13:"Channel Aftertouch",14:"Pitch Wheel"}[n])?t+" -- "+e:9==n?t+" -- "+(this[2]?"Note On":"Note Off"):11!=n?t:((e={0:"Bank Select MSB",1:"Modulation Wheel MSB",2:"Breath Controller MSB",4:"Foot Controller MSB",5:"Portamento Time MSB",6:"Data Entry MSB",7:"Channel Volume MSB",8:"Balance MSB",10:"Pan MSB",11:"Expression Controller MSB",12:"Effect Control 1 MSB",13:"Effect Control 2 MSB",16:"General Purpose Controller 1 MSB",17:"General Purpose Controller 2 MSB",18:"General Purpose Controller 3 MSB",19:"General Purpose Controller 4 MSB",32:"Bank Select LSB",33:"Modulation Wheel LSB",34:"Breath Controller LSB",36:"Foot Controller LSB",37:"Portamento Time LSB",38:"Data Entry LSB",39:"Channel Volume LSB",40:"Balance LSB",42:"Pan LSB",43:"Expression Controller LSB",44:"Effect control 1 LSB",45:"Effect control 2 LSB",48:"General Purpose Controller 1 LSB",49:"General Purpose Controller 2 LSB",50:"General Purpose Controller 3 LSB",51:"General Purpose Controller 4 LSB",64:"Damper Pedal On/Off",65:"Portamento On/Off",66:"Sostenuto On/Off",67:"Soft Pedal On/Off",68:"Legato Footswitch",69:"Hold 2",70:"Sound Controller 1",71:"Sound Controller 2",72:"Sound Controller 3",73:"Sound Controller 4",74:"Sound Controller 5",75:"Sound Controller 6",76:"Sound Controller 7",77:"Sound Controller 8",78:"Sound Controller 9",79:"Sound Controller 10",80:"General Purpose Controller 5",81:"General Purpose Controller 6",82:"General Purpose Controller 7",83:"General Purpose Controller 8",84:"Portamento Control",88:"High Resolution Velocity Prefix",91:"Effects 1 Depth",92:"Effects 2 Depth",93:"Effects 3 Depth",94:"Effects 4 Depth",95:"Effects 5 Depth",96:"Data Increment",97:"Data Decrement",98:"Non-Registered Parameter Number LSB",99:"Non-Registered Parameter Number MSB",100:"Registered Parameter Number LSB",101:"Registered Parameter Number MSB",120:"All Sound Off",121:"Reset All Controllers",122:"Local Control On/Off",123:"All Notes Off",124:"Omni Mode Off",125:"Omni Mode On",126:"Mono Mode On",127:"Poly Mode On"}[this[1]])||(e="Undefined"),t+" -- "+e)},tt.prototype._stamp=function(t){return this._from.push(t._orig?t._orig:t),this},tt.prototype._unstamp=function(t){if(void 0===t)this._from=[];else{t._orig&&(t=t._orig);var e=this._from.indexOf(t);e>-1&&this._from.splice(e,1)}return this},tt.prototype._stamped=function(t){t._orig&&(t=t._orig);for(var e=0;e<this._from.length;e++)if(this._from[e]==t)return!0;return!1},U.MIDI=tt,(U.lib={}).openMidiOut=function(t,e){var n=new b;return e._openOut(n,t),n},U.lib.openMidiIn=function(t,e){var n=new b;return e._openIn(n,t),n},U.lib.registerMidiOut=function(t,e){for(var n=e._info(t),i=0;i<T._outs.length;i++)if(T._outs[i].name==n.name)return!1;return n.engine=e,T._outs.push(n),g&&g._bad&&(g._repair(),g._resume()),!0},U.lib.registerMidiIn=function(t,e){for(var n=e._info(t),i=0;i<T._ins.length;i++)if(T._ins[i].name==n.name)return!1;return n.engine=e,T._ins.push(n),g&&g._bad&&(g._repair(),g._resume()),!0},U.lib.getAudioContext=function(){return ht},"undefined"!=typeof window){var pt=window.AudioContext||window.webkitAudioContext;if(pt){(ht=new pt)&&!ht.createGain&&(ht.createGain=ht.createGainNode);var ft=function(){if("running"!=ht.state){ht.resume();var t=ht.createOscillator(),e=ht.createGain();e.gain.setTargetAtTime(0,ht.currentTime,.01),t.connect(e),e.connect(ht.destination),t.start||(t.start=t.noteOn),t.stop||(t.stop=t.noteOff),t.start(.1),t.stop(.11)}else document.removeEventListener("touchend",ft),document.removeEventListener("mousedown",ft),document.removeEventListener("keydown",ft)};document.addEventListener("touchend",ft),document.addEventListener("mousedown",ft),document.addEventListener("keydown",ft),ft()}}return U});