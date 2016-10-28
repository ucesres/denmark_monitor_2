											
var humid1 =Papa.parse("https://dl.dropboxusercontent.com/u/4076462/humidity_basement_latest_value.csv", {
	download: true,
	complete: function(results) {
		console.log(results.data[1][1]);
		console.log(results);
		var str2 = "%"
		document.getElementById("live-humid").innerHTML = results.data[1][1].concat(str2); 		
	}
});

var temp1 =Papa.parse("https://dl.dropboxusercontent.com/u/4076462/temperature_basement_latest_value.csv", {
	download: true,
	complete: function(results) {
		console.log(results.data[1][1]);
		console.log(results);
		var str1 = " o"
		var str1a = str1.sup()
		var str2 = "C"
		var str3 = str1a.concat(str2)
		document.getElementById("live-temp").innerHTML = results.data[1][1].concat(str3); 		
	}
});

var humid_out =Papa.parse("https://dl.dropboxusercontent.com/u/4076462/current_external_conditions.csv", {
	download: true,
	complete: function(results) {
		console.log(results.data[1][3]);
		console.log(results.data[1][3]);
		var str2a = "%"
		document.getElementById("outside-humid").innerHTML = results.data[1][3].concat(str2a); 
		var str1 = " o"
		var str1a = str1.sup()
		var str2 = "C"
		var str3 = str1a.concat(str2)
		document.getElementById("outside-temp").innerHTML = results.data[1][4].concat(str3); 		
	}
});

