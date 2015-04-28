function makeServiceCall () {
	var xmlhttp = new XMLHttpRequest();
	
	var dataToServer = "Data sent from client";
	
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("message").innerHTML=xmlhttp.responseText;
		}
	}
	
	xmlhttp.open("POST","http://192.168.7.53:82/RestSampleApplication/rest/message/postText",true);
	//xmlhttp.open("GET","http://192.168.7.53:82/RestSampleApplication/rest/message/getText?name=Lakshmi",true);
	xmlhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
	xmlhttp.setRequestHeader("Content-Type","text/plain");
	xmlhttp.send(dataToServer);
	//xmlhttp.send();
}