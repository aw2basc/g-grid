var fs = require('fs'),
	gGrid = '',
	grids = {
wuxga : {
	grid:1848,
	short:'h',
	long:'hd',
	res:'WUXGA',
	module:54,
	gutter:24,
	padding:25,
	columns:24
},
wxga : {
	grid:1314,
	short:'w',
	long:'wide',
	res:'WXGA',
	module:54,
	gutter:30,
	padding:15,
	columns:16
},
xga : {
	grid:978,
	short:'d',
	long:'desktop',
	res:'XGA',
	module:54,
	gutter:30,
	padding:12,
	columns:12
},
wvga : {
	grid:748,
	short:'t',
	long:'tablet',
	res:'WVGA',
	module:44,
	gutter:20,
	padding:10,
	columns:12
},
hvga : {
	grid:460,
	short:'l',
	long:'landscape',
	res:'HVGA',
	module:40,
	gutter:20,
	padding:10,
	columns:8
},
qvga : {
	grid:300,
	short:'m',
	long:'mobile',
	res:'QVGA',
	module:27,
	gutter:12,
	padding:10,
	columns:8
}
};

var shortHand = function(gS, gL){
	var first = ['a','all','@b'],
		firstFull = ['all','all','@b'],
		firstL = first.length,
		second = ['f','flex','fluid','l','left','lead','r','reverse','right'],
		secondFull = ['fluid','fluid','fluid','lead','lead','lead','right','right','right'],
		secondL = second.length,
		third = ['l','left','lead','r','reverse','right'],
		thirdFull = ['lead','lead','lead','right','right','right'],
		thirdL = third.length,
		fourth = ['r','reverse','right'],
		fourthFull = ['right','right','right'],
		fourthL = fourth.length,
		sH = '.g-grid(' + gS + ',',
		lH = '.g-grid(' + gL + ',',
		isGrid = sH == lH;
		sR = '';

	var gridCheck = function(first,firstF,second,secondF,third,thirdF,fourth,fourthF){
		var notShort = false;
		if(fourth != 'undefined'){
			if(first == firstF && second == secondF && third == thirdF && fourth == fourthF){
				notShort = true;
			};
		}else if(third != 'undefined'){
			if(first == firstF && second == secondF && third == thirdF){
				notShort = true;
			};
		}else if(second != 'undefined'){
			if(first == firstF && second == secondF){
				notShort = true;
			};
		}else{
			if(first == firstF){
				notShort = true;
			};
		}
		return notShort;
	};

	for(i=0;i<firstL;i++){
		var isNum = (firstFull[i] == '@b') ? ' when (isnumber(@b))' : '';
		if(!(isGrid && gridCheck(first[i],firstFull[i]))){
			sR = sR + sH + first[i] + ')' + isNum + '{' + lH + firstFull[i] + ');}\n';
		}
		for(j=0;j<secondL;j++){
			if(firstFull[i] == 'all' && secondFull[j] == 'fluid' || firstFull[i] == '@b'){
				if(!(isGrid && gridCheck(first[i],firstFull[i],second[j],secondFull[j]))){
					sR = sR + sH + first[i] + ',' +  second[j] + ')' + isNum + '{' + lH + firstFull[i] + ',' + secondFull[j] + ');}\n';
				}
				for(k=0;k<thirdL;k++){
					if(secondFull[j] != thirdFull[k] && secondFull[j] != 'right' && firstFull[i] != 'all'){
						if(!(isGrid && gridCheck(first[i],firstFull[i],second[j],secondFull[j],third[k],thirdFull[k]))){
							sR = sR + sH + first[i] + ',' +  second[j] + ',' +  third[k] + ')' + isNum + '{' + lH + firstFull[i] + ',' + secondFull[j] + ',' + thirdFull[k] + ');}\n';
						}
						for(l=0;l<fourthL;l++){
							if(thirdFull[k] != 'right'){
								if(!(isGrid && gridCheck(first[i],firstFull[i],second[j],secondFull[j],third[k],thirdFull[k],fourth[l],fourthFull[l]))){
									sR = sR + sH + first[i] + ',' +  second[j] + ',' +  third[k] + ',' +  fourth[l] + ')' + isNum + '{' + lH + firstFull[i] + ',' + secondFull[j] + ',' + thirdFull[k] + ',' + fourthFull[l] +  ');}\n';
								}
							}
						}
					}
				}
			}
		}
	}
	return sR;
};

function genGrids(opt){
	var fluidMod = 100*(opt.module/opt.grid),
		fluidGut = 100*(opt.gutter/opt.grid),
		fluidPad = 100*(opt.padding/(opt.grid + (opt.padding * 2)));

	// vars
	var gGridCore = '\n'+
		'// ' + opt.grid + '\n'+
		'// vars'+ '\n'+
		'@g-grid-' + opt.grid + '-width:' + opt.grid + 'px;' + '\n'+
		'@g-grid-' + opt.grid + '-module:' + opt.module + 'px;' + '\n'+
		'@g-grid-' + opt.grid + '-gutter:' + opt.gutter + 'px;' + '\n'+
		'@g-grid-' + opt.grid + '-padding:' + opt.padding + 'px;' + '\n'+
		'@g-grid-' + opt.grid + '-columns:' + opt.columns + ';' + '\n'+
		'// fluid vars'+ '\n'+
		'@g-grid-' + opt.grid + '-module-fluid:' + fluidMod + '%;' + '\n'+
		'@g-grid-' + opt.grid + '-gutter-fluid:' + fluidGut + '%;' + '\n'+
		'@g-grid-' + opt.grid + '-padding-fluid:' + fluidPad + '%;' + '\n';

	// props
	gGridCore += '// props'+ '\n'+
		'.g-grid(' + opt.grid + ', @a) when (isnumber(@a)) {'+ '\n'+
		'	.g-grid-props(@a, @g-grid-' + opt.grid + '-width, @g-grid-' + opt.grid + '-module, @g-grid-' + opt.grid + '-gutter, false);'+ '\n'+
		'}'+ '\n'+
		'.g-grid(' + opt.grid + ', @a, right) when (isnumber(@a)) {'+ '\n'+
		'	.g-grid-props(@a, @g-grid-' + opt.grid + '-width, @g-grid-' + opt.grid + '-module, @g-grid-' + opt.grid + '-gutter, false, right);'+ '\n'+
		'}'+ '\n'+
		'.g-grid(' + opt.grid + ', @a, lead) when (isnumber(@a)) {'+ '\n'+
		'	.g-grid-props(@a, @g-grid-' + opt.grid + '-width, @g-grid-' + opt.grid + '-module, @g-grid-' + opt.grid + '-gutter, lead);'+ '\n'+
		'}'+ '\n'+
		'.g-grid(' + opt.grid + ', @a, lead, right) when (isnumber(@a)) {'+ '\n'+
		'	.g-grid-props(@a, @g-grid-' + opt.grid + '-width, @g-grid-' + opt.grid + '-module, @g-grid-' + opt.grid + '-gutter, lead, right);'+ '\n'+
		'}'+ '\n'+
		'// fluid'+ '\n'+
		'.g-grid(' + opt.grid + ', @a, fluid) when (isnumber(@a)) {'+ '\n'+
		'	.g-grid-props(@a, 100%, @g-grid-' + opt.grid + '-module-fluid, @g-grid-' + opt.grid + '-gutter-fluid, false);'+ '\n'+
		'}'+ '\n'+
		'.g-grid(' + opt.grid + ', @a, fluid, right) when (isnumber(@a)) {'+ '\n'+
		'	.g-grid-props(@a, 100%, @g-grid-' + opt.grid + '-module-fluid, @g-grid-' + opt.grid + '-gutter-fluid, false, right);'+ '\n'+
		'}'+ '\n'+
		'.g-grid(' + opt.grid + ', @a, fluid, lead) when (isnumber(@a)) {'+ '\n'+
		'	.g-grid-props(@a, 100%, @g-grid-' + opt.grid + '-module-fluid, @g-grid-' + opt.grid + '-gutter-fluid, lead);'+ '\n'+
		'}'+ '\n'+
		'.g-grid(' + opt.grid + ', @a, fluid, lead, right) when (isnumber(@a)) {'+ '\n'+
		'	.g-grid-props(@a, 100%, @g-grid-' + opt.grid + '-module-fluid, @g-grid-' + opt.grid + '-gutter-fluid, lead, right);'+ '\n'+
		'}'+ '\n'+
		'// all'+ '\n'+
		'.g-grid(' + opt.grid + ', all) {'+ '\n'+
		'	.g-grid-props(@g-grid-' + opt.grid + '-columns, @g-grid-' + opt.grid + '-width, @g-grid-' + opt.grid + '-module, @g-grid-' + opt.grid + '-gutter, false);'+ '\n'+
		'}'+ '\n'+
		'.g-grid(' + opt.grid + ', all, fluid){'+ '\n'+
		'	.g-grid-props(100%, 100%, @g-grid-' + opt.grid + '-module-fluid, @g-grid-' + opt.grid + '-gutter-fluid, false);'+ '\n'+
		'}'+ '\n';

	// shorthand
	gGridCore += '// shorthand' + '\n';
	gGridCore += shortHand(opt.grid, opt.grid);
	gGridCore += shortHand(opt.short, opt.grid);
	gGridCore += shortHand(opt.long, opt.grid);
	gGridCore += shortHand(opt.res, opt.grid);

	gGridCore += '// widths' + '\n';
	for(var i = 1; i <= opt.columns; i++){
		gGridCore += '@g-grid-' + opt.grid + '-' + i + ':' + ( opt.module * i + opt.gutter * (i - 1)) + 'px;\n' +
		'@g-grid-' + opt.grid + '-' + i + '-fluid:' + ( fluidMod * i + fluidGut * (i - 1)) + '%;\n';
		if(i == opt.columns){
			gGridCore += '@g-grid-' + opt.grid + '-all:' + ( opt.module * i + opt.gutter * (i - 1)) + 'px;\n' +
			'@g-grid-' + opt.grid + '-all-fluid:' + ( fluidMod * i + fluidGut * (i - 1)) + '%;\n';
		}
	}

	return gGridCore;
};

fs.readFile('logo.txt', 'ascii', function(err,data){
	gGrid += data;
	fs.readFile('../LICENSE', 'ascii', function(err,data){
		gGrid += '\n/*\n' + data + '\n*/\n';
		for (sys in grids){
			gGrid += genGrids(grids[sys]);
		}
		fs.readFile('props.less', 'ascii', function(err,data){
			gGrid += data;
			fs.writeFile('g-grid.less', gGrid, 'ascii');
		});
	});
});

