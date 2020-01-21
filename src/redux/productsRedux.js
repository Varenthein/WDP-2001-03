/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getNewHot = ({ products }) =>
  products.filter(item => item.promotion === true);
// eslint-disable-next-line no-console
console.log(getNewHot);
/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
