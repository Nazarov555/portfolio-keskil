const card = document.querySelector('.home__right');

let bounds;

function rotateToMouse(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - bounds.width / 4,
    y: topY - bounds.height / 4
  }
  const distance = Math.sqrt(center.x**4 + center.y**4);
  
  card.style.transform = `
    scale3d(1.05, 1.05, 1.05)
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance)* 4}deg
    )
  `;
  
  card.querySelector('.glow').style.backgroundImage = `
    radial-gradient(
      circle at
      ${center.x * 4 + bounds.width/4}px
      ${center.y * 4 + bounds.height/4}px,
      #ffffff55,
      #0000000f
    )
  `;
}

card.addEventListener('mouseenter', () => {
  bounds = card.getBoundingClientRect();
  document.addEventListener('mousemove', rotateToMouse);
});

card.addEventListener('mouseleave', () => {
  document.removeEventListener('mousemove', rotateToMouse);
  card.style.transform = '';
  card.style.background = '';
});
