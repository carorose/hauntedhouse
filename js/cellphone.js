var torch = document.querySelectorAll('.cover')[0];
var cellphone = document.querySelectorAll('.cellphone')[0];

var background = 'radial-gradient(circle at %%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 22%, rgba(0,0,0,0.6) 54%, rgba(0,0,0,0.7) 100%)';


function handleMouseover(e) {
  cellphone.addEventListener('mousemove', handleMousemove);
}

function handleMouseout(e) {
  torch.style.background = 'rgba(0,0,0,0.7)';
  cellphone.removeEventListener('mousemove');
}

function handleMousemove(e) {
  var style = background.replace('%%', e.offsetX + 'px ' + e.offsetY + 'px');
  torch.style.background = style;
}


cellphone.addEventListener('mouseenter', handleMouseover);
cellphone.addEventListener('mouseleave', handleMouseout);