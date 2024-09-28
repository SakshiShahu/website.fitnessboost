// Toggle the mobile navbar
  function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  }

  // Add active class to the current link in the navbar
  const sections = document.querySelectorAll('section');
  const navLi = document.querySelectorAll('.w3-bar a');
  

  window.onscroll = () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) {
        current = section.getAttribute('id');
      }
    });
    
    navLi.forEach(li => {
      li.classList.remove('active');
      if (li.getAttribute('href').includes(current)) {
        li.classList.add('active');
      }
    });
  };

  // Smooth scroll on click
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Form validation
  const form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
      e.preventDefault();
      alert('Please fill in all fields.');
    }
  });

