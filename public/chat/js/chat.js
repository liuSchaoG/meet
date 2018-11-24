var ImgIputHandler={
    Init:function() {
        /*$("#dope").focusout(function(){
            $(this).parent().css("border-color", "#cccccc");
            $(this).parent().css("box-shadow", "none");
            $(this).parent().css("-moz-box-shadow", "none");
            $(this).parent().css("-webkit-box-shadow", "none");
        });
        $("#dope").focus(function(){
            $(this).parent().css("border-color", "rgba(19,105,172,.75)");
            $(this).parent().css("box-shadow", "0 0 3px rgba(19,105,192,.5)");
            $(this).parent().css("-moz-box-shadow", "0 0 3px rgba(241,39,232,.5)");
            $(this).parent().css("-webkit-box-shadow", "0 0 3px rgba(19,105,252,3)");
        });*/
        var isShowImg = false;
        $("#ExP").click(function(){
            if(isShowImg==false){
                isShowImg=true;
                $(this).parent().parent().prev().attr('style',"display:block;");
                $(this).parent().parent().prev().animate({marginTop:"-121px",opacity:"1.0"},300);
                if($(".emjon").children().length==0){
                    for(var i=0;i<ImgIputHandler.facePath.length;i++){
                        $(".emjon").append("<img title=\""+ImgIputHandler.facePath[i].faceName+"\" src=\"/chat/images/face/"+ImgIputHandler.facePath[i].facePath+"\" />");
                    }
                    $(".emjon>img").click(function(){
                        isShowImg=false;
                        $(this).parent().animate({marginTop:"0px",opacity:"0.0"},300);
                        $(this).parent().attr('style',"display:none;");
                        ImgIputHandler.insertAtCursor($("#dope")[0],"["+$(this).attr("title")+"]");
                    });
                }
            }else{
                isShowImg=false;
                $(this).parent().parent().prev().animate({marginTop:"0px",opacity:"0.0"},300);
                $(this).parent().parent().prev().attr('style',"display:none;");
            }
        });
    },
    insertAtCursor:function(myField, myValue) {
        if (document.selection) {
            myField.focus();
            sel = document.selection.createRange();
            sel.text = myValue;
            sel.select();
        } else if (myField.selectionStart || myField.selectionStart == "0") {
            var startPos = myField.selectionStart;
            var endPos = myField.selectionEnd;
            var restoreTop = myField.scrollTop;
            myField.value = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos, myField.value.length);
            if (restoreTop > 0) {
                myField.scrollTop = restoreTop;
            }
            myField.focus();
            myField.selectionStart = startPos + myValue.length;
            myField.selectionEnd = startPos + myValue.length;
        } else {
            myField.value += myValue;
            myField.focus();
        }
    },
    getEmjon: function(str){
        var reg = /\[.+?\]/g;
        str = str.replace(reg,function(a,b){
            if(ImgIputHandler.face[a] == 'undefined'){
                return ''
            }else{
                return ImgIputHandler.face[a];
            }
        });
        return str;
},

    face:{
        '[微笑]':'<img src="/chat/images/face/0.gif"/>',
        '[撇嘴]':'<img src="/chat/images/face/1.gif"/>',
        '[色]':'<img src="/chat/images/face/2.gif"/>',
        '[发呆]':'<img src="/chat/images/face/3.gif" />',
        '[得意]':'<img src="/chat/images/face/4.gif"/>',
        '[流泪]':'<img src="/chat/images/face/5.gif" />',
        '[害羞]':'<img src="/chat/images/face/6.gif" />',
        '[闭嘴]':'<img src="/chat/images/face/7.gif"/>',
        '[大哭]':'<img src="/chat/images/face/9.gif"/>',
        '[尴尬]':'<img src="/chat/images/face/10.gif"/>',
        '[发怒]':'<img src="/chat/images/face/11.gif"/>',
        '[调皮]':'<img src="/chat/images/face/12.gif"/>',
        '[龇牙]':'<img src="/chat/images/face/13.gif"/>',
        '[惊讶]':'<img src="/chat/images/face/14.gif"/>',
        '[难过]':'<img src="/chat/images/face/15.gif" />',
        '[酷]':'<img src="/chat/images/face/16.gif"/>',
        '[冷汗]':'<img src="/chat/images/face/17.gif"/>',
        '[抓狂]':'<img src="/chat/images/face/18.gif"/>',
        '[吐]':'<img src="/chat/images/face/19.gif"/>',
        '[偷笑]':'<img src="/chat/images/face/20.gif"/>',
        '[可爱]':'<img src="/chat/images/face/21.gif"/>',
        '[白眼]':'<img src="/chat/images/face/22.gif"/>',
        '[傲慢]':'<img src="/chat/images/face/23.gif"/>',
        '[饥饿]':'<img src="/chat/images/face/24.gif"/>',
        '[困]':'<img src="/chat/images/face/25.gif"/>',
        '[惊恐]':'<img src="/chat/images/face/26.gif"/>',
        '[流汗]':'<img src="/chat/images/face/27.gif"/>',
        '[憨笑]':'<img src="/chat/images/face/28.gif"/>',
        '[大兵]':'<img src="/chat/images/face/29.gif"/>',
        '[奋斗]':'<img src="/chat/images/face/30.gif"/>',
        '[咒骂]':'<img src="/chat/images/face/31.gif"/>',
        '[疑问]':'<img src="/chat/images/face/32.gif"/>',
        '[嘘]':'<img src="/chat/images/face/33.gif"/>',
        '[晕]':'<img src="/chat/images/face/34.gif"/>',
        '[折磨]':'<img src="/chat/images/face/35.gif"/>',
        '[衰]':'<img src="/chat/images/face/36.gif"/>',
        '[骷髅]':'<img src="/chat/images/face/37.gif"/>',
        '[敲打]':'<img src="/chat/images/face/38.gif"/>',
        '[再见]':'<img src="/chat/images/face/39.gif"/>',
        '[擦汗]':'<img src="/chat/images/face/40.gif"/>',
        '[抠鼻]':'<img src="/chat/images/face/41.gif"/>',
        '[鼓掌]':'<img src="/chat/images/face/42.gif"/>',
        '[糗大了]':'<img src="/chat/images/face/43.gif"/>',
        '[坏笑]':'<img src="/chat/images/face/44.gif"/>',
        '[左哼哼]':'<img src="/chat/images/face/45.gif"/>',
        '[右哼哼]':'<img src="/chat/images/face/46.gif"/>',
        '[哈欠]':'<img src="/chat/images/face/47.gif"/>',
        '[鄙视]':'<img src="/chat/images/face/48.gif"/>',
        '[委屈]':'<img src="/chat/images/face/49.gif"/>',
        '[快哭了]':'<img src="/chat/images/face/50.gif"/>',
        '[阴险]':'<img src="/chat/images/face/51.gif"/>',
        '[亲亲]':'<img src="/chat/images/face/52.gif"/>',
        '[吓]':'<img src="/chat/images/face/53.gif"/>',
        '[可怜]':'<img src="/chat/images/face/54.gif"/>',
        '[菜刀]':'<img src="/chat/images/face/55.gif"/>',
        '[西瓜]':'<img src="/chat/images/face/56.gif"/>',
        '[啤酒]':'<img src="/chat/images/face/57.gif"/>',
        '[篮球]':'<img src="/chat/images/face/58.gif"/>',
        '[乒乓]':'<img src="/chat/images/face/59.gif"/>',
        '[拥抱]':'<img src="/chat/images/face/78.gif"/>',
        '[握手]':'<img src="/chat/images/face/81.gif"/>',
    },
    facePath:[
        {faceName:"微笑",facePath:"0.gif"},
        {faceName:"撇嘴",facePath:"1.gif"},
        {faceName:"色",facePath:"2.gif"},
        {faceName:"发呆",facePath:"3.gif"},
        {faceName:"得意",facePath:"4.gif"},
        {faceName:"流泪",facePath:"5.gif"},
        {faceName:"害羞",facePath:"6.gif"},
        {faceName:"闭嘴",facePath:"7.gif"},
        {faceName:"大哭",facePath:"9.gif"},
        {faceName:"尴尬",facePath:"10.gif"},
        {faceName:"发怒",facePath:"11.gif"},
        {faceName:"调皮",facePath:"12.gif"},
        {faceName:"龇牙",facePath:"13.gif"},
        {faceName:"惊讶",facePath:"14.gif"},
        {faceName:"难过",facePath:"15.gif"},
        {faceName:"酷",facePath:"16.gif"},
        {faceName:"冷汗",facePath:"17.gif"},
        {faceName:"抓狂",facePath:"18.gif"},
        {faceName:"吐",facePath:"19.gif"},
        {faceName:"偷笑",facePath:"20.gif"},
        {faceName:"可爱",facePath:"21.gif"},
        {faceName:"白眼",facePath:"22.gif"},
        {faceName:"傲慢",facePath:"23.gif"},
        {faceName:"饥饿",facePath:"24.gif"},
        {faceName:"困",facePath:"25.gif"},
        {faceName:"惊恐",facePath:"26.gif"},
        {faceName:"流汗",facePath:"27.gif"},
        {faceName:"憨笑",facePath:"28.gif"},
        {faceName:"大兵",facePath:"29.gif"},
        {faceName:"奋斗",facePath:"30.gif"},
        {faceName:"咒骂",facePath:"31.gif"},
        {faceName:"疑问",facePath:"32.gif"},
        {faceName:"嘘",facePath:"33.gif"},
        {faceName:"晕",facePath:"34.gif"},
        {faceName:"折磨",facePath:"35.gif"},
        {faceName:"衰",facePath:"36.gif"},
        {faceName:"骷髅",facePath:"37.gif"},
        {faceName:"敲打",facePath:"38.gif"},
        {faceName:"再见",facePath:"39.gif"},
        {faceName:"擦汗",facePath:"40.gif"},
        {faceName:"抠鼻",facePath:"41.gif"},
        {faceName:"鼓掌",facePath:"42.gif"},
        {faceName:"糗大了",facePath:"43.gif"},
        {faceName:"坏笑",facePath:"44.gif"},
        {faceName:"左哼哼",facePath:"45.gif"},
        {faceName:"右哼哼",facePath:"46.gif"},
        {faceName:"哈欠",facePath:"47.gif"},
        {faceName:"鄙视",facePath:"48.gif"},
        {faceName:"委屈",facePath:"49.gif"},
        {faceName:"快哭了",facePath:"50.gif"},
        {faceName:"阴险",facePath:"51.gif"},
        {faceName:"亲亲",facePath:"52.gif"},
        {faceName:"吓",facePath:"53.gif"},
        {faceName:"可怜",facePath:"54.gif"},
        {faceName:"菜刀",facePath:"55.gif"},
        {faceName:"西瓜",facePath:"56.gif"},
        {faceName:"啤酒",facePath:"57.gif"},
        {faceName:"篮球",facePath:"58.gif"},
        {faceName:"乒乓",facePath:"59.gif"},
        {faceName:"拥抱",facePath:"78.gif"},
        {faceName:"握手",facePath:"81.gif"},
    ]
    ,
}
