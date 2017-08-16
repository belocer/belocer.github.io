/* Авторизация пользователя
==============================*/
var button = document.getElementById('button');
var login_auth = document.getElementById('login');
var password_auth = document.getElementById('password');

button.addEventListener('click', function (e) {
    e.preventDefault();

    var xhr = new XMLHttpRequest();
    var body = 'login=' + encodeURIComponent(login_auth.value) + '&password=' + encodeURIComponent(password_auth.value);
    xhr.open("POST", 'php/authoriz.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(body);
    xhr.addEventListener('load', function () {
        if (xhr.status < 400) {
            document.getElementById('form_res_reg').innerHTML = xhr.responseText;
            setTimeout("document.location.href='list.php'", 2000);
        } else {
            console.log('ошибка');
        }
    });
});