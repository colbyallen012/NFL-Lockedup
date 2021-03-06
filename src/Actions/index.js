export const showCrimes = (crimes) => ({
  type: 'SHOW_CRIMES',
  crimes
})

export const showTeamArrests = (team) => ({
  type: 'SHOW_TEAM_ARRESTS',
  team
})

export const showPlayers = (players) => ({
  type: 'SHOW_PLAYERS',
  players
})

export const showPositions = (positions) => ({
  type: 'SHOW_POSITIONS',
  positions
})

export const emptyState = () => ({
  type: 'EMPTY_STATE'
})