/* selectors */
export const getAll = ({ colors }) => colors;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
