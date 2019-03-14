$('.menu a').click(function() {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 700);
});

const name = document.querySelector('#feedback-sector input[type=text]');
const email = document.querySelector('#feedback-sector input[type=email]');
const text = document.querySelector('#feedback-sector textarea');

document.querySelector('#feedback-sector button[type=submit]').addEventListener('click', savePersonalData);
document.querySelector('#feedback-sector button[type=button]').addEventListener('click', loadPersonalData);

function savePersonalData(event) {
    console.log('save');
    event.preventDefault();
    localStorage['name'] = name.value;
    localStorage['email'] = email.value;
    name.value = '';
    email.value = '';
    text.value = '';

}

function loadPersonalData() {
    console.log('load');
    name.value = localStorage['name'] || '';
    email.value = localStorage['email'] || '';
}
