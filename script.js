document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('noButton');
    const buttonWidth = 70; // Adjusted to the desired width
    const buttonHeight = 50; // Adjusted to the desired height
  
    button.addEventListener('click', () => alert('You clicked me!'));
  
    button.addEventListener('mouseover', () => {
      const maxWidth = window.innerWidth - buttonWidth;
      const maxHeight = window.innerHeight - buttonHeight;
  
      const randomX = Math.floor(Math.random() * maxWidth);
      const randomY = Math.floor(Math.random() * (maxHeight / 2)) * -1; // Move upward
  
      button.style.position = 'absolute';
      button.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
  });