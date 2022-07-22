const openCart = () => {
  document.querySelector('body').classList.add('hide-scroll');
  document.querySelector('#overlay').style.position = 'fixed';
  document.querySelector('#overlay').style.opacity = 0.8;
  document.querySelector('#cart').style.width = '480px';
}

const closeCart = () => {
  document.querySelector('#cart').style.width = 0;
  document.querySelector('#overlay').style.opacity = 0;
  // Wait for opacity transition to finish before removing fixed position
  setTimeout(() => {
    document.querySelector('#overlay').style.position = 'static';
    document.querySelector('body').classList.remove('hide-scroll');
  }, 500);
}

export default openCart;
export { closeCart };
