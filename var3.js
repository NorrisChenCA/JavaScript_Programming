var x = function(){
	var y = 1;
	var z = function(){
		console.log(y);
	}

	z();
}

x();
