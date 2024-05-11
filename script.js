const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    checkForm();
});

username.addEventListener('blur', () => {
    checkInputUsername();
});
email.addEventListener('blur', () => {
    checkInputEmail();
});
password.addEventListener('blur', () => {
    checkInputPassword();
});
passwordConfirmation.addEventListener('blur', () => {
    checkInputPasswordConfirmation();
});

function checkInputUsername() {
    const usernameValue = username.value;
    if (usernameValue === '') {
        errorInput(username, 'Campo Obrigatório!');
    } else {
        const formItem = username.parentElement;
        formItem.className = 'form-content';
    }
}

function checkInputEmail() {
    const emailValue = email.value;
    if (emailValue === '') {
        errorInput(email, 'Campo Obrigatório');
    } else {
        const formItem = email.parentElement;
        formItem.className = 'form-content';
    }
}

function checkInputPassword() {
    const passwordValue = password.value;
    if (passwordValue === '') {
        errorInput(password, 'Senha Obrigatória.');
    } else if (passwordValue.length < 8) {
        errorInput(password, 'A senha precisa ter no mínimo 8 caracteres.');
    } else {
        const formItem = password.parentElement;
        formItem.className = 'form-content';
    }
}

function checkInputPasswordConfirmation() {
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;
    if(passwordConfirmationValue === '') {
        errorInput(passwordConfirmation, 'A Confirmação de senha é obrigatória.');
    } else if (passwordConfirmationValue !== passwordValue) {
        errorInput(passwordConfirmation, 'Senha não são iguais.');
    } else {
        const formItem = passwordConfirmation.parentElement;
        formItem.className = 'form-content';
    }
}

function checkForm(){
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItems = form.querySelectorAll('.form-content');
    const isValid = [...formItems].every( (item) =>{
        return item.className === 'form-content';
    });
    if(isValid) {
        alert('Cadastro efetuado com sucesso!');
    }
} 
function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector('a');

    textMessage.innerText = message;
    formItem.className = 'form-content error';
}