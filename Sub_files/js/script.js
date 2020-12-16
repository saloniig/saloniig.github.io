function authenticate(){
	var uname = document.querySelector("#username").value;
	var pass = document.querySelector("#password").value;
	if(uname== "palak"&& pass=="grey")
  	{
  	    window.location.href="start.html";
  	}
  	else
  	{
  		alert("invalid details");
  		window.location.href="index.html";
  	}	
};
