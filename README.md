# g-grid
g-grid is a css grid framework with fluid and static widths meant to be used semantically as mixins within your stylesheet for responsive design.  
**requires [less](http://lesscss.org/ "less")**

## usage
`.grid(@a, @b, @c, @d)`  
`@a` -> 1 - (max number of columns)  
`@b` -> hd, wide, desktop, tablet, portrait, mobile  
`@c` -> fluid  
`@d` -> lead  

## shorthand
`.g()` -> .grid()  
`all/a` -> max columns  
`h` -> hd  
`w` -> wide  
`d` -> desktop  
`t` -> tablet  
`p` -> portrait  
`m` -> mobile  
`f` -> fluid  
`left/l` -> lead  

## grids
HD - WUXGA  
`width:1848px;`  
`module:54px;`   
`gutter:24px;`   
`padding:25px;`  
`columns:24;`    

Wide - WXGA  
`width:1314px;`  
`module:54px;`  
`gutter:30px;`  
`padding:15px;`  
`columns:16;`  

Desktop - XGA  
`width:978px;`  
`module:54px;`  
`gutter:30px;`  
`padding:12px;`  
`columns:12;`  

Tablet - WVGA  
`width:748px;`  
`module:44px;`  
`gutter:20px;`  
`padding:10px;`  
`columns:12;`  

Portrait - WVGA Portrait   
`width:460px;`   
`module:27px;`   
`gutter:12px;`   
`padding:10px;`   
`columns:8;`   

Mobile - QVGA  
`width:300px;`  
`module:27px;`  
`gutter:12px;`  
`padding:10px;`  
`columns:8;`  

## media queries 
`@media only screen and (min-width: 1344px) and (max-width: 1897px) { }`  
`@media only screen and (min-width: 1002px) and (max-width: 1343px) { }`  
`@media only screen and (min-width: 768px) and (max-width: 1001px) { }`  
`@media only screen and (min-width: 480px) and (max-width: 767px) { }`   
`@media only screen and (max-width: 479px) { }`   

## examples
`.grid(3, desktop);` -> 3 cols in desktop grid  
`.grid(4, desktop, lead);` -> left side column   
`.grid(12, tablet);` -> max width in tablet  
`.grid(4, mobile, fluid);` -> 4 cols in fluid mobile grid   
`.g(3,d,f,l);` -> 3 col width leading col in fluid desktop grid   
`.g(a,m,f);` -> max width in fluid mobile (100%)    
 
