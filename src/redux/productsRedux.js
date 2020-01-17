/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
export const SET_FAVORITE = createActionName('SET_FAVORITE');

/* action creators */
export const setFavorite = payload => ({ payload, type: SET_FAVORITE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_FAVORITE:
      return [
        ...statePart,
        (statePart[statePart.findIndex(el => el.id === action.payload.id)].favorite =
          action.payload.isFav),
      ];
    default:
      return statePart;
  }
}
