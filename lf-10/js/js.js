/* Обработка клика по плюсу и крестику */
var common_friends_list = document.querySelector('.common_friends_list ul');
var selected_friend_list = document.querySelector('.selected_friend_list ul');
var responseVK = {};
common_friends_list.addEventListener('click', (e) => {
	if(e.target.getAttribute('class') == 'fa fa-plus') {
		e.target.setAttribute('class', 'fa fa-remove');
		selected_friend_list.appendChild(e.target.parentNode);
	}
});
selected_friend_list.addEventListener('click', (e) => {
	if(e.target.getAttribute('class') == 'fa fa-remove') {
		e.target.setAttribute('class', 'fa fa-plus');
		common_friends_list.appendChild(e.target.parentNode);
	}
});

var imp = {};

/* Drag and Drop */
function dragStart(ev) {
	ev.dataTransfer.effectAllowed='move';
	// console.log(ev.target.dataset);
	ev.dataTransfer.setData("text", ev.target.id);
	ev.dataTransfer.setDragImage(ev.target,135,22);
	return true;
}
function dragEnter(ev) {
	event.preventDefault();
	return true;
}
function dragOver(ev) {
	event.preventDefault();
}
function dragDrop(ev) {
	var data = ev.dataTransfer.getData("text");

	for(var i = 0; i < responseVK.items.length; i++){

		if(!responseVK.items[i].photo_200){
			responseVK.items[i].photo_200 = '../img/5.jpg';
		}

		if(responseVK.items[i].id == data){
			console.log(document.getElementById(data));
			document.getElementById(data).lastElementChild.setAttribute('class', 'fa fa-remove');
			ev.target.appendChild(document.getElementById(data));
			ev.stopPropagation();
			return false;
		}
	}	
}

/* VK API */
function vkApi(method, options) {
    if (!options.v) {
        options.v = '5.64';
    }

    return new Promise((resolve, reject) => {
        VK.api(method, options, data => {
            if (data.error) {
                reject(new Error(data.error.error_msg));
            } else {
            	responseVK = data.response;
                resolve(data.response);
            }
        });
    });
}

function vkInit() { // Инициализация приложения
    return new Promise((resolve, reject) => {
        VK.init({
            apiId: 6069818
        });

        VK.Auth.login(data => { // Логинимся
            if (data.session) {
                resolve();
            } else {
                reject(new Error('Не удалось авторизоваться'));
            }
        }, 2);
    });
}
// HandelBars Шаблонизатор
var template = `
{{#each items}}
    <li draggable="true" id="{{id}}" ondragstart="return dragStart(event)">
        <img src="{{photo_200}}" alt="img">
        <p>{{first_name}} {{last_name}}</p>
        <i class="fa fa-plus"></i>
    </li>
{{/each}}
`;
var templateFn = Handlebars.compile(template);

new Promise(resolve => window.onload = resolve)
    .then(() => vkInit())
    .then(() => vkApi('friends.get', {fields: 'photo_200'}))
    .then(response => {
    		for(var i = 0; i < response.items.length; i++){
    		if(!response.items[i].photo_200){
    			response.items[i].photo_200 = '../img/5.jpg';
    		}
    	} // При первой загрузке страницы загружает первый список
    	document.querySelector('.common_friends_list ul').innerHTML = templateFn(response);
    })
    .catch(e => alert('Ошибка: ' + e.message));