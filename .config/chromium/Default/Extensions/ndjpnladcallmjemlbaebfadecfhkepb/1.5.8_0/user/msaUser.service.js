!function(){"use strict";angular.module("app.user").service("msaUserService",["$log","$injector","constants",function(e,c,n){this.type=n.USER_TYPE.MSA,this.getConfig=function(){var e={url:n.MSACONFIG.URL,params:{client_id:n.MSACONFIG.CLIENT_ID,client_secret:n.MSACONFIG.CLIENT_SECRET,redirect_uri:n.MSACONFIG.REDIRECT_URI},resource:n.ONEDRIVE.INSTANCE,loginUrl:n.MSACONFIG.INSTANCE+"?response_type=code&client_id="+n.MSACONFIG.CLIENT_ID+"&redirect_uri="+n.MSACONFIG.REDIRECT_URI+"&scope="+n.MSACONFIG.SCOPE,logoutUrl:n.MSACONFIG.LOGOUT_URI};return e},this.lookupUserInfo=function(e,r){var t={serviceInfo:{resource:n.LINKS.APP.ONEDRIVE}},i=c.get("$http"),I={method:"GET",url:n.MSACONFIG.USERINFO_URL,headers:{"X-UserType":n.USER_TYPE.MSA}};i(I).success(function(e){t.email=e.emails.account,t.cid=e.id,r(t)}).error(function(){r(t)})}}])}();