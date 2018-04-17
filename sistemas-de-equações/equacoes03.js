const EquationMaker = require('.././equation_maker.js');
const ArrayEquation = EquationMaker.ArrayEquation;
//let eqs = new ArrayEquation(3,3);
//resolvendo o systema
//   -4x      -  z +  w =  -4
//    3x -  y -  z + 5w =  9
//   -4x + 2y + 3z - 2w =  1
//   -5x + 2y + 2z +  w =  2

let coef =   [
    [-4, 0, -1, 1],
    [3,  1, -1, 5],
    [-4, 2, 3, -2],
    [-5, 2, 2, 1]
];

let res = [-4, 9,1,2];

let eqs = new ArrayEquation(coef,res);
//console.log(eqs);
let solve = eqs.solveAll();
solve.print();

//let y = eqs.apply(solve);
//y.print();