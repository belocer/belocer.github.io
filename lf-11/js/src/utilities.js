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
