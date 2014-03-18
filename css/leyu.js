// JavaScript Document

<!--
function getCookie(name)
{
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg)) return unescape(arr[2]);
	else return null;
}
function getReseveKey(){
				if(typeof reseveKey != 'undefined' && reseveKey!=null) return reseveKey;
				var cKey = getCookie("reseveKey");
				if(cKey!=null&&cKey.length!=0) return cKey;
				return null;
}
function openDoyooCustomChat(t) {
	//alert('t');
	//下面url地址是接入地址
	var url = "http://looyu.cnbmglobal.cn/chat/chat/p.do?c=1&lang=cn";
	
	//现在param中的参数n指客服ID，当指定这个参数后，Web CallCenter的系统会根据这个值接通到指定客服人员
	//这里的参数据可以修改为g，g指客服分组ID，当指定这个参数后，Web CallCenter的系统会根据这个值接通到指定客服分组


	//这里是分组模式接通代码。
	if(	t!= null &&  t.length != 0 )
		url +="&g=" + t;
	
	var sid = getCookie("DOYOO_VISITOR_ID");
	var cid = getCookie("DOYOO_USER_ID");
	
	if(sid!=null)
		url +="&v=" + sid;
	if(cid !=null)
		url +="&u=" + cid;

	var reseKey = getReseveKey();
	
	if(reseKey!=null)
		url=url+"&r="+encodeURIComponent(reseKey);
		
	var param = "height=460,width=690,directories=no," + "location=no,menubar=no," + "resizeable=no,status=no,toolbar=no,top=100,left=200";
	
	var acceptWin = window.open(url,"", param);
	
}

//-->