const EquationMaker = require('.././equation_maker.js');
const ArrayEquation = EquationMaker.ArrayEquation;
//let eqs = new ArrayEquation(3,3);
//rezolvendo o systema
//  3x - 5y + 3z =  1
// -4x + 2y +  z = -2
//  x  -  y -  z =  2

let coef =   [
    [3, -5, 3],
    [-4, 2, 1],
    [1, -1, -1]
];

let res = [1,-2,2];

let eqs = new ArrayEquation(coef,res);
//console.log(eqs);
let solve = eqs.solveAll();
solve.print();

let y = eqs.apply(solve);
y.print();
