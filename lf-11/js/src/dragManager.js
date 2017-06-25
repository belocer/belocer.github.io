'use strict';

var utilities = require('./utilities');

/**
 * Модуль Drag'n'Drop
 */
var dragManager =  function (e) {
    var target = e.target;
    while (target != this) {
        if (target.classList.contains('dropbox__header')) {
            // Обнуляем событие onmousemove и onmousedown у dropbox__title, чтобы при перемещении не выделялся текст
            var dropboxTitle = target.querySelector('.dropbox__title');
            dropboxTitle.onmousemove = function () {
                return false;
            };
            dropboxTitle.onmousedown = function () {
                return false;
            };
            // Обнуляем событие по умолчанию dragstart
            dropboxTitle.ondragstart = function() {
                return false;
            };
            var dropbox = target.parentNode;
            var coords = utilities.getCoords(target);
            var shiftX = e.pageX - coords.left;
            var shiftY = e.pageY - coords.top;

            document.onmousemove = function (e) {
                dropbox.style.left = e.pageX - shiftX + 'px';
                dropbox.style.top = e.pageY - shiftY + 'px';
            };

            target.onmouseup = function () {
                document.onmousemove = null;
                target.onmouseup = null;
            };
        }
        target = target.parentNode;
    }
};

module.exports = dragManager;