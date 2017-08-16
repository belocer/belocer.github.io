/* Проверка логина
==============================*/
var inp = document.getElementById('inputEmail3');
var res_login = document.getElementById('res_login');
var btn_reg = document.getElementById('btn_reg');

inp.addEventListener('input', function (e) {
    if (e.target.value.length > 5) {
        var xhr = new XMLHttpRequest();
        var body = 'login=' + encodeURIComponent(e.target.value);
        xhr.open("POST", 'php/login.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(body);
        xhr.addEventListener('load', function () {
            if (xhr.status < 400) {

                // В зависимости от ответа скрываю или показываю кнопку "Зарегистрироваться"
                if (xhr.responseText === "<span style='color:green'>Логин свободен</span>") {
                    res_login.innerHTML = xhr.responseText;
                    btn_reg.style.display = 'inline-block';
                }
                if (xhr.responseText === "<span style='color:red'>Логин занят</span>") {
                    res_login.innerHTML = xhr.responseText;
                    btn_reg.style.display = 'none';
                }

            } else {
                console.log('ошибка');
            }
        });
    }
});

/* Регистрация пользователя
==============================*/
var btn = document.getElementById('btn_reg');

btn.addEventListener('click', function (e) {

    e.preventDefault();

    var warning = [];
    var login = document.getElementById('inputEmail3');
    var password = document.getElementById('inputPassword3');
    var password_2 = document.getElementById('inputPassword4');


    (login.value.length < 6 || login.value.length > 16) ? warning.push('<li>* Логин должен состоять не меньше чем из 6 символов и не превышать 16 символов</li>') : '';
    (password.value.length < 6 || password.value.length > 16) ? warning.push('<li>* Пароль должен состоять не меньше чем из 6 символов и не превышать 16 символов</li>') : '';
    (password.value !== password_2.value) ? warning.push('<li>* Пароли не совпадают</li>') : '';


    if (warning.length > 0) {
        var out = document.createElement('ul');
        for (var i = 0; i < warning.length; i++) {
            out.innerHTML += warning[i];
        }
        document.getElementById('warning').innerHTML = '';
        document.getElementById('warning').appendChild(out);
    } else if (warning.length === 0) {

        var xhr = new XMLHttpRequest();
        var body = 'login=' + encodeURIComponent(login.value) +
                    '&password=' + encodeURIComponent(password.value) +
                    '&password_2=' + encodeURIComponent(password_2.value);
        xhr.open("POST", 'php/reg.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(body);
        xhr.addEventListener('load', function () {
            if (xhr.status < 400) {
                document.getElementById('form_res_reg').innerHTML = "<h1 style='color:blueviolet'>Вы успешно зарегистрированы!</h1><h5>Теперь можете авторизоваться</h5>";
                console.log(xhr.responseText);
                setTimeout("document.location.href='index.php'", 2000);
            } else {
                console.log('ошибка');
            }
        });
    }
});
