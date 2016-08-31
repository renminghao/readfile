var  http = require('http');
var  read = function (url,cbf){
	var callback = function (){
		callback = function (){};
		cbf.apply(nul,arguments);
	}
	var req = http.get(url, function (res){
	
			var dataArray = [];
			res.on('data', function (data){
				dataArray.push(data);
			})

			res.on('end', function (){
				callback(null,dataArray);
			})

			res.on('error', callback);

	})

}

module.exports = read;
