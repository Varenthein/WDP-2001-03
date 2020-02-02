/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getNewHot = ({ products }) =>
  products.filter(item => item.promotion === true);
// eslint-disable-next-line no-console
console.log(getNewHot);

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
export const SET_FAVORITE = createActionName('SET_FAVORITE');
export const SET_STARS = createActionName('SET_STARS');

/* action creators */
export const setFavorite = payload => ({ payload, type: SET_FAVORITE });
export const setStars = payload => ({ payload, type: SET_STARS });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_FAVORITE:
      return statePart.map(el => {
        return el.id === action.payload.id
          ? {
              ...el,
              favorite: action.payload.isFav,
            }
          : el;
      });
    case SET_STARS:
      return statePart.map(star => {
        return star.id === action.payload.id
          ? {
              ...star,
              favoriteStars: action.payload.isUlub,
            }
          : star;
      });
    default:
      return statePart;
  }
}
