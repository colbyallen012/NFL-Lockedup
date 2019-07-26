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
    case 'SHOW_TEAMS':
      return action.teams;
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
