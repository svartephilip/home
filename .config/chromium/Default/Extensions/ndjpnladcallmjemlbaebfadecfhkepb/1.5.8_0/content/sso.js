window.addEventListener("message",function(e){"use strict";if(e.data.channel&&"53ee284d-920a-4b59-9d30-a60315b26836"===e.data.channel)try{if(e.source!==window)return;var r=e.data,n=r.body.method;if("CreateProviderAsync"===n){var t=document.getElementById("ch-53ee284d-920a-4b59-9d30-a60315b26836");if(t){var a=document.createElement("div");a.id=BrowserHandler.runtime.id;var d=BrowserHandler.runtime.getManifest().version;d&&a.setAttribute("ver",d),t.appendChild(a)}}else r.extensionId===BrowserHandler.runtime.id&&"Response"!==n&&(null==SSOHelper&&(SSOHelper={Call:function(r){try{BrowserHandler.runtime.sendMessage({activity:"sso",body:r.body},function(e){null!=e?SSOHelper.Callback(r,e):SSOHelper.Callback(r,{status:"Fail",code:"ContentError",description:BrowserHandler.runtime.lastError.message})})}catch(e){SSOHelper.Callback(r,{status:"Fail",code:"ContentError",description:e.toString()})}},Callback:function(e,r){var n={channel:"53ee284d-920a-4b59-9d30-a60315b26836",extensionId:BrowserHandler.runtime.id,responseId:e.responseId,body:{method:"Response",response:r}};window.postMessage(n,"*")}}),SSOHelper.Call(r))}catch(e){}},!0);var SSOHelper=null;