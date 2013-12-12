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
		sh = '.g-grid(' + gS + ',',
		lh = '.g-grid(' + gL + ',',
		isgrid = sh == lh;
		sr = '';

	var gridcheck = function(first,firstf,second,secondf,third,thirdf,fourth,fourthf){
		var notshort = false;
		if(fourth != 'undefined'){
			if(first == firstf && second == secondf && third == thirdf && fourth == fourthf){
				notshort = true;
			};
		}else if(third != 'undefined'){
			if(first == firstf && second == secondf && third == thirdf){
				notshort = true;
			};
		}else if(second != 'undefined'){
			if(first == firstf && second == secondf){
				notshort = true;
			};
		}else{
			if(first == firstf){
				notshort = true;
			};
		}
		return notshort;
	};

	for(i=0;i<firstL;i++){
		var isnum = (firstFull[i] == '@b') ? ' when (isnumber(@b))' : '';
		if(!(isgrid && gridcheck(first[i],firstFull[i]))){
			sr = sr + sh + first[i] + ')' + isnum + '{' + lh + firstFull[i] + ');}\n';
		}
		for(j=0;j<secondL;j++){
			if(firstFull[i] == 'all' && secondFull[j] == 'fluid' || firstFull[i] == '@b'){
				if(!(isgrid && gridcheck(first[i],firstFull[i],second[j],secondFull[j]))){
					sr = sr + sh + first[i] + ',' +  second[j] + ')' + isnum + '{' + lh + firstFull[i] + ',' + secondFull[j] + ');}\n';
				}
				for(k=0;k<thirdL;k++){
					if(secondFull[j] != thirdFull[k] && secondFull[j] != 'right' && firstFull[i] != 'all'){
						if(!(isgrid && gridcheck(first[i],firstFull[i],second[j],secondFull[j],third[k],thirdFull[k]))){
							sr = sr + sh + first[i] + ',' +  second[j] + ',' +  third[k] + ')' + isnum + '{' + lh + firstFull[i] + ',' + secondFull[j] + ',' + thirdFull[k] + ');}\n';
						}
						for(l=0;l<fourthL;l++){
							if(thirdFull[k] != 'right'){
								if(!(isgrid && gridcheck(first[i],firstFull[i],second[j],secondFull[j],third[k],thirdFull[k],fourth[l],fourthFull[l]))){
									sr = sr + sh + first[i] + ',' +  second[j] + ',' +  third[k] + ',' +  fourth[l] + ')' + isnum + '{' + lh + firstFull[i] + ',' + secondFull[j] + ',' + thirdFull[k] + ',' + fourthFull[l] +  ');}\n';
								}
							}
						}
					}
				}
			}
		}
	}
	return sr;
};

var genGrids = function(opt){
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

module.exports = exports = genGrids;
