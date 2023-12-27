document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('noButton');
  const buttonWidth = 70; // Adjusted to the desired width
  const buttonHeight = 50; // Adjusted to the desired height

  // Function to move the button to random coordinates
  const moveButton = () => {
    const maxWidth = window.innerWidth - buttonWidth;
    const maxHeight = window.innerHeight - buttonHeight;

    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * (maxHeight / 2)) * -1; // Move upward

    button.style.position = 'absolute';
    button.style.transform = `translate(${randomX}px, ${randomY}px)`;
  };

  // Event listener for mouseover
  button.addEventListener('mouseover', moveButton);

  // Event listener for click
  button.addEventListener('click', moveButton);
});
