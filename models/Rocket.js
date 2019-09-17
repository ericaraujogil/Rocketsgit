"use strict";
var Rocket = /** @class */ (function () {
	function Rocket(code, npropulsor) {
		this.propulsores = new Array();
		this.code = code;
		this.npropulsor = npropulsor;
		this.speed = 0;
	}
	Rocket.prototype.addPropulsor = function (Propulsor) {
		this.propulsores.push(Propulsor);
	};

	Rocket.prototype.calcularVelocidad = function () {
		var totalspeed = 0
		if (this.propulsores != null && this.propulsores.length > 0) {
			this.propulsores.forEach((p) => {
				totalspeed += p.power
			});
			this.speed = totalspeed
			return this.speed;
		}

	}
	Rocket.prototype.acelerar = function () {

		this.propulsores.forEach((p) => {
			if (p.power < p.maxpower) {
				p.power += 10
			} else {
				console.log(`${p.power}`)
			}
		});

	}

	Rocket.prototype.frenar = function () {
		this.propulsores.forEach((p) => {
			if (p.power > 0) {
				p.power -= 10
			} else {
				console.log(`${p.power}`)
			}
		});
	}

	return Rocket;
}());
