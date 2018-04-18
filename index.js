//var rect = {
  //  perimeter: (x, y) => (2*(x+y)),
   // area: (x, y) => x*y
//};
var rect = require('./rectangle');
function solveRect(l, b){
    console.log("Rectangle l = "+l+" and b = "+b);
    if(l <=0 || b <=0 ){
        console.log("Length and breadth should be greater than zero.");
    }
    else{
        console.log("The area of rectangle is "+rect.area(l, b));
        console.log("The perimeter of rectangle is "+rect.perimeter(l, b));
    }
}

solveRect(2,5);
solveRect(0,3);
solveRect(2,3);
solveRect(3,0);