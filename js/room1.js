var torch = document.querySelectorAll('.cover')[0];
var room = document.querySelectorAll('.room')[0];

var background = 'radial-gradient(circle at %%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 22%, rgba(0,0,0,0.6) 54%, rgba(0,0,0,0.7) 100%)';


function handleMouseover(e) {
  room.addEventListener('mousemove', handleMousemove);
}

function handleMouseout(e) {
  torch.style.background = 'rgba(0,0,0,0.7)';
  room.removeEventListener('mousemove');
}

function handleMousemove(e) {
  var style = background.replace('%%', e.offsetX + 'px ' + e.offsetY + 'px');
  torch.style.background = style;
}


room.addEventListener('mouseenter', handleMouseover);
room.addEventListener('mouseleave', handleMouseout);