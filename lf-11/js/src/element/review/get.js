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
