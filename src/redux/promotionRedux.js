/* selectors */
export const getAll = ({ hotproducts }) => hotproducts;
export const getCount = ({ hotproducts }) => hotproducts.length;

export const getNew = ({ hotproducts }) =>
  hotproducts.filter(item => item.promotion === true);

// eslint-disable-next-line no-console
console.log(getNew);
/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
