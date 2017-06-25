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