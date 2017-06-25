'use strict';

/**
 * Модуль с общими функциями
 */
var utilities = require('../utilities');

/**
 * Конструктор для отрисовки одного отзыва
 * @param {Object} data
 * @param {HTMLElement} container
 * @constructor
 */
var Review = require('./review/review');

/**
 * Создаёт объект dropbox на основе шаблона dropbox-template
 * @return {Object} element
 */
var getDropbox = require('./dropbox/get');

/**
 * Создание DOM-разметки в dropbox
 * @param {HTMLElement} element
 * @param {Object} data
 */
var fillDropbox = require('./dropbox/fill');

/**
 * Создает новую метку
 * @params {Array} coords
 * @params {string} place
 * @params {string} title
 * @params {string} impression
 * @params {string} date
 * @return {Object}
 */
var getPlacemark = require('../map/placemark');

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
