window.onload = function() {
const element = document.querySelector('.img');

const scrollAmount = -2;
window.addEventListener('scroll', (event) =>{
	const {top} = element.getBoundingClientRect();

  if( top - window.innerHeight < scrollAmount){
  element.style.backgroundImage = 'url(Img/stevenholl.png)';
  }
  else(top -window.innerHeight > scrollAmount){
    element.style.backgroundImage = 'url(Img/a.jpg)';
  }
});
};

