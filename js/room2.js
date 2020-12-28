var torch = document.querySelectorAll('.cover')[0];
var room2 = document.querySelectorAll('.room2')[0];

var background = 'radial-gradient(circle at %%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 22%, rgba(0,0,0,0.6) 54%, rgba(0,0,0,0.7) 100%)';


function handleMouseover(e) {
  room2.addEventListener('mousemove', handleMousemove);
}

function handleMouseout(e) {
  torch.style.background = 'rgba(0,0,0,0.7)';
  room2.removeEventListener('mousemove');
}

function handleMousemove(e) {
  var style = background.replace('%%', e.offsetX + 'px ' + e.offsetY + 'px');
  torch.style.background = style;
}


room2.addEventListener('mouseenter', handleMouseover);
room2.addEventListener('mouseleave', handleMouseout);