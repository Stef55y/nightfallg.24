document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Preveniamo il comportamento di invio di default del form

    const form = event.target;

    // Usa emailjs.send() per inviare il modulo
    emailjs.sendForm('service_f5kq637', 'template_chjgxjd', form)
        .then(function(response) {
            console.log('Success', response);
            alert('Message sent successfully!');
        })
        .catch(function(error) {
            console.error('Error', error);
            alert('Failed to send message');
        });
});
