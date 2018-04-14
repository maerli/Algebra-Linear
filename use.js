const Matrix = require('./Matrix').Matrix;
const Eq_maker = require('./equation_maker');
const Equation = Eq_maker.Equation;
const ArrayEquation = Eq_maker.ArrayEquation;

let aeq = new ArrayEquation(4,4);
aeq.randomize(-5,5,true);
v = aeq.getCof();
x = aeq.getResults();

aeq.toString();

//b = v.mult(r);
//console.log('++++');
//console.log(b);

//v.setCol(0,x.data[0])

//v.print();

