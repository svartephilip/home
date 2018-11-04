!function(){"use strict";angular.module("app.user").factory("protectedResourceInterceptor",["$q","$log","$injector","constants",function(n,s,e,r){var o=e.get("userService");return{request:function(r){var t=n.defer();if(Utilities.isUndefinedOrNull(r)||Utilities.isUndefinedOrNull(r.headers))return s.error(String.format("protectedResourceInterceptor.request: http request config is null or undefined")),t.resolve(r),t.promise;var e=r.headers["X-UserType"];if(Utilities.isUndefinedOrNull(e))return t.resolve(r),t.promise;var i=r.headers["X-Resource"];return delete r.headers["X-Resource"],delete r.headers["X-UserType"],o.acquireToken(e,r.url,i,function(e){Utilities.isUndefinedOrNull(e)||(r.headers.Authorization="Bearer "+e),t.resolve(r)}),t.promise},responseError:function(e){if(e&&401===e.status){if(Utilities.isNotUndefinedOrNull(e.config)&&(e.config.url===r.O365CONFIG.SHAREPOINT_URL||e.config.url===r.O365CONFIG.PHOTO_URL))return n.reject(e);o.clearToken()}return n.reject(e)}}}])}();