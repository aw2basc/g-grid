var fs = require('fs'),
	toWrite = '',
	grids = {
wuxga : {
	grid:1848,
	short:'h',
	long:'hd',
	res:'WUXGA'
},
wxga : {
	grid:1314,
	short:'w',
	long:'wide',
	res:'WXGA'
},
xga : {
	grid:978,
	short:'d',
	long:'desktop',
	res:'XGA'
},
wvga : {
	grid:748,
	short:'t',
	long:'tablet',
	res:'WVGA'
},
hvga : {
	grid:460,
	short:'l',
	long:'landscape',
	res:'HVGA'
},
qvga : {
	grid:300,
	short:'m',
	long:'mobile',
	res:'QVGA'
}
};

function genGrids(opt){
var ret = '\n'+
'// ' + opt.grid + '\n'+
'// props'+ '\n'+
'.g-grid(@a, ' + opt.grid + ') when (isnumber(@a)) {'+ '\n'+
'	.g-grid-props(@a, @width-' + opt.grid + ', @module-' + opt.grid + ', @gutter-' + opt.grid + ', false);'+ '\n'+
'}'+ '\n'+
'.g-grid(@a, ' + opt.grid + ', right) when (isnumber(@a)) {'+ '\n'+
'	.g-grid-props(@a, @width-' + opt.grid + ', @module-' + opt.grid + ', @gutter-' + opt.grid + ', false, right);'+ '\n'+
'}'+ '\n'+
'.g-grid(all, ' + opt.grid + ') {'+ '\n'+
'	.g-grid-props(@columns-' + opt.grid + ', @width-' + opt.grid + ', @module-' + opt.grid + ', @gutter-' + opt.grid + ', false);'+ '\n'+
'}'+ '\n'+
'.g-grid(padding, ' + opt.grid + ') {'+ '\n'+
'	.g-grid-padding(@padding-' + opt.grid + ');'+ '\n'+
'}'+ '\n'+
'.g-grid(padding, ' + opt.grid + ', fluid) {'+ '\n'+
'	.g-grid-padding(@padding-' + opt.grid + '-fluid);'+ '\n'+
'}'+ '\n'+
'.g-grid(@a, ' + opt.grid + ', only) when (isnumber(@a)) {'+ '\n'+
'	.g-grid-width(@a,@module-' + opt.grid + ',@gutter-' + opt.grid + ');'+ '\n'+
'}'+ '\n'+
'.g-grid(@a, ' + opt.grid + ', lead) when (isnumber(@a)) {'+ '\n'+
'	.g-grid-props(@a, @width-' + opt.grid + ', @module-' + opt.grid + ', @gutter-' + opt.grid + ', lead);'+ '\n'+
'}'+ '\n'+
'.g-grid(@a, ' + opt.grid + ', lead, right) when (isnumber(@a)) {'+ '\n'+
'	.g-grid-props(@a, @width-' + opt.grid + ', @module-' + opt.grid + ', @gutter-' + opt.grid + ', lead, right);'+ '\n'+
'}'+ '\n'+
'// fluid'+ '\n'+
'.g-grid(all, ' + opt.grid + ', fluid){'+ '\n'+
'	.g-grid-props(100%, 100%, @module-' + opt.grid + '-fluid, @gutter-' + opt.grid + '-fluid, false);'+ '\n'+
'}'+ '\n'+
'.g-grid(@a, ' + opt.grid + ', fluid) when (isnumber(@a)) {'+ '\n'+
'	.g-grid-props(@a, 100%, @module-' + opt.grid + '-fluid, @gutter-' + opt.grid + '-fluid, false);'+ '\n'+
'}'+ '\n'+
'.g-grid(@a, ' + opt.grid + ', fluid, right) when (isnumber(@a)) {'+ '\n'+
'	.g-grid-props(@a, 100%, @module-' + opt.grid + '-fluid, @gutter-' + opt.grid + '-fluid, false, right);'+ '\n'+
'}'+ '\n'+
'.g-grid(@a, ' + opt.grid + ', fluid, only) when (isnumber(@a)) {'+ '\n'+
'	.g-grid-width(@a, @module-' + opt.grid + '-fluid, @gutter-' + opt.grid + '-fluid);'+ '\n'+
'}'+ '\n'+
'.g-grid(@a, ' + opt.grid + ', fluid, lead) when (isnumber(@a)) {'+ '\n'+
'	.g-grid-props(@a, 100%, @module-' + opt.grid + '-fluid, @gutter-' + opt.grid + '-fluid, lead);'+ '\n'+
'}'+ '\n'+
'.g-grid(@a, ' + opt.grid + ', fluid, lead, right) when (isnumber(@a)) {'+ '\n'+
'	.g-grid-props(@a, 100%, @module-' + opt.grid + '-fluid, @gutter-' + opt.grid + '-fluid, lead, right);'+ '\n'+
'}'+ '\n'+
''+ '\n'+
'// ' + opt.short + '\n'+
'.g-grid(@a, ' + opt.short + ') when not (@a = a)  and not (@a = p) { .g-grid(@a, ' + opt.grid + '); }'+ '\n'+
'.g-grid(@a, ' + opt.short + ', @b) when not (@a = p) and not (@a = a) and not (@b = l) and not (@b = left) and not (@b = f) and not (@b = flex) and not (@b = o) and not (@b = r) { .g-grid(@a, ' + opt.grid + ', @b); }'+ '\n'+
'.g-grid(@a, ' + opt.short + ', @b, @c) when not (@b = l) and not (@b = left) and not (@b = f) and not (@b = flex) and not (@b = o) and not (@b = r) and not (@c = l) and not (@c = left) and not (@c = f) and not (@c = flex) and not (@c = o) and not (@c = r) { .g-grid(@a, ' + opt.grid + ', @b, @c); }'+ '\n'+
'.g-grid(@a, ' + opt.short + ', @b, @c, @d) when not (@b = l) and not (@b = left) and not (@b = f) and not (@b = flex) and not (@b = o) and not (@b = r) and not (@c = l) and not (@c = left) and not (@c = f) and not (@c = flex) and not (@c = o) and not (@c = r) and not (@d = l) and not (@d = left) and not (@d = f) and not (@d = flex) and not (@d = r) and not (@d = o) { .g-grid(@a, ' + opt.grid + ', @b, @c, @d); }'+ '\n'+
''+ '\n'+
'// ' + opt.long + '\n'+
'.g-grid(@a, ' + opt.long + ') when not (@a = a)  and not (@a = p) { .g-grid(@a, ' + opt.grid + '); }'+ '\n'+
'.g-grid(@a, ' + opt.long + ', @b) when not (@a = p) and not (@a = a) and not (@b = l) and not (@b = left) and not (@b = f) and not (@b = flex) and not (@b = o) and not (@b = r) { .g-grid(@a, ' + opt.grid + ', @b); }'+ '\n'+
'.g-grid(@a, ' + opt.long + ', @b, @c) when not (@b = l) and not (@b = left) and not (@b = f) and not (@b = flex) and not (@b = o) and not (@b = r) and not (@c = l) and not (@c = left) and not (@c = f) and not (@c = flex) and not (@c = o) and not (@c = r) { .g-grid(@a, ' + opt.grid + ', @b, @c); }'+ '\n'+
'.g-grid(@a, ' + opt.long + ', @b, @c, @d) when not (@b = l) and not (@b = left) and not (@b = f) and not (@b = flex) and not (@b = o) and not (@b = r) and not (@c = l) and not (@c = left) and not (@c = f) and not (@c = flex) and not (@c = o) and not (@c = r) and not (@d = l) and not (@d = left) and not (@d = f) and not (@d = flex) and not (@d = r) and not (@d = o) { .g-grid(@a, ' + opt.grid + ', @b, @c, @d); }'+ '\n'+
''+ '\n'+
'// ' + opt.res + '\n'+
'.g-grid(@a, ' + opt.res + ') when not (@a = a)  and not (@a = p) { .g-grid(@a, ' + opt.grid + '); }'+ '\n'+
'.g-grid(@a, ' + opt.res + ', @b) when not (@a = p) and not (@a = a) and not (@b = l) and not (@b = left) and not (@b = f) and not (@b = flex) and not (@b = o) and not (@b = r) { .g-grid(@a, ' + opt.grid + ', @b); }'+ '\n'+
'.g-grid(@a, ' + opt.res + ', @b, @c) when not (@b = l) and not (@b = left) and not (@b = f) and not (@b = flex) and not (@b = o) and not (@b = r) and not (@c = l) and not (@c = left) and not (@c = f) and not (@c = flex) and not (@c = o) and not (@c = r) { .g-grid(@a, ' + opt.grid + ', @b, @c); }'+ '\n'+
'.g-grid(@a, ' + opt.res + ', @b, @c, @d) when not (@b = l) and not (@b = left) and not (@b = f) and not (@b = flex) and not (@b = o) and not (@b = r) and not (@c = l) and not (@c = left) and not (@c = f) and not (@c = flex) and not (@c = o) and not (@c = r) and not (@d = l) and not (@d = left) and not (@d = f) and not (@d = flex) and not (@d = r) and not (@d = o) { .g-grid(@a, ' + opt.grid + ', @b, @c, @d); }' + '\n';
return ret;
};

function pop(){
	for (sys in grids){
		toWrite += genGrids(grids[sys]);
	}
	return toWrite;
};

fs.writeFile('g-grid.less', pop(), 'ascii')
