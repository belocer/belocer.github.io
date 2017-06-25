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
