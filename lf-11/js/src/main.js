'use strict';
var myMap;

/**
 * Создает экземпляр карты и привязывает его к контейнеру map
 */
var initMap = require('./map/init');

/**
 * Создает кластеризатор
 * @return {Object}
 */
var getClusterer = require('./map/clusterer');

/**
 * Конструктор для отрисовки окна добавления отзыва
 * @param {Object} data
 * @param {Object} clusterer
 * @constructor
 */
var Element = require('./element/element');

/**
 * Модуль Drag'n'Drop
 */
var dragManager = require('./dragManager');

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
