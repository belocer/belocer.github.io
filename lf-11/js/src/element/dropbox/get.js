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
