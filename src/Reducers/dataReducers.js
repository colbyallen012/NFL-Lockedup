export const crimeReducer = (state=[], action) => {
  switch(action.type) {
    case 'SHOW_CRIMES':
      return action.crimes;
    default:
      return state;
  }
}