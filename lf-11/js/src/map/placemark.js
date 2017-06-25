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
