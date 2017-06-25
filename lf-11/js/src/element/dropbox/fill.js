'use strict';

/**
 * Модуль с общими функциями
 */
var utilities = require('../../utilities');

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
