// На промисах
function vkApi(method, options) {
    if (!options.v) { // Версия используемого api json
        options.v = '5.65';
    }

    return new Promise((resolve, reject) => {
        VK.api(method, options, data => {
            if (data.error) {
                reject(new Error(data.error.error_msg));
            } else {
                resolve(data.response);
            }
        });
    });
}

function vkInit() { // фукнция инициализации и авторизации 
    return new Promise((resolve, reject) => {
        VK.init({
            apiId: 6106818
        });

        VK.Auth.login(data => {
            if (data.session) {
                resolve();
            } else {
                reject(new Error('Не удалось авторизоваться'));
            }
        }, 2);
    });
}
// Шаблонизация от HandleBars
// Цикл форич {{#each items}}
var template = ` 
{{#each items}}
    <div class="friend">
        <img src="{{photo_200}}">
        <div class="name">{{first_name}} {{last_name}}</div>
    </div>
{{/each}}
`;
var templateFn = Handlebars.compile(template);

new Promise(resolve => window.onload = resolve)
    .then(() => vkInit())
    .then(() => vkApi('users.get', {name_case: 'gen'}))
    .then(response => {
        headerInfo.textContent = `Друзья ${response[0].first_name} ${response[0].last_name}`;
    })
    .then(() => vkApi('friends.get', {fields: 'photo_200'}))
    .then(response => {
    	for(var i = 0; i < response.items.length; i++){
    		if(!response.items[i].photo_200){
    			response.items[i].photo_200 = '1.jpg';
    		}
    	}    	
    	friends.innerHTML = templateFn(response); // вызвать шаблон и передать ему объект для разбора
    })
    .catch(e => alert('Ошибка: ' + e.message));


/*
******************************************************************************************************
*******************************************на ифах****************************************************
******************************************************************************************************
window.addEventListener('load', function() {
	VK.init({
		apiId: 6069818 
	});

	VK.Auth.login(function(response) { 
		console.log(response);
				if (response.session) {
					VK.api('users.get', {'name_case':'gen'}, function(response) {
						if (response.error) { 
							alert(response.error.error_msg);
						} else {
							headerInfo.textContent = `Друзья ${response.response[0].first_name} ${response.response[0].last_name}`;
						} 
					});
				} else {
					alert('Не удалось авторизоваться!');
				}
			}, 2);
});
*/
