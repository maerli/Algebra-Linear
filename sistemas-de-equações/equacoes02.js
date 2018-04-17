const EquationMaker = require('.././equation_maker.js');
const ArrayEquation = EquationMaker.ArrayEquation;
//let eqs = new ArrayEquation(3,3);
//resolvendo o systema
//   x + 2y + z =  12
//   x - 3y +  5z =  1
//  2x  - y +  3z =  10

let coef =   [
    [1, 2, 1],
    [1, -3, 5],
    [2, -1, 3]
];

let res = [12,1,10];

let eqs = new ArrayEquation(coef,res);
//console.log(eqs);
let solve = eqs.solveAll();
solve.print();

//let y = eqs.apply(solve);
//y.print();
