var Rocket:Rocket;
var Rocket1:Rocket = new Rocket("32WESSDS", 3);
var Rocket2:Rocket = new Rocket("LDSFJA32", 6);
var newLine = document.createElement("br")
function createRocket() {

	//var Rocket1 = new Rocket("32WESSDS", 3);
	//var Rocket2 = new Rocket("LDSFJA32", 6);
	Rocket1.addPropulsor(new Propulsor(10));
	Rocket1.addPropulsor(new Propulsor(30));
	Rocket1.addPropulsor(new Propulsor(80));
	Rocket2.addPropulsor(new Propulsor(30));
	Rocket2.addPropulsor(new Propulsor(40));
	Rocket2.addPropulsor(new Propulsor(50));
	Rocket2.addPropulsor(new Propulsor(50));
	Rocket2.addPropulsor(new Propulsor(30));
	Rocket2.addPropulsor(new Propulsor(10));
	var stringpropulsores = "";
	var stringpropulsores2 = "";
	//var propulsores = Rocket1.propulsores.forEach(function(propulsor){stringpropulsores += `${propulsor.maxpower.toString()}, `});
	for (var i = 0; i < Rocket1.propulsores.length; i++) {
		stringpropulsores += ` ${Rocket1.propulsores[i].maxpower.toString()} `;
	}
	for (let i = 0; i < Rocket2.propulsores.length; i++) {
		stringpropulsores2 += ` ${Rocket2.propulsores[i].maxpower.toString()} `;
	}
	var rocketsInfo = document.getElementById("infoRockets");
	rocketsInfo.innerHTML = "";
	var node = document.createTextNode(`Se ha creado el cohete con codigo ${Rocket1.code} y tiene ${Rocket1.npropulsor} propulsores ${stringpropulsores} y tiene una velocidad ${Rocket1.calcularVelocidad()}`);
	var node1 = document.createTextNode(`Se ha creado el cohete con codigo ${Rocket2.code}, tiene ${Rocket2.npropulsor} propulsores ${stringpropulsores2} y una velocidad de ${Rocket2.calcularVelocidad()}`);
	rocketsInfo.append(node);
	rocketsInfo.append(newLine);
	rocketsInfo.append(node1);
	event.preventDefault();
}

function rocketAcelerate(code) {
	var rocketsInfo = document.getElementById("infoRockets");
	rocketsInfo.innerHTML = "";
	if (Rocket1.code == code) {
		Rocket1.acelerar()
		var node = document.createTextNode(`Se ha creado el cohete con codigo ${Rocket1.code} y tiene ${Rocket1.npropulsor} propulsores va una velocidad ${Rocket1.calcularVelocidad()}`);
		rocketsInfo.append(node);
		event.preventDefault();
	}else{
		nvelocidad2 = Rocket2.acelerar()
		var node = document.createTextNode(`Se ha creado el cohete con codigo ${Rocket2.code} y tiene ${Rocket2.npropulsor} propulsores va una velocidad ${Rocket2.calcularVelocidad()}`);
		rocketsInfo.append(node);
		event.preventDefault();
	}
}

function rocketDecelerate(code) {
	var rocketsInfo = document.getElementById("infoRockets");
	rocketsInfo.innerHTML = "";
	if (Rocket1.code == code) {
		Rocket1.frenar()
		var node = document.createTextNode(`Se ha creado el cohete con codigo ${Rocket1.code} y tiene ${Rocket1.npropulsor} propulsores va una velocidad ${Rocket1.calcularVelocidad()}`);
		rocketsInfo.append(node);
		event.preventDefault();
	}else{
		nvelocidad2 = Rocket2.frenar()
		var node = document.createTextNode(`Se ha creado el cohete con codigo ${Rocket2.code} y tiene ${Rocket2.npropulsor} propulsores va una velocidad ${Rocket2.calcularVelocidad()}`);
		rocketsInfo.append(node);
		event.preventDefault();
	}
}
