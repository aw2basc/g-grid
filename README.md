# g-grid
g-grid is a css grid system with fluid and static widths meant to be used semantically as mixins within your stylesheet.  
**requires [less](http://lesscss.org/ "less")**

## features
[semantic](#semantic)  
[6 grid systems](#grids)  
[static and fluid widths](#fluid)  
[lead column adjustments](#lead)  
[widths only](#only)  
[padding only](#padding)  
[shorthand](#shorthand)  

## usage
`.g-grid(num-columns, grid-system [, fluid] [, lead]);`  
`.g-grid(padding, grid-system [, fluid]);`  
`.g-grid(num-columns, grid-system, only);`  
`.g-grid(clearfix);`  

## <a id="semantic"></a> semantic
g-grid is a mixin meant to be used within your stylesheet.  
e.g `.container { .g-grid(3,978,lead); }`

## <a id="grids"></a> grids
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

460 - Portrait - HVGA  
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

## <a id="fluid"></a> static/fluid  
if you do not specify, width is returned in px.  
adding in fluid var returns width in %.

## <a id="lead"></a> lead  
no margin set  
clear:left;

## <a id="only"></a> only
returns width:x; only

## <a id="padding"></a> padding
padding-left:x;  
padding-right:x;

## clearfix
adds clearfix to the current container

## <a id="shorthand"></a> shorthand
`.g() == .g-grid()` -> (e.g. .g(9,978); == .g-grid(9,978);)  
`all/a == (max columns)` -> (e.g. `.g(a,978); == .g(12,978);`)  
`1848 == WUXGA == hd == h` -> (e.g. `.g(2,h); == .g(2,1848);`)  
`1314 == WXGA == wide == w`  
`978 == XGA == desktop == d`  
`748 == WVGA == tablet == t`  
`460 == HVGA == portrait == p`  
`300 == QVGA == mobile == m`  
`fluid == f == flex` -> (e.g. `.g(2,978,f); == .g(2,978,fluid); `)  
`lead == l == left` -> (e.g. `.g(2,978,l); == .g(2,978,lead);`)  
`only == o` -> (e.g. `.g(2,978,o); == .g(2,978,only);`)  
`padding == p` -> (e.g. `.g(p,978); == .g(padding,978);`)  
`clearfix == cf` -> (e.g. `.g(cf); == .g(clearfix);`)  

## examples
`.g-grid(3, 978);` -> 3 cols in 978 grid  
`.g-grid(4, 978, lead);` -> left side column   
`.g-grid(4, 978, fluid);` -> 4 cols fluid  
`.g-grid(all, 978);` -> max width 978  
`.g-grid(4, 300, f, l);` -> left side 4 cols in fluid   
`.g(p,XGA);` -> padding l&r in 978 grid  
`.g(4,QVGA,f,o);` -> 4 col % wid only in 300 grid
 
