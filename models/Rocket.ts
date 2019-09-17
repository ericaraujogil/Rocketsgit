class Rocket{
    code:string;
    npropulsor:number;
    propulsores:Propulsor[]=new Array();
	speed:number;
    
    constructor(code:string,npropulsor:number){
        this.code=code;
        this.npropulsor=npropulsor;
		this.speed=0;
    }
    
    addPropulsor(propulsor:Propulsor):void{
        this.propulsores.push(propulsor);
    }
	
	calcularVelocidad(){
		if(this.propulsores != null && this.propulsores.length > 0){
				this.propulsores.forEach(function(p) => return this.speed += p.power);
			}
	}
	
	acelerar():void {

		this.propulsores.forEach((p) => {
			if (p.power < p.maxpower) {
				p.power += 10
			} else {
				console.log(`${p.power}`)
			}
		});

	}

	frenar():void{
		this.propulsores.forEach((p) => {
			if (p.power > 0) {
				p.power -= 10
			} else {
				console.log(`${p.power}`)
			}
		});
	}
}