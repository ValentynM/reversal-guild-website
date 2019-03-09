$('.menu a').click(function() {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1500);
});

const name = document.querySelector('#feedback-sector input[type=text]');
const email = document.querySelector('#feedback-sector input[type=email]');
const text = document.querySelector('#feedback-sector textarea');

document.querySelector('input[type=submit]').addEventListener('click', savePersonalData);
document.querySelector('.load').addEventListener('click', loadPersonalData);

function savePersonalData(event) {
    event.preventDefault();
    localStorage['name'] = name.value;
    localStorage['email'] = email.value;
    name.value = '';
    email.value = '';
    text.value = '';

}

function loadPersonalData() {
    name.value = localStorage['name'] || '';
    email.value = localStorage['email'] || '';
}
