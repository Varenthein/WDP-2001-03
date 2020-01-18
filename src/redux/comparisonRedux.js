/* selectors */
export const getProductsToCompare = ({ comparison }) => comparison;

/* action name creator */
const reducerName = 'comparison';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_TO_COMPARE = createActionName('ADD_TO_COMPARE');

/* action creators */
export const addToCompare = payload => ({ payload, type: ADD_TO_COMPARE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_TO_COMPARE: {
      let index = statePart.findIndex(product => product.id === action.payload.id);
      return statePart.length < 4 && index === -1
        ? [...statePart, { ...action.payload, id: action.payload.id }]
        : [...statePart];
    }
    default:
      return statePart;
  }
}
