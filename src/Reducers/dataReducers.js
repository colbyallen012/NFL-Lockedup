export const crimeReducer = (state=[], action) => {
  switch(action.type) {
    case 'SHOW_CRIMES':
      return action.crimes;
    default:
      return state;
  }
}

export const teamReducer = (state=[], action) => {
  switch(action.type) {
    case 'SHOW_Teams':
      return action.teams;
    default:
      return state;
  }
}