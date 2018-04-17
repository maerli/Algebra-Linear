const Matrix = require('./Matrix').Matrix;
class Equation{
	constructor(n,m){
	  if(n instanceof Array){
	      this.n = n.length;
	      this.cof = n;
	      this.result = m;
	  }else{
		    this.n = n;
		    this.cof = new Array(this.n);
		    this.result = 0;
		}
	}
	setEquation(v){
		this.cof = v;
		this.n = v.length;
	}
	map(func1,func2){
		for(let i = 0;i<this.n;i++){
			this.cof[i] = func1(this.cof[i]);
		}
		this.result = func2(this.result);
	}
}
class ArrayEquation{
	constructor(n,m){
	if(n instanceof Array){
	    this.n = n[0].length;
	    this.m = n.length;
	    this.equations = new Array(this.m);
	    for(let i = 0;i<this.m;i++){
	        let eq = new Equation(n[i]);
	        eq.result = m[i];
	        this.equations[i] = eq;
	    }
	}else{
		    this.n = n;
		    this.m = m;
		    this.equations = new Array(this.m);
	    	for(let i = 0;i<this.m;i++){
			    this.equations[i] = new Equation(this.n);
		    }
		}
	}
	map(func1,func2){
		for(let i = 0;i<this.m;i++){
			this.equations[i].map(func1,func2);
		}
	}
	randomize(a = 0,b = 1,is_int = false){
		this.map(x => {
			let r = a + Math.random()*(b - a);
			return is_int?parseInt(r,10):r;
		},x => {
			let r = a + Math.random() * (b -a);
			return is_int?parseInt(r,10):r;
		});
	}
	getCof(){
		let m = new Matrix(this.m,this.n);
		for(let i = 0;i<this.m;i++){
			m.data[i] = this.equations[i].cof;
		}
		return m;
	}
	getResults(){
		let v = new Matrix(this.m,1);
		for(let i = 0;i<this.m;i++){
			v.data[i][0] = this.equations[i].result;
		}
		return v;
	}
	solveAll(){
		let m = this.getCof();
		let det = m.det();
		let n = this.getCof();
		let r = this.getResults();
		let v = new Matrix(this.n,1);
		for(let i = 0;i<this.n;i++){
			n = m.copy();
			n.setCol(i,r.getCol(0));
			let d1 = n.det();
			v.data[i][0] = d1/det;
		}
		return v;
	}
	toString(){
		//nomeando as 4 primeiras variaveis
		let for3 = ['x','y','z','w'];
		
		let solve = this.solveAll();
		for(let i = 0;i<this.m;i++){
			console.log(for3[i]+ ' = '+ solve.data[i][0]);
		}

		for(let i = 0;i<this.m;i++){
			let str = '';
			let t = this.equations[i].cof;
			for(let j = 0;j<this.n;j++){
				let t1 = t[j];
				let t2 = t1 == 1?'':t1;
				let c = t1 == 0?'':for3[j];
				str += '';
				if(j == 0){
					str += t2 + c;
				}else{
					if(t1 > 0){
						str += ' + '+ t1 + c;
					}else{
						str += ' - '+Math.abs(t1) + c;
					} 
				}
				str += '';
			}
			str += ' = ' + this.equations[i].result;
			console.log(str);
		}
	}	
}
module.exports = {
	Equation:Equation,
	ArrayEquation:ArrayEquation
}


