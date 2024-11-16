let currentColor = 'default';
let currentAccessory = 'none';

function changeColor(color) {
  currentColor = color;
  updateBracelet();
}

function changeAccessory(accessory) {
  currentAccessory = accessory;
  updateBracelet();
}

function updateBracelet() {
  let braceletImage = document.getElementById('braceletImage');

  if (currentColor === 'red') {
    braceletImage.src = 'diseno_rojo.png';
  } else if (currentColor === 'blue') {
    braceletImage.src = 'diseno_azul.png';
  } else if (currentColor === 'green') {
    braceletImage.src = 'diseno_verde.png';
  } else {
    braceletImage.src = 'defecto.png';
  }

  if (currentAccessory === 'star') {
    braceletImage.src = 'luna_brac.png'
  } else if (currentAccessory === 'heart') {
    braceletImage.src = 'corazon_brac.png'
  } else if (currentAccessory === 'moon') {
    braceletImage.src = 'estrella_brac.png'
  }
}

function resetBracelet() {
  currentColor = 'default';
  currentAccessory = 'none';
  document.getElementById('braceletImage').src = 'defecto.png';
}