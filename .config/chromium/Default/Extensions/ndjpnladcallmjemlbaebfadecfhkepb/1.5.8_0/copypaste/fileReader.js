!function(){"use strict";angular.module("app.copypaste",[]).factory("fileReader",function(){function n(){}return n.prototype={onloadend:null,onerror:null,onabort:null,readAsDataURL:function(n){return Utilities.isUndefinedOrNull(this._reader)&&(this._reader=new FileReader,this._reader.onloadend=this._onloadend.bind(this),this._reader.onabort=this._onabort.bind(this),this._reader.onerror=this._onerror.bind(this)),this._reader.readAsDataURL(n)},isBlob:function(n){return n&&n instanceof Blob},_onloadend:function(n){this.onloadend(n)},_onabort:function(n){this.onabort(n)},_onerror:function(n){this.onerror(n)}},new n})}();