// Slide efek
const slideEffect = () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
  
    let counter = 1;
    const size = slides[0].clientWidth;
  
    slider.style.transform = `translateX(${-size * counter}px)`;
  
    setInterval(() => {
      if (counter >= slides.length - 1) return;
      slider.style.transition = 'transform 0.4s ease-in-out';
      counter++;
      slider.style.transform = `translateX(${-size * counter}px)`;
    }, 4000);
  
    slider.addEventListener('transitionend', () => {
      if (slides[counter].id === 'last-clone') {
        slider.style.transition = 'none';
        counter = slides.length - 2;
        slider.style.transform = `translateX(${-size * counter}px)`;
      }
      if (slides[counter].id === 'first-clone') {
        slider.style.transition = 'none';
        counter = slides.length - counter;
        slider.style.transform = `translateX(${-size * counter}px)`;
      }
    });
  };
  
  slideEffect();
  
  // Form validation
  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const errorName = document.getElementById('error-name');
  const errorEmail = document.getElementById('error-email');
  const errorMessage = document.getElementById('error-message');
  
  form.addEventListener('submit', (e) => {
    let isValid = true;
  
    if (nameInput.value.trim() === '') {
      errorName.innerHTML = 'Name is required';
      isValid = false;
    } else {
      errorName.innerHTML = '';
    }
  
    if (emailInput.value.trim() === '') {
      errorEmail.innerHTML = 'Email is required';
      isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
      errorEmail.innerHTML = 'Email is invalid';
      isValid = false;
    } else {
      errorEmail.innerHTML = '';
    }
  
    if (messageInput.value.trim() === '') {
      errorMessage.innerHTML = 'Message is required';
      isValid = false;
    } else {
      errorMessage.innerHTML = '';
    }
  
    if (!isValid) {
      e.preventDefault();
    }
  });
  
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  