$(function() {
class Line {
	constructor(x, y, a) {
		this.x = x;
		this.y = y;
		this.ang = a;
		this.angVel = 0;
		this.angAcc = 0.4;
	}
	anim() {
		ctx.moveTo(this.x, this.y + 1);
		this.x += 12 * Math.cos(this.ang);
		this.y += 12 * Math.sin(this.ang);
		this.angVel += 0.2 * (Math.random() - Math.random());
		this.angVel *= this.angAcc;
		this.ang += this.angVel;
		if (Math.random() > 0.98) {
			if (this.angAcc === 0.4) this.angAcc = 0.98;
			else this.angAcc = 0.4;
		}
		ctx.lineTo(this.x, this.y);
		if (Math.random() > 0.96 && numLines < 20) {
			lines.add(new Line(width / 2, height, -Math.PI / 2));
			numLines++;
		}
		if (this.x < -20 || this.x > width + 20 || this.y > height || this.y < 30) {
			if (numLines > 1) {
				numLines--;
				lines.delete(this);
				ctx.beginPath();
				for (let i = 0; i < 2 * Math.PI; i += 0.314) {
					ctx.moveTo(this.x, this.y);
					ctx.lineTo(this.x + (5 * Math.random() + 12) * Math.cos(i), this.y + (5 * Math.random() + 12) * Math.sin(i));
				}
				ctx.stroke();
			}
		}
	}
}
const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');
const width = canvas.width = canvas.offsetWidth * 1;
const height = canvas.height = canvas.offsetHeight * 1;
ctx.strokeStyle = "#40E0D0";
const lines = new Set();
let numLines = 0;
let y = 0;
ctx.fillStyle = "#fff";
ctx.fillRect(0, 0, width, height);
lines.add(new Line(width / 2, height, -Math.PI / 2));
function run() {
	requestAnimationFrame(run);
	ctx.drawImage(canvas, 0, 1);
	for (let line of lines) {
		ctx.beginPath();
		line.anim();
		ctx.stroke();
	}
}
run();




});