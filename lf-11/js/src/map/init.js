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
