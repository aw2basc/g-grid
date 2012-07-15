# g-grid
css grid framework with desktop, mobile and tablet fluid and static widths for responsive design meant to be used semantically as less mixins.  
**requires [less](http://lesscss.org/ "less")**

## usage
`.grid(@a, @b, fluid, lead/left)`  
`@a` -> 1 - (max cols)  
`@b` -> desktop, tablet, mobile  
`fluid` -> percent widths  
`lead/left` -> removes left margin for leading column on left side  

## shorthand
`.g()` -> .grid()  
`all/a` -> max columns  
`d` -> desktop  
`t` -> tablet  
`m` -> mobile  
`f` -> fluid  
`l` -> lead/left  

## examples
`.grid(3, desktop);` -> 3 cols in desktop grid  
`.grid(4, desktop, lead);` -> left side column   
`.grid(12, tablet);` -> max width in tablet  
`.grid(4, mobile, fluid);` -> 4 cols in fluid mobile grid   
 
`header { .g(4,d,l); }`  
`@media screen and (max-width: 977px) {`  
`header { .g(a,t); }`  
`}`  
`@media screen and (max-width: 747px) {`  
`header { .g(a,m,f); }`  
`}  