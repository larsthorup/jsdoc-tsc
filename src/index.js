import * as assert from 'assert';

/** @typedef {import('./type').Article} Article */

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
 * @param {Article[]} articles
 */
const totalAmount = (articles) => {
  return articles.reduce((total, article) => {
    return total + addVat(article.price, article.vat);
  }, 0);
};

/** @type {Article} */
const article = {
  title: 'The best book in the world',
  price: 10,
  vat: 0.2,
};

assert.equal(totalAmount([article]), 12);
