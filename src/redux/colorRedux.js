export const colorsFilter = ({ colors }) => colors;

// export default function reducer(statePart = [], action = {}) {
//   switch (action.type) {
//     case 'RED':
//       return { ...statePart, color: 'red' };
//     case 'BLACK':
//       return { ...statePart, color: 'black' };
//     case 'YELLOW':
//       return { ...statePart, color: 'yellow' };
//     case 'BLUE':
//       return { ...statePart, color: 'blue' };
//     case 'PINK':
//       return { ...statePart, color: 'pink' };
//     case 'GREEN':
//       return { ...statePart, color: 'green' };
//     default:
//       return statePart;
//   }
// }

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
