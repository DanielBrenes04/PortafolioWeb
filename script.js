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
    
    const downloadCWI = document.getElementById('downloadCWI');
    downloadCWI.addEventListener('click', function () {
        const downloadlinkCWI = document.getElementById('downloadlinkCWI');
        downloadlinkCWI.click();
    });

    const downloadCWE = document.getElementById('downloadCWE');
    downloadCWE.addEventListener('click', function () {
        const downloadlinkCWE = document.getElementById('downloadlinkCWE');
        downloadlinkCWE.click();
    });
        const downloadCVI = document.getElementById('downloadCVI');
    downloadCVI.addEventListener('click', function () {
        const downloadlinkCVI = document.getElementById('downloadlinkCVI');
        downloadlinkCVI.click();
    });


});

const FormularioContacto = document.getElementById('Formulario-Contacto');

FormularioContacto.addEventListener('enviar',function (event) {
    event.preventDefault()

    const datosForm = new  FormData(FormularioContacto);

    datosForm.append('subject', 'Contacto desde formulario');

    fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(datosForm).toString(),
    })
    .then((response) => {
        console.log('Formulario enviado');
    })
    .catch((error) => {
        console.error('Error al enviar el formulario:', error);
    });
});