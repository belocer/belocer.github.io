/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var myMap;

	/**
	 * Создает экземпляр карты и привязывает его к контейнеру map
	 */
	var initMap = __webpack_require__(1);

	/**
	 * Создает кластеризатор
	 * @return {Object}
	 */
	var getClusterer = __webpack_require__(2);

	/**
	 * Конструктор для отрисовки окна добавления отзыва
	 * @param {Object} data
	 * @param {Object} clusterer
	 * @constructor
	 */
	var Element = __webpack_require__(3);

	/**
	 * Модуль Drag'n'Drop
	 */
	var dragManager = __webpack_require__(11);

	// Дождёмся загрузки API и готовности DOM.
	ymaps.ready(init);

	function init () {
	    // Создаем экземпляр карты
	    myMap = initMap();

	    // Создаем кластеризатор
	    var clusterer = getClusterer();

	    // Добавляем на карту кластеризатор
	    myMap.geoObjects.add(clusterer);

	    document.onmousedown = dragManager;
	    // Обработчик клика по карте
	    myMap.events.add('click', function (event) {
	        var coords = event.get('coords');
	        var position = event.get('position');
	        ymaps.geocode(coords).then(function (res) {
	            var data = {
	                title: res.geoObjects.get(0).properties.get('text'),
	                top: position[1],
	                left: position[0],
	                coords: coords
	            };
	            new Element(data, clusterer);
	        })
	    });
	}


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Создает экземпляр карты и привязывает его к контейнеру map
	 */
	module.exports = function() {
	    return new ymaps.Map('map', {
	        // Центр и коэффициент масштабирования карты
	        center: [55.76, 37.64], // координаты Москвы
	        zoom: 12,
	        controls: ['zoomControl']
	    });
	};


/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Создает кластеризатор
	 * @return {Object}
	 */
	module.exports = function () {
	    /**
	     * Создает макет балуна
	     */
	    var customItemContentLayout = ymaps.templateLayoutFactory.createClass(
	        // Флаг "raw" означает, что данные вставляют "как есть" без экранирования html.
	        '<h2 class=ballon__header>{{ properties.balloonContentHeader|raw }}</h2>' +
	        '<div class=ballon__body>' +
	        '<a href="#" data-placemarkid="{{ properties.placemarkId }}" class="ballon__item">{{ properties.balloonContentBody.place|raw }}</a>' +
	        '<p class="ballon__impression">{{ properties.balloonContentBody.impression|raw }}</p>' +
	        '</div>' +
	        '<div class=ballon__footer>{{ properties.balloonContentFooter|raw }}</div>'
	    );
	    
	    var clusterer = new ymaps.Clusterer({
	        preset: 'islands#yellowClusterIcons',
	        hideIconOnBalloonOpen: false,
	        clusterDisableClickZoom: true,
	        clusterOpenBalloonOnClick: true,
	        // Устанавливаем стандартный макет балуна кластера "Карусель".
	        clusterBalloonContentLayout: 'cluster#balloonCarousel',
	        // Устанавливаем собственный макет.
	        clusterBalloonItemContentLayout: customItemContentLayout,
	        // Устанавливаем режим открытия балуна.
	        // Балун никогда не будет открываться в режиме панели.
	        clusterBalloonPanelMaxMapArea: 0,
	        // Устанавливаем размеры макета контента балуна (в пикселях).
	        clusterBalloonContentLayoutWidth: 300,
	        clusterBalloonContentLayoutHeight: 150,
	        // Устанавливаем максимальное количество элементов в нижней панели на одной странице
	        clusterBalloonPagerSize: 5
	    });

	    // Добавляем новое поле в кластеризатор, которое содержит все метки
	    clusterer.geoObjects = [];

	    // Обработчик открытия балуна
	    clusterer.balloon.events.add('open', function () {
	        // При открытии балуна добывляем делегат на body
	        document.body.addEventListener('click', onClick);
	    });

	    // Обработчик закрытия балуна
	    clusterer.balloon.events.add('close', function () {
	        // При закрытии балуна удаляем делегат на body
	        document.body.removeEventListener('click', onClick);
	    });

	    /**
	     * Делегат на body, ищет по ссылке на балуне метку в кластеризаторе
	     * и вызывает у метки метод showElement
	     * @param {event} event
	     */
	    var onClick = function (event) {
	        if(event.target.classList.contains('ballon__item')) {
	            event.preventDefault();
	            var selectedPlacemark = clusterer.geoObjects[event.target.dataset.placemarkid];
	            selectedPlacemark.showElement();
	            clusterer.balloon.close();
	        }
	    };
	    
	    return clusterer;
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Модуль с общими функциями
	 */
	var utilities = __webpack_require__(4);

	/**
	 * Конструктор для отрисовки одного отзыва
	 * @param {Object} data
	 * @param {HTMLElement} container
	 * @constructor
	 */
	var Review = __webpack_require__(5);

	/**
	 * Создаёт объект dropbox на основе шаблона dropbox-template
	 * @return {Object} element
	 */
	var getDropbox = __webpack_require__(8);

	/**
	 * Создание DOM-разметки в dropbox
	 * @param {HTMLElement} element
	 * @param {Object} data
	 */
	var fillDropbox = __webpack_require__(9);

	/**
	 * Создает новую метку
	 * @params {Array} coords
	 * @params {string} place
	 * @params {string} title
	 * @params {string} impression
	 * @params {string} date
	 * @return {Object}
	 */
	var getPlacemark = __webpack_require__(10);

	/**
	 * Конструктор для отрисовки окна добавления отзыва
	 * @param {Object} data
	 * @param {Object} clusterer
	 * @constructor
	 */
	var Element = function (data, clusterer) {
	    this.data = data;
	    this.clusterer = clusterer;
	    this.dropbox = getDropbox();
	    fillDropbox(this.dropbox, this.data);
	    this.show.call(this);
	    this.dropbox.addEventListener('click', this.onClick.bind(this));
	    window.addEventListener('keydown', this.onDocumentKeyDown.bind(this));
	};

	Element.prototype = {

	    /**
	     * Обработчик клика
	     */
	    onClick: function (event) {
	        // Если клик произошел по кнопке 'закрыть' или на подложке
	        if(event.target.classList.contains('dropbox__close')
	            || event.target.classList.contains('dropbox__overlay')) {
	            // Если список отзывов пуст, то удаляем елемент, иначе прячем
	            if(this.dropbox.reviews.classList.contains('reviews__items--empty')) {
	                this.remove();
	            } else {
	                this.hide.call(this);
	            }
	        }
	        // Если клик произошел по кнопке 'добавить'
	        if(event.target.classList.contains('myreviews__add')) {
	            // Если поля не пустые
	            if(utilities.validation(this.dropbox.name, this.dropbox.place, this.dropbox.impression)){
	                var data = {
	                    name: this.dropbox.name.value,
	                    place: this.dropbox.place.value,
	                    impression: this.dropbox.impression.value,
	                    date: utilities.getFormattedDate(new Date()) // Функция перевода даты в формат 'dd.mm.yy  h:m:s'
	                };

	                // Если список отзывов пуст, то удаляем класс-метку и отчищаем список
	                if(this.dropbox.reviews.classList.contains('reviews__items--empty')) {
	                    this.dropbox.reviews.innerHTML = '';
	                    this.dropbox.reviews.classList.remove('reviews__items--empty');
	                }
	                // Отрисовываем новый отзыв
	                new Review(data, this.dropbox.reviews);

	                // Создаем новую метку
	                var placemark = getPlacemark(this.data.coords, data.place, this.data.title, data.impression, data.date);

	                // Добавляем обработчик клика по метке
	                // По клику на метке будет показыватся Element в котором была созданна данная метка
	                placemark.events.add('click', this.show.bind(this));

	                // Добавляем метке метод в котором будет показыватся Element
	                placemark.showElement = this.show.bind(this);

	                // Добавляем метку в кластеризатор
	                this.clusterer.geoObjects.push(placemark);
	                this.clusterer.add(placemark);
	                
	                // Сбрасываем поля
	                this.dropbox.name.value = '';
	                this.dropbox.place.value = '';
	                this.dropbox.impression.value = '';
	            }
	        }
	    },

	    /**
	     * Обработчик нажатия клавиши 'ESC'
	     * @param {Event} event
	     */
	    onDocumentKeyDown: function(event) {
	        if (event.keyCode === utilities.ESC_KEY_CODE) {
	            this.dropbox.close.click();
	        }
	    },

	    /**
	     * Удаляет обработчики событий и елемент
	     */
	    remove: function () {
	        // Удаляем событие клика
	        this.dropbox.removeEventListener('click', this.onClick);
	        // Удаляем событие нажатия клавиши 'ESC'
	        window.removeEventListener('keydown', this.onDocumentKeyDown);
	        // Удаляем dropbox из разметки
	        this.hide.call(this)
	    },

	    /**
	     * Отображает окно в body
	     */
	    show: function () {
	        utilities.insert(this.dropbox, document.body);
	    },

	    /**
	     * Удаляет окно из body
	     */
	    hide: function () {
	        utilities.delete(this.dropbox);
	    }
	};

	module.exports = Element;


/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Модуль с общими функциями
	 */
	module.exports = {
	    /**
	     * Код клавиши 'ESC'
	     * @constant {number}
	     */
	    ESC_KEY_CODE: 27,

	    /**
	     * Высота окна
	     * @constant {number}
	     */
	    ELEMENT_HEIGHT: 525,

	    /**
	     * Ширина окна
	     * @constant {number}
	     */
	    ELEMENT_WIDTH: 380,

	    /**
	     * Функция перевода даты в формат 'dd.mm.yy  h:m:s'
	     * @params {Date} date
	     * @return {string}
	     */
	    getFormattedDate: function (date) {
	        var day = date.getDate();
	        if (day < 10)
	            day = '0' + day;

	        var month = date.getMonth() + 1;
	        if (month < 10)
	            month = '0' + month;

	        var year = date.getFullYear() % 100;
	        if (year < 10)
	            year = '0' + year;

	        var hour = date.getHours();
	        if (hour < 10)
	            hour = '0' + hour;

	        var minute = date.getMinutes();
	        if (minute < 10)
	            minute = '0' + minute;

	        var second = date.getSeconds();
	        if (second < 10)
	            second = '0' + second;

	        return day + '.' + month + '.' + year + '  '+ hour + ':'+ minute + ':' + second;
	    },

	    /**
	     * Добавляет element в container
	     * @param {HTMLElement} element
	     * @param {HTMLElement} container
	     */
	    insert: function (element, container) {
	        container.appendChild(element);
	    },

	    /**
	     * Удаляет element из DOM
	     * @param {HTMLElement} element
	     */
	    delete: function (element) {
	        element.parentNode.removeChild(element);
	    },

	    /**
	     * Валидация
	     * @param {HTMLElement} fieldName
	     * @param {HTMLElement} fieldPlace
	     * @param {HTMLElement} fieldImpression
	     * @return {boolean}
	     */
	    validation: function (fieldName, fieldPlace, fieldImpression) {
	        // Удаляем класс-метку всех полей
	        fieldName.classList.remove('empty');
	        fieldPlace.classList.remove('empty');
	        fieldImpression.classList.remove('empty');

	        // Счетчик ошибок
	        var counterError = 0;

	        // Поля не могут быть пустыми.
	        if(fieldName.value === '') {
	            fieldName.classList.add('empty');
	            counterError++
	        }

	        if(fieldPlace.value === '') {
	            fieldPlace.classList.add('empty');
	            counterError++
	        }

	        if(fieldImpression.value === '') {
	            fieldImpression.classList.add('empty');
	            counterError++
	        }

	        // Если есть ошибки возвращяем false
	        return counterError === 0;
	    },

	    /**
	     * Получает координату top, с учетом размеров окна
	     * @param {number} top
	     * @return {number}
	     */
	    getTop: function (top) {
	        var bodyHeight = document.body.clientHeight;
	        if(bodyHeight - this.ELEMENT_HEIGHT - top <= 0) {
	            return bodyHeight - this.ELEMENT_HEIGHT - 25;
	        } else {
	            return top;
	        }
	    },

	    /**
	     * Получает координату left, с учетом размеров окна
	     * Если окно будет закрывать метку, то функция вернет
	     * значение для координаты right с отрецательным знаком,
	     * что служит меткой для функции создания DOM
	     * @param {number} left
	     * @return {number}
	     */
	    getLeft: function (left) {
	        var bodyWidth = document.body.clientWidth;
	        if(bodyWidth - this.ELEMENT_WIDTH - left <= 0) {
	            return left - bodyWidth - 10;
	        } else {
	            return left;
	        }
	    },

	    /**
	     * Возвращяет координаты
	     * @param {HTMLElement} elem
	     * @returns {Object}
	     */
	    getCoords: function(elem) {
	        var box = elem.getBoundingClientRect();

	        return {
	            top: box.top + pageYOffset,
	            left: box.left + pageXOffset
	        };
	    }
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Модуль с общими функциями
	 */
	var utilities = __webpack_require__(4);

	/**
	 * Создаёт объект review на основе шаблона reviews-template
	 * @return {Object} element
	 */
	var getReview = __webpack_require__(6);

	/**
	 * Создание DOM-разметки в review
	 * @param {HTMLElement} element
	 * @param {Object} data
	 */
	var fillReview = __webpack_require__(7);

	/**
	 * Конструктор для отрисовки одного отзыва
	 * @param {Object} data
	 * @param {HTMLElement} container
	 * @constructor
	 */
	var Review = function (data, container) {
	    this.data = data;
	    this.review = getReview();
	    fillReview(this.review, data);
	    utilities.insert(this.review, container);
	};

	module.exports = Review;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Шаблон для блока с отзывами
	 * @type {HTMLElement}
	 */
	var templateElement = document.querySelector('#reviews-template');

	/**
	 * content элемента templateElement
	 * @type {HTMLElement}
	 */
	var elementToClone;

	// Если браузер не поддерживает тег 'template'
	if ('content' in templateElement) {
	    elementToClone = templateElement.content.querySelector('.reviews__item');
	} else {
	    elementToClone = templateElement.querySelector('.reviews__item');
	}

	/**
	 * Создаёт объект element на основе шаблона templateElement
	 * @return {Object} element
	 */
	var get = function() {
	    // Клонируем шаблонный элемент
	    var element = elementToClone.cloneNode(true);
	    element.name = element.querySelector('.reviews__name');
	    element.place = element.querySelector('.reviews__place');
	    element.impression = element.querySelector('.reviews__impression');
	    element.date = element.querySelector('.reviews__date');
	    return element;
	};

	module.exports = get;


/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Создание DOM-разметки в element
	 * @param {HTMLElement} element
	 * @param {Object} data
	 */
	var fill = function(element, data) {
	    element.name.textContent = data.name;
	    element.place.textContent = data.place;
	    element.impression.textContent = data.impression;
	    element.date.textContent = data.date;
	};

	module.exports = fill;


/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Шаблон для выпадающего окна
	 * @type {HTMLElement}
	 */
	var templateElement = document.querySelector('#dropbox-template');

	/**
	 * content элемента templateElement
	 * @type {HTMLElement}
	 */
	var elementToClone;

	// Если браузер не поддерживает тег 'template'
	if ('content' in templateElement) {
	    elementToClone = templateElement.content.querySelector('.dropbox__overlay');
	} else {
	    elementToClone = templateElement.querySelector('.dropbox__overlay');
	}

	/**
	 * Создаёт объект element на основе шаблона templateElement
	 * @return {Object} element
	 */
	var get = function() {
	    // Клонируем шаблонный элемент
	    var element = elementToClone.cloneNode(true);
	    element.dropboxWindow = element.querySelector('.dropbox');
	    element.caption = element.querySelector('.dropbox__title');
	    element.name = element.querySelector('.myreviews__name');
	    element.place = element.querySelector('.myreviews__place');
	    element.impression = element.querySelector('.myreviews__impression');
	    element.reviews = element.querySelector('.reviews__items');
	    element.close = element.querySelector('.dropbox__close');
	    element.add = element.querySelector('.myreviews__add');
	    return element;
	};

	module.exports = get;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Модуль с общими функциями
	 */
	var utilities = __webpack_require__(4);

	/**
	 * Создание DOM-разметки в element
	 * @param {HTMLElement} element
	 * @param {Object} data
	 */
	var fill = function(element, data) {
	    element.caption.textContent = data.title;
	    element.dropboxWindow.style.top = utilities.getTop(data.top) + 'px'; //Получает координату top, с учетом размеров окна
	    var left = utilities.getLeft(data.left); //Получает координату left, с учетом размеров окна
	    // Если вернулось отрецательное значение, то значение эту координату записываем в right
	    if(left > 0)
	        element.dropboxWindow.style.left = left + 'px';
	    else
	        element.dropboxWindow.style.right = -left + 'px';
	};

	module.exports = fill;


/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Id метки, увеличивается при создании новой метки
	 * @type {number}
	 */
	var id = 0;

	/**
	 * Создает новую метку
	 * @params {Array} coords
	 * @params {string} place
	 * @params {string} title
	 * @params {string} impression
	 * @params {string} date
	 * @return {Object}
	 */
	module.exports = function (coords, place, title, impression, date) {
	    return new ymaps.Placemark(coords, {
	        balloonContentHeader: place,
	        balloonContentBody: {
	            place: title,
	            impression: impression
	        },
	        balloonContentFooter: date,
	        placemarkId: id++}, {
	        preset: 'islands#yellowIcon',
	        openBalloonOnClick: false
	    })
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utilities = __webpack_require__(4);

	/**
	 * Модуль Drag'n'Drop
	 */
	var dragManager =  function (e) {
	    var target = e.target;
	    while (target != this) {
	        if (target.classList.contains('dropbox__header')) {
	            // Обнуляем событие onmousemove и onmousedown у dropbox__title, чтобы при перемещении не выделялся текст
	            var dropboxTitle = target.querySelector('.dropbox__title');
	            dropboxTitle.onmousemove = function () {
	                return false;
	            };
	            dropboxTitle.onmousedown = function () {
	                return false;
	            };
	            // Обнуляем событие по умолчанию dragstart
	            dropboxTitle.ondragstart = function() {
	                return false;
	            };
	            var dropbox = target.parentNode;
	            var coords = utilities.getCoords(target);
	            var shiftX = e.pageX - coords.left;
	            var shiftY = e.pageY - coords.top;

	            document.onmousemove = function (e) {
	                dropbox.style.left = e.pageX - shiftX + 'px';
	                dropbox.style.top = e.pageY - shiftY + 'px';
	            };

	            target.onmouseup = function () {
	                document.onmousemove = null;
	                target.onmouseup = null;
	            };
	        }
	        target = target.parentNode;
	    }
	};

	module.exports = dragManager;

/***/ }
/******/ ]);