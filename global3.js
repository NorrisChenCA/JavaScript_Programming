var global = "global";

function a();{
	global = "overriding global";
	alert('from function a():' + global);
}

()a;
