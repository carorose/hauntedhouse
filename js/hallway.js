var torch = document.querySelectorAll('.cover')[0];
var hallway = document.querySelectorAll('.hallway')[0];

var background = 'radial-gradient(circle at %%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 22%, rgba(0,0,0,0.6) 54%, rgba(0,0,0,0.7) 100%)';


function handleMouseover(e) {
  hallway.addEventListener('mousemove', handleMousemove);
}

function handleMouseout(e) {
  torch.style.background = 'rgba(0,0,0,0.7)';
  hallway.removeEventListener('mousemove');
}

function handleMousemove(e) {
  var style = background.replace('%%', e.offsetX + 'px ' + e.offsetY + 'px');
  torch.style.background = style;
}


hallway.addEventListener('mouseenter', handleMouseover);
hallway.addEventListener('mouseleave', handleMouseout);