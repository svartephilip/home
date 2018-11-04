/*!*************************************************************
 *
 *    Video Deck for YouTube™ (c) by COMCODE d.o.o. <info@comcode.si>
 * 
 *    Video Deck for YouTube™ is licensed under a
 *    Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Unported License.
 *      
 *    See license.txt for terms of usage or read online:
 *    <http://creativecommons.org/licenses/by-nc-nd/3.0/>
 *  
 **************************************************************/

document.addEventListener('DOMContentLoaded', function () {
    var video = queryToData();
    $(".video-thumb img").attr("src",video.videoThumb);
    $(".video-length").html(formatDuration(video.videoLength));
    $(".video-title a").html(video.videoTitle);
    $(".video-description").html(video.videoDescription);
    $(".video-author").html(video.videoUsername);
    $(".video-views-count").html(formatViewsCount(video.videoViewsCount)+" views");
    $("body").bind("mousedown",function(e){
        if(e.button == 2){
            window.close();
        }else{
           chrome.tabs.create({"url":video.videoUrl+"&feature=youtube_video_deck","selected":true}); 
           window.close();
        }           
    });
    $("body").bind("mouseover",function(){
        clearTimeout(document.timeout);
    });
    $("body").bind("mouseout",function(){
        hideNotification();
    });
    hideNotification();
});

function hideNotification(){
    document.timeout = setTimeout(function(){window.close();}, 10000);
}

function queryToData(){
    var qString = window.location.search;
    if(qString.indexOf("?") == 0)
        qString = qString.substring(1);
    
    var qValue = qString.split("=");
    var item;
    if(qValue [0]== "data")
        item = JSON.parse(decodeURIComponent(qValue[1]));
    
    return item;
}
function formatDuration(lengthInSec){
    var hours= Math.floor(lengthInSec/3600);
    var minuts = Math.floor((lengthInSec-hours*3600)/60);
    var seconds = lengthInSec%60;

  return ((hours>0)?hours+":":"")+minuts+":"+((seconds<10)?"0"+seconds:seconds);  
}

function formatViewsCount(views){
    views += '';
    var x = views.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;    
}