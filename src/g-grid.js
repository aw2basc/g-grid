var fs = require('fs'),
	grids = require('./grids.js'),
	genGrids = require('./genGrids.js'),
	gGrid = '';

module.exports = exports = function(){
	fs.readFile('./src/logo.txt', 'ascii', function(err,data){
		if(err)console.log(err);
		gGrid += data;
		fs.readFile('LICENSE', 'ascii', function(err,data){
			if(err)console.log(err);
			gGrid += '\n/*\n' + data + '\n*/\n';
			for (sys in grids){
				gGrid += genGrids(grids[sys]);
			}
			fs.readFile('./src/props.less', 'ascii', function(err,data){
				if(err)console.log(err);
				gGrid += data;
				fs.writeFile('./dist/g-grid.less', gGrid, 'ascii');
			});
		});
	});
};
