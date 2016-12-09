var canvas = document.getElementById('canvas');
var message = document.getElementById('message');
var ctx = canvas.getContext('2d');

var socket = io();

var draw = '';

canvas.addEventListener('mousedown', (e) => {
  console.log('mousedown');
  draw = true;
});

canvas.addEventListener('mousemove', (e) => {
  console.log('mouse is moving');
  if (draw) {
    var X = e.clientX - 8;
    var Y = e.clientY - 8;
    var lastMousePos = { x: 0, y: 0 };
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.ellipse(X, Y, 1, 1, 0, 0, Math.PI * 2);
  }
})
