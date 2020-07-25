import * as assert from 'assert';
import * as Type from './type.js';

/**
 *
 * @param {number} price
 * @param {number} vat
 * @returns {number}
 */
const addVat = (price, vat) => {
  return price * (1 + vat);
};

/** @type {number} */
const amount = 1200;
assert.equal(addVat(amount, 0.2), 1440);

/**
 *
 * @param {Type.Article[]} articles
 */
const totalAmount = (articles) => {
  return articles.reduce((total, article) => {
    return total + addVat(article.price, article.vat);
  }, 0);
};

/** @type {Type.Article} */
const article = {
  title: 'The best book in the world',
  price: 10,
  vat: 0.2,
};

assert.equal(totalAmount([article]), 12);
