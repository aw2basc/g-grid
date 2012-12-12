<pre>
                                          //
    =====       =====   //===   //    ===//
   //  //  ==  //  //  //  //  //   //  //
   ===//       ===//  //      //    ===//
     //          //    
 ===//       ===//  fluid semantic grid

-----https://github.com/aw2basc/g-grid-----
</pre>

# g-grid
g-grid is a css grid system written in **[less](http://lesscss.org/ "less")**.  it supports fluid and static widths and is meant to be used as mixins within your stylesheet.  

## usage
`.g-grid(grid-system, num-columns[, fluid] [, lead] [, right]);` 

## features
[semantic](#semantic)  
[static and fluid widths](#fluid)  
[lead column adjustments](#lead)  
[all column specific styles](#all)  
[float left/right](#right)  
[shorthand](#shorthand)  
[variables](#variables)  
[6 grid systems](#grids)  


## <a name="semantic"></a> semantic
mixins keep presentation and markup separated and allow for more flexibility within media queries.


## <a name="fluid"></a> static/fluid  
by default, width and margin is in px.  
`.g-grid(978,4); == width=306px; margin-left:30px; float:left; display:inline; min-height:1px;`  
add fluid, get %  
`.g-grid(978,4,fluid); == width=31.288343558282207%; margin-left:3.067484662576687%`  

## <a name="lead"></a> lead  
lead is the first column on the left  
adds `clear:both;` and doesn't add `margin-left`  

## <a name="all"></a> all  
passing in 'all' instead of the column number returns the max width, `margin:0 auto;` and applies clearfix.  
`.g-grid(978,all) == width:978px; ...`

## <a name="right"></a> float left/right  
by default, everything is `float:left;`  
add the right argument and it changes to `float:right;`  

## <a name="shorthand"></a> shorthand
`.g() == .g-grid()` -> (e.g. .g(978,9); == .g-grid(978,9);)  
`all/a == (max columns)` -> (e.g. `.g(978,all); == .g(978,12);`)  
`1848 == WUXGA == hd == h` -> (e.g. `.g(h,2); == .g(1848,2);`)  
`1314 == WXGA == wide == w`  
`978 == XGA == desktop == d`  
`748 == WVGA == tablet == t`  
`460 == HVGA == portrait == p`  
`300 == QVGA == mobile == m`  
`fluid == f == flex` -> (e.g. `.g(978,2,f); == .g(978,2,fluid); `)  
`lead == l == left` -> (e.g. `.g(978,2,l); == .g(978,2,lead);`)   

## <a name="variables"></a> variables
px and % widths are generated and available as variables  
`width:@g-grid-748-4; == width:306px;`  
the pattern is @g-grid-(grid system)-(x);  
where x can be the number of columns, module, gutter or padding
 
## <a name="grids"></a> grids
1848 - HD - WUXGA  
`width:1848px;`  
`module:54px;`   
`gutter:24px;`   
`padding:25px;`  
`columns:24;`    

1314 - Wide - WXGA  
`width:1314px;`  
`module:54px;`  
`gutter:30px;`  
`padding:15px;`  
`columns:16;`  

978 - Desktop - XGA  
`width:978px;`  
`module:54px;`  
`gutter:30px;`  
`padding:12px;`  
`columns:12;`  

748 - Tablet - WVGA  
`width:748px;`  
`module:44px;`  
`gutter:20px;`  
`padding:10px;`  
`columns:12;`  

460 - Landscape - HVGA  
`width:460px;`   
`module:27px;`   
`gutter:12px;`   
`padding:10px;`   
`columns:8;`   

300 - Mobile - QVGA  
`width:300px;`  
`module:27px;`  
`gutter:12px;`  
`padding:10px;`  
`columns:8;`  

## examples
`.g-grid(978,3);` -> 3 cols in 978 grid  
`.g-grid(978,4,lead);` -> left side column   
`.g-grid(978,fluid);` -> 4 cols fluid  
`.g-grid(978,all);` -> max width 978  
`.g-grid(300,4,fluid,lead,right);` -> percent width, no margin-left, float right, 300 grid

## notes
use this with `border-box`.   
`.border-box { -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; }`
