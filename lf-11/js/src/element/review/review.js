'use strict';

/**
 * Модуль с общими функциями
 */
var utilities = require('../../utilities');

/**
 * Создаёт объект review на основе шаблона reviews-template
 * @return {Object} element
 */
var getReview = require('./get');

/**
 * Создание DOM-разметки в review
 * @param {HTMLElement} element
 * @param {Object} data
 */
var fillReview = require('./fill');

/**
 * Конструктор для отрисовки одного отзыва
 * @param {Object} data
 * @param {HTMLElement} container
 * @constructor
 */
var Review = function (data, container) {
    this.data = data;
    this.review = getReview();
    fillReview(this.review, data);
    utilities.insert(this.review, container);
};

module.exports = Review;