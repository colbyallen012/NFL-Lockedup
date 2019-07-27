export const crimeReducer = (state=[], action) => {
  switch(action.type) {
    case 'SHOW_CRIMES':
      return action.crimes;
    default:
      return state;
  }
}

export const teamArrestsReducer = (state=[], action) => {
  switch(action.type) {
    case 'SHOW_TEAM_ARRESTS':
      return action.team;
    default:
      return state;
  }
}

export const playerReducer = (state=[], action) => {
  switch(action.type) {
    case 'SHOW_PLAYERS':
      return action.players;
    default:
      return state;
  }
}
