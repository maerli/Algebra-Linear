let Matrix = require('./Matrix.js').Matrix;

let m = new Matrix(3,3);
m.randomize(0,10,true);
m.print();