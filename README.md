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
g-grid is a css grid system with fluid and static widths meant to be used semantically as mixins within your stylesheet.  
**requires [less](http://lesscss.org/ "less")**

## features
[semantic](#semantic)  
[6 grid systems](#grids)  
[static and fluid widths](#fluid)  
[lead column adjustments](#lead)  
[widths only](#only)  
[padding only](#padding)  
[float left/right](#right)  
[shorthand](#shorthand)  

## usage
`.g-grid(num-columns, grid-system [, fluid] [, lead] [, right]);`  
`.g-grid(padding, grid-system [, fluid]);`  
`.g-grid(num-columns, grid-system [, fluid], only);`  
`.g-grid(clearfix);`  

## <a name="semantic"></a> semantic
g-grid is a system of mixins meant to be used semantically within your stylesheet.  
Inspiration for this is from the semantic grid system from smashing magazine.  
e.g `.container { .g-grid(3,978,lead); }`

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

## <a name="fluid"></a> static/fluid  
if you do not specify, width is returned in px.  
adding fluid returns width in %.

## <a name="lead"></a> lead  
lead is the first column to the left  
adds `clear:left;`

## <a name="only"></a> only
returns `width:x;` only

## <a name="padding"></a> padding
returns `padding-left:x; padding-right:x;`  

## <a name="right"></a> float left/right  
option to change to `float:right;`  

## clearfix
adds clearfix to the current container

## <a name="shorthand"></a> shorthand
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
 
## notes

it is recommended to use this with box-sizing:border-box.  
here's the paul irish snippet:  
`* { -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; }`
