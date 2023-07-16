const svg = document.querySelector('#bloodVessel');
const width = window.innerWidth;
const height = window.innerHeight;
const centerX = width / 2;
const centerY = height / 2;

class BloodCell {
  constructor() {
    this.radius = Math.random() * 100 + 50; // Increase the radius
    this.angle = Math.random() * 2 * Math.PI;
    this.speed = Math.random() * 0.02 + 0.01; // Increase the speed
    this.x = centerX + this.radius * Math.cos(this.angle);
    this.y = centerY + this.radius * Math.sin(this.angle);
    this.element = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    this.element.setAttribute('r', 5); // Increase the radius of the blood cells
    this.element.style.fill = 'red';
    svg.appendChild(this.element);

    this.vein = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    this.vein.style.stroke = '#B22222';
    this.vein.style.strokeWidth = '2';
    svg.appendChild(this.vein);
  }

  update() {
    this.angle += this.speed;
    if (this.angle > Math.PI * 2) this.angle -= Math.PI * 2;

    this.x = centerX + this.radius * Math.cos(this.angle);
    this.y = centerY + this.radius * Math.sin(this.angle);
    this.element.setAttribute('cx', this.x);
    this.element.setAttribute('cy', this.y);

    this.vein.setAttribute('x1', centerX);
    this.vein.setAttribute('y1', centerY);
    this.vein.setAttribute('x2', this.x);
    this.vein.setAttribute('y2', this.y);
  }
}

let cells = [];
for(let i = 0; i < 100; i++) {
  cells.push(new BloodCell());
}

function animate() {
  for(let cell of cells) {
    cell.update();
  }

  requestAnimationFrame(animate);
}

animate();