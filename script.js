function toggleScrollToTopButton() {
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    if (window.scrollY > 0) {
        scrollToTopButton.style.opacity = 1;
    } else {
        scrollToTopButton.style.opacity = 0;
    }
}
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.addEventListener('scroll', toggleScrollToTopButton);

document.addEventListener('DOMContentLoaded', function () {
    const downloadButtonCVE = document.getElementById('downloadButtonCVE');
    downloadButtonCVE.addEventListener('click', function () {
        const downloadlinkCVE = document.getElementById('downloadlinkCVE');
        downloadlinkCVE.click();
    });
});


document.getElementById('Formulario-Contacto').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = {
    nombre: document.getElementById('nombre').value,
    apellido: document.getElementById('apellido').value,
    email: document.getElementById('email').value,
    telefono: document.getElementById('telefono').value,
    adress: document.getElementById('adress').value,
    message: document.getElementById('message').value,
  };

    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        formData.message += `${key}: ${formData[key]}\n`;
      }
    }

  emailjs.send('service_tdp20tc', 'template_jcs6cnl', formData,'w7OyXhOEcn-8Qozao')
    .then(function(response) {
      console.log('Email sent successfully:', response);
    }, function(error) {
      console.log('Error sending email:', error);
    });
    alert('Form submitted successfully!');
});

document.querySelectorAll('.smooth-scroll').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    const target = document.querySelector(link.getAttribute('href'));
    const offset = 80;
    
    window.scrollTo({
      top: target.offsetTop - offset,
      behavior: 'smooth'
    });
  });
});
