setTimeout(function() {
  document.getElementById("myAudio").play();
}, 1000); 

   
      const audio = document.getElementById('myAudio');
      audio.volume = 0.2;

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('noButton');
  const buttonWidth = 70; 
  const buttonHeight = 50; 

  
  const moveButton = () => {
    const maxWidth = window.innerWidth - buttonWidth;
    const maxHeight = window.innerHeight - buttonHeight;

    const randomX = Math.floor(Math.random() * maxWidth/2) * -1;
    const randomY = Math.floor(Math.random() * (maxHeight / 2)) * -1; 

    button.style.position = 'absolute';
    button.style.transition = 'transform 0.3s'; 
    button.style.transform = `translate(${randomX}px, ${randomY}px)`;
  };







  
  button.addEventListener('mouseover', moveButton);
  button.addEventListener('click', moveButton);
});

